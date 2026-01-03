import { useState } from 'react';
import { TrendingUp, BarChart3, Filter, Download } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantMenuEngineering() {
  const [metrics] = useState([]);
  const [timeRange, setTimeRange] = useState('month');

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Menu Engineering</h1>
              <p className="text-indigo-100">Optimize menu profitability and performance</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Menu Analysis</h2>
            <div className="flex gap-3">
              <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg">
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="quarter">Last Quarter</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-5 h-5" />
                Export
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-600">Total Items</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <div className="text-sm text-green-600">High Profit</div>
              <div className="text-2xl font-bold text-green-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-yellow-200 p-4">
              <div className="text-sm text-yellow-600">Average Profit</div>
              <div className="text-2xl font-bold text-yellow-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-red-200 p-4">
              <div className="text-sm text-red-600">Low Profit</div>
              <div className="text-2xl font-bold text-red-900 mt-1">0</div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-center py-12">
              <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 mb-2">No menu data available yet</p>
              <p className="text-sm text-gray-400">Add products to see menu engineering insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
