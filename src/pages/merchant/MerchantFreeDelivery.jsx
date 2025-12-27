import { useState } from 'react';
import { Truck, Settings, TrendingUp } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantFreeDelivery() {
  const [settings, setSettings] = useState({
    enabled: true,
    minOrderAmount: 299,
    maxDistance: 8
  });

  const [stats] = useState({
    totalOrders: 1234,
    freeDeliveryOrders: 856,
    avgOrderValue: 425,
    conversionRate: 12.5
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Truck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Free Delivery</h1>
              <p className="text-green-100 mt-1">Manage your free delivery offers</p>
            </div>
          </div>
        </div>
      </div>
      <MerchantNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Free Delivery Orders</p>
                <p className="text-2xl font-bold text-gray-900">{stats.freeDeliveryOrders}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Order Value</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.avgOrderValue}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-6 h-6 text-gray-700" />
            <h2 className="text-xl font-bold text-gray-900">Free Delivery Settings</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Enable Free Delivery</p>
                <p className="text-sm text-gray-600">Offer free delivery to customers</p>
              </div>
              <input
                type="checkbox"
                checked={settings.enabled}
                onChange={(e) => setSettings({ ...settings, enabled: e.target.checked })}
                className="w-6 h-6"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Order Amount (₹)
              </label>
              <input
                type="number"
                value={settings.minOrderAmount}
                onChange={(e) => setSettings({ ...settings, minOrderAmount: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-1">Orders above this amount qualify for free delivery</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Distance (km)
              </label>
              <input
                type="number"
                value={settings.maxDistance}
                onChange={(e) => setSettings({ ...settings, maxDistance: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-1">Maximum delivery distance for free delivery</p>
            </div>
            <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
