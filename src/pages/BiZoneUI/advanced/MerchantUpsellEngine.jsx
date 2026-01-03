import { useState } from 'react';
import { TrendingUp, Plus, Settings, ToggleRight } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantUpsellEngine() {
  const [campaigns, setCampaigns] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ name: '', targetProduct: '', upsellProduct: '', incentive: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Upsell Engine</h1>
              <p className="text-violet-100">Automate upselling with smart recommendations</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Upsell Campaigns</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
            >
              <Plus className="w-5 h-5" />
              Create Campaign
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-600">Active Campaigns</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{campaigns.length}</div>
            </div>
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <div className="text-sm text-green-600">Avg Success Rate</div>
              <div className="text-2xl font-bold text-green-900 mt-1">0%</div>
            </div>
            <div className="bg-white rounded-lg border border-blue-200 p-4">
              <div className="text-sm text-blue-600">Revenue Generated</div>
              <div className="text-2xl font-bold text-blue-900 mt-1">₹0</div>
            </div>
            <div className="bg-white rounded-lg border border-purple-200 p-4">
              <div className="text-sm text-purple-600">Total Upsells</div>
              <div className="text-2xl font-bold text-purple-900 mt-1">0</div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {campaigns.length === 0 ? (
              <div className="p-12 text-center">
                <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No upsell campaigns yet</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campaign</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Upsell Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">{campaign.name}</td>
                      <td className="px-6 py-4">{campaign.targetProduct}</td>
                      <td className="px-6 py-4">{campaign.upsellProduct}</td>
                      <td className="px-6 py-4"><ToggleRight className="w-4 h-4 text-green-600" /></td>
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
                  <h2 className="text-xl font-bold text-gray-900">Create Upsell Campaign</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
                    <input
                      type="text"
                      value={newCampaign.name}
                      onChange={(e) => setNewCampaign({...newCampaign, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500"
                      placeholder="Premium Upgrade"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Product</label>
                    <input
                      type="text"
                      value={newCampaign.targetProduct}
                      onChange={(e) => setNewCampaign({...newCampaign, targetProduct: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500"
                      placeholder="Standard Plan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upsell Product</label>
                    <input
                      type="text"
                      value={newCampaign.upsellProduct}
                      onChange={(e) => setNewCampaign({...newCampaign, upsellProduct: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500"
                      placeholder="Premium Plan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Incentive</label>
                    <input type="text" value={newCampaign.incentive} onChange={(e) => setNewCampaign({...newCampaign, incentive: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="10% discount on upgrade" />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700">Create Campaign</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
