import { useState } from 'react';
import { Download, Eye } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CorporateInvoices = () => {
  const [invoices] = useState([
    { id: 'INV-001', date: '2025-01-02', amount: 125000, status: 'paid' },
    { id: 'INV-002', date: '2024-12-02', amount: 98500, status: 'paid' },
    { id: 'INV-003', date: '2024-11-02', amount: 156200, status: 'paid' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Invoices</h1>
        <p className="text-gray-600 dark:text-gray-400">{invoices.length} invoices</p>
      </div>

      <div className="px-4 py-6 space-y-2">
        {invoices.map((inv) => (
          <div key={inv.id} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4 flex items-center justify-between">
            <div>
              <p className="font-bold text-rez-navy dark:text-white">{inv.id}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{inv.date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-rez-navy dark:text-white">₹{inv.amount}</p>
              <p className="text-xs text-green-600 dark:text-green-400">{inv.status}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded"><Eye className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded"><Download className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CorporateInvoices;
