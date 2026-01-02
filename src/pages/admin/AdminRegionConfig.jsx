import { useState } from 'react';
import { Globe, Edit, Plus, MapPin } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminRegionConfig() {
  const [regions] = useState([
    { id: '1', name: 'Mumbai', state: 'Maharashtra', country: 'India', currency: 'INR', timezone: 'Asia/Kolkata', active: true, merchants: 1245 },
    { id: '2', name: 'Delhi', state: 'Delhi', country: 'India', currency: 'INR', timezone: 'Asia/Kolkata', active: true, merchants: 980 },
    { id: '3', name: 'Bangalore', state: 'Karnataka', country: 'India', currency: 'INR', timezone: 'Asia/Kolkata', active: true, merchants: 1567 },
    { id: '4', name: 'Hyderabad', state: 'Telangana', country: 'India', currency: 'INR', timezone: 'Asia/Kolkata', active: true, merchants: 756 },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Region Configuration</h1>
              <p className="text-gray-600">Manage regional settings and availability</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">
              <Plus className="w-5 h-5" />
              Add Region
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Globe className="w-8 h-8 text-purple-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">{regions.length}</p>
            <p className="text-sm text-gray-600">Active Regions</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <MapPin className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">1</p>
            <p className="text-sm text-gray-600">Countries</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-gray-900">{regions.reduce((sum, r) => sum + r.merchants, 0)}</p>
            <p className="text-sm text-gray-600">Total Merchants</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-gray-900">1</p>
            <p className="text-sm text-gray-600">Currencies</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Region</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">State</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Country</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Currency</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Timezone</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Merchants</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {regions.map(region => (
                <tr key={region.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-gray-900">{region.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{region.state}</td>
                  <td className="px-6 py-4 text-gray-700">{region.country}</td>
                  <td className="px-6 py-4 text-gray-700">{region.currency}</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">{region.timezone}</td>
                  <td className="px-6 py-4 text-gray-900 font-semibold">{region.merchants}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${region.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {region.active ? 'Active' : 'Inactive'}
                    </span>
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
