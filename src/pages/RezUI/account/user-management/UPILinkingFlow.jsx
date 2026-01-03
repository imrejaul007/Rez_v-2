import React, { useState } from 'react';
import { Smartphone, CheckCircle } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function UPILinkingFlow() {
  const [upiId, setUpiId] = useState('');
  const [linked, setLinked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Smartphone size={28} /> Link UPI Account
        </h1>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">UPI ID</label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="yourname@bankname"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button
            onClick={() => setLinked(true)}
            disabled={!upiId}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded font-semibold disabled:opacity-50"
          >
            Link UPI
          </button>

          {linked && (
            <div className="bg-green-50 p-3 rounded flex items-center gap-2">
              <CheckCircle className="text-green-600" size={20} />
              <p className="text-sm font-semibold text-green-600">UPI linked successfully!</p>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}