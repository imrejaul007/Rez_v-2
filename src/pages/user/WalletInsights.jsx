import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function WalletInsights() {
  const insights = [
    { label: 'Total Earned', value: '15,000', icon: 'up' },
    { label: 'Total Spent', value: '8,500', icon: 'down' },
    { label: 'Average per Transaction', value: '425', icon: 'avg' },
    { label: 'Highest Earning Day', value: '2,500', icon: 'peak' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <BarChart3 size={28} /> Wallet Insights
        </h1>
        <p className="text-gray-600 mb-6">Your coin statistics and trends</p>

        <div className="grid grid-cols-2 gap-3">
          {insights.map((insight, i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow">
              <p className="text-xs text-gray-600 mb-2">{insight.label}</p>
              <p className="text-xl font-bold text-blue-600">{insight.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white rounded-lg p-4 shadow">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp size={20} /> Monthly Trend
          </h3>
          <div className="space-y-2">
            {['Jan', 'Feb', 'Mar'].map(month => (
              <div key={month} className="flex items-center gap-3">
                <span className="w-10 text-sm font-semibold text-gray-600">{month}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}