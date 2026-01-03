import React from 'react';
import { Gift, Plus } from 'lucide-react';

export default function MerchantPointsRules() {
  const [rules] = React.useState([
    { id: 1, rule: 'Rs 1 spent = 1 point', active: true },
    { id: 2, rule: 'Friday bonus 2x points', active: true },
    { id: 3, rule: 'First purchase 100 bonus points', active: true },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Gift size={28} /> Points Rules
      </h1>

      <div className="space-y-3">
        {rules.map(r => (
          <div key={r.id} className="bg-white rounded-lg p-4 shadow flex items-center justify-between">
            <p className="font-semibold text-gray-900">{r.rule}</p>
            <input type="checkbox" checked={r.active} className="w-5 h-5" onChange={() => {}} />
          </div>
        ))}
      </div>

      <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-2">
        <Plus size={18} /> Add Rule
      </button>
    </div>
  );
}