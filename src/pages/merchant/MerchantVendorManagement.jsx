import React from 'react';
import { Users, Star, Phone, Mail } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantVendorManagement = () => {
  const vendors = [
    { id: 1, name: 'ABC Suppliers', contact: 'John Doe', phone: '+91 98765 43210', email: 'john@abc.com', rating: 4.5, orders: 156 },
    { id: 2, name: 'XYZ Trading', contact: 'Jane Smith', phone: '+91 98765 43211', email: 'jane@xyz.com', rating: 4.2, orders: 89 },
    { id: 3, name: 'QuickParts Inc', contact: 'Bob Wilson', phone: '+91 98765 43212', email: 'bob@quick.com', rating: 4.8, orders: 234 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="lg:ml-64 p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Users className="w-8 h-8 text-purple-600" />
          Vendor Management
        </h1>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="space-y-4">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{vendor.name}</h3>
                    <p className="text-gray-600">{vendor.contact}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-gray-900">{vendor.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {vendor.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {vendor.email}
                  </div>
                  <span>{vendor.orders} orders</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantVendorManagement;
