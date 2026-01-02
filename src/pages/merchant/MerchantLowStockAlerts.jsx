import { useState } from 'react';
import { AlertTriangle, Plus, Bell, Clock, TrendingDown } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantLowStockAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAlert, setNewAlert] = useState({ productName: '', currentStock: '', alertThreshold: '', notifyEmail: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Low Stock Alerts</h1>
              <p className="text-red-100">Get notified when inventory levels drop</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-600">Total Alerts</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{alerts.length}</div>
            </div>
            <div className="bg-white rounded-lg border border-red-200 p-4">
              <div className="text-sm text-red-600">Critical</div>
              <div className="text-2xl font-bold text-red-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-yellow-200 p-4">
              <div className="text-sm text-yellow-600">Warning</div>
              <div className="text-2xl font-bold text-yellow-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-blue-200 p-4">
              <div className="text-sm text-blue-600">Monitoring</div>
              <div className="text-2xl font-bold text-blue-900 mt-1">0</div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Stock Alerts</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              <Plus className="w-5 h-5" />
              Add Alert
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {alerts.length === 0 ? (
              <div className="p-12 text-center">
                <Bell className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No low stock alerts configured</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Alert Threshold</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notification</th>
                  </tr>
                </thead>
                <tbody>
                  {alerts.map((alert, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">{alert.productName}</td>
                      <td className="px-6 py-4">{alert.currentStock} units</td>
                      <td className="px-6 py-4">{alert.alertThreshold} units</td>
                      <td className="px-6 py-4"><span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Warning</span></td>
                      <td className="px-6 py-4"><Clock className="w-4 h-4 text-gray-600" /></td>
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
                  <h2 className="text-xl font-bold text-gray-900">Add Low Stock Alert</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                    <input
                      type="text"
                      value={newAlert.productName}
                      onChange={(e) => setNewAlert({...newAlert, productName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="Milk"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Stock</label>
                      <input type="number" value={newAlert.currentStock} onChange={(e) => setNewAlert({...newAlert, currentStock: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="100" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Alert Threshold</label>
                      <input type="number" value={newAlert.alertThreshold} onChange={(e) => setNewAlert({...newAlert, alertThreshold: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="20" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notify Email</label>
                    <input
                      type="email"
                      value={newAlert.notifyEmail}
                      onChange={(e) => setNewAlert({...newAlert, notifyEmail: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="manager@business.com"
                    />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Add Alert</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
