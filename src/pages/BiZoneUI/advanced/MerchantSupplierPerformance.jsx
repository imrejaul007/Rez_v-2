import React from 'react';
import { TruckIcon, Star, TrendingUp, Clock, DollarSign } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantSupplierPerformance = () => {
  const suppliers = [
    { id: 1, name: 'TechSupply Co', rating: 4.8, onTime: 95, quality: 92, orders: 156, avgDelivery: 3.2 },
    { id: 2, name: 'FastParts Ltd', rating: 4.5, onTime: 88, quality: 90, orders: 203, avgDelivery: 4.5 },
    { id: 3, name: 'ElectroHub Inc', rating: 4.2, onTime: 82, quality: 85, orders: 89, avgDelivery: 5.8 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="lg:ml-64 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <TruckIcon className="w-8 h-8 text-orange-600" />
            Supplier Performance
          </h1>
          <p className="text-gray-600">Track and analyze supplier metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <TruckIcon className="w-8 h-8 text-blue-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">{suppliers.length}</div>
            <div className="text-sm text-gray-600">Active Suppliers</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Star className="w-8 h-8 text-yellow-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">4.5</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Clock className="w-8 h-8 text-green-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">88.3%</div>
            <div className="text-sm text-gray-600">On-Time Delivery</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <DollarSign className="w-8 h-8 text-purple-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">448</div>
            <div className="text-sm text-gray-600">Total Orders</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Supplier Scorecard</h2>
          <div className="space-y-4">
            {suppliers.map((supplier) => (
              <div key={supplier.id} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{supplier.name}</h3>
                    <div className="grid grid-cols-5 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Rating</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <p className="text-lg font-bold text-gray-900">{supplier.rating}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">On-Time %</p>
                        <p className="text-lg font-bold text-green-600">{supplier.onTime}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Quality Score</p>
                        <p className="text-lg font-bold text-blue-600">{supplier.quality}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Orders</p>
                        <p className="text-lg font-bold text-gray-900">{supplier.orders}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Avg Delivery</p>
                        <p className="text-lg font-bold text-orange-600">{supplier.avgDelivery}d</p>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    View Details
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

export default MerchantSupplierPerformance;
