import { useState } from 'react';
import { ArrowRightLeft, Store, Package, CheckCircle } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantInventoryTransfer() {
  const [transfers] = useState([
    { id: '1', from: 'Main Branch', to: 'Mall Branch', items: 25, qty: 150, date: '2024-01-20', status: 'pending' },
    { id: '2', from: 'Warehouse', to: 'Main Branch', items: 45, qty: 280, date: '2024-01-19', status: 'completed' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventory Transfer</h1>
              <p className="text-gray-600">Transfer stock between locations</p>
            </div>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">New Transfer</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Transfer ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">From</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">To</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Items</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Quantity</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {transfers.map(transfer => (
                <tr key={transfer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono text-sm">{transfer.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Store className="w-4 h-4 text-gray-600" />
                      {transfer.from}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Store className="w-4 h-4 text-gray-600" />
                      {transfer.to}
                    </div>
                  </td>
                  <td className="px-6 py-4">{transfer.items}</td>
                  <td className="px-6 py-4">{transfer.qty}</td>
                  <td className="px-6 py-4">{transfer.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${transfer.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {transfer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
