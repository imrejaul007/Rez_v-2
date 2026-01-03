import React from 'react';
import { XCircle, Clock } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function OrderCancellationDetails() {
  const cancellation = {
    orderId: 'ORD123456',
    status: 'Cancelled',
    reason: 'Out of stock',
    refundAmount: 1250,
    refundDate: 'Jan 5, 2025',
    items: ['T-Shirt', 'Jeans'],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <XCircle className="text-red-500" size={28} /> Order Cancelled
        </h1>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
            <p className="text-sm text-gray-600">Order ID</p>
            <p className="text-lg font-bold text-gray-900">{cancellation.orderId}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-600 mb-2">Cancellation Reason</p>
            <p className="text-gray-900">{cancellation.reason}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-xs text-gray-600">Refund Amount</p>
              <p className="text-xl font-bold text-blue-600">Rs. {cancellation.refundAmount}</p>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <p className="text-xs text-gray-600">Refund Date</p>
              <p className="text-sm font-semibold text-green-600">{cancellation.refundDate}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-600 mb-2">Items</p>
            <ul className="space-y-1">
              {cancellation.items.map((item, i) => (
                <li key={i} className="text-gray-700">✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}