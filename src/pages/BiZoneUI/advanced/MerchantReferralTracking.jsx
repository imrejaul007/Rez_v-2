import { useState } from 'react';
import { Share2, Users, Plus, TrendingUp, Link2 } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantReferralTracking() {
  const [referrals, setReferrals] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newReferral, setNewReferral] = useState({ referrerName: '', referreeName: '', status: '', reward: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-6">
          <div className="flex items-center gap-3">
            <Share2 className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Referral Tracking</h1>
              <p className="text-teal-100">Monitor and manage referral programs</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-600">Total Referrals</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{referrals.length}</div>
            </div>
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <div className="text-sm text-green-600">Successful</div>
              <div className="text-2xl font-bold text-green-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-blue-200 p-4">
              <div className="text-sm text-blue-600">Pending</div>
              <div className="text-2xl font-bold text-blue-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-purple-200 p-4">
              <div className="text-sm text-purple-600">Rewards Paid</div>
              <div className="text-2xl font-bold text-purple-900 mt-1">₹0</div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Referrals</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              <Plus className="w-5 h-5" />
              Add Referral
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {referrals.length === 0 ? (
              <div className="p-12 text-center">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No referrals tracked yet</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Referrer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Referred Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reward</th>
                  </tr>
                </thead>
                <tbody>
                  {referrals.map((ref, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">{ref.referrerName}</td>
                      <td className="px-6 py-4">{ref.referreeName}</td>
                      <td className="px-6 py-4"><span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">{ref.status}</span></td>
                      <td className="px-6 py-4">{ref.reward}</td>
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
                  <h2 className="text-xl font-bold text-gray-900">Add Referral</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Referrer Name</label>
                    <input
                      type="text"
                      value={newReferral.referrerName}
                      onChange={(e) => setNewReferral({...newReferral, referrerName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Referred Customer</label>
                    <input
                      type="text"
                      value={newReferral.referreeName}
                      onChange={(e) => setNewReferral({...newReferral, referreeName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select value={newReferral.status} onChange={(e) => setNewReferral({...newReferral, status: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="">Select status</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Rewarded">Rewarded</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Reward Amount</label>
                    <input type="text" value={newReferral.reward} onChange={(e) => setNewReferral({...newReferral, reward: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="₹500" />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">Add Referral</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
