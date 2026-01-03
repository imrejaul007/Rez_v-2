import { useState } from 'react';
import { Package, Plus, AlertCircle, CheckCircle, TrendingDown } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantIngredientTracking() {
  const [ingredients, setIngredients] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newIngredient, setNewIngredient] = useState({ name: '', quantity: '', unit: '', expiryDate: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6">
          <div className="flex items-center gap-3">
            <Package className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Ingredient Tracking</h1>
              <p className="text-green-100">Monitor ingredient inventory and usage</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-600">Total Ingredients</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{ingredients.length}</div>
            </div>
            <div className="bg-white rounded-lg border border-yellow-200 p-4">
              <div className="text-sm text-yellow-600">Low Stock</div>
              <div className="text-2xl font-bold text-yellow-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-red-200 p-4">
              <div className="text-sm text-red-600">Expiring Soon</div>
              <div className="text-2xl font-bold text-red-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <div className="text-sm text-green-600">In Stock</div>
              <div className="text-2xl font-bold text-green-900 mt-1">{ingredients.length}</div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Ingredients</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Plus className="w-5 h-5" />
              Add Ingredient
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {ingredients.length === 0 ? (
              <div className="p-12 text-center">
                <Package className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No ingredients tracked yet</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ingredient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expiry Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ingredients.map((ing, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">{ing.name}</td>
                      <td className="px-6 py-4">{ing.quantity} {ing.unit}</td>
                      <td className="px-6 py-4">{ing.expiryDate}</td>
                      <td className="px-6 py-4"><CheckCircle className="w-4 h-4 text-green-600" /></td>
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
                  <h2 className="text-xl font-bold text-gray-900">Add Ingredient</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ingredient Name</label>
                    <input
                      type="text"
                      value={newIngredient.name}
                      onChange={(e) => setNewIngredient({...newIngredient, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                      placeholder="Tomato"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                      <input type="number" value={newIngredient.quantity} onChange={(e) => setNewIngredient({...newIngredient, quantity: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                      <select value={newIngredient.unit} onChange={(e) => setNewIngredient({...newIngredient, unit: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option value="">Select unit</option>
                        <option value="kg">kg</option>
                        <option value="g">g</option>
                        <option value="L">L</option>
                        <option value="ml">ml</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <input type="date" value={newIngredient.expiryDate} onChange={(e) => setNewIngredient({...newIngredient, expiryDate: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Add Ingredient</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
