import { useState } from 'react';
import { Trophy, Star, Plus, Award, TrendingUp } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantGamificationRewards() {
  const [rewards, setRewards] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newReward, setNewReward] = useState({ name: '', points: '', description: '', badge: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white p-6">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Gamification & Rewards</h1>
              <p className="text-yellow-100">Engage customers with points, badges, and rewards</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-600">Total Rewards</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{rewards.length}</div>
            </div>
            <div className="bg-white rounded-lg border border-yellow-200 p-4">
              <div className="text-sm text-yellow-600">Points Issued</div>
              <div className="text-2xl font-bold text-yellow-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-purple-200 p-4">
              <div className="text-sm text-purple-600">Active Players</div>
              <div className="text-2xl font-bold text-purple-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <div className="text-sm text-green-600">Engagement Rate</div>
              <div className="text-2xl font-bold text-green-900 mt-1">0%</div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Reward Tiers</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
            >
              <Plus className="w-5 h-5" />
              Add Reward
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {rewards.length === 0 ? (
              <div className="p-12 text-center">
                <Star className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No rewards configured yet</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reward</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Points Required</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Badge</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Claimed</th>
                  </tr>
                </thead>
                <tbody>
                  {rewards.map((reward, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">{reward.name}</td>
                      <td className="px-6 py-4">{reward.points}</td>
                      <td className="px-6 py-4"><Award className="w-4 h-4 text-yellow-600" /></td>
                      <td className="px-6 py-4">0</td>
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
                  <h2 className="text-xl font-bold text-gray-900">Add Reward</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Reward Name</label>
                    <input
                      type="text"
                      value={newReward.name}
                      onChange={(e) => setNewReward({...newReward, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                      placeholder="Free Coffee"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Points Required</label>
                    <input type="number" value={newReward.points} onChange={(e) => setNewReward({...newReward, points: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="100" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea value={newReward.description} onChange={(e) => setNewReward({...newReward, description: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500" rows="3" placeholder="Reward description" />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">Add Reward</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
