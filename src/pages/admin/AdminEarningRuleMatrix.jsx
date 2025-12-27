import { useState } from 'react';
import { Grid3x3, Save, Filter, Search } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminEarningRuleMatrix() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const [earningRules, setEarningRules] = useState([
    // Purchases & Transactions
    { id: 1, activity: 'Purchase (Offline)', category: 'transactions', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '1-10%' },
    { id: 2, activity: 'Purchase (Online via ReZ)', category: 'transactions', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '2-8%' },
    { id: 3, activity: 'Scan & Pay at Store', category: 'transactions', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: 'Up to 10%' },
    { id: 4, activity: 'Bill Upload', category: 'transactions', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '₹50-₹200' },
    { id: 5, activity: 'Lock Price Deal', category: 'transactions', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '2X earnings' },
    { id: 6, activity: 'First Visit Bonus', category: 'transactions', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '50-100' },

    // Social & Sharing
    { id: 7, activity: 'Share an Offer', category: 'social', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '20' },
    { id: 8, activity: 'Refer a Friend', category: 'social', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '100' },
    { id: 9, activity: 'Friend Completes First Purchase', category: 'social', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '100' },
    { id: 10, activity: 'Share Savings Publicly', category: 'social', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '25' },
    { id: 11, activity: 'Upload Photos (UGC)', category: 'social', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '25-100' },
    { id: 12, activity: 'Create Reels', category: 'social', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '50-200' },
    { id: 13, activity: 'Vote in Polls', category: 'social', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '10' },
    { id: 14, activity: 'Comment on Offers', category: 'social', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '15' },

    // Reviews & Feedback
    { id: 15, activity: 'Write a Review', category: 'engagement', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '25-100' },
    { id: 16, activity: 'Product Review', category: 'engagement', rezCoin: false, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '50' },
    { id: 17, activity: 'Feedback Submission', category: 'engagement', rezCoin: false, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '25' },
    { id: 18, activity: 'Rate Events', category: 'engagement', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '20' },

    // Gamification
    { id: 19, activity: 'Daily Check-in', category: 'gamification', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '10-500' },
    { id: 20, activity: 'Daily Streak (7 days)', category: 'gamification', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '100' },
    { id: 21, activity: 'Daily Streak (30 days)', category: 'gamification', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '500' },
    { id: 22, activity: 'Spin the Wheel', category: 'gamification', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '50' },
    { id: 23, activity: 'Scratch Card', category: 'gamification', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '100' },
    { id: 24, activity: 'Coin Hunt', category: 'gamification', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '75' },
    { id: 25, activity: 'Quiz Master', category: 'gamification', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '250/day' },
    { id: 26, activity: 'Achievement Unlocked', category: 'gamification', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '100-500' },
    { id: 27, activity: 'Leaderboard Top 100', category: 'gamification', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: '200+' },

    // Campus & Corporate
    { id: 28, activity: 'Campus Ambassador Task', category: 'campus', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: 'Varies' },
    { id: 29, activity: 'College Event Participation', category: 'campus', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '50-200' },
    { id: 30, activity: 'Student of the Month', category: 'campus', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: 'Up to 5,000' },
    { id: 31, activity: 'Corporate Employee Challenge', category: 'corporate', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: 'Varies' },
    { id: 32, activity: 'Employee of the Month', category: 'corporate', rezCoin: true, brandedCoin: false, priveCoin: false, promoCoin: false, amount: 'Up to 3,000' },

    // Social Impact
    { id: 33, activity: 'Blood Donation', category: 'social_impact', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '200' },
    { id: 34, activity: 'Tree Plantation', category: 'social_impact', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '150' },
    { id: 35, activity: 'Beach Cleanup', category: 'social_impact', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '120' },
    { id: 36, activity: 'NGO Volunteer', category: 'social_impact', rezCoin: true, brandedCoin: true, priveCoin: false, promoCoin: false, amount: '100' },

    // Privé Exclusive
    { id: 37, activity: 'Privé Purchase', category: 'prive', rezCoin: false, brandedCoin: false, priveCoin: true, promoCoin: false, amount: '1-5%' },
    { id: 38, activity: 'Privé Campaign Participation', category: 'prive', rezCoin: false, brandedCoin: false, priveCoin: true, promoCoin: false, amount: 'Varies' },
    { id: 39, activity: 'High Trust Score Bonus', category: 'prive', rezCoin: false, brandedCoin: false, priveCoin: true, promoCoin: false, amount: '500+' },
    { id: 40, activity: 'Brand Collaboration (Privé)', category: 'prive', rezCoin: false, brandedCoin: true, priveCoin: true, promoCoin: false, amount: 'Unlimited' }
  ]);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'transactions', label: 'Transactions & Purchases' },
    { value: 'social', label: 'Social & Sharing' },
    { value: 'engagement', label: 'Reviews & Engagement' },
    { value: 'gamification', label: 'Gamification' },
    { value: 'campus', label: 'Campus Programs' },
    { value: 'corporate', label: 'Corporate Programs' },
    { value: 'social_impact', label: 'Social Impact' },
    { value: 'prive', label: 'Privé Exclusive' }
  ];

  const toggleCoinType = (ruleId, coinType) => {
    setEarningRules(earningRules.map(rule =>
      rule.id === ruleId ? { ...rule, [coinType]: !rule[coinType] } : rule
    ));
  };

  const handleSave = () => {
    console.log('Saving earning rules:', earningRules);
    alert('Earning rule matrix saved successfully!');
  };

  const filteredRules = earningRules.filter(rule => {
    const matchesSearch = rule.activity.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || rule.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStats = () => {
    return {
      total: earningRules.length,
      rezCoin: earningRules.filter(r => r.rezCoin).length,
      brandedCoin: earningRules.filter(r => r.brandedCoin).length,
      priveCoin: earningRules.filter(r => r.priveCoin).length,
      promoCoin: earningRules.filter(r => r.promoCoin).length
    };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Grid3x3 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Earning Rule Matrix</h1>
              <p className="text-teal-100 mt-1">Configure which coin type is earned from each activity</p>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Total Activities</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-emerald-50 rounded-xl shadow-sm border border-emerald-200 p-4">
            <p className="text-sm text-emerald-700 font-medium">ReZ Coin</p>
            <p className="text-3xl font-bold text-emerald-600">{stats.rezCoin}</p>
          </div>
          <div className="bg-blue-50 rounded-xl shadow-sm border border-blue-200 p-4">
            <p className="text-sm text-blue-700 font-medium">Branded Coin</p>
            <p className="text-3xl font-bold text-blue-600">{stats.brandedCoin}</p>
          </div>
          <div className="bg-purple-50 rounded-xl shadow-sm border border-purple-200 p-4">
            <p className="text-sm text-purple-700 font-medium">Privé Coin</p>
            <p className="text-3xl font-bold text-purple-600">{stats.priveCoin}</p>
          </div>
          <div className="bg-orange-50 rounded-xl shadow-sm border border-orange-200 p-4">
            <p className="text-sm text-orange-700 font-medium">Promo Coin</p>
            <p className="text-3xl font-bold text-orange-600">{stats.promoCoin}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Activity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-emerald-700">ReZ Coin</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-700">Branded</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-purple-700">Privé</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-orange-700">Promo</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredRules.map((rule) => (
                  <tr key={rule.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{rule.activity}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {categories.find(c => c.value === rule.category)?.label || rule.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <input
                        type="checkbox"
                        checked={rule.rezCoin}
                        onChange={() => toggleCoinType(rule.id, 'rezCoin')}
                        className="w-5 h-5 text-emerald-600"
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <input
                        type="checkbox"
                        checked={rule.brandedCoin}
                        onChange={() => toggleCoinType(rule.id, 'brandedCoin')}
                        className="w-5 h-5 text-blue-600"
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <input
                        type="checkbox"
                        checked={rule.priveCoin}
                        onChange={() => toggleCoinType(rule.id, 'priveCoin')}
                        className="w-5 h-5 text-purple-600"
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <input
                        type="checkbox"
                        checked={rule.promoCoin}
                        onChange={() => toggleCoinType(rule.id, 'promoCoin')}
                        className="w-5 h-5 text-orange-600"
                        disabled
                        title="Promo coins are not earned - they are injected by ReZ"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{rule.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Save Button */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Ready to apply changes?</h3>
              <p className="text-sm text-gray-600 mt-1">
                Showing {filteredRules.length} of {stats.total} earning activities
              </p>
            </div>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold"
            >
              <Save className="w-5 h-5" />
              Save All Rules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
