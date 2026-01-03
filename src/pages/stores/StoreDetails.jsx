import React from 'react';
import { MapPin, Clock, Phone, Star, Navigation } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function StoreDetails() {
  const store = {
    name: 'Pizza Palace',
    rating: 4.5,
    reviews: 234,
    address: '123 Main Street, Downtown',
    phone: '+91 98765 43210',
    hours: '10 AM - 11 PM',
    distance: '2 km',
    isOpen: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 pb-20">
      <div className="p-4">
        <div className="w-full h-48 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-4">
          <p className="text-white text-2xl font-bold">{store.name}</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < Math.floor(store.rating) ? '#f59e0b' : '#e5e7eb'} color={i < Math.floor(store.rating) ? '#f59e0b' : '#d1d5db'} />
              ))}
            </div>
            <p className="text-sm text-gray-600">{store.reviews} reviews</p>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-red-600" size={20} />
            <p className="text-gray-900">{store.address}</p>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="text-blue-600" size={20} />
            <div>
              <p className="text-gray-900">{store.hours}</p>
              <p className={`text-sm font-semibold ${store.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                {store.isOpen ? 'Open Now' : 'Closed'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-green-600" size={20} />
            <p className="text-gray-900">{store.phone}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
              <Navigation size={18} /> Directions
            </button>
            <button className="border-2 border-orange-500 text-orange-600 py-2 rounded-lg font-semibold">
              Call Store
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}