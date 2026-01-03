import { useState } from 'react';
import { MapPin, Flame, Users, TrendingUp, Plus } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminHotspotManagement() {
  const [hotspots] = useState([
    { id: 1, name: 'Connaught Place', merchants: 156, users: 12456, status: 'active', radius: 2 },
    { id: 2, name: 'Khan Market', merchants: 89, users: 8765, status: 'active', radius: 1.5 },
    { id: 3, name: 'Cyber Hub', merchants: 234, users: 15678, status: 'active', radius: 3 }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <Flame className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Hotspot Management</h1>
                <p className="text-orange-100 mt-1">Define and manage high-traffic zones</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 font-semibold">
              <Plus className="w-5 h-5 inline mr-2" />
              Add Hotspot
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6">
          {hotspots.map((hotspot) => (
            <div key={hotspot.id} className="bg-white rounded-xl shadow-sm border-2 border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <MapPin className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{hotspot.name}</h3>
                    <p className="text-sm text-gray-600">Radius: {hotspot.radius}km</p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
                  {hotspot.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <Users className="w-6 h-6 text-blue-600 mb-2" />
                  <p className="text-sm text-gray-600">Active Merchants</p>
                  <p className="text-2xl font-bold text-gray-900">{hotspot.merchants}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <TrendingUp className="w-6 h-6 text-purple-600 mb-2" />
                  <p className="text-sm text-gray-600">Daily Users</p>
                  <p className="text-2xl font-bold text-gray-900">{hotspot.users.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
