import React, { useState } from 'react';
import {
  ArrowLeft, Calendar, Clock, MapPin, User, CreditCard,
  Tag, Gift, Check, ChevronRight, AlertCircle
} from 'lucide-react';

// FitEarn Booking: Complete Class/Gym Booking
// Backend API: POST /api/wasil/fitearn/bookings
// Backend API: GET /api/wasil/fitearn/payment-methods
// Backend API: POST /api/wasil/fitearn/apply-coupon

const FitEarnBooking = () => {
  const [paymentMethod, setPaymentMethod] = useState('wallet');
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const booking = {
    type: 'class',
    name: 'Zumba Dance Fitness',
    instructor: 'Sarah Khan',
    gym: 'Cult.fit Studio',
    date: 'Tomorrow, Jan 16',
    time: '6:00 PM',
    duration: '60 min',
    location: 'HSR Layout, Bengaluru',
    price: 299,
    coins: 30
  };

  const paymentMethods = [
    { id: 'wallet', name: 'ReZ Wallet', balance: 2450, icon: '💳' },
    { id: 'upi', name: 'UPI', icon: '📱' },
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'coins', name: 'Redeem Coins', available: 2340, icon: '🪙' }
  ];

  const suggestedCoupons = [
    { code: 'FIRST50', discount: 50, description: 'First booking discount' },
    { code: 'FIT100', discount: 100, description: '₹100 off on fitness classes' }
  ];

  const calculateTotal = () => {
    let total = booking.price;
    if (appliedCoupon) {
      total -= appliedCoupon.discount;
    }
    return total;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">Booking Summary</h1>
        </div>
      </div>

      {/* Booking Details */}
      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Class Details</h2>
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4">
          <h3 className="font-bold text-gray-800">{booking.name}</h3>
          <p className="text-sm text-gray-600">with {booking.instructor}</p>

          <div className="space-y-2 mt-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{booking.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{booking.time} ({booking.duration})</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{booking.gym}, {booking.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Contact Information</h2>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-3 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
              defaultValue="Rahul Sharma"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full mt-1 px-4 py-3 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
              defaultValue="+91 98765 43210"
            />
          </div>
        </div>
      </div>

      {/* Apply Coupon */}
      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Apply Coupon</h2>

        {!appliedCoupon ? (
          <>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                className="flex-1 px-4 py-3 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium">
                Apply
              </button>
            </div>

            <div className="mt-3 space-y-2">
              {suggestedCoupons.map((coupon) => (
                <button
                  key={coupon.code}
                  onClick={() => {
                    setCouponCode(coupon.code);
                    setAppliedCoupon(coupon);
                  }}
                  className="w-full flex items-center justify-between p-3 border border-dashed border-orange-300 rounded-lg hover:bg-orange-50"
                >
                  <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-orange-600" />
                    <div className="text-left">
                      <p className="font-medium text-gray-800">{coupon.code}</p>
                      <p className="text-xs text-gray-500">{coupon.description}</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-bold">-₹{coupon.discount}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">{appliedCoupon.code} Applied!</p>
                <p className="text-sm text-green-600">You saved ₹{appliedCoupon.discount}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setAppliedCoupon(null);
                setCouponCode('');
              }}
              className="text-sm text-red-600"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      {/* Payment Method */}
      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Payment Method</h2>
        <div className="space-y-2">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setPaymentMethod(method.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border ${
                paymentMethod === method.id
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{method.icon}</span>
                <div className="text-left">
                  <p className="font-medium text-gray-800">{method.name}</p>
                  {method.balance && (
                    <p className="text-xs text-gray-500">Balance: ₹{method.balance}</p>
                  )}
                  {method.available && (
                    <p className="text-xs text-gray-500">{method.available} coins available</p>
                  )}
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 ${
                paymentMethod === method.id
                  ? 'border-orange-500 bg-orange-500'
                  : 'border-gray-300'
              } flex items-center justify-center`}>
                {paymentMethod === method.id && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bill Summary */}
      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Bill Summary</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-gray-700">
            <span>Class Fee</span>
            <span>₹{booking.price}</span>
          </div>
          {appliedCoupon && (
            <div className="flex items-center justify-between text-green-600">
              <span>Coupon Discount</span>
              <span>-₹{appliedCoupon.discount}</span>
            </div>
          )}
          <div className="border-t border-gray-200 pt-2 flex items-center justify-between font-bold text-gray-800 text-lg">
            <span>Total Amount</span>
            <span>₹{calculateTotal()}</span>
          </div>
        </div>

        <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start gap-2">
          <Gift className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-yellow-800 font-medium">Earn {booking.coins}🪙 coins</p>
            <p className="text-xs text-yellow-700">Attend this class to earn reward coins!</p>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="px-4 py-4">
        <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="flex-1">
            <p className="text-xs text-blue-800">
              Free cancellation up to 2 hours before class. No-show or late cancellation will not be refunded.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Total Amount</p>
            <p className="text-xl font-bold text-gray-800">₹{calculateTotal()}</p>
          </div>
          <button className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-bold">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default FitEarnBooking;
