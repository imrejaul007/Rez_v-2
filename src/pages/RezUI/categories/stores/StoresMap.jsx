import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function StoresMap() {
  const [stores] = useState([
    { id: 1, name: 'Pizza Palace', lat: 28.7041, lng: 77.1025, distance: '2 km' },
    { id: 2, name: 'Tech Hub', lat: 28.6139, lng: 77.2090, distance: '5 km' },
    { id: 3, name: 'Fresh Mart', lat: 28.5244, lng: 77.1855, distance: '1.5 km' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <MapPin size={28} /> Stores Map
        </h1>
        <p className="text-gray-600 mb-4">Find stores near you</p>

        <div className="bg-white rounded-lg p-4 shadow mb-4">
          <div className="w-full h-64 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Navigation className="text-white mx-auto mb-2" size={32} />
              <p className="text-white text-sm font-semibold">Interactive Map</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {stores.map(store => (
            <div key={store.id} className="bg-white rounded-lg p-4 shadow">
              <p className="font-semibold text-gray-900">{store.name}</p>
              <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                <MapPin size={14} /> {store.distance} away
              </p>
              <button className="w-full mt-3 bg-blue-500 text-white py-1 rounded text-sm font-semibold hover:bg-blue-600">
                Directions
              </button>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}