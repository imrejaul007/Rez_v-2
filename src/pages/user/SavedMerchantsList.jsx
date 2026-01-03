import React, { useState } from 'react';
import { MapPin, Star, Bell } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function SavedMerchantsList() {
  const merchants = [
    { id: 1, name: 'Pizza Palace', rating: 4.5, distance: '2 km', category: 'Food' },
    { id: 2, name: 'Tech Hub', rating: 4.8, distance: '5 km', category: 'Electronics' },
    { id: 3, name: 'Fresh Mart', rating: 4.2, distance: '1.5 km', category: 'Grocery' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Saved Merchants</h1>

        <div className="space-y-3">
          {merchants.map(merchant => (
            <div key={merchant.id} className="bg-white rounded-lg p-4 shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-gray-900">{merchant.name}</p>
                  <p className="text-xs text-gray-500">{merchant.category}</p>
                </div>
                <Bell size={18} className="text-orange-500" />
              </div>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1">
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <span className="text-sm font-semibold text-gray-700">{merchant.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin size={16} />
                  <span className="text-sm">{merchant.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}