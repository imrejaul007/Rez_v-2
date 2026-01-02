import React from 'react';
import { Printer, Tag, Package, FileText } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantLabelPrinting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="lg:ml-64 p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Printer className="w-8 h-8 text-indigo-600" />
          Label Printing
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Tag, title: 'Price Labels', desc: 'Print price tags for products' },
            { icon: Package, title: 'Shipping Labels', desc: 'Generate shipping labels' },
            { icon: FileText, title: 'Product Labels', desc: 'Custom product labels' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-indigo-300 transition-all cursor-pointer">
              <item.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                Print Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchantLabelPrinting;
