import { useState } from 'react';
import { RotateCcw, Plus, Send, BarChart3 } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantReEngagement() {
  const [campaigns, setCampaigns] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ name: '', targetSegment: '', message: '', incentive: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
          <div className="flex items-center gap-3">
            <RotateCcw className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Customer Re-engagement</h1>
              <p className="text-amber-100">Win back inactive customers with targeted campaigns</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-600">Active Campaigns</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{campaigns.length}</div>
            </div>
            <div className="bg-white rounded-lg border border-blue-200 p-4">
              <div className="text-sm text-blue-600">Inactive Customers</div>
              <div className="text-2xl font-bold text-blue-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <div className="text-sm text-green-600">Re-engaged</div>
              <div className="text-2xl font-bold text-green-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-purple-200 p-4">
              <div className="text-sm text-purple-600">Conversion Rate</div>
              <div className="text-2xl font-bold text-purple-900 mt-1">0%</div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Re-engagement Campaigns</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
            >
              <Plus className="w-5 h-5" />
              Create Campaign
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {campaigns.length === 0 ? (
              <div className="p-12 text-center">
                <RotateCcw className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No re-engagement campaigns created yet</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campaign</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target Segment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Results</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">{campaign.name}</td>
                      <td className="px-6 py-4">{campaign.targetSegment}</td>
                      <td className="px-6 py-4"><span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Active</span></td>
                      <td className="px-6 py-4"><BarChart3 className="w-4 h-4 text-gray-600" /></td>
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
                  <h2 className="text-xl font-bold text-gray-900">Create Re-engagement Campaign</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
                    <input
                      type="text"
                      value={newCampaign.name}
                      onChange={(e) => setNewCampaign({...newCampaign, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                      placeholder="We Miss You!"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Segment</label>
                    <select value={newCampaign.targetSegment} onChange={(e) => setNewCampaign({...newCampaign, targetSegment: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="">Select segment</option>
                      <option value="inactive_30">Inactive 30 days</option>
                      <option value="inactive_60">Inactive 60 days</option>
                      <option value="inactive_90">Inactive 90 days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea value={newCampaign.message} onChange={(e) => setNewCampaign({...newCampaign, message: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500" rows="3" placeholder="Campaign message" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Incentive</label>
                    <input type="text" value={newCampaign.incentive} onChange={(e) => setNewCampaign({...newCampaign, incentive: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="20% discount" />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">Create Campaign</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
