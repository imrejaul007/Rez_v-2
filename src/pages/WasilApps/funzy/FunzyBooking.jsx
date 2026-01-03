import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, CreditCard, Check } from 'lucide-react';

// Funzy Booking: Complete Event Booking
// Backend API: POST /api/wasil/funzy/bookings
// Backend API: POST /api/wasil/funzy/payments

const FunzyBooking = () => {
  const [paymentMethod, setPaymentMethod] = useState('wallet');

  const booking = {
    event: 'Avengers: Secret Wars',
    venue: 'INOX Multiplex, HSR Layout',
    date: 'Jan 16, 2026',
    time: '6:00 PM',
    seats: ['F10', 'F11', 'F12'],
    price: 250,
    quantity: 3
  };

  const total = booking.price * booking.quantity;
  const convenience = 45;
  const finalTotal = total + convenience;

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="bg-white border-b px-4 py-4">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-bold text-gray-800">Booking Summary</h1>
        </div>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Event Details</h2>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
          <h3 className="font-bold text-gray-800">{booking.event}</h3>
          <div className="space-y-2 mt-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{booking.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{booking.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{booking.time}</span>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-200">
              <p className="text-sm text-gray-600">Seats: <span className="font-medium">{booking.seats.join(', ')}</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Payment Method</h2>
        <div className="space-y-2">
          {[
            { id: 'wallet', name: 'ReZ Wallet', balance: '₹2,450', icon: '💳' },
            { id: 'upi', name: 'UPI', icon: '📱' },
            { id: 'card', name: 'Credit/Debit Card', icon: '💳' }
          ].map((method) => (
            <button
              key={method.id}
              onClick={() => setPaymentMethod(method.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border ${
                paymentMethod === method.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{method.icon}</span>
                <div className="text-left">
                  <p className="font-medium text-gray-800">{method.name}</p>
                  {method.balance && <p className="text-xs text-gray-500">{method.balance}</p>}
                </div>
              </div>
              {paymentMethod === method.id && <Check className="w-5 h-5 text-purple-600" />}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Bill Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-700">
            <span>Tickets ({booking.quantity})</span>
            <span>₹{total}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Convenience Fee</span>
            <span>₹{convenience}</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{finalTotal}</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-purple-500 text-white py-3 rounded-xl font-bold">
          Pay ₹{finalTotal}
        </button>
      </div>
    </div>
  );
};

export default FunzyBooking;
