import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, User, Phone, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

function Bookings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');

  const tabs = [
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' }
  ];

  const bookings = [
    {
      id: 1,
      type: 'service',
      serviceName: 'Deep Cleaning',
      provider: 'CleanCo Professional',
      providerImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
      professional: 'Rajesh Kumar',
      professionalPhone: '+91 98765 43210',
      date: '2024-01-20',
      time: '10:00 AM - 12:00 PM',
      duration: '2 hours',
      address: 'Flat 402, Green Valley Apartments, Indiranagar',
      status: 'upcoming',
      price: 1499,
      paidAmount: 1199,
      cashbackEarned: 120,
      coinsEarned: 150
    },
    {
      id: 2,
      type: 'service',
      serviceName: 'Full Body Massage',
      provider: 'Serenity Spa',
      providerImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
      professional: 'Priya Sharma',
      professionalPhone: '+91 98765 43211',
      date: '2024-01-22',
      time: '3:00 PM - 4:30 PM',
      duration: '90 mins',
      address: 'Serenity Spa, Koramangala 5th Block',
      status: 'upcoming',
      price: 2999,
      paidAmount: 2499,
      cashbackEarned: 250,
      coinsEarned: 200
    },
    {
      id: 3,
      type: 'service',
      serviceName: 'AC Repair',
      provider: 'HomeServices Pro',
      providerImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400',
      professional: 'Vikram Reddy',
      professionalPhone: '+91 98765 43212',
      date: '2024-01-15',
      time: '11:00 AM - 12:00 PM',
      duration: '1 hour',
      address: 'Flat 402, Green Valley Apartments, Indiranagar',
      status: 'completed',
      price: 899,
      paidAmount: 799,
      cashbackEarned: 80,
      coinsEarned: 100,
      rating: 5
    },
    {
      id: 4,
      type: 'service',
      serviceName: 'Hair Cut & Styling',
      provider: 'Salon Elite',
      providerImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
      professional: 'Amit Verma',
      professionalPhone: '+91 98765 43213',
      date: '2024-01-18',
      time: '5:00 PM',
      duration: '45 mins',
      address: 'Salon Elite, MG Road',
      status: 'cancelled',
      price: 1200,
      refundAmount: 1200,
      cancellationReason: 'Personal emergency'
    }
  ];

  const filteredBookings = bookings.filter(booking => booking.status === activeTab);

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'text-blue-600 dark:text-blue-400 bg-blue-500/20';
      case 'completed':
        return 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/20';
      case 'cancelled':
        return 'text-red-600 dark:text-red-400 bg-red-500/20';
      default:
        return 'text-rez-gray-600 bg-rez-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'upcoming':
        return <AlertCircle className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div>
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">My Bookings</h1>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Track your service bookings</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 pb-3 flex gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-rez-green-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-rez-gray-400 mx-auto mb-4" />
            <p className="text-rez-gray-600 dark:text-gray-400">No {activeTab} bookings</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredBookings.map(booking => (
              <div
                key={booking.id}
                className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700"
              >
                {/* Service Header */}
                <div className="relative h-32">
                  <img
                    src={booking.providerImage}
                    alt={booking.serviceName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-bold text-white mb-1">{booking.serviceName}</h3>
                    <p className="text-xs text-white/80">{booking.provider}</p>
                  </div>

                  {/* Status Badge */}
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-full flex items-center gap-1 ${getStatusColor(booking.status)}`}>
                    {getStatusIcon(booking.status)}
                    <span className="text-xs font-bold capitalize">{booking.status}</span>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <div>
                        <p className="text-xs text-rez-gray-600 dark:text-gray-400">Date</p>
                        <p className="text-sm font-semibold text-rez-navy dark:text-white">
                          {new Date(booking.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-500" />
                      <div>
                        <p className="text-xs text-rez-gray-600 dark:text-gray-400">Time</p>
                        <p className="text-sm font-semibold text-rez-navy dark:text-white">{booking.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* Professional Info */}
                  {booking.professional && (
                    <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-dark-700">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-rez-navy dark:text-white">{booking.professional}</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Phone className="w-3 h-3 text-rez-gray-600 dark:text-gray-400" />
                            <p className="text-xs text-rez-gray-600 dark:text-gray-400">{booking.professionalPhone}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Address */}
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-0.5">Location</p>
                      <p className="text-sm text-rez-navy dark:text-white">{booking.address}</p>
                    </div>
                  </div>

                  {/* Payment Info */}
                  {booking.status !== 'cancelled' && (
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-rez-gray-700 dark:text-gray-300">Amount Paid</span>
                        <span className="text-sm font-bold text-rez-navy dark:text-white">
                          ₹{booking.paidAmount.toLocaleString()}
                        </span>
                      </div>
                      {booking.status === 'completed' && (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="px-2 py-1 rounded-lg bg-emerald-500/20">
                            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                              ₹{booking.cashbackEarned} Cashback
                            </p>
                          </div>
                          <div className="px-2 py-1 rounded-lg bg-amber-500/20">
                            <p className="text-xs font-bold text-amber-600 dark:text-amber-400">
                              +{booking.coinsEarned} Coins
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Cancellation Info */}
                  {booking.status === 'cancelled' && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                      <p className="text-sm text-red-600 dark:text-red-400 mb-1">
                        Refund Amount: ₹{booking.refundAmount.toLocaleString()}
                      </p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                        Reason: {booking.cancellationReason}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    {booking.status === 'upcoming' && (
                      <>
                        <button className="py-2 rounded-xl border-2 border-rez-gray-300 dark:border-dark-600 text-rez-gray-700 dark:text-gray-300 font-medium hover:border-red-500 hover:text-red-500 transition-all active:scale-95">
                          Cancel
                        </button>
                        <button className="py-2 rounded-xl bg-gradient-to-r from-rez-green-500 to-emerald-500 text-white font-bold hover:shadow-lg transition-all active:scale-95">
                          Reschedule
                        </button>
                      </>
                    )}
                    {booking.status === 'completed' && (
                      <>
                        <button className="py-2 rounded-xl border-2 border-rez-gray-300 dark:border-dark-600 text-rez-gray-700 dark:text-gray-300 font-medium hover:border-rez-green-500 hover:text-rez-green-500 transition-all active:scale-95">
                          View Details
                        </button>
                        <button className="py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold hover:shadow-lg transition-all active:scale-95">
                          Book Again
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookings;
