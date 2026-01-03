import React, { useState } from 'react';
import { Menu, Plus, Edit2 } from 'lucide-react';

export default function MerchantMenuManagement() {
  const [items, setItems] = useState([
    { id: 1, name: 'Margherita Pizza', price: 299, category: 'Pizza', available: true },
    { id: 2, name: 'Garlic Bread', price: 149, category: 'Sides', available: true },
    { id: 3, name: 'Coke', price: 50, category: 'Drinks', available: false },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Menu size={28} /> Menu Items
      </h1>

      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-lg p-4 shadow flex justify-between items-start">
            <div>
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="text-lg font-bold text-orange-600 mt-1">Rs. {item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className={`px-3 py-1 rounded text-sm font-semibold ${item.available ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                {item.available ? 'Available' : 'Out'}
              </button>
              <button className="text-orange-600 hover:text-orange-800">
                <Edit2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-2">
        <Plus size={18} /> Add Item
      </button>
    </div>
  );
}