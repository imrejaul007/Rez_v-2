import React, { useState } from 'react';
import { Ticket, ShoppingCart } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function EventTickets() {
  const [quantity, setQuantity] = useState(1);
  const [ticketType, setTicketType] = useState('standard');

  const tickets = [
    { id: 'standard', name: 'Standard', price: 499, available: 150 },
    { id: 'vip', name: 'VIP', price: 999, available: 50 },
    { id: 'premium', name: 'Premium', price: 1999, available: 10 },
  ];

  const selected = tickets.find(t => t.id === ticketType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Ticket size={28} /> Event Tickets
        </h1>

        <div className="space-y-3">
          {tickets.map(ticket => (
            <button
              key={ticket.id}
              onClick={() => setTicketType(ticket.id)}
              className={`w-full p-4 rounded-lg border-2 transition ${
                ticketType === ticket.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 bg-white'
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className="font-bold text-lg text-gray-900">{ticket.name}</p>
                  <p className="text-sm text-gray-600">{ticket.available} seats available</p>
                </div>
                <p className="text-2xl font-bold text-indigo-600">Rs. {ticket.price}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 bg-white rounded-lg p-4 shadow">
          <p className="text-sm text-gray-600 mb-2">Quantity</p>
          <div className="flex items-center gap-4">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 bg-gray-200 rounded font-bold">-</button>
            <p className="text-2xl font-bold text-gray-900 min-w-[40px] text-center">{quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 bg-gray-200 rounded font-bold">+</button>
          </div>
        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
          <ShoppingCart size={20} /> Buy Tickets
        </button>
      </div>
      <BottomNav />
    </div>
  );
}