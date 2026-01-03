import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function ReferralCodeEntry() {
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleApplyCode = async () => {
    setLoading(true);
    // Backend API: POST /api/referral/apply-code
    // { code: string } -> { success: boolean, reward: number }
    setTimeout(() => {
      setApplied(true);
      setLoading(false);
    }, 500);
  };

  const handleCopyCode = () => {
    const myCode = 'REZ2025ABC';
    navigator.clipboard.writeText(myCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Referral Codes</h1>

        <div className="space-y-4">
          {/* Enter Code */}
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="font-semibold text-gray-900 mb-3">Enter Referral Code</h2>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="Enter code (e.g., FRIEND2025)"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleApplyCode}
              disabled={!code || loading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded font-semibold disabled:opacity-50"
            >
              {loading ? 'Applying...' : 'Apply Code'}
            </button>
            {applied && (
              <p className="text-green-600 text-sm mt-2">Code applied! You earned 500 coins.</p>
            )}
          </div>

          {/* My Referral Code */}
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="font-semibold text-gray-900 mb-3">Your Referral Code</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded flex items-center justify-between">
              <code className="font-mono font-bold text-lg text-indigo-600">REZ2025ABC</code>
              <button
                onClick={handleCopyCode}
                className="text-blue-500 hover:text-blue-700"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">Share to earn coins on every referral</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 shadow text-center">
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-sm text-gray-600">Referred Friends</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow text-center">
              <p className="text-2xl font-bold text-green-600">6,000</p>
              <p className="text-sm text-gray-600">Coins Earned</p>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
