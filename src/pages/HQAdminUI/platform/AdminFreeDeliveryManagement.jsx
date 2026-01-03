import { useState } from 'react';
import { Truck, DollarSign, Store, CheckCircle, XCircle, Edit2 } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminFreeDeliveryManagement() {
  const [settings, setSettings] = useState({
    minOrderAmount: 299,
    maxDistance: 10
  });

  const [merchants] = useState([
    { id: 1, name: 'Pizza Paradise', enabled: true, minOrder: 199, offers: 12 },
    { id: 2, name: 'Fresh Mart', enabled: true, minOrder: 499, offers: 8 }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Truck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Free Delivery Management</h1>
              <p className="text-green-100 mt-1">Configure free delivery rules</p>
            </div>
          </div>
        </div>
      </div>
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <Truck className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-sm text-gray-600">Active Merchants</p>
            <p className="text-3xl font-bold text-gray-900">2</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <Store className="w-8 h-8 text-blue-600 mb-2" />
            <p className="text-sm text-gray-600">Total Offers</p>
            <p className="text-3xl font-bold text-gray-900">20</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <DollarSign className="w-8 h-8 text-purple-600 mb-2" />
            <p className="text-sm text-gray-600">Avg Min Order</p>
            <p className="text-3xl font-bold text-gray-900">₹349</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Global Settings</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Min Order Amount</label>
              <input type="number" value={settings.minOrderAmount} onChange={(e) => setSettings({ ...settings, minOrderAmount: parseInt(e.target.value) })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Distance (km)</label>
              <input type="number" value={settings.maxDistance} onChange={(e) => setSettings({ ...settings, maxDistance: parseInt(e.target.value) })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
          <button className="w-full mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">Save Settings</button>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Merchant Status</h2>
          </div>
          <div className="divide-y">
            {merchants.map((m) => (
              <div key={m.id} className="p-6 flex justify-between">
                <div>
                  <h3 className="font-semibold">{m.name}</h3>
                  <p className="text-sm text-gray-600">{m.offers} offers - Min: ₹{m.minOrder}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${m.enabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                  {m.enabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
