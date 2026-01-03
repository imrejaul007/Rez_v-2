import { useState } from 'react';
import { Zap, Plus, ToggleLeft, ToggleRight, TrendingUp } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantAutoRestock() {
  const [policies, setPolicies] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPolicy, setNewPolicy] = useState({ productName: '', minLevel: '', orderQuantity: '', enabled: false });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-6">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Automated Restocking</h1>
              <p className="text-pink-100">Set up automatic inventory replenishment</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-600">Total Policies</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{policies.length}</div>
            </div>
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <div className="text-sm text-green-600">Active</div>
              <div className="text-2xl font-bold text-green-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-blue-200 p-4">
              <div className="text-sm text-blue-600">Orders Generated</div>
              <div className="text-2xl font-bold text-blue-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-purple-200 p-4">
              <div className="text-sm text-purple-600">Stock Maintained</div>
              <div className="text-2xl font-bold text-purple-900 mt-1">0%</div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Restock Policies</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              <Plus className="w-5 h-5" />
              Add Policy
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {policies.length === 0 ? (
              <div className="p-12 text-center">
                <Zap className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No auto-restock policies configured</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Min Level</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order Qty</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Order</th>
                  </tr>
                </thead>
                <tbody>
                  {policies.map((policy, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">{policy.productName}</td>
                      <td className="px-6 py-4">{policy.minLevel} units</td>
                      <td className="px-6 py-4">{policy.orderQuantity} units</td>
                      <td className="px-6 py-4">{policy.enabled ? <ToggleRight className="w-4 h-4 text-green-600" /> : <ToggleLeft className="w-4 h-4 text-gray-400" />}</td>
                      <td className="px-6 py-4">-</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {showAddModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-md w-full">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Add Auto-Restock Policy</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                    <input
                      type="text"
                      value={newPolicy.productName}
                      onChange={(e) => setNewPolicy({...newPolicy, productName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                      placeholder="Rice"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Min Stock Level</label>
                      <input type="number" value={newPolicy.minLevel} onChange={(e) => setNewPolicy({...newPolicy, minLevel: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Order Quantity</label>
                      <input type="number" value={newPolicy.orderQuantity} onChange={(e) => setNewPolicy({...newPolicy, orderQuantity: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="200" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                    <input type="checkbox" checked={newPolicy.enabled} onChange={(e) => setNewPolicy({...newPolicy, enabled: e.target.checked})} className="w-4 h-4 rounded" />
                    <label className="text-sm text-gray-700">Enable auto-restocking</label>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">Add Policy</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
