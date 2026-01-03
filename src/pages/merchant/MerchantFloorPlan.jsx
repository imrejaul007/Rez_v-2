import React, { useState } from 'react';
import { Layout, Save } from 'lucide-react';

export default function MerchantFloorPlan() {
  const [tables, setTables] = useState([
    { id: 1, seats: 4, x: 20, y: 20, status: 'available' },
    { id: 2, seats: 6, x: 120, y: 20, status: 'occupied' },
    { id: 3, seats: 2, x: 220, y: 20, status: 'available' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Layout size={28} /> Floor Plan
      </h1>

      <div className="bg-white rounded-lg p-4 shadow mb-4">
        <div className="relative w-full h-96 bg-amber-50 border-2 border-amber-200 rounded">
          {tables.map(table => (
            <div
              key={table.id}
              className={`absolute w-16 h-16 rounded-full flex items-center justify-center font-bold cursor-pointer transition ${
                table.status === 'occupied' ? 'bg-red-400 text-white' : 'bg-green-400 text-white'
              }`}
              style={{ left: `${table.x}px`, top: `${table.y}px` }}
            >
              T{table.id}
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-400" />
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-400" />
            <span className="text-sm text-gray-600">Occupied</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-slate-600 to-slate-800 text-white py-2 rounded font-semibold flex items-center justify-center gap-2">
        <Save size={18} /> Save Layout
      </button>
    </div>
  );
}