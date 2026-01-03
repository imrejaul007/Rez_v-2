import React, { useState } from 'react';
import { AlertTriangle, Lock } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function AccountDeletionConfirm() {
  const [confirmed, setConfirmed] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <AlertTriangle className="text-red-600" size={28} /> Delete Account
        </h1>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div className="bg-red-50 p-4 rounded border border-red-200">
            <p className="text-sm font-semibold text-red-800 mb-2">Warning</p>
            <ul className="text-sm text-red-700 space-y-1">
              <li>✓ All your data will be permanently deleted</li>
              <li>✓ Coins cannot be recovered</li>
              <li>✓ This action cannot be undone</li>
            </ul>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Enter Password to Confirm</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              id="confirm"
              className="w-4 h-4"
            />
            <label htmlFor="confirm" className="text-sm text-gray-700">I understand this is permanent</label>
          </div>

          <button
            disabled={!confirmed || !password}
            className="w-full bg-red-600 text-white py-2 rounded font-semibold disabled:opacity-50"
          >
            Delete Account
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}