import { useState } from 'react';
import { Truck, Phone, Mail, MapPin, Plus, Edit } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantSupplierManagement() {
  const [suppliers] = useState([
    { id: '1', name: 'Fresh Vegetables Co.', contact: 'Raj Kumar', phone: '+91-9876543210', email: 'raj@freshveg.com', category: 'Vegetables', status: 'active', orders: 145 },
    { id: '2', name: 'Dairy Delights', contact: 'Priya Sharma', phone: '+91-9876543211', email: 'priya@dairy.com', category: 'Dairy', status: 'active', orders: 89 },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Supplier Management</h1>
              <p className="text-gray-600">Manage your suppliers and vendors</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">
              <Plus className="w-5 h-5" />
              Add Supplier
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Supplier</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Orders</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {suppliers.map(supplier => (
                <tr key={supplier.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{supplier.name}</p>
                        <p className="text-sm text-gray-600">{supplier.contact}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Phone className="w-4 h-4" />
                        {supplier.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Mail className="w-4 h-4" />
                        {supplier.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{supplier.category}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">{supplier.orders}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">{supplier.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-gray-100 rounded"><Edit className="w-5 h-5 text-gray-600" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
