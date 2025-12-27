import { useState } from 'react';
import { Sparkles, Clock, Settings } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminNewDealsSettings() {
  const [settings, setSettings] = useState({
    newThresholdHours: 24,
    highlightDuration: 48,
    badgeEnabled: true
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg"><Sparkles className="w-8 h-8" /></div>
            <div>
              <h1 className="text-3xl font-bold">New Deals Settings</h1>
              <p className="text-yellow-100 mt-1">Configure new offer threshold and display</p>
            </div>
          </div>
        </div>
      </div>
      <AdminNav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Configuration</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Threshold (hours)</label>
              <input type="number" value={settings.newThresholdHours} onChange={(e) => setSettings({ ...settings, newThresholdHours: parseInt(e.target.value) })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <p className="text-xs text-gray-500 mt-1">Offers newer than this will show NEW badge</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Highlight Duration (hours)</label>
              <input type="number" value={settings.highlightDuration} onChange={(e) => setSettings({ ...settings, highlightDuration: parseInt(e.target.value) })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Show NEW Badge</p>
                <p className="text-sm text-gray-600">Display badge on new offers</p>
              </div>
              <input type="checkbox" checked={settings.badgeEnabled} onChange={(e) => setSettings({ ...settings, badgeEnabled: e.target.checked })} className="w-6 h-6" />
            </div>
            <button className="w-full px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-semibold">Update Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
