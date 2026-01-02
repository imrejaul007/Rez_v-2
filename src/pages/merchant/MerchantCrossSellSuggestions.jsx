import { useState } from 'react';
import { ShoppingCart, Plus, Eye, Edit } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantCrossSellSuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSuggestion, setNewSuggestion] = useState({ primaryProduct: '', suggestedProduct: '', conversionRate: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Cross-Sell Suggestions</h1>
              <p className="text-cyan-100">Recommend complementary products to customers</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Cross-Sell Pairs</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
            >
              <Plus className="w-5 h-5" />
              Add Suggestion
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {suggestions.length === 0 ? (
              <div className="p-12 text-center">
                <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No cross-sell suggestions yet</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Primary Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Suggested Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conversion Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {suggestions.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">{item.primaryProduct}</td>
                      <td className="px-6 py-4">{item.suggestedProduct}</td>
                      <td className="px-6 py-4">{item.conversionRate}%</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-600 hover:text-blue-600"><Eye className="w-4 h-4" /></button>
                          <button className="p-2 text-gray-600 hover:text-blue-600"><Edit className="w-4 h-4" /></button>
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
                  <h2 className="text-xl font-bold text-gray-900">Add Cross-Sell Suggestion</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Product</label>
                    <input
                      type="text"
                      value={newSuggestion.primaryProduct}
                      onChange={(e) => setNewSuggestion({...newSuggestion, primaryProduct: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                      placeholder="Pizza"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Suggested Product</label>
                    <input
                      type="text"
                      value={newSuggestion.suggestedProduct}
                      onChange={(e) => setNewSuggestion({...newSuggestion, suggestedProduct: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                      placeholder="Soft Drink"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Conversion Rate (%)</label>
                    <input type="number" value={newSuggestion.conversionRate} onChange={(e) => setNewSuggestion({...newSuggestion, conversionRate: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">Add Suggestion</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
