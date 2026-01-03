import { useState } from 'react';
import { Receipt, DollarSign, Shield, Settings } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminUploadBillSettings() {
  const [settings, setSettings] = useState({
    minBillAmount: 100,
    maxBillAmount: 50000,
    bonusPercentage: 5,
    maxBonusCoins: 500,
    ocrAccuracy: 95,
    fraudThreshold: 85
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Receipt className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Upload Bill Settings</h1>
              <p className="text-green-100 mt-1">Configure bill upload rewards and fraud detection</p>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Reward Settings</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Min Bill Amount (₹)</label>
              <input
                type="number"
                value={settings.minBillAmount}
                onChange={(e) => setSettings({ ...settings, minBillAmount: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Bill Amount (₹)</label>
              <input
                type="number"
                value={settings.maxBillAmount}
                onChange={(e) => setSettings({ ...settings, maxBillAmount: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bonus Percentage (%)</label>
              <input
                type="number"
                value={settings.bonusPercentage}
                onChange={(e) => setSettings({ ...settings, bonusPercentage: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Bonus Coins</label>
              <input
                type="number"
                value={settings.maxBonusCoins}
                onChange={(e) => setSettings({ ...settings, maxBonusCoins: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">OCR Accuracy Threshold (%)</label>
              <input
                type="number"
                value={settings.ocrAccuracy}
                onChange={(e) => setSettings({ ...settings, ocrAccuracy: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fraud Detection Score (%)</label>
              <input
                type="number"
                value={settings.fraudThreshold}
                onChange={(e) => setSettings({ ...settings, fraudThreshold: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <button className="w-full mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
            Update Settings
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <Receipt className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-sm text-gray-600">Bills Uploaded</p>
            <p className="text-3xl font-bold text-gray-900">12,456</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <DollarSign className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-sm text-gray-600">Total Rewards</p>
            <p className="text-3xl font-bold text-gray-900">45.6K</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <Shield className="w-8 h-8 text-red-600 mb-2" />
            <p className="text-sm text-gray-600">Fraud Detected</p>
            <p className="text-3xl font-bold text-gray-900">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}
