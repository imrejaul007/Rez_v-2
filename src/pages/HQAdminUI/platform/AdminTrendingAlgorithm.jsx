import { useState } from 'react';
import { TrendingUp, Settings, Sliders, Target, Award, Clock, BarChart3, Eye, Users, Zap, Brain } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminTrendingAlgorithm() {
  const [algorithmSettings, setAlgorithmSettings] = useState({
    viewsWeight: 30,
    savesWeight: 25,
    redemptionsWeight: 35,
    recencyWeight: 10,
    decayRate: 0.85,
    minViews: 100,
    minRedemptions: 10,
    trendingWindow: 24,
    refreshInterval: 60
  });

  const [trendingOffers] = useState([
    {
      id: 1,
      title: '50% OFF on All Pizzas',
      merchant: 'Pizza Paradise',
      trendingScore: 94.5,
      views: 12456,
      saves: 1234,
      redemptions: 456,
      hoursSincePosted: 8,
      velocity: 'high',
      rank: 1
    },
    {
      id: 2,
      title: 'Buy 1 Get 1 Free Coffee',
      merchant: 'The Coffee House',
      trendingScore: 87.3,
      views: 9876,
      saves: 987,
      redemptions: 378,
      hoursSincePosted: 12,
      velocity: 'medium',
      rank: 2
    }
  ]);

  const handleUpdateSettings = () => {
    console.log('Updating trending algorithm settings:', algorithmSettings);
    alert('Trending algorithm settings updated successfully!');
  };

  const calculateTrendingScore = () => {
    const { viewsWeight, savesWeight, redemptionsWeight, recencyWeight } = algorithmSettings;
    return `Score = (Views × ${viewsWeight}%) + (Saves × ${savesWeight}%) + (Redemptions × ${redemptionsWeight}%) + (Recency × ${recencyWeight}%)`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Trending Algorithm Control</h1>
              <p className="text-purple-100 mt-1">Configure trending weights and algorithm parameters</p>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Sliders className="w-6 h-6 text-purple-600" />
                Algorithm Weight Configuration
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Eye className="w-4 h-4 text-blue-600" />
                      Views Weight
                    </label>
                    <span className="text-2xl font-bold text-purple-600">{algorithmSettings.viewsWeight}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={algorithmSettings.viewsWeight}
                    onChange={(e) => setAlgorithmSettings({ ...algorithmSettings, viewsWeight: parseInt(e.target.value) })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Award className="w-4 h-4 text-pink-600" />
                      Saves Weight
                    </label>
                    <span className="text-2xl font-bold text-purple-600">{algorithmSettings.savesWeight}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={algorithmSettings.savesWeight}
                    onChange={(e) => setAlgorithmSettings({ ...algorithmSettings, savesWeight: parseInt(e.target.value) })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Zap className="w-4 h-4 text-orange-600" />
                      Redemptions Weight
                    </label>
                    <span className="text-2xl font-bold text-purple-600">{algorithmSettings.redemptionsWeight}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={algorithmSettings.redemptionsWeight}
                    onChange={(e) => setAlgorithmSettings({ ...algorithmSettings, redemptionsWeight: parseInt(e.target.value) })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Clock className="w-4 h-4 text-green-600" />
                      Recency Weight
                    </label>
                    <span className="text-2xl font-bold text-purple-600">{algorithmSettings.recencyWeight}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={algorithmSettings.recencyWeight}
                    onChange={(e) => setAlgorithmSettings({ ...algorithmSettings, recencyWeight: parseInt(e.target.value) })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Current Formula:</p>
                  <code className="text-xs text-purple-700 font-mono">{calculateTrendingScore()}</code>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Settings className="w-6 h-6 text-indigo-600" />
                Advanced Parameters
              </h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Decay Rate (0-1)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={algorithmSettings.decayRate}
                    onChange={(e) => setAlgorithmSettings({ ...algorithmSettings, decayRate: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Views Threshold</label>
                  <input
                    type="number"
                    value={algorithmSettings.minViews}
                    onChange={(e) => setAlgorithmSettings({ ...algorithmSettings, minViews: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Redemptions</label>
                  <input
                    type="number"
                    value={algorithmSettings.minRedemptions}
                    onChange={(e) => setAlgorithmSettings({ ...algorithmSettings, minRedemptions: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Trending Window (hours)</label>
                  <input
                    type="number"
                    value={algorithmSettings.trendingWindow}
                    onChange={(e) => setAlgorithmSettings({ ...algorithmSettings, trendingWindow: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <button
                onClick={handleUpdateSettings}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 font-semibold"
              >
                Update Algorithm Settings
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-purple-600" />
                Live Trending Offers
              </h2>

              <div className="space-y-4">
                {trendingOffers.map((offer) => (
                  <div key={offer.id} className="border-l-4 border-purple-600 bg-purple-50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="flex items-center justify-center w-6 h-6 bg-purple-600 text-white rounded-full text-sm font-bold">
                            {offer.rank}
                          </span>
                          <h3 className="font-semibold text-gray-900 text-sm">{offer.title}</h3>
                        </div>
                        <p className="text-xs text-gray-600">{offer.merchant}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-purple-600">{offer.trendingScore}</p>
                        <p className="text-xs text-gray-500">score</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs mt-3">
                      <div>
                        <p className="text-gray-500">Views</p>
                        <p className="font-semibold text-gray-900">{offer.views.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Saves</p>
                        <p className="font-semibold text-gray-900">{offer.saves}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Redeemed</p>
                        <p className="font-semibold text-gray-900">{offer.redemptions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
