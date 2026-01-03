import React from 'react';
import { Users, MessageSquare } from 'lucide-react';

export default function MerchantWaiterApp() {
  const [tables] = React.useState([
    { id: 1, waiter: 'Arjun', guests: 4, status: 'serving' },
    { id: 2, waiter: 'Deepak', guests: 2, status: 'waiting' },
    { id: 3, waiter: 'Arjun', guests: 6, status: 'checkout' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Users size={28} /> Waiter Management
      </h1>

      <div className="space-y-3">
        {tables.map(table => (
          <div key={table.id} className="bg-white rounded-lg p-4 shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-900">Table {table.id}</p>
                <p className="text-sm text-gray-600">Waiter: {table.waiter}</p>
                <p className="text-sm text-gray-600">{table.guests} guests</p>
              </div>
              <button className="text-purple-600 hover:text-purple-800">
                <MessageSquare size={20} />
              </button>
            </div>
            <p className={`text-xs font-semibold mt-2 ${table.status === 'serving' ? 'text-green-600' : 'text-amber-600'}`}>
              {table.status.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}