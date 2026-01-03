import React from 'react';
import { Calendar, TrendingUp, Sun, Snowflake } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantSeasonalTrends = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="lg:ml-64 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-purple-600" />
            Seasonal Trends Analysis
          </h1>
          <p className="text-gray-600">Understand seasonal demand patterns</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Sun className="w-8 h-8 text-yellow-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">Summer</div>
            <div className="text-sm text-gray-600">Peak Season Starting</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">+45%</div>
            <div className="text-sm text-gray-600">Expected Growth</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Snowflake className="w-8 h-8 text-blue-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">90 days</div>
            <div className="text-sm text-gray-600">Until Winter</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trending Products by Season</h2>
          <div className="space-y-3">
            {['Air Conditioners - Summer', 'Heaters - Winter', 'Umbrellas - Monsoon', 'Fans - Summer'].map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                <span className="text-gray-900">{item}</span>
                <span className="text-green-600 font-bold">+{20 + idx * 5}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSeasonalTrends;
