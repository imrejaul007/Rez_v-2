import React from 'react';
import { Eye, Clock } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function RecentlyViewedItems() {
  const viewedItems = [
    { id: 1, name: 'Nike Shoes', price: 5999, time: '2 hours ago' },
    { id: 2, name: 'Blue Jeans', price: 1499, time: '5 hours ago' },
    { id: 3, name: 'Watch', price: 2499, time: '1 day ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Eye size={28} className="text-blue-600" /> Recently Viewed
        </h1>

        <div className="space-y-3">
          {viewedItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg p-4 flex justify-between items-center shadow">
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                  <Clock size={14} /> {item.time}
                </p>
              </div>
              <p className="text-lg font-bold text-blue-600">Rs. {item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}