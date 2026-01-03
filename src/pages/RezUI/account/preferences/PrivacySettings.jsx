import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Eye, EyeOff, Lock, Users, CheckCircle } from 'lucide-react';

/**
 * PRIVACY SETTINGS - Privacy Preferences
 *
 * Backend APIs needed:
 * - GET /api/user/privacy-settings (fetch settings)
 * - PUT /api/user/privacy-settings (update settings)
 *
 * Connected to: RTMN_MASTER_DOCUMENTATION/FRONTEND_INVENTORY_TRACKER.md
 * Status: ✅ BUILT (Jan 2, 2026)
 * Priority: HIGH - User privacy control
 */

function PrivacySettings() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    profileVisibility: 'public',
    showActivity: true,
    showPurchaseHistory: false,
    showRewards: true,
    showBadges: true,
    allowFriendRequests: true,
    shareDataForPersonalization: true,
    shareDataWithPartners: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      // TODO: Connect to backend API
      const response = await fetch('/api/user/privacy-settings', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
      });
      if (response.ok) {
        const data = await response.json();
        setSettings(data.settings || settings);
      }
    } catch (err) {
      console.error('Failed to fetch settings:', err);
    }
  };

  const handleSave = async () => {
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      // TODO: Connect to backend API
      const response = await fetch('/api/user/privacy-settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({ settings })
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to save settings');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const ToggleSwitch = ({ checked, onChange }) => (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
    </label>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Privacy Settings</h1>
              <p className="text-sm text-gray-600">Control your privacy and data sharing</p>
            </div>
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <p className="text-red-600 text-sm">{error}</p>
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-600 text-sm">Privacy settings saved successfully!</p>
          </motion.div>
        )}

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-bold text-gray-900">Profile Visibility</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Who can see your profile?</label>
                <select
                  value={settings.profileVisibility}
                  onChange={(e) => setSettings({ ...settings, profileVisibility: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="public">Everyone</option>
                  <option value="friends">Friends Only</option>
                  <option value="private">Only Me</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-3 border-t">
                <div>
                  <p className="font-medium text-gray-900">Show Activity Status</p>
                  <p className="text-sm text-gray-500">Let others see when you're active</p>
                </div>
                <ToggleSwitch
                  checked={settings.showActivity}
                  onChange={(value) => setSettings({ ...settings, showActivity: value })}
                />
              </div>

              <div className="flex items-center justify-between py-3 border-t">
                <div>
                  <p className="font-medium text-gray-900">Show Purchase History</p>
                  <p className="text-sm text-gray-500">Display your purchase history on profile</p>
                </div>
                <ToggleSwitch
                  checked={settings.showPurchaseHistory}
                  onChange={(value) => setSettings({ ...settings, showPurchaseHistory: value })}
                />
              </div>

              <div className="flex items-center justify-between py-3 border-t">
                <div>
                  <p className="font-medium text-gray-900">Show Rewards</p>
                  <p className="text-sm text-gray-500">Display your rewards and points</p>
                </div>
                <ToggleSwitch
                  checked={settings.showRewards}
                  onChange={(value) => setSettings({ ...settings, showRewards: value })}
                />
              </div>

              <div className="flex items-center justify-between py-3 border-t">
                <div>
                  <p className="font-medium text-gray-900">Show Badges</p>
                  <p className="text-sm text-gray-500">Display your achievements and badges</p>
                </div>
                <ToggleSwitch
                  checked={settings.showBadges}
                  onChange={(value) => setSettings({ ...settings, showBadges: value })}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-bold text-gray-900">Social Settings</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900">Allow Friend Requests</p>
                  <p className="text-sm text-gray-500">Let others send you friend requests</p>
                </div>
                <ToggleSwitch
                  checked={settings.allowFriendRequests}
                  onChange={(value) => setSettings({ ...settings, allowFriendRequests: value })}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-bold text-gray-900">Data & Privacy</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900">Personalization</p>
                  <p className="text-sm text-gray-500">Use my data to personalize my experience</p>
                </div>
                <ToggleSwitch
                  checked={settings.shareDataForPersonalization}
                  onChange={(value) => setSettings({ ...settings, shareDataForPersonalization: value })}
                />
              </div>

              <div className="flex items-center justify-between py-3 border-t">
                <div>
                  <p className="font-medium text-gray-900">Share with Partners</p>
                  <p className="text-sm text-gray-500">Share anonymized data with trusted partners</p>
                </div>
                <ToggleSwitch
                  checked={settings.shareDataWithPartners}
                  onChange={(value) => setSettings({ ...settings, shareDataWithPartners: value })}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                disabled={loading}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg disabled:opacity-50 transition-all"
              >
                {loading ? 'Saving...' : 'Save Settings'}
              </button>
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-all"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PrivacySettings;
