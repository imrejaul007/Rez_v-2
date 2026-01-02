import { useState } from 'react';
import { Warehouse } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantWarehouseManagement() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900">Warehouse Management</h1>
        <p className="text-gray-600 mt-2">Manage warehouse operations and inventory</p>
      </div>
    </div>
  );
}
