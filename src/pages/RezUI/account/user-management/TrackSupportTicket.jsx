import React from 'react';
import { Ticket, CheckCircle, AlertCircle } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function TrackSupportTicket() {
  const ticket = {
    id: 'SUP123456',
    status: 'In Progress',
    subject: 'Refund Issue',
    description: 'My refund is pending',
    createdDate: 'Jan 1, 2025',
    lastUpdate: 'Jan 3, 2025',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Ticket size={28} className="text-teal-600" /> Support Ticket
        </h1>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div className="bg-teal-50 p-4 rounded border-l-4 border-teal-500">
            <p className="text-sm text-gray-600">Ticket ID</p>
            <p className="text-lg font-bold text-teal-600 mt-1">{ticket.id}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-600 mb-1">Status</p>
            <div className="flex items-center gap-2">
              <AlertCircle className="text-amber-500" size={20} />
              <p className="font-semibold text-gray-900">{ticket.status}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-600 mb-1">Subject</p>
            <p className="text-gray-900 font-semibold">{ticket.subject}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-600 mb-1">Description</p>
            <p className="text-gray-700">{ticket.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-gray-600">Created</p>
              <p className="text-sm font-semibold text-gray-900">{ticket.createdDate}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">Last Update</p>
              <p className="text-sm font-semibold text-gray-900">{ticket.lastUpdate}</p>
            </div>
          </div>

          <button className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold">View Details</button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}