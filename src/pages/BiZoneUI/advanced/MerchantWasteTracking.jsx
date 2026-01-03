import React from 'react';
import { Trash2, TrendingDown, DollarSign, Leaf } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantWasteTracking = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="lg:ml-64 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Trash2 className="w-8 h-8 text-green-600" />
            Waste Tracking & Reduction
          </h1>
          <p className="text-gray-600">Monitor and minimize inventory waste</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Trash2 className="w-8 h-8 text-red-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">₹12.3K</div>
            <div className="text-sm text-gray-600">Waste This Month</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <TrendingDown className="w-8 h-8 text-green-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">-18.5%</div>
            <div className="text-sm text-gray-600">Reduction vs Last Month</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <DollarSign className="w-8 h-8 text-orange-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">₹45.6K</div>
            <div className="text-sm text-gray-600">Cost Savings (YTD)</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Leaf className="w-8 h-8 text-green-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">2.3%</div>
            <div className="text-sm text-gray-600">Waste Percentage</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Waste Categories</h2>
          <div className="space-y-4">
            {['Expired Products', 'Damaged Goods', 'Overstock', 'Returns'].map((category, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-900 font-medium">{category}</span>
                <span className="text-gray-600">₹{(Math.random() * 5000).toFixed(0)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantWasteTracking;
