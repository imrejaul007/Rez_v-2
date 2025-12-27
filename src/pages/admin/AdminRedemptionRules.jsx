import { useState } from 'react';
import { Shield, Save, AlertTriangle, Gift, Package, Store, Percent } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminRedemptionRules() {
  const [rules, setRules] = useState({
    rezCoin: {
      enabled: true,
      maxPercentPerBill: 100,
      categoryRestrictions: [],
      merchantRestrictions: [],
      giftCardAllowed: false,
      voucherAllowed: false,
      minPurchaseAmount: 0
    },
    brandedCoin: {
      enabled: true,
      maxPercentPerBill: 100,
      categoryRestrictions: [],
      merchantRestrictions: ['same_brand_only'],
      giftCardAllowed: false,
      voucherAllowed: false,
      minPurchaseAmount: 0
    },
    priveCoin: {
      enabled: true,
      maxPercentPerBill: 100,
      categoryRestrictions: [],
      merchantRestrictions: [],
      giftCardAllowed: true,
      voucherAllowed: true,
      minPurchaseAmount: 0
    },
    promoCoin: {
      enabled: true,
      maxPercentPerBill: 30,
      categoryRestrictions: [],
      merchantRestrictions: [],
      giftCardAllowed: false,
      voucherAllowed: false,
      minPurchaseAmount: 99
    }
  });

  const [categories] = useState([
    'Food & Dining',
    'Fashion & Apparel',
    'Electronics',
    'Beauty & Wellness',
    'Health & Fitness',
    'Services',
    'Entertainment',
    'Travel',
    'Education',
    'Home & Living'
  ]);

  const coinTypes = [
    { key: 'rezCoin', label: 'ReZ Coin', color: 'emerald', description: 'Universal utility coin - most flexible' },
    { key: 'brandedCoin', label: 'Branded Coin', color: 'blue', description: 'Merchant-specific loyalty coin' },
    { key: 'priveCoin', label: 'Privé Coin', color: 'purple', description: 'Premium status coin - most powerful' },
    { key: 'promoCoin', label: 'Promo Coin', color: 'orange', description: 'System-controlled promotional coin' }
  ];

  const handleSaveRules = () => {
    console.log('Saving redemption rules:', rules);
    alert('Redemption rules updated successfully!');
  };

  const handleToggleCategory = (coinKey, category) => {
    setRules({
      ...rules,
      [coinKey]: {
        ...rules[coinKey],
        categoryRestrictions: rules[coinKey].categoryRestrictions.includes(category)
          ? rules[coinKey].categoryRestrictions.filter(c => c !== category)
          : [...rules[coinKey].categoryRestrictions, category]
      }
    });
  };

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-700',
        heading: 'text-emerald-900',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        badge: 'bg-emerald-100 text-emerald-700'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        heading: 'text-blue-900',
        button: 'bg-blue-600 hover:bg-blue-700',
        badge: 'bg-blue-100 text-blue-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-700',
        heading: 'text-purple-900',
        button: 'bg-purple-600 hover:bg-purple-700',
        badge: 'bg-purple-100 text-purple-700'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-700',
        heading: 'text-orange-900',
        button: 'bg-orange-600 hover:bg-orange-700',
        badge: 'bg-orange-100 text-orange-700'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Redemption Rules & Restrictions</h1>
              <p className="text-indigo-100 mt-1">Configure usage limits and restrictions for each coin type</p>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Critical Redemption Logic</h3>
              <p className="text-sm text-gray-700">
                These rules enforce how coins can be redeemed at checkout. Changes here affect the entire platform.
                Promo Coin restrictions are applied FIRST, followed by Branded, ReZ, and Privé coins.
              </p>
            </div>
          </div>
        </div>

        {/* Coin Type Rules */}
        <div className="space-y-6">
          {coinTypes.map((coinType) => {
            const colors = getColorClasses(coinType.color);
            const coinRules = rules[coinType.key];

            return (
              <div key={coinType.key} className={`rounded-xl shadow-sm border ${colors.bg} ${colors.border}`}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className={`text-2xl font-bold ${colors.heading} mb-1`}>{coinType.label}</h2>
                      <p className={`text-sm ${colors.text}`}>{coinType.description}</p>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className="text-sm font-medium text-gray-700">Enabled</span>
                      <input
                        type="checkbox"
                        checked={coinRules.enabled}
                        onChange={(e) => setRules({
                          ...rules,
                          [coinType.key]: { ...coinRules, enabled: e.target.checked }
                        })}
                        className="w-6 h-6"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Max Percent Per Bill */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Percent className="w-5 h-5 text-gray-600" />
                        <h3 className="font-semibold text-gray-900">Max % Per Bill</h3>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={coinRules.maxPercentPerBill}
                        onChange={(e) => setRules({
                          ...rules,
                          [coinType.key]: { ...coinRules, maxPercentPerBill: parseInt(e.target.value) }
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-2xl font-bold text-center"
                      />
                      <p className="text-xs text-gray-500 mt-2">Maximum percentage of bill amount that can be paid with this coin</p>
                    </div>

                    {/* Min Purchase Amount */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Package className="w-5 h-5 text-gray-600" />
                        <h3 className="font-semibold text-gray-900">Min Purchase Amount (₹)</h3>
                      </div>
                      <input
                        type="number"
                        min="0"
                        value={coinRules.minPurchaseAmount}
                        onChange={(e) => setRules({
                          ...rules,
                          [coinType.key]: { ...coinRules, minPurchaseAmount: parseInt(e.target.value) }
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-2xl font-bold text-center"
                      />
                      <p className="text-xs text-gray-500 mt-2">Minimum bill amount required to use this coin type</p>
                    </div>
                  </div>

                  {/* Special Allowances */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200 mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Gift className="w-5 h-5 text-gray-600" />
                      <h3 className="font-semibold text-gray-900">Special Allowances</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                        <input
                          type="checkbox"
                          checked={coinRules.giftCardAllowed}
                          onChange={(e) => setRules({
                            ...rules,
                            [coinType.key]: { ...coinRules, giftCardAllowed: e.target.checked }
                          })}
                          className="w-5 h-5"
                        />
                        <span className="text-sm font-medium text-gray-700">Allow for Gift Cards</span>
                      </label>
                      <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                        <input
                          type="checkbox"
                          checked={coinRules.voucherAllowed}
                          onChange={(e) => setRules({
                            ...rules,
                            [coinType.key]: { ...coinRules, voucherAllowed: e.target.checked }
                          })}
                          className="w-5 h-5"
                        />
                        <span className="text-sm font-medium text-gray-700">Allow for Vouchers</span>
                      </label>
                    </div>
                  </div>

                  {/* Category Restrictions */}
                  <div className="bg-white rounded-lg p-4 border border-gray-200 mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Package className="w-5 h-5 text-gray-600" />
                      <h3 className="font-semibold text-gray-900">Category Restrictions</h3>
                      <span className="text-xs text-gray-500">(Select categories to BLOCK)</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => handleToggleCategory(coinType.key, category)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            coinRules.categoryRestrictions.includes(category)
                              ? 'bg-red-100 text-red-700 border-2 border-red-300'
                              : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200'
                          }`}
                        >
                          {category}
                          {coinRules.categoryRestrictions.includes(category) && ' ✕'}
                        </button>
                      ))}
                    </div>
                    {coinRules.categoryRestrictions.length > 0 && (
                      <p className="text-xs text-red-600 mt-2">
                        🚫 Blocked categories: {coinRules.categoryRestrictions.join(', ')}
                      </p>
                    )}
                  </div>

                  {/* Merchant Restrictions */}
                  {coinType.key === 'brandedCoin' && (
                    <div className="bg-white rounded-lg p-4 border border-gray-200 mt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Store className="w-5 h-5 text-gray-600" />
                        <h3 className="font-semibold text-gray-900">Merchant Restrictions</h3>
                      </div>
                      <div className={`p-4 ${colors.bg} rounded-lg border ${colors.border}`}>
                        <p className={`text-sm font-medium ${colors.text}`}>
                          🔒 Branded Coins can ONLY be redeemed at the issuing brand/merchant
                        </p>
                        <p className="text-xs text-gray-600 mt-1">This restriction is enforced by design and cannot be changed</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Save Button */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Ready to apply changes?</h3>
              <p className="text-sm text-gray-600 mt-1">These rules will take effect immediately across the platform</p>
            </div>
            <button
              onClick={handleSaveRules}
              className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold"
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
