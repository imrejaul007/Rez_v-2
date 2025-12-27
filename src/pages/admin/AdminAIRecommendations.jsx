import { useState } from 'react';
import { Brain, Zap, Target, Settings, TrendingUp } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminAIRecommendations() {
  const [settings, setSettings] = useState({
    personalizationLevel: 75,
    diversityScore: 60,
    recencyBias: 40,
    popularityWeight: 50
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Brain className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">AI Recommendation Engine</h1>
              <p className="text-indigo-100 mt-1">Configure personalization and recommendation algorithms</p>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">AI Model Settings</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Personalization Level</label>
                  <span className="text-lg font-bold text-indigo-600">{settings.personalizationLevel}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.personalizationLevel}
                  onChange={(e) => setSettings({ ...settings, personalizationLevel: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Content Diversity</label>
                  <span className="text-lg font-bold text-indigo-600">{settings.diversityScore}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.diversityScore}
                  onChange={(e) => setSettings({ ...settings, diversityScore: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Recency Bias</label>
                  <span className="text-lg font-bold text-indigo-600">{settings.recencyBias}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.recencyBias}
                  onChange={(e) => setSettings({ ...settings, recencyBias: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Popularity Weight</label>
                  <span className="text-lg font-bold text-indigo-600">{settings.popularityWeight}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.popularityWeight}
                  onChange={(e) => setSettings({ ...settings, popularityWeight: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>

              <button className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold">
                Update AI Settings
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recommendation Stats</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <Target className="w-8 h-8 text-blue-600 mb-2" />
                <p className="text-sm text-gray-600">Accuracy</p>
                <p className="text-2xl font-bold text-gray-900">87.3%</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <Zap className="w-8 h-8 text-green-600 mb-2" />
                <p className="text-sm text-gray-600">CTR</p>
                <p className="text-2xl font-bold text-gray-900">12.8%</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <Brain className="w-8 h-8 text-purple-600 mb-2" />
                <p className="text-sm text-gray-600">Models Trained</p>
                <p className="text-2xl font-bold text-gray-900">45</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">24.5%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
