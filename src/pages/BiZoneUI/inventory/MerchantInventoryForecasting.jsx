import React, { useState } from 'react';
import { TrendingUp, Package, AlertTriangle, Calendar, Brain } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantInventoryForecasting = () => {
  const forecasts = [
    { product: 'iPhone 15 Pro', current: 45, predicted: 12, demand: 'high', daysLeft: 5, reorderSuggestion: 50 },
    { product: 'Samsung Galaxy S24', current: 78, predicted: 65, demand: 'medium', daysLeft: 15, reorderSuggestion: 30 },
    { product: 'AirPods Pro', current: 23, predicted: 8, demand: 'high', daysLeft: 7, reorderSuggestion: 60 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="lg:ml-64 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-600" />
            AI Inventory Forecasting
          </h1>
          <p className="text-gray-600">Predictive analytics for stock management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">94.3%</div>
            <div className="text-sm text-gray-600">Forecast Accuracy</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <AlertTriangle className="w-8 h-8 text-red-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">8</div>
            <div className="text-sm text-gray-600">Stockout Risk</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Package className="w-8 h-8 text-blue-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">23</div>
            <div className="text-sm text-gray-600">Reorder Suggestions</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Calendar className="w-8 h-8 text-orange-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Days Stock Left (Avg)</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Inventory Forecasts</h2>
          <div className="space-y-4">
            {forecasts.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.product}</h3>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Current Stock</p>
                        <p className="text-xl font-bold text-gray-900">{item.current}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Predicted (30d)</p>
                        <p className="text-xl font-bold text-blue-600">{item.predicted}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Days Left</p>
                        <p className={`text-xl font-bold ${item.daysLeft < 7 ? 'text-red-600' : 'text-green-600'}`}>
                          {item.daysLeft}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Reorder Qty</p>
                        <p className="text-xl font-bold text-purple-600">{item.reorderSuggestion}</p>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Create PO
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantInventoryForecasting;
