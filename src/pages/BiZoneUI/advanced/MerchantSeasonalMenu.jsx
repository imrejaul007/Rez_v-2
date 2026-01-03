import { useState } from 'react';
import { Calendar, Plus, Edit, Trash2 } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantSeasonalMenu() {
  const [seasonalMenus, setSeasonalMenus] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMenu, setNewMenu] = useState({ name: '', season: '', startDate: '', endDate: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Seasonal Menu Management</h1>
              <p className="text-blue-100">Create and manage seasonal menu offerings throughout the year</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Seasonal Menus</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="w-5 h-5" />
              Add Seasonal Menu
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalMenus.length === 0 ? (
              <div className="col-span-2 bg-white rounded-lg border border-gray-200 p-12 text-center">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No seasonal menus created yet</p>
              </div>
            ) : (
              seasonalMenus.map((menu, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{menu.name}</h3>
                      <p className="text-sm text-gray-500">{menu.season}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-red-50 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>{menu.startDate} to {menu.endDate}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {showAddModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-md w-full">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Add Seasonal Menu</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Menu Name</label>
                    <input
                      type="text"
                      value={newMenu.name}
                      onChange={(e) => setNewMenu({...newMenu, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Summer Special Menu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
                    <select value={newMenu.season} onChange={(e) => setNewMenu({...newMenu, season: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="">Select season</option>
                      <option value="Spring">Spring</option>
                      <option value="Summer">Summer</option>
                      <option value="Fall">Fall</option>
                      <option value="Winter">Winter</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                      <input type="date" value={newMenu.startDate} onChange={(e) => setNewMenu({...newMenu, startDate: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                      <input type="date" value={newMenu.endDate} onChange={(e) => setNewMenu({...newMenu, endDate: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add Menu</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
