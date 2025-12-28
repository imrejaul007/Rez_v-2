import { useState } from 'react';
import { Search, Plus, Calendar, Clock, Users, DollarSign, TrendingUp, CheckCircle, XCircle, AlertCircle, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantBookingCalendar() {
  const [activeTab, setActiveTab] = useState('calendar');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('day'); // day, week, month

  // Bookable Resources
  const resources = [
    { id: 'room-001', name: 'Deluxe Room 101', type: 'hotel_room', capacity: 2, price: 3500, status: 'available' },
    { id: 'room-002', name: 'Suite 201', type: 'hotel_room', capacity: 4, price: 7500, status: 'available' },
    { id: 'vehicle-001', name: 'Toyota Innova (KA-01-AB-1234)', type: 'vehicle', capacity: 7, price: 2500, status: 'available' },
    { id: 'vehicle-002', name: 'Honda City (KA-02-CD-5678)', type: 'vehicle', capacity: 4, price: 1800, status: 'available' },
    { id: 'table-001', name: 'Table 5 (Window Seat)', type: 'restaurant_table', capacity: 4, price: 0, status: 'available' },
    { id: 'hall-001', name: 'Conference Hall A', type: 'event_space', capacity: 100, price: 15000, status: 'available' }
  ];

  // Bookings for Today
  const bookings = [
    {
      id: 'book-001',
      resourceId: 'room-001',
      resourceName: 'Deluxe Room 101',
      customerName: 'Rahul Sharma',
      phone: '+91 98765 43210',
      checkIn: '2025-12-28 14:00',
      checkOut: '2025-12-30 11:00',
      guests: 2,
      amount: 7000,
      status: 'confirmed',
      paymentStatus: 'paid',
      source: 'Website',
      specialRequests: 'Extra pillows'
    },
    {
      id: 'book-002',
      resourceId: 'room-002',
      resourceName: 'Suite 201',
      customerName: 'Priya Patel',
      phone: '+91 97654 32109',
      checkIn: '2025-12-28 15:00',
      checkOut: '2025-12-29 11:00',
      guests: 3,
      amount: 7500,
      status: 'confirmed',
      paymentStatus: 'pending',
      source: 'MakeMyTrip',
      specialRequests: 'Late checkout requested'
    },
    {
      id: 'book-003',
      resourceId: 'vehicle-001',
      resourceName: 'Toyota Innova',
      customerName: 'Vikram Singh',
      phone: '+91 96543 21098',
      checkIn: '2025-12-28 09:00',
      checkOut: '2025-12-28 18:00',
      guests: 5,
      amount: 2500,
      status: 'in_progress',
      paymentStatus: 'paid',
      source: 'Phone',
      pickup: 'Airport',
      drop: 'City Center'
    },
    {
      id: 'book-004',
      resourceId: 'table-001',
      resourceName: 'Table 5 (Window)',
      customerName: 'Anjali Desai',
      phone: '+91 95432 10987',
      checkIn: '2025-12-28 19:30',
      checkOut: '2025-12-28 21:30',
      guests: 4,
      amount: 0,
      status: 'pending',
      paymentStatus: 'pending',
      source: 'Zomato',
      specialRequests: 'Birthday celebration'
    },
    {
      id: 'book-005',
      resourceId: 'hall-001',
      resourceName: 'Conference Hall A',
      customerName: 'Tech Solutions Pvt Ltd',
      phone: '+91 94321 09876',
      checkIn: '2025-12-29 09:00',
      checkOut: '2025-12-29 17:00',
      guests: 80,
      amount: 15000,
      status: 'confirmed',
      paymentStatus: 'advance_paid',
      source: 'Corporate',
      specialRequests: 'Projector and WiFi required'
    }
  ];

  // Availability Slots (for day view)
  const timeSlots = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];

  // Analytics
  const analytics = {
    totalBookings: 156,
    occupancyRate: 78.5,
    revenue: 456780,
    avgBookingValue: 2928,
    peakHours: ['10:00-12:00', '18:00-21:00'],
    mostBooked: 'Deluxe Room 101',
    cancellationRate: 8.2
  };

  // Dynamic Pricing Suggestions
  const pricingSuggestions = [
    {
      resource: 'Deluxe Room 101',
      currentPrice: 3500,
      suggestedPrice: 4200,
      reason: 'High demand detected (92% occupancy next week)',
      impact: '+₹5,600/week'
    },
    {
      resource: 'Suite 201',
      currentPrice: 7500,
      suggestedPrice: 6500,
      reason: 'Low demand (45% occupancy)',
      impact: 'Increase bookings'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'in_progress': return 'bg-blue-100 text-blue-700';
      case 'completed': return 'bg-purple-100 text-purple-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'advance_paid': return 'bg-blue-100 text-blue-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'refunded': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const formatTime = (dateTime) => {
    return new Date(dateTime).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-6">
      <MerchantNav />
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Booking Calendar & Availability
            </h1>
            <p className="text-gray-600 mt-1">Manage bookings, availability & dynamic pricing</p>
          </div>
          <div className="flex gap-3">
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500"
            >
              <option value="day">Day View</option>
              <option value="week">Week View</option>
              <option value="month">Month View</option>
            </select>
            <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Booking
            </button>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Bookings</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.totalBookings}</p>
              <p className="text-teal-600 text-sm mt-1">This month</p>
            </div>
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Occupancy Rate</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.occupancyRate}%</p>
              <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +6% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Revenue</p>
              <p className="text-3xl font-bold text-gray-900">₹{(analytics.revenue / 1000).toFixed(0)}K</p>
              <p className="text-blue-600 text-sm mt-1">Avg: ₹{analytics.avgBookingValue.toLocaleString('en-IN')}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Cancellation Rate</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.cancellationRate}%</p>
              <p className="text-purple-600 text-sm mt-1">Industry avg: 12%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <XCircle className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm mb-6">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'calendar', label: 'Calendar View', icon: Calendar },
            { id: 'bookings', label: 'All Bookings', icon: Users },
            { id: 'resources', label: 'Resources', icon: Package },
            { id: 'pricing', label: 'Dynamic Pricing', icon: TrendingUp }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-medium transition-colors flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-teal-600 border-b-2 border-teal-600 bg-teal-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-bold text-gray-900">
                  {selectedDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </h3>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm">
                Today
              </button>
            </div>

            {/* Day View with Resources */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-13 border-b border-gray-200">
                <div className="col-span-2 p-3 bg-gray-50 font-medium text-gray-700 text-sm">
                  Resource
                </div>
                {timeSlots.slice(6, 24).map(time => (
                  <div key={time} className="p-3 bg-gray-50 text-center font-medium text-gray-700 text-xs">
                    {time}
                  </div>
                ))}
              </div>

              {resources.slice(0, 6).map(resource => (
                <div key={resource.id} className="grid grid-cols-13 border-b border-gray-100 hover:bg-gray-50">
                  <div className="col-span-2 p-3 border-r border-gray-100">
                    <p className="font-medium text-gray-900 text-sm">{resource.name}</p>
                    <p className="text-xs text-gray-600">{resource.type.replace('_', ' ')}</p>
                  </div>
                  {timeSlots.slice(6, 24).map(time => {
                    const booking = bookings.find(b => b.resourceId === resource.id);
                    const isBooked = booking && formatTime(booking.checkIn).split(':')[0] === time.split(':')[0];

                    return (
                      <div
                        key={time}
                        className={`border-r border-gray-100 ${isBooked ? 'bg-gradient-to-r from-teal-100 to-blue-100 border-teal-300' : 'hover:bg-blue-50 cursor-pointer'}`}
                      >
                        {isBooked && (
                          <div className="p-1">
                            <div className="bg-teal-500 text-white rounded text-xs p-1 text-center font-medium">
                              {booking.customerName.split(' ')[0]}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500">
                  <option>All Status</option>
                  <option>Confirmed</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                </select>
                <button className="px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {bookings.map(booking => (
                <div key={booking.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Booking #{booking.id}</h4>
                      <p className="text-sm text-gray-600">{booking.resourceName}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status.replace('_', ' ').toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(booking.paymentStatus)}`}>
                        {booking.paymentStatus.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-4 bg-gray-50 rounded-xl p-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Customer</p>
                      <p className="font-medium text-gray-900 text-sm">{booking.customerName}</p>
                      <p className="text-xs text-gray-600">{booking.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Check-In</p>
                      <p className="font-medium text-gray-900 text-sm">{new Date(booking.checkIn).toLocaleDateString('en-IN')}</p>
                      <p className="text-xs text-gray-600">{formatTime(booking.checkIn)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Check-Out</p>
                      <p className="font-medium text-gray-900 text-sm">{new Date(booking.checkOut).toLocaleDateString('en-IN')}</p>
                      <p className="text-xs text-gray-600">{formatTime(booking.checkOut)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Amount</p>
                      <p className="font-bold text-gray-900 text-lg">₹{booking.amount.toLocaleString('en-IN')}</p>
                    </div>
                  </div>

                  {booking.specialRequests && (
                    <div className="bg-yellow-50 rounded-lg p-3 mb-4">
                      <p className="text-xs font-medium text-gray-700 mb-1">Special Requests:</p>
                      <p className="text-sm text-gray-900">{booking.specialRequests}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Guests: <span className="font-medium text-gray-900">{booking.guests}</span></span>
                      <span>Source: <span className="font-medium text-gray-900">{booking.source}</span></span>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
                        Modify
                      </button>
                      <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map(resource => (
                <div key={resource.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{resource.name}</h4>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        {resource.type.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${resource.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {resource.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm">Capacity</span>
                      <span className="font-bold text-gray-900">{resource.capacity} {resource.type === 'hotel_room' ? 'guests' : resource.type === 'vehicle' ? 'seats' : 'people'}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-600 text-sm">Price</span>
                      <span className="font-bold text-teal-600">₹{resource.price.toLocaleString('en-IN')}{resource.type === 'hotel_room' ? '/night' : resource.type === 'vehicle' ? '/day' : '/hour'}</span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm">
                    Manage Availability
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">AI-Powered Pricing Recommendations</h3>
            <div className="space-y-4">
              {pricingSuggestions.map((suggestion, idx) => (
                <div key={idx} className="bg-white rounded-xl border-2 border-blue-200 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{suggestion.resource}</h4>
                      <p className="text-sm text-gray-600 mb-3">{suggestion.reason}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 bg-gray-50 rounded-xl p-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Current Price</p>
                      <p className="text-2xl font-bold text-gray-900">₹{suggestion.currentPrice}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Suggested Price</p>
                      <p className="text-2xl font-bold text-blue-600">₹{suggestion.suggestedPrice}</p>
                      <p className="text-xs text-gray-600">
                        {suggestion.suggestedPrice > suggestion.currentPrice ? '+' : ''}{Math.round(((suggestion.suggestedPrice - suggestion.currentPrice) / suggestion.currentPrice) * 100)}%
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Impact</p>
                      <p className="text-lg font-bold text-green-600">{suggestion.impact}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                      Apply Suggestion
                    </button>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                      Dismiss
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
