import React from 'react';
import { Truck, MapPin } from 'lucide-react';

export default function MerchantDeliveryFleet() {
  const [deliveries] = React.useState([
    { id: 1, driver: 'Rahul', location: 'Sector 5', status: 'en-route' },
    { id: 2, driver: 'Vikram', location: 'Mall Road', status: 'delivered' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Truck size={28} /> Delivery Fleet
      </h1>

      <div className="space-y-3">
        {deliveries.map(delivery => (
          <div key={delivery.id} className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-gray-900">{delivery.driver}</p>
                <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                  <MapPin size={14} /> {delivery.location}
                </p>
              </div>
              <p className={`text-xs font-semibold px-3 py-1 rounded ${delivery.status === 'delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                {delivery.status.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}