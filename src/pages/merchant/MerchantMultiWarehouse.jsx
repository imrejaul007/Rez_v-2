import React, { useState } from 'react';
import { Warehouse, Package, TruckIcon, MapPin, Plus, Edit, BarChart3 } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantMultiWarehouse = () => {
  const warehouses = [
    { id: 1, name: 'Main Warehouse - Mumbai', location: 'Andheri East', capacity: 10000, occupied: 7500, products: 1234, staff: 15, status: 'active' },
    { id: 2, name: 'Distribution Center - Delhi', location: 'Rohini', capacity: 8000, occupied: 5200, products: 890, staff: 12, status: 'active' },
    { id: 3, name: 'Regional Hub - Bangalore', location: 'Whitefield', capacity: 6000, occupied: 3800, products: 567, staff: 8, status: 'active' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="lg:ml-64 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Warehouse className="w-8 h-8 text-blue-600" />
            Multi-Warehouse Management
          </h1>
          <p className="text-gray-600">Manage inventory across multiple locations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Warehouse className="w-8 h-8 text-blue-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">{warehouses.length}</div>
            <div className="text-sm text-gray-600">Total Warehouses</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Package className="w-8 h-8 text-green-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">2,691</div>
            <div className="text-sm text-gray-600">Total Products</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <TruckIcon className="w-8 h-8 text-orange-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">45</div>
            <div className="text-sm text-gray-600">Transfers in Transit</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <BarChart3 className="w-8 h-8 text-purple-500 mb-2" />
            <div className="text-3xl font-bold text-gray-900">68.5%</div>
            <div className="text-sm text-gray-600">Avg Capacity Used</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Warehouse Locations</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add Warehouse
            </button>
          </div>

          <div className="space-y-4">
            {warehouses.map((warehouse) => (
              <div key={warehouse.id} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{warehouse.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{warehouse.location}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Capacity</p>
                        <p className="text-lg font-bold text-gray-900">{warehouse.capacity.toLocaleString()} sqft</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Occupied</p>
                        <p className="text-lg font-bold text-blue-600">{warehouse.occupied.toLocaleString()} sqft</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Products</p>
                        <p className="text-lg font-bold text-green-600">{warehouse.products}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Staff</p>
                        <p className="text-lg font-bold text-purple-600">{warehouse.staff}</p>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Space Utilization</span>
                        <span className="text-gray-900 font-bold">{((warehouse.occupied / warehouse.capacity) * 100).toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          style={{ width: `${(warehouse.occupied / warehouse.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                      <Edit className="w-4 h-4 inline mr-2" />
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantMultiWarehouse;
