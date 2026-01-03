import { useState } from 'react';
import { ShoppingCart, AlertCircle, Clock, BarChart3 } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantCartAbandonment() {
  const [abandonedCarts, setAbandonedCarts] = useState([]);
  const [timeRange, setTimeRange] = useState('24h');

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-rose-600 to-red-600 text-white p-6">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Cart Abandonment Tracking</h1>
              <p className="text-rose-100">Monitor and recover abandoned carts</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Abandoned Carts</h2>
            <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg">
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-600">Total Abandoned</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{abandonedCarts.length}</div>
            </div>
            <div className="bg-white rounded-lg border border-red-200 p-4">
              <div className="text-sm text-red-600">Lost Revenue</div>
              <div className="text-2xl font-bold text-red-900 mt-1">₹0</div>
            </div>
            <div className="bg-white rounded-lg border border-orange-200 p-4">
              <div className="text-sm text-orange-600">Recovery Rate</div>
              <div className="text-2xl font-bold text-orange-900 mt-1">0%</div>
            </div>
            <div className="bg-white rounded-lg border border-blue-200 p-4">
              <div className="text-sm text-blue-600">Recovered Revenue</div>
              <div className="text-2xl font-bold text-blue-900 mt-1">₹0</div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {abandonedCarts.length === 0 ? (
              <div className="p-12 text-center">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No abandoned carts in this period</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cart Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Abandoned Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {abandonedCarts.map((cart, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">Customer {idx}</td>
                      <td className="px-6 py-4">₹0</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4"><Clock className="w-4 h-4 inline mr-2" />--</td>
                      <td className="px-6 py-4"><span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded">Pending</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
