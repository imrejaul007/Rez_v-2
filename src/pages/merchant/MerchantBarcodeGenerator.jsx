import React, { useState } from 'react';
import { Barcode, Plus, Download, Printer } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantBarcodeGenerator = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="lg:ml-64 p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Barcode className="w-8 h-8 text-blue-600" />
          Barcode Generator
        </h1>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Product SKU</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter SKU" />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Barcode Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Code 128</option>
                <option>Code 39</option>
                <option>EAN-13</option>
                <option>QR Code</option>
              </select>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <Barcode className="w-24 h-24 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Barcode will appear here</p>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                Generate
              </button>
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download
              </button>
              <button className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2">
                <Printer className="w-5 h-5" />
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantBarcodeGenerator;
