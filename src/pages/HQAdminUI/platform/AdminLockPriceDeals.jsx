import { useState } from 'react';
import { Lock, DollarSign } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminLockPriceDeals() {
  const [settings, setSettings] = useState({ lockPercentage: 10, maxLockDays: 7 });
  const [deals] = useState([
    { id: 1, merchant: 'Pizza Paradise', product: 'Margherita Pizza', lockPrice: 59, finalPrice: 299, locked: 45, status: 'active' }
  ]);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg"><Lock className="w-8 h-8" /></div>
            <div><h1 className="text-3xl font-bold">Lock Price Deals</h1><p className="text-amber-100 mt-1">Manage lock with 10% offers</p></div>
          </div>
        </div>
      </div>
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold mb-6">Settings</h2>
          <div className="grid grid-cols-2 gap-6">
            <div><label className="block text-sm font-medium text-gray-700 mb-2">Lock Percentage (%)</label><input type="number" value={settings.lockPercentage} onChange={(e) => setSettings({ ...settings, lockPercentage: parseInt(e.target.value) })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-2">Max Lock Days</label><input type="number" value={settings.maxLockDays} onChange={(e) => setSettings({ ...settings, maxLockDays: parseInt(e.target.value) })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
          </div>
          <button className="w-full mt-6 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-semibold">Save Settings</button>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b"><h2 className="text-xl font-bold">Active Lock Deals</h2></div>
          <div className="divide-y">
            {deals.map((d) => (
              <div key={d.id} className="p-6">
                <div className="flex justify-between"><div><h3 className="font-semibold">{d.product}</h3><p className="text-sm text-gray-600">{d.merchant}</p></div><div className="text-right"><p className="text-sm text-gray-600">Lock: ₹{d.lockPrice}</p><p className="font-bold text-gray-900">Final: ₹{d.finalPrice}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}