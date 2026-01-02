import { useState } from 'react';
import { DollarSign, TrendingUp, RefreshCw, Edit } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminCurrencyExchange() {
  const [rates] = useState([
    { currency: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 1.00, lastUpdated: '2024-01-20 15:30', trend: 'stable' },
    { currency: 'USD', symbol: '$', name: 'US Dollar', rate: 0.012, lastUpdated: '2024-01-20 15:30', trend: 'up' },
    { currency: 'EUR', symbol: '€', name: 'Euro', rate: 0.011, lastUpdated: '2024-01-20 15:30', trend: 'down' },
    { currency: 'GBP', symbol: '£', name: 'British Pound', rate: 0.0095, lastUpdated: '2024-01-20 15:30', trend: 'stable' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Currency Exchange Rates</h1>
              <p className="text-gray-600">Manage exchange rates for multi-currency support</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">
              <RefreshCw className="w-5 h-5" />
              Sync Rates
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <DollarSign className="w-8 h-8 text-purple-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">{rates.length}</p>
            <p className="text-sm text-gray-600">Supported Currencies</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-gray-900">INR</p>
            <p className="text-sm text-gray-600">Base Currency</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-gray-900">15:30</p>
            <p className="text-sm text-gray-600">Last Updated</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-green-600">Live</p>
            <p className="text-sm text-gray-600">Status</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Currency</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Symbol</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Exchange Rate (1 INR =)</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Trend</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Last Updated</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {rates.map((rate, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">{rate.currency}</p>
                      <p className="text-sm text-gray-600">{rate.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-2xl font-bold text-gray-900">{rate.symbol}</td>
                  <td className="px-6 py-4">
                    <p className="text-lg font-bold text-gray-900">{rate.rate}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {rate.trend === 'up' && <TrendingUp className="w-5 h-5 text-green-600" />}
                      {rate.trend === 'down' && <TrendingUp className="w-5 h-5 text-red-600 rotate-180" />}
                      {rate.trend === 'stable' && <span className="text-gray-500">—</span>}
                      <span className={`text-sm font-semibold ${rate.trend === 'up' ? 'text-green-600' : rate.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
                        {rate.trend}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-sm">{rate.lastUpdated}</td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-gray-100 rounded"><Edit className="w-5 h-5 text-gray-600" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
