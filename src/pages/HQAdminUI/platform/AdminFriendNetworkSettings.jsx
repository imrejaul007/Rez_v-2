import { useState } from 'react';
import { Users, Eye, Share2 } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminFriendNetworkSettings() {
  const [settings, setSettings] = useState({
    enableFriendActivity: true,
    showSavings: true,
    privacyDefault: 'friends',
    maxConnections: 500
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Friend Network Settings</h1>
              <p className="text-pink-100 mt-1">Configure social features and privacy</p>
            </div>
          </div>
        </div>
      </div>
      <AdminNav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Social Features</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Friend Activity Feed</p>
                  <p className="text-sm text-gray-600">Show what friends are saving and buying</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={settings.enableFriendActivity}
                onChange={(e) => setSettings({ ...settings, enableFriendActivity: e.target.checked })}
                className="w-6 h-6"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Privacy Level</label>
              <select
                value={settings.privacyDefault}
                onChange={(e) => setSettings({ ...settings, privacyDefault: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>
            <button className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 font-semibold">
              Update Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
