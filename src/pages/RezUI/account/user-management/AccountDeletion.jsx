import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, Trash2, Lock } from 'lucide-react';

/**
 * ACCOUNT DELETION - Delete Account
 *
 * Backend APIs needed:
 * - POST /api/user/delete-account (initiate account deletion)
 * - POST /api/user/verify-deletion (verify deletion with password)
 *
 * Connected to: RTMN_MASTER_DOCUMENTATION/FRONTEND_INVENTORY_TRACKER.md
 * Status: ✅ BUILT (Jan 2, 2026)
 * Priority: MEDIUM - Account management
 */

function AccountDeletion() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [otherReason, setOtherReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const reasons = [
    'Not using the app anymore',
    'Found a better alternative',
    'Privacy concerns',
    'Too many notifications',
    'Poor customer service',
    'Technical issues',
    'Other'
  ];

  const toggleReason = (reason) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter(r => r !== reason));
    } else {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const handleDelete = async () => {
    setError('');
    setLoading(true);

    if (confirmText !== 'DELETE') {
      setError('Please type DELETE to confirm');
      setLoading(false);
      return;
    }

    try {
      // TODO: Connect to backend API
      const response = await fetch('/api/user/delete-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          password,
          reasons: selectedReasons,
          otherReason: selectedReasons.includes('Other') ? otherReason : null
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.clear();
        setStep(3);
      } else {
        setError(data.message || 'Failed to delete account');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8"
      >
        {step === 1 && (
          <>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Delete Account</h1>
              <p className="text-gray-600">We're sorry to see you go</p>
            </div>

            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-bold text-red-900 mb-3">Warning: This action cannot be undone</h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>All your personal data will be permanently deleted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Your order history and rewards will be lost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>You will lose access to all saved addresses and payment methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Active orders and pending refunds will be processed, but you won't be able to track them</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Why are you leaving? (Optional)</h3>
              <div className="space-y-2">
                {reasons.map(reason => (
                  <label key={reason} className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedReasons.includes(reason)}
                      onChange={() => toggleReason(reason)}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <span className="text-gray-700">{reason}</span>
                  </label>
                ))}
              </div>

              {selectedReasons.includes('Other') && (
                <div className="mt-4">
                  <textarea
                    value={otherReason}
                    onChange={(e) => setOtherReason(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Please tell us more..."
                    rows="3"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 py-3 px-4 text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all"
              >
                Keep My Account
              </button>
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-3 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all"
              >
                Continue
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Confirm Deletion</h1>
              <p className="text-gray-600">Verify your identity to continue</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={(e) => { e.preventDefault(); handleDelete(); }} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter Your Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type "DELETE" to confirm
                </label>
                <input
                  type="text"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Type DELETE in capital letters"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  This is your final confirmation. Type DELETE to proceed.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 px-4 text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all"
                >
                  Go Back
                </button>
                <button
                  type="submit"
                  disabled={loading || confirmText !== 'DELETE'}
                  className="flex-1 py-3 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {loading ? 'Deleting...' : 'Delete My Account'}
                </button>
              </div>
            </form>
          </>
        )}

        {step === 3 && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trash2 className="w-12 h-12 text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Deleted</h2>
            <p className="text-gray-600 mb-8">
              Your account has been successfully deleted. We're sorry to see you go.<br/>
              You can create a new account anytime if you change your mind.
            </p>
            <button
              onClick={() => {
                window.location.href = '/';
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Back to Home
            </button>
          </div>
        )}

        {step !== 3 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {[1, 2].map(s => (
              <div
                key={s}
                className={`w-2 h-2 rounded-full transition-all ${
                  s === step ? 'bg-red-600 w-8' : s < step ? 'bg-red-300' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default AccountDeletion;
