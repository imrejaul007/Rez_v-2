import React from 'react';
import { Building2, MapPin } from 'lucide-react';

export default function MerchantMultiStore() {
  const [stores] = React.useState([
    { id: 1, name: 'Main Branch', location: 'Downtown', status: 'active' },
    { id: 2, name: 'North Branch', location: 'Mall Area', status: 'active' },
    { id: 3, name: 'South Branch', location: 'Market St', status: 'inactive' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Building2 size={28} /> Multi Store Management
      </h1>

      <div className="space-y-3">
        {stores.map(store => (
          <div key={store.id} className="bg-white rounded-lg p-4 shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-900">{store.name}</p>
                <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                  <MapPin size={14} /> {store.location}
                </p>
              </div>
              <p className={`text-xs font-semibold px-3 py-1 rounded ${store.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                {store.status.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}