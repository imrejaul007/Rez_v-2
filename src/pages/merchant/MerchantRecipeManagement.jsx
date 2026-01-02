import { useState } from 'react';
import { Chef, Plus, Edit, Trash2, Eye } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantRecipeManagement() {
  const [recipes, setRecipes] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newRecipe, setNewRecipe] = useState({ name: '', ingredients: '', preparationTime: '', servings: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
          <div className="flex items-center gap-3">
            <Chef className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Recipe Management</h1>
              <p className="text-orange-100">Create and manage recipes with ingredient tracking</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recipes</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              <Plus className="w-5 h-5" />
              Add Recipe
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {recipes.length === 0 ? (
              <div className="p-12 text-center">
                <Chef className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No recipes created yet</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipe Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prep Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Servings</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recipes.map((recipe, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">{recipe.name}</td>
                      <td className="px-6 py-4">{recipe.preparationTime} mins</td>
                      <td className="px-6 py-4">{recipe.servings} servings</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-600 hover:text-blue-600"><Eye className="w-4 h-4" /></button>
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
                  <h2 className="text-xl font-bold text-gray-900">Add Recipe</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Recipe Name</label>
                    <input
                      type="text"
                      value={newRecipe.name}
                      onChange={(e) => setNewRecipe({...newRecipe, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      placeholder="Chocolate Cake"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ingredients</label>
                    <textarea
                      value={newRecipe.ingredients}
                      onChange={(e) => setNewRecipe({...newRecipe, ingredients: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      placeholder="List ingredients here"
                      rows="4"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prep Time (mins)</label>
                      <input type="number" value={newRecipe.preparationTime} onChange={(e) => setNewRecipe({...newRecipe, preparationTime: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Servings</label>
                      <input type="number" value={newRecipe.servings} onChange={(e) => setNewRecipe({...newRecipe, servings: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">Add Recipe</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
