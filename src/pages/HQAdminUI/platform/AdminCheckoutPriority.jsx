import { useState } from 'react';
import { ArrowDown, Save, RotateCcw, CheckCircle, AlertCircle, CreditCard } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminCheckoutPriority() {
  const [priority, setPriority] = useState([
    { id: 1, coinType: 'promoCoin', label: 'Promo Coin', color: 'orange', enabled: true, autoApply: true },
    { id: 2, coinType: 'brandedCoin', label: 'Branded Coin', color: 'blue', enabled: true, autoApply: true },
    { id: 3, coinType: 'rezCoin', label: 'ReZ Coin', color: 'emerald', enabled: true, autoApply: true },
    { id: 4, coinType: 'priveCoin', label: 'Privé Coin', color: 'purple', enabled: true, autoApply: false }
  ]);

  const [settings, setSettings] = useState({
    allowManualOverride: true,
    showCoinBreakdown: true,
    confirmBeforeApply: false,
    maxCoinsPerTransaction: 4,
    enableSmartOptimization: true
  });

  const defaultPriority = [
    { id: 1, coinType: 'promoCoin', label: 'Promo Coin', color: 'orange', enabled: true, autoApply: true },
    { id: 2, coinType: 'brandedCoin', label: 'Branded Coin', color: 'blue', enabled: true, autoApply: true },
    { id: 3, coinType: 'rezCoin', label: 'ReZ Coin', color: 'emerald', enabled: true, autoApply: true },
    { id: 4, coinType: 'priveCoin', label: 'Privé Coin', color: 'purple', enabled: true, autoApply: false }
  ];

  const handleSave = () => {
    console.log('Saving checkout priority:', priority, settings);
    alert('Checkout priority configuration saved successfully!');
  };

  const handleReset = () => {
    if (window.confirm('Reset to default priority order?')) {
      setPriority(defaultPriority);
      setSettings({
        allowManualOverride: true,
        showCoinBreakdown: true,
        confirmBeforeApply: false,
        maxCoinsPerTransaction: 4,
        enableSmartOptimization: true
      });
    }
  };

  const moveCoin = (index, direction) => {
    const newPriority = [...priority];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex >= 0 && targetIndex < priority.length) {
      [newPriority[index], newPriority[targetIndex]] = [newPriority[targetIndex], newPriority[index]];
      setPriority(newPriority);
    }
  };

  const toggleCoin = (index) => {
    const newPriority = [...priority];
    newPriority[index].enabled = !newPriority[index].enabled;
    setPriority(newPriority);
  };

  const toggleAutoApply = (index) => {
    const newPriority = [...priority];
    newPriority[index].autoApply = !newPriority[index].autoApply;
    setPriority(newPriority);
  };

  const getColorClasses = (color) => {
    const colors = {
      orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <CreditCard className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Checkout Priority Configuration</h1>
              <p className="text-blue-100 mt-1">Define the order in which coins are auto-applied at checkout</p>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Auto-Apply Priority Logic</h3>
              <p className="text-sm text-gray-700 mb-2">
                At checkout, coins are automatically applied in the order shown below (top to bottom).
                The system will use coins according to their redemption rules until the bill is fully paid or restrictions are met.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Default Recommended Order:</strong> Promo → Branded → ReZ → Privé
              </p>
            </div>
          </div>
        </div>

        {/* Priority Order */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Coin Application Priority Order</h2>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              Reset to Default
            </button>
          </div>

          <div className="space-y-3">
            {priority.map((coin, index) => {
              const colors = getColorClasses(coin.color);
              return (
                <div
                  key={coin.id}
                  className={`border-2 rounded-lg p-4 ${coin.enabled ? colors.border : 'border-gray-200'} ${
                    coin.enabled ? 'bg-white' : 'bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Priority Number */}
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center font-bold text-lg`}>
                        {index + 1}
                      </div>
                      {index < priority.length - 1 && (
                        <ArrowDown className="w-5 h-5 text-gray-400 mt-2" />
                      )}
                    </div>

                    {/* Coin Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-gray-900">{coin.label}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                          {coin.coinType}
                        </span>
                        {coin.autoApply && coin.enabled && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            Auto-Apply ON
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {coin.coinType === 'promoCoin' && 'Applied first - time-bound promotional coins with restrictions'}
                        {coin.coinType === 'brandedCoin' && 'Applied second - merchant-specific loyalty coins'}
                        {coin.coinType === 'rezCoin' && 'Applied third - universal utility coins, most flexible'}
                        {coin.coinType === 'priveCoin' && 'Applied last (optional) - premium status coins, most powerful'}
                      </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                      {/* Move Up/Down */}
                      <div className="flex flex-col gap-1">
                        <button
                          onClick={() => moveCoin(index, 'up')}
                          disabled={index === 0}
                          className="p-1 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                          title="Move up"
                        >
                          ▲
                        </button>
                        <button
                          onClick={() => moveCoin(index, 'down')}
                          disabled={index === priority.length - 1}
                          className="p-1 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                          title="Move down"
                        >
                          ▼
                        </button>
                      </div>

                      {/* Auto-Apply Toggle */}
                      <label className="flex flex-col items-center gap-1 cursor-pointer">
                        <span className="text-xs text-gray-600">Auto</span>
                        <input
                          type="checkbox"
                          checked={coin.autoApply && coin.enabled}
                          onChange={() => toggleAutoApply(index)}
                          disabled={!coin.enabled}
                          className="w-5 h-5"
                        />
                      </label>

                      {/* Enable/Disable */}
                      <label className="flex flex-col items-center gap-1 cursor-pointer">
                        <span className="text-xs text-gray-600">Enable</span>
                        <input
                          type="checkbox"
                          checked={coin.enabled}
                          onChange={() => toggleCoin(index)}
                          className="w-5 h-5"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Advanced Checkout Settings</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <div>
                <p className="font-medium text-gray-900">Allow Manual Override</p>
                <p className="text-sm text-gray-600">Let users manually change coin application order</p>
              </div>
              <input
                type="checkbox"
                checked={settings.allowManualOverride}
                onChange={(e) => setSettings({ ...settings, allowManualOverride: e.target.checked })}
                className="w-6 h-6"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <div>
                <p className="font-medium text-gray-900">Show Coin Breakdown</p>
                <p className="text-sm text-gray-600">Display detailed breakdown of coins applied at checkout</p>
              </div>
              <input
                type="checkbox"
                checked={settings.showCoinBreakdown}
                onChange={(e) => setSettings({ ...settings, showCoinBreakdown: e.target.checked })}
                className="w-6 h-6"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <div>
                <p className="font-medium text-gray-900">Confirm Before Apply</p>
                <p className="text-sm text-gray-600">Ask user confirmation before auto-applying coins</p>
              </div>
              <input
                type="checkbox"
                checked={settings.confirmBeforeApply}
                onChange={(e) => setSettings({ ...settings, confirmBeforeApply: e.target.checked })}
                className="w-6 h-6"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <div>
                <p className="font-medium text-gray-900">Enable Smart Optimization</p>
                <p className="text-sm text-gray-600">AI-powered coin selection to maximize user savings</p>
              </div>
              <input
                type="checkbox"
                checked={settings.enableSmartOptimization}
                onChange={(e) => setSettings({ ...settings, enableSmartOptimization: e.target.checked })}
                className="w-6 h-6"
              />
            </label>

            <div className="p-4 bg-gray-50 rounded-lg">
              <label className="block">
                <p className="font-medium text-gray-900 mb-2">Max Coins Per Transaction</p>
                <p className="text-sm text-gray-600 mb-3">Maximum number of different coin types that can be used in a single transaction</p>
                <input
                  type="number"
                  min="1"
                  max="4"
                  value={settings.maxCoinsPerTransaction}
                  onChange={(e) => setSettings({ ...settings, maxCoinsPerTransaction: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Example Scenario */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Example Checkout Scenario</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Bill Amount:</strong> ₹1,000</p>
                <p><strong>User's Coins:</strong> 300 Promo (max 30%), 500 Branded, 1000 ReZ, 200 Privé</p>
                <p className="font-medium mt-3">Auto-Apply Sequence:</p>
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Promo Coin: ₹300 applied (30% of ₹1,000) → Remaining: ₹700</li>
                  <li>Branded Coin: ₹500 applied (if at same brand) → Remaining: ₹200</li>
                  <li>ReZ Coin: ₹200 applied → Remaining: ₹0</li>
                  <li>Privé Coin: Not used (user saves for special purchases)</li>
                </ol>
                <p className="font-medium mt-3 text-green-700">✅ Bill fully paid with coins!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Ready to apply changes?</h3>
              <p className="text-sm text-gray-600 mt-1">This priority will be applied to all checkout transactions</p>
            </div>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              <Save className="w-5 h-5" />
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
