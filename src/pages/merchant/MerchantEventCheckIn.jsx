import { useState } from 'react';
import MerchantNav from '../../components/merchant/MerchantNav';
import {
  Ticket, QrCode, CheckCircle, Users, Clock, TrendingUp, Calendar,
  Search, Filter, Eye, X, AlertCircle, UserCheck, Download, RefreshCw
} from 'lucide-react';

export default function MerchantEventCheckIn() {
  const [activeEvent, setActiveEvent] = useState(null);
  const [scanMode, setScanMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - Today's events
  const todaysEvents = [
    {
      id: 'EVENT-001',
      name: 'Live Music Night - Indie Fusion',
      type: 'Concert',
      date: new Date(),
      startTime: '19:00',
      endTime: '22:00',
      venue: 'The Music Lounge',
      status: 'ongoing',
      totalTickets: 250,
      ticketsSold: 234,
      checkedIn: 198,
      pending: 36,
      revenue: 234000
    },
    {
      id: 'EVENT-002',
      name: 'Comedy Night with Rahul Sharma',
      type: 'Comedy',
      date: new Date(),
      startTime: '20:30',
      endTime: '22:30',
      venue: 'Laugh Factory',
      status: 'upcoming',
      totalTickets: 150,
      ticketsSold: 145,
      checkedIn: 0,
      pending: 145,
      revenue: 145000
    }
  ];

  // Mock data - Attendees for selected event
  const attendees = [
    {
      id: 'TICKET-12345',
      ticketNumber: 'TKT-234-567-890',
      customerName: 'Priya Sharma',
      customerId: 'USR-45821',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      ticketType: 'VIP',
      quantity: 2,
      totalPaid: 2000,
      purchaseDate: new Date(Date.now() - 86400000 * 3),
      status: 'checked_in',
      checkInTime: new Date(Date.now() - 3600000),
      checkInBy: 'Gate 1 - Scanner A'
    },
    {
      id: 'TICKET-12346',
      ticketNumber: 'TKT-234-567-891',
      customerName: 'Rahul Mehta',
      customerId: 'USR-32145',
      email: 'rahul.m@email.com',
      phone: '+91 87654 32109',
      ticketType: 'General',
      quantity: 1,
      totalPaid: 800,
      purchaseDate: new Date(Date.now() - 86400000 * 2),
      status: 'pending',
      checkInTime: null,
      checkInBy: null
    },
    {
      id: 'TICKET-12347',
      ticketNumber: 'TKT-234-567-892',
      customerName: 'Sneha Patel',
      customerId: 'USR-67890',
      email: 'sneha.patel@email.com',
      phone: '+91 76543 21098',
      ticketType: 'VIP',
      quantity: 4,
      totalPaid: 4000,
      purchaseDate: new Date(Date.now() - 86400000 * 5),
      status: 'checked_in',
      checkInTime: new Date(Date.now() - 2400000),
      checkInBy: 'Gate 2 - Scanner B'
    },
    {
      id: 'TICKET-12348',
      ticketNumber: 'TKT-234-567-893',
      customerName: 'Vikram Singh',
      customerId: 'USR-54321',
      email: 'vikram.s@email.com',
      phone: '+91 65432 10987',
      ticketType: 'General',
      quantity: 2,
      totalPaid: 1600,
      purchaseDate: new Date(Date.now() - 86400000),
      status: 'pending',
      checkInTime: null,
      checkInBy: null
    }
  ];

  const handleCheckIn = (ticketId) => {
    console.log('Checking in ticket:', ticketId);
    // Implementation would mark ticket as checked in
  };

  const handleScanQR = () => {
    setScanMode(true);
    // Implementation would activate QR scanner
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ongoing': return 'bg-green-100 text-green-700';
      case 'upcoming': return 'bg-blue-100 text-blue-700';
      case 'completed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const renderEventSelector = () => (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {todaysEvents.map((event) => (
        <div
          key={event.id}
          onClick={() => setActiveEvent(event)}
          className={`bg-white rounded-xl border-2 cursor-pointer transition-all ${
            activeEvent?.id === event.id
              ? 'border-blue-600 shadow-lg'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 text-lg">{event.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{event.type} • {event.venue}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {event.startTime} - {event.endTime}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Tickets Sold</p>
                <p className="text-2xl font-bold text-gray-900">{event.ticketsSold}/{event.totalTickets}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Checked In</p>
                <p className="text-2xl font-bold text-green-600">{event.checkedIn}</p>
              </div>
            </div>

            {event.status === 'ongoing' && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-700 font-medium">
                  ✓ Event in progress - {event.pending} attendees pending check-in
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCheckInInterface = () => {
    if (!activeEvent) {
      return (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <MerchantNav />
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Select an event to start check-in</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Check-in Controls */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Check-in: {activeEvent.name}
              </h3>
              <p className="text-sm text-gray-600">
                {activeEvent.checkedIn} of {activeEvent.ticketsSold} attendees checked in
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleScanQR}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <QrCode className="w-5 h-5" />
                Scan QR Code
              </button>
              <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Check-in Progress</span>
              <span className="font-semibold text-gray-900">
                {Math.round((activeEvent.checkedIn / activeEvent.ticketsSold) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(activeEvent.checkedIn / activeEvent.ticketsSold) * 100}%` }}
              />
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by ticket number, name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Attendee List */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900">Attendee List</h4>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                  All ({attendees.length})
                </button>
                <button className="px-3 py-1.5 text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors">
                  Checked In ({attendees.filter(a => a.status === 'checked_in').length})
                </button>
                <button className="px-3 py-1.5 text-sm bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg transition-colors">
                  Pending ({attendees.filter(a => a.status === 'pending').length})
                </button>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {attendees.map((attendee) => (
              <div key={attendee.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                      attendee.status === 'checked_in'
                        ? 'bg-green-600'
                        : 'bg-gray-400'
                    }`}>
                      {attendee.status === 'checked_in' ? (
                        <UserCheck className="w-6 h-6" />
                      ) : (
                        attendee.customerName.charAt(0)
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{attendee.customerName}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                          attendee.status === 'checked_in'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {attendee.status === 'checked_in' ? 'Checked In' : 'Pending'}
                        </span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          {attendee.ticketType}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                        <p className="text-gray-600">
                          <span className="font-medium">Ticket:</span> {attendee.ticketNumber}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Email:</span> {attendee.email}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Phone:</span> {attendee.phone}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Quantity:</span> {attendee.quantity} ticket(s) • ₹{attendee.totalPaid}
                        </p>
                      </div>

                      {attendee.status === 'checked_in' && (
                        <div className="mt-2 flex items-center gap-2 text-xs text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span>
                            Checked in {new Date(attendee.checkInTime).toLocaleTimeString()} via {attendee.checkInBy}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {attendee.status === 'pending' ? (
                      <button
                        onClick={() => handleCheckIn(attendee.id)}
                        className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Check In
                      </button>
                    ) : (
                      <button className="px-6 py-2.5 bg-gray-100 text-gray-400 rounded-lg font-semibold cursor-not-allowed flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Checked In
                      </button>
                    )}
                    <button className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Ticket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Event Check-In</h1>
              <p className="text-gray-600">Scan tickets and manage attendee check-in</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{todaysEvents.length}</p>
            <p className="text-sm text-gray-600">Events Today</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Ticket className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {todaysEvents.reduce((sum, e) => sum + e.ticketsSold, 0)}
            </p>
            <p className="text-sm text-gray-600">Total Tickets</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <UserCheck className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {todaysEvents.reduce((sum, e) => sum + e.checkedIn, 0)}
            </p>
            <p className="text-sm text-gray-600">Checked In</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {todaysEvents.reduce((sum, e) => sum + e.pending, 0)}
            </p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
        </div>

        {/* Event Selector */}
        {renderEventSelector()}

        {/* Check-in Interface */}
        {renderCheckInInterface()}

        {/* QR Scanner Modal */}
        {scanMode && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Scan QR Code</h3>
                <button
                  onClick={() => setScanMode(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <QrCode className="w-24 h-24 text-gray-400" />
              </div>

              <p className="text-center text-gray-600">
                Position the QR code within the frame to scan
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
