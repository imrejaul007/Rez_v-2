import { useState } from 'react';
import { Save, Layers, TrendingUp, Coins, DollarSign, Award, Info, RotateCcw, AlertCircle } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminMerchantTierConfig() {
  const [tiers, setTiers] = useState([
    {
      id: 'free',
      name: 'Free Tier',
      color: 'gray',
      marketingSpend: 0,
      commission: {
        total: 20,
        rezCoin: { min: 5, max: 10, default: 7 },
        brandedCoin: { min: 0, max: 10, default: 5 },
        priveCoin: { min: 5, max: 100, default: 10 },
        toReZ: 8 // Calculated: 20 - 7 - 5 = 8
      },
      benefits: [
        'Basic merchant dashboard',
        'Standard listing',
        'Manual cashback approval',
        'Email support'
      ],
      merchantCount: 1245,
      avgRevenue: 25000
    },
    {
      id: 'basic',
      name: 'Basic',
      color: 'blue',
      marketingSpend: 10000,
      commission: {
        total: 18,
        rezCoin: { min: 5, max: 10, default: 6 },
        brandedCoin: { min: 0, max: 10, default: 5 },
        priveCoin: { min: 5, max: 100, default: 10 },
        toReZ: 7 // Calculated: 18 - 6 - 5 = 7
      },
      benefits: [
        'All Free features',
        'Priority listing',
        'Auto cashback approval',
        'Marketing support (₹10k/month)',
        'Phone support'
      ],
      merchantCount: 456,
      avgRevenue: 85000
    },
    {
      id: 'golden',
      name: 'Golden',
      color: 'yellow',
      marketingSpend: 30000,
      commission: {
        total: 17,
        rezCoin: { min: 5, max: 10, default: 6 },
        brandedCoin: { min: 0, max: 10, default: 5 },
        priveCoin: { min: 5, max: 100, default: 10 },
        toReZ: 6 // Calculated: 17 - 6 - 5 = 6
      },
      benefits: [
        'All Basic features',
        'Featured placement',
        'Dedicated account manager',
        'Marketing support (₹30k/month)',
        'Campaign co-creation',
        'Priority support'
      ],
      merchantCount: 189,
      avgRevenue: 245000
    },
    {
      id: 'diamond',
      name: 'Diamond',
      color: 'purple',
      marketingSpend: 100000,
      commission: {
        total: 15,
        rezCoin: { min: 5, max: 10, default: 5 },
        brandedCoin: { min: 0, max: 10, default: 5 },
        priveCoin: { min: 5, max: 100, default: 10 },
        toReZ: 5 // Calculated: 15 - 5 - 5 = 5
      },
      benefits: [
        'All Golden features',
        'Premium placement',
        'Dedicated marketing team',
        'Marketing support (₹100k+/month)',
        'Co-branded campaigns',
        'White-glove support',
        'Custom integrations',
        'Quarterly business reviews'
      ],
      merchantCount: 45,
      avgRevenue: 1250000
    }
  ]);

  const [selectedTier, setSelectedTier] = useState('free');
  const [editMode, setEditMode] = useState(false);

  const currentTier = tiers.find(t => t.id === selectedTier);

  const handleUpdateCommission = (tierId, field, value) => {
    setTiers(prev => prev.map(tier => {
      if (tier.id === tierId) {
        const updated = { ...tier };
        const parsedValue = parseFloat(value);

        if (field === 'total') {
          updated.commission.total = parsedValue;
        } else if (field.includes('.')) {
          const [category, subfield] = field.split('.');
          updated.commission[category][subfield] = parsedValue;
        } else {
          updated.commission[field] = parsedValue;
        }

        // Recalculate toReZ
        const rezDefault = updated.commission.rezCoin.default;
        const brandedDefault = updated.commission.brandedCoin.default;
        updated.commission.toReZ = updated.commission.total - rezDefault - brandedDefault;

        return updated;
      }
      return tier;
    }));
  };

  const handleSave = () => {
    console.log('Saving tier configuration:', tiers);
    alert('Merchant tier configuration saved successfully!');
    setEditMode(false);
  };

  const handleReset = () => {
    if (window.confirm('Reset all tiers to default values?')) {
      // Reset logic here
      alert('Tiers reset to default!');
    }
  };

  const getTierColor = (color) => {
    const colors = {
      gray: { bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-700', dark: 'text-gray-900' },
      blue: { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', dark: 'text-blue-900' },
      yellow: { bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-700', dark: 'text-yellow-900' },
      purple: { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-700', dark: 'text-purple-900' }
    };
    return colors[color] || colors.gray;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Layers className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Merchant Tier & Commission Configuration</h1>
              <p className="text-purple-100 mt-1">Configure tier-based commission structures and coin distribution</p>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Alert */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">How Commission Split Works</h3>
              <p className="text-sm text-gray-700 mb-2">
                On every transaction, the <strong>Total Commission</strong> is split as:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• <strong>ReZ Coin %</strong> → Goes to user as universal coins</li>
                <li>• <strong>Branded Coin %</strong> → Goes to user as merchant-specific coins</li>
                <li>• <strong>Privé Coin %</strong> → Available only for Privé members (merchant configurable)</li>
                <li>• <strong>Remaining %</strong> → Kept by ReZ platform</li>
              </ul>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Example:</strong> Golden tier (17% total) → 6% ReZ + 5% Branded + 6% to ReZ = User gets 11%, ReZ keeps 6%
              </p>
            </div>
          </div>
        </div>

        {/* Tier Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tiers.map((tier) => {
            const colors = getTierColor(tier.color);
            const isSelected = selectedTier === tier.id;

            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`rounded-xl shadow-sm border-2 p-6 cursor-pointer transition-all ${
                  isSelected ? `${colors.border} ${colors.bg}` : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold ${isSelected ? colors.dark : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <Layers className={`w-6 h-6 ${isSelected ? colors.text : 'text-gray-400'}`} />
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-600">Marketing Spend</p>
                    <p className="text-lg font-bold text-gray-900">
                      {tier.marketingSpend === 0 ? '₹0' : `₹${(tier.marketingSpend / 1000).toFixed(0)}k/mo`}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-600">Total Commission</p>
                    <p className="text-2xl font-bold text-purple-600">{tier.commission.total}%</p>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Merchants:</span>
                      <span className="font-semibold text-gray-900">{tier.merchantCount}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Avg Revenue:</span>
                      <span className="font-semibold text-gray-900">₹{(tier.avgRevenue / 1000).toFixed(0)}k</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Configuration */}
        {currentTier && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{currentTier.name} - Commission Configuration</h2>
                <p className="text-sm text-gray-600 mt-1">Configure coin distribution for this tier</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
                <button
                  onClick={() => setEditMode(!editMode)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    editMode ? 'bg-gray-200 text-gray-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {editMode ? 'Cancel Edit' : 'Edit Configuration'}
                </button>
              </div>
            </div>

            {/* Commission Breakdown */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Total Commission Structure
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Total Commission */}
                <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Commission Rate (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="30"
                    step="0.5"
                    value={currentTier.commission.total}
                    onChange={(e) => handleUpdateCommission(currentTier.id, 'total', e.target.value)}
                    disabled={!editMode}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-2xl font-bold text-purple-600 disabled:bg-gray-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Total % deducted per transaction</p>
                </div>

                {/* Marketing Spend */}
                <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Marketing Spend (₹/month)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="1000"
                    value={currentTier.marketingSpend}
                    onChange={(e) => {
                      setTiers(prev => prev.map(t =>
                        t.id === currentTier.id ? { ...t, marketingSpend: parseInt(e.target.value) } : t
                      ));
                    }}
                    disabled={!editMode}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-2xl font-bold text-blue-600 disabled:bg-gray-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Required monthly marketing investment</p>
                </div>
              </div>
            </div>

            {/* Coin Distribution */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Coins className="w-5 h-5 text-emerald-600" />
                Coin Distribution Configuration
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* ReZ Coin */}
                <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">💚</span>
                    <h4 className="font-bold text-emerald-900">ReZ Coin</h4>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Default Rate (%)
                      </label>
                      <input
                        type="number"
                        min={currentTier.commission.rezCoin.min}
                        max={currentTier.commission.rezCoin.max}
                        step="0.5"
                        value={currentTier.commission.rezCoin.default}
                        onChange={(e) => handleUpdateCommission(currentTier.id, 'rezCoin.default', e.target.value)}
                        disabled={!editMode}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xl font-bold text-emerald-600 disabled:bg-gray-100"
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-600 mb-1">Min %</label>
                        <input
                          type="number"
                          value={currentTier.commission.rezCoin.min}
                          onChange={(e) => handleUpdateCommission(currentTier.id, 'rezCoin.min', e.target.value)}
                          disabled={!editMode}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm disabled:bg-gray-100"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-600 mb-1">Max %</label>
                        <input
                          type="number"
                          value={currentTier.commission.rezCoin.max}
                          onChange={(e) => handleUpdateCommission(currentTier.id, 'rezCoin.max', e.target.value)}
                          disabled={!editMode}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm disabled:bg-gray-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branded Coin */}
                <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🔵</span>
                    <h4 className="font-bold text-blue-900">Branded Coin</h4>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Default Rate (%)
                      </label>
                      <input
                        type="number"
                        min={currentTier.commission.brandedCoin.min}
                        max={currentTier.commission.brandedCoin.max}
                        step="0.5"
                        value={currentTier.commission.brandedCoin.default}
                        onChange={(e) => handleUpdateCommission(currentTier.id, 'brandedCoin.default', e.target.value)}
                        disabled={!editMode}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xl font-bold text-blue-600 disabled:bg-gray-100"
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-600 mb-1">Min %</label>
                        <input
                          type="number"
                          value={currentTier.commission.brandedCoin.min}
                          onChange={(e) => handleUpdateCommission(currentTier.id, 'brandedCoin.min', e.target.value)}
                          disabled={!editMode}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm disabled:bg-gray-100"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-600 mb-1">Max %</label>
                        <input
                          type="number"
                          value={currentTier.commission.brandedCoin.max}
                          onChange={(e) => handleUpdateCommission(currentTier.id, 'brandedCoin.max', e.target.value)}
                          disabled={!editMode}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm disabled:bg-gray-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Privé Coin */}
                <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">👑</span>
                    <h4 className="font-bold text-purple-900">Privé Coin</h4>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Default Rate (%)
                      </label>
                      <input
                        type="number"
                        min={currentTier.commission.priveCoin.min}
                        max={currentTier.commission.priveCoin.max}
                        step="0.5"
                        value={currentTier.commission.priveCoin.default}
                        onChange={(e) => handleUpdateCommission(currentTier.id, 'priveCoin.default', e.target.value)}
                        disabled={!editMode}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xl font-bold text-purple-600 disabled:bg-gray-100"
                      />
                      <p className="text-xs text-gray-500 mt-1">Merchant configurable</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-600 mb-1">Min %</label>
                        <input
                          type="number"
                          value={currentTier.commission.priveCoin.min}
                          onChange={(e) => handleUpdateCommission(currentTier.id, 'priveCoin.min', e.target.value)}
                          disabled={!editMode}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm disabled:bg-gray-100"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-gray-600 mb-1">Max %</label>
                        <input
                          type="number"
                          value={currentTier.commission.priveCoin.max}
                          onChange={(e) => handleUpdateCommission(currentTier.id, 'priveCoin.max', e.target.value)}
                          disabled={!editMode}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm disabled:bg-gray-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculated Remainder */}
              <div className="mt-6 bg-white rounded-lg p-4 border-2 border-orange-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-orange-900 mb-1">Platform Revenue (Calculated)</h4>
                    <p className="text-sm text-gray-600">
                      Total Commission ({currentTier.commission.total}%) - ReZ Coin ({currentTier.commission.rezCoin.default}%) - Branded Coin ({currentTier.commission.brandedCoin.default}%)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-orange-600">{currentTier.commission.toReZ.toFixed(1)}%</p>
                    <p className="text-xs text-gray-500">Kept by ReZ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tier Benefits */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600" />
                Tier Benefits
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentTier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-0.5">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Save Button */}
        {editMode && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Ready to apply changes?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  This configuration will apply to all <strong>{currentTier.merchantCount}</strong> merchants in the <strong>{currentTier.name}</strong> tier
                </p>
              </div>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
              >
                <Save className="w-5 h-5" />
                Save Configuration
              </button>
            </div>
          </div>
        )}

        {/* Warning */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-700">
              <p className="font-semibold text-gray-900 mb-1">Important Notes:</p>
              <ul className="space-y-1 ml-4">
                <li>• Changes to commission structure will apply to <strong>new transactions only</strong></li>
                <li>• Existing pending settlements will use the <strong>old commission rate</strong></li>
                <li>• Merchants will be <strong>notified via email</strong> before changes take effect</li>
                <li>• Privé coin allocation is <strong>merchant-configurable</strong> within the min-max range</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
