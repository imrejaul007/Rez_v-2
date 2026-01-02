import { useState } from 'react';
import { Utensils, Plus, Edit, Trash2 } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantPortionControl() {
  const [portions, setPortions] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPortion, setNewPortion] = useState({ dishName: '', standardSize: '', unit: '', cost: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
          <div className="flex items-center gap-3">
            <Utensils className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Portion Control Management</h1>
              <p className="text-purple-100">Define and manage standard portion sizes for consistency</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Portion Standards</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              <Plus className="w-5 h-5" />
              Add Portion
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {portions.length === 0 ? (
              <div className="p-12 text-center">
                <Utensils className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No portion standards defined yet</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dish</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Standard Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost per Portion</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {portions.map((portion, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">{portion.dishName}</td>
                      <td className="px-6 py-4">{portion.standardSize} {portion.unit}</td>
                      <td className="px-6 py-4">₹{portion.cost}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-600 hover:text-blue-600"><Edit className="w-4 h-4" /></button>
                          <button className="p-2 text-gray-600 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
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
                  <h2 className="text-xl font-bold text-gray-900">Add Portion Standard</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dish Name</label>
                    <input
                      type="text"
                      value={newPortion.dishName}
                      onChange={(e) => setNewPortion({...newPortion, dishName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                      placeholder="Biryani"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                      <input type="number" value={newPortion.standardSize} onChange={(e) => setNewPortion({...newPortion, standardSize: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                      <select value={newPortion.unit} onChange={(e) => setNewPortion({...newPortion, unit: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option value="">Select unit</option>
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="oz">oz</option>
                        <option value="cup">cup</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cost per Portion</label>
                    <input type="number" value={newPortion.cost} onChange={(e) => setNewPortion({...newPortion, cost: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Add Portion</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
