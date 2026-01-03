import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function CoinExpiryTracker() {
  const expiringCoins = [
    { type: 'Cash Coins', amount: 500, expiresIn: '5 days' },
    { type: 'Points Coins', amount: 1200, expiresIn: '12 days' },
    { type: 'Bonus Coins', amount: 300, expiresIn: '2 days' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Expiring Coins</h1>
        <p className="text-gray-600 mb-6">Use your coins before they expire</p>

        <div className="space-y-3">
          {expiringCoins.map((coin, i) => (
            <div key={i} className="bg-white rounded-lg p-4 border-l-4 border-red-500 shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{coin.type}</p>
                  <p className="text-2xl font-bold text-red-600 mt-1">{coin.amount}</p>
                </div>
                <Clock className="text-red-500" size={20} />
              </div>
              <p className="text-sm text-gray-600 mt-2">Expires in {coin.expiresIn}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-orange-50 border border-orange-300 rounded-lg p-4 flex gap-3">
          <AlertTriangle className="text-orange-600 flex-shrink-0" size={20} />
          <p className="text-sm text-gray-700">Hurry! Spend expiring coins on purchases or transfers.</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}