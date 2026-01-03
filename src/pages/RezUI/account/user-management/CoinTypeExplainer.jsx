import React, { useState } from 'react';
import { Info, ChevronDown } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function CoinTypeExplainer() {
  const [expanded, setExpanded] = useState(null);

  const coinTypes = [
    { name: 'Cash Coins', value: 'cash', color: 'from-green-400 to-green-600', desc: 'Withdraw as real money' },
    { name: 'Points Coins', value: 'points', color: 'from-blue-400 to-blue-600', desc: 'Use for purchases only' },
    { name: 'Bonus Coins', value: 'bonus', color: 'from-purple-400 to-purple-600', desc: 'Limited time rewards' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Coin Types Explained</h1>
        <p className="text-gray-600 mb-6">Understand different coin types and their benefits</p>

        <div className="space-y-3">
          {coinTypes.map(type => (
            <div key={type.value} className="bg-white rounded-lg shadow overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === type.value ? null : type.value)}
                className="w-full p-4 flex items-center justify-between bg-gradient-to-r text-white"
              >
                <div className="text-left">
                  <h3 className="font-bold text-lg">{type.name}</h3>
                  <p className="text-sm opacity-90">{type.desc}</p>
                </div>
                <ChevronDown size={20} />
              </button>
              {expanded === type.value && (
                <div className="p-4 border-t border-gray-200">
                  <p className="text-gray-700 mb-3">Details about {type.name}:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Earn through transactions</li>
                    <li>✓ Can be combined with other coins</li>
                    <li>✓ Check expiry in wallet</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
          <Info className="text-blue-600 flex-shrink-0" size={20} />
          <p className="text-sm text-gray-700">All coins are secure and managed in your wallet. Check balance anytime.</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
