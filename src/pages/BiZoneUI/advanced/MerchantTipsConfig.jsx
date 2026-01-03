import { useState } from 'react';
import {
  Heart, Percent, DollarSign, Settings, TrendingUp, Users, Clock,
  CheckCircle, Edit, Save, Plus, Trash2, ToggleLeft, ToggleRight,
  Info, Award, Star, Zap, Gift
} from 'lucide-react';

export default function MerchantTipsConfig() {
  const [tipConfig, setTipConfig] = useState({
    enabled: true,
    showPresets: true,
    allowCustom: true,
    presets: [10, 15, 20, 25],
    defaultPreset: 15,
    suggestedText: 'How was the service today?',
    showStaffPhoto: true,
    splitTipWithStaff: true,
    tipDistribution: 'equal' // equal, by_hours, custom
  });

  const [editingPresets, setEditingPresets] = useState(false);

  // Stats
  const stats = {
    totalTips: 45680,
    avgTipPercent: 14.2,
    tipsToday: 3450,
    transactionsWithTip: 78,
    avgTipAmount: 145,
    topTipper: { name: 'Rahul S.', amount: 850 }
  };

  // Recent Tips
  const recentTips = [
    { id: 1, table: 'T-05', amount: 450, percent: 18, staff: 'Priya', time: '2:34 PM', coinsEarned: 45 },
    { id: 2, table: 'T-12', amount: 680, percent: 20, staff: 'Amit', time: '2:15 PM', coinsEarned: 68 },
    { id: 3, table: 'T-08', amount: 320, percent: 15, staff: 'Sneha', time: '1:48 PM', coinsEarned: 32 },
    { id: 4, table: 'T-03', amount: 250, percent: 12, staff: 'Vikram', time: '1:22 PM', coinsEarned: 25 },
    { id: 5, table: 'T-15', amount: 500, percent: 20, staff: 'Meera', time: '12:56 PM', coinsEarned: 50 }
  ];

  // Staff Tip Leaderboard
  const staffLeaderboard = [
    { id: 1, name: 'Priya Sharma', tips: 12450, transactions: 86, avgPercent: 17.5, photo: 'https://i.pravatar.cc/100?img=5' },
    { id: 2, name: 'Amit Kumar', tips: 10890, transactions: 72, avgPercent: 16.2, photo: 'https://i.pravatar.cc/100?img=12' },
    { id: 3, name: 'Sneha Patel', tips: 9560, transactions: 68, avgPercent: 15.8, photo: 'https://i.pravatar.cc/100?img=9' },
    { id: 4, name: 'Vikram Singh', tips: 8340, transactions: 54, avgPercent: 14.5, photo: 'https://i.pravatar.cc/100?img=15' },
    { id: 5, name: 'Meera Roy', tips: 7890, transactions: 48, avgPercent: 14.2, photo: 'https://i.pravatar.cc/100?img=20' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tips & Gratuity</h1>
              <p className="text-gray-600 mt-1">Configure tip suggestions and track staff earnings</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTipConfig({...tipConfig, enabled: !tipConfig.enabled})}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  tipConfig.enabled
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {tipConfig.enabled ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                Tips {tipConfig.enabled ? 'Enabled' : 'Disabled'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-sm">Total Tips</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">₹{stats.totalTips.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Percent className="w-4 h-4" />
              <span className="text-sm">Avg Tip %</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">{stats.avgTipPercent}%</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Tips Today</span>
            </div>
            <div className="text-2xl font-bold text-green-600">₹{stats.tipsToday.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">With Tips</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.transactionsWithTip}%</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm">Avg Tip Amount</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">₹{stats.avgTipAmount}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">Top Tipper</span>
            </div>
            <div className="text-lg font-bold text-gray-900">{stats.topTipper.name}</div>
            <div className="text-sm text-green-600">₹{stats.topTipper.amount}</div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 grid grid-cols-2 gap-6">
        {/* Tip Configuration */}
        <div className="space-y-6">
          {/* Preset Configuration */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Percent className="w-5 h-5 text-purple-600" />
                Tip Preset Options
              </h3>
              <button
                onClick={() => setEditingPresets(!editingPresets)}
                className="text-purple-600 text-sm font-medium flex items-center gap-1"
              >
                {editingPresets ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                {editingPresets ? 'Save' : 'Edit'}
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-4">
              {tipConfig.presets.map((preset, idx) => (
                <div
                  key={idx}
                  className={`relative p-4 rounded-xl text-center border-2 transition-all ${
                    preset === tipConfig.defaultPreset
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  {preset === tipConfig.defaultPreset && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-purple-600 text-white text-xs rounded-full">
                      Default
                    </div>
                  )}
                  <div className="text-2xl font-bold text-gray-900">{preset}%</div>
                  {editingPresets && (
                    <button className="absolute top-1 right-1 p-1 hover:bg-red-100 rounded text-red-500">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {editingPresets && (
              <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-purple-500 hover:text-purple-600 flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Add Preset
              </button>
            )}

            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <strong>Tip Psychology:</strong> Having 4 preset options with 15-20% as default typically increases average tips by 23%.
                </div>
              </div>
            </div>
          </div>

          {/* Display Settings */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-purple-600" />
              Display Settings
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Show Tip Presets</div>
                  <div className="text-sm text-gray-500">Display preset tip buttons on payment screen</div>
                </div>
                <button
                  onClick={() => setTipConfig({...tipConfig, showPresets: !tipConfig.showPresets})}
                  className={`w-12 h-6 rounded-full transition-all ${
                    tipConfig.showPresets ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    tipConfig.showPresets ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Allow Custom Tips</div>
                  <div className="text-sm text-gray-500">Let customers enter custom tip amounts</div>
                </div>
                <button
                  onClick={() => setTipConfig({...tipConfig, allowCustom: !tipConfig.allowCustom})}
                  className={`w-12 h-6 rounded-full transition-all ${
                    tipConfig.allowCustom ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    tipConfig.allowCustom ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Show Server Photo</div>
                  <div className="text-sm text-gray-500">Display server's photo on tip screen</div>
                </div>
                <button
                  onClick={() => setTipConfig({...tipConfig, showStaffPhoto: !tipConfig.showStaffPhoto})}
                  className={`w-12 h-6 rounded-full transition-all ${
                    tipConfig.showStaffPhoto ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    tipConfig.showStaffPhoto ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tip Prompt Message</label>
                <input
                  type="text"
                  value={tipConfig.suggestedText}
                  onChange={(e) => setTipConfig({...tipConfig, suggestedText: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* RezCoin Bonus */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 p-5">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🪙</span>
              RezCoin Tip Bonus
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Customers earn bonus RezCoins when they leave a tip, encouraging generosity!
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-sm text-gray-500">Tip 10-15%</div>
                <div className="text-lg font-bold text-yellow-600">+5% bonus coins</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-sm text-gray-500">Tip 15-20%</div>
                <div className="text-lg font-bold text-yellow-600">+10% bonus coins</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-sm text-gray-500">Tip 20%+</div>
                <div className="text-lg font-bold text-yellow-600">+15% bonus coins</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-sm text-gray-500">Tip 25%+</div>
                <div className="text-lg font-bold text-yellow-600">+20% bonus coins</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Staff Leaderboard */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              Staff Tip Leaderboard
            </h3>
            <div className="space-y-3">
              {staffLeaderboard.map((staff, idx) => (
                <div key={staff.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8">
                    {idx === 0 && <span className="text-2xl">🥇</span>}
                    {idx === 1 && <span className="text-2xl">🥈</span>}
                    {idx === 2 && <span className="text-2xl">🥉</span>}
                    {idx > 2 && <span className="text-lg font-bold text-gray-400">#{idx + 1}</span>}
                  </div>
                  <img
                    src={staff.photo}
                    alt={staff.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{staff.name}</div>
                    <div className="text-xs text-gray-500">{staff.transactions} transactions • Avg {staff.avgPercent}%</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">₹{staff.tips.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Tips */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-600" />
              Recent Tips
            </h3>
            <div className="space-y-3">
              {recentTips.map((tip) => (
                <div key={tip.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-purple-600">{tip.table}</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">₹{tip.amount} ({tip.percent}%)</div>
                      <div className="text-xs text-gray-500">Served by {tip.staff}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{tip.time}</div>
                    <div className="text-xs text-yellow-600 flex items-center gap-1 justify-end">
                      🪙 +{tip.coinsEarned} coins
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
