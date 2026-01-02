import { useState } from 'react';
import { Package } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantProductBundles() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900">Product Bundles</h1>
        <p className="text-gray-600 mt-2">Create and manage product bundle offers</p>
      </div>
    </div>
  );
}
