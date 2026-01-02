import { useState } from 'react';
import { Store, TrendingUp, Users, DollarSign, Package } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantMultiStoreDashboard() {
  const [stores] = useState([
    { id: '1', name: 'Main Street Branch', location: 'Mumbai', sales: 125000, orders: 245, customers: 189, status: 'active' },
    { id: '2', name: 'Mall Branch', location: 'Mumbai', sales: 98000, orders: 198, customers: 156, status: 'active' },
    { id: '3', name: 'Airport Branch', location: 'Mumbai', sales: 156000, orders: 312, customers: 267, status: 'active' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Multi-Store Dashboard</h1>
          <p className="text-gray-600">Manage and monitor all your store locations</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Store className="w-8 h-8 text-purple-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">{stores.length}</p>
            <p className="text-sm text-gray-600">Total Stores</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <DollarSign className="w-8 h-8 text-green-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">₹{stores.reduce((sum, s) => sum + s.sales, 0).toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Sales</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Package className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">{stores.reduce((sum, s) => sum + s.orders, 0)}</p>
            <p className="text-sm text-gray-600">Total Orders</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Users className="w-8 h-8 text-orange-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">{stores.reduce((sum, s) => sum + s.customers, 0)}</p>
            <p className="text-sm text-gray-600">Total Customers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {stores.map(store => (
            <div key={store.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{store.name}</h3>
                  <p className="text-gray-600">{store.location}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">{store.status}</span>
              </div>

              <div className="grid grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-gray-600">Sales</p>
                  <p className="text-2xl font-bold text-gray-900">₹{store.sales.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{store.orders}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Customers</p>
                  <p className="text-2xl font-bold text-gray-900">{store.customers}</p>
                </div>
                <div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
