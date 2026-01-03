import { useState } from 'react';
import { QrCode, CreditCard, Shield } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminScanPaySettings() {
  const [settings, setSettings] = useState({ qrEnabled: true, maxAmount: 50000, fees: 1.5 });
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg"><QrCode className="w-8 h-8" /></div>
            <div><h1 className="text-3xl font-bold">Scan & Pay Settings</h1><p className="text-blue-100 mt-1">Configure QR code payments</p></div>
          </div>
        </div>
      </div>
      <AdminNav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-6">Payment Gateway Settings</h2>
          <div className="space-y-6">
            <div><label className="block text-sm font-medium text-gray-700 mb-2">Max Transaction Amount (₹)</label><input type="number" value={settings.maxAmount} onChange={(e) => setSettings({ ...settings, maxAmount: parseInt(e.target.value) })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-2">Transaction Fees (%)</label><input type="number" step="0.1" value={settings.fees} onChange={(e) => setSettings({ ...settings, fees: parseFloat(e.target.value) })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
            <button className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold">Save Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}