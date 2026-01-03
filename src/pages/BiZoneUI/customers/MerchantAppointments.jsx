import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Plus, Edit, Trash2, CheckCircle, XCircle, AlertCircle, Filter, Search, ChevronLeft, ChevronRight, MapPin, Tag, Bell, Settings, Download } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantAppointments() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('day'); // day, week, month
  const [showAddAppointment, setShowAddAppointment] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all'); // all, confirmed, pending, completed, cancelled

  // Mock staff/service providers
  const staff = [
    { id: 'staff-001', name: 'Priya Sharma', role: 'Senior Stylist', specialization: 'Hair Styling', color: '#8B5CF6' },
    { id: 'staff-002', name: 'Rahul Verma', role: 'Massage Therapist', specialization: 'Spa Treatments', color: '#EC4899' },
    { id: 'staff-003', name: 'Sneha Patel', role: 'Beautician', specialization: 'Facials & Makeup', color: '#10B981' },
    { id: 'staff-004', name: 'Amit Kumar', role: 'Hair Specialist', specialization: 'Hair Treatments', color: '#F59E0B' }
  ];

  // Mock services
  const services = [
    { id: 'svc-001', name: 'Haircut & Styling', duration: 45, price: 499, category: 'Hair' },
    { id: 'svc-002', name: 'Full Body Massage', duration: 60, price: 1299, category: 'Spa' },
    { id: 'svc-003', name: 'Facial Treatment', duration: 90, price: 1799, category: 'Facial' },
    { id: 'svc-004', name: 'Hair Coloring', duration: 120, price: 2499, category: 'Hair' },
    { id: 'svc-005', name: 'Bridal Makeup', duration: 180, price: 4999, category: 'Makeup' },
    { id: 'svc-006', name: 'Manicure & Pedicure', duration: 60, price: 799, category: 'Nails' }
  ];

  // Mock appointments
  const [appointments, setAppointments] = useState([
    {
      id: 'apt-001',
      customerName: 'Anjali Mehta',
      customerPhone: '+91 98765 43210',
      customerEmail: 'anjali.mehta@email.com',
      service: services[0],
      staff: staff[0],
      date: '2025-12-28',
      time: '10:00',
      endTime: '10:45',
      status: 'confirmed', // pending, confirmed, in_progress, completed, cancelled, no_show
      notes: 'Regular customer, prefers layers',
      reminder: true,
      payment: { status: 'pending', amount: 499, method: null }
    },
    {
      id: 'apt-002',
      customerName: 'Rohan Singh',
      customerPhone: '+91 98765 43211',
      customerEmail: 'rohan.singh@email.com',
      service: services[1],
      staff: staff[1],
      date: '2025-12-28',
      time: '11:00',
      endTime: '12:00',
      status: 'confirmed',
      notes: 'First time customer',
      reminder: true,
      payment: { status: 'pending', amount: 1299, method: null }
    },
    {
      id: 'apt-003',
      customerName: 'Kavita Desai',
      customerPhone: '+91 98765 43212',
      customerEmail: 'kavita.desai@email.com',
      service: services[2],
      staff: staff[2],
      date: '2025-12-28',
      time: '14:00',
      endTime: '15:30',
      status: 'in_progress',
      notes: 'Sensitive skin, use organic products',
      reminder: true,
      payment: { status: 'pending', amount: 1799, method: null }
    },
    {
      id: 'apt-004',
      customerName: 'Vikram Joshi',
      customerPhone: '+91 98765 43213',
      customerEmail: 'vikram.joshi@email.com',
      service: services[3],
      staff: staff[0],
      date: '2025-12-28',
      time: '16:00',
      endTime: '18:00',
      status: 'pending',
      notes: 'Wants ash brown color',
      reminder: false,
      payment: { status: 'pending', amount: 2499, method: null }
    },
    {
      id: 'apt-005',
      customerName: 'Neha Kapoor',
      customerPhone: '+91 98765 43214',
      customerEmail: 'neha.kapoor@email.com',
      service: services[4],
      staff: staff[2],
      date: '2025-12-29',
      time: '09:00',
      endTime: '12:00',
      status: 'confirmed',
      notes: 'Wedding on Jan 5th, trial session',
      reminder: true,
      payment: { status: 'advance_paid', amount: 4999, advancePaid: 1500, method: 'upi' }
    }
  ]);

  // Filter appointments by date and status
  const filteredAppointments = appointments.filter(apt => {
    const matchesDate = apt.date === selectedDate.toISOString().split('T')[0];
    const matchesStatus = filterStatus === 'all' || apt.status === filterStatus;
    return matchesDate && matchesStatus;
  }).sort((a, b) => a.time.localeCompare(b.time));

  // Calculate daily metrics
  const dailyMetrics = {
    total: filteredAppointments.length,
    confirmed: filteredAppointments.filter(a => a.status === 'confirmed').length,
    pending: filteredAppointments.filter(a => a.status === 'pending').length,
    completed: filteredAppointments.filter(a => a.status === 'completed').length,
    cancelled: filteredAppointments.filter(a => a.status === 'cancelled').length,
    revenue: filteredAppointments.reduce((sum, apt) => sum + (apt.status === 'completed' ? apt.payment.amount : 0), 0),
    expectedRevenue: filteredAppointments.reduce((sum, apt) =>
      sum + (['confirmed', 'in_progress', 'pending'].includes(apt.status) ? apt.payment.amount : 0), 0
    )
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'completed':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'no_show':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'in_progress':
        return <Clock className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      case 'no_show':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const updateAppointmentStatus = (appointmentId, newStatus) => {
    setAppointments(appointments.map(apt =>
      apt.id === appointmentId ? { ...apt, status: newStatus } : apt
    ));
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const changeDate = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Appointment Scheduling</h1>
              <p className="text-gray-600">Manage bookings, schedules, and customer appointments</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Settings
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export
              </button>
              <button
                onClick={() => setShowAddAppointment(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                New Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Daily Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{dailyMetrics.total}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-sm text-green-600">Confirmed</p>
            <p className="text-2xl font-bold text-green-700 mt-1">{dailyMetrics.confirmed}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-600">Pending</p>
            <p className="text-2xl font-bold text-yellow-700 mt-1">{dailyMetrics.pending}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">Completed</p>
            <p className="text-2xl font-bold text-gray-700 mt-1">{dailyMetrics.completed}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <p className="text-sm text-red-600">Cancelled</p>
            <p className="text-2xl font-bold text-red-700 mt-1">{dailyMetrics.cancelled}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-indigo-200">
            <p className="text-sm text-indigo-600">Expected</p>
            <p className="text-xl font-bold text-indigo-700 mt-1">₹{dailyMetrics.expectedRevenue}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-sm text-green-600">Revenue</p>
            <p className="text-xl font-bold text-green-700 mt-1">₹{dailyMetrics.revenue}</p>
          </div>
        </div>

        {/* Date Selector & Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => changeDate(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">{formatDate(selectedDate)}</p>
                <p className="text-sm text-gray-500">
                  {selectedDate.toISOString().split('T')[0] === new Date().toISOString().split('T')[0] && 'Today'}
                </p>
              </div>
              <button
                onClick={() => changeDate(1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedDate(new Date())}
                className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-semibold"
              >
                Today
              </button>
            </div>

            <div className="flex gap-2">
              {['all', 'confirmed', 'pending', 'completed', 'cancelled'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    filterStatus === status
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Appointments Timeline */}
        <div className="space-y-4">
          {filteredAppointments.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No appointments found</h3>
              <p className="text-gray-600 mb-4">No appointments scheduled for this date</p>
              <button
                onClick={() => setShowAddAppointment(true)}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Create New Appointment
              </button>
            </div>
          ) : (
            filteredAppointments.map(appointment => (
              <div
                key={appointment.id}
                className="bg-white rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedAppointment(appointment)}
                style={{ borderLeftColor: appointment.staff.color, borderLeftWidth: '6px' }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-gray-400" />
                          <span className="text-lg font-bold text-gray-900">
                            {appointment.time} - {appointment.endTime}
                          </span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border ${
                          getStatusColor(appointment.status)
                        }`}>
                          {getStatusIcon(appointment.status)}
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1).replace('_', ' ')}
                        </span>
                        {appointment.reminder && (
                          <Bell className="w-4 h-4 text-indigo-600" />
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Customer</p>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <div>
                              <p className="font-semibold text-gray-900">{appointment.customerName}</p>
                              <p className="text-sm text-gray-600">{appointment.customerPhone}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500 mb-1">Service</p>
                          <div>
                            <p className="font-semibold text-gray-900">{appointment.service.name}</p>
                            <p className="text-sm text-gray-600">{appointment.service.duration} mins • ₹{appointment.service.price}</p>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500 mb-1">Service Provider</p>
                          <div>
                            <p className="font-semibold text-gray-900">{appointment.staff.name}</p>
                            <p className="text-sm text-gray-600">{appointment.staff.role}</p>
                          </div>
                        </div>
                      </div>

                      {appointment.notes && (
                        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Notes:</span> {appointment.notes}
                          </p>
                        </div>
                      )}

                      {appointment.payment.status === 'advance_paid' && (
                        <div className="mt-3 flex items-center gap-2 text-sm text-green-700">
                          <CheckCircle className="w-4 h-4" />
                          Advance paid: ₹{appointment.payment.advancePaid}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {appointment.status === 'pending' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateAppointmentStatus(appointment.id, 'confirmed');
                          }}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                          Confirm
                        </button>
                      )}
                      {appointment.status === 'confirmed' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateAppointmentStatus(appointment.id, 'in_progress');
                          }}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          Start
                        </button>
                      )}
                      {appointment.status === 'in_progress' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateAppointmentStatus(appointment.id, 'completed');
                          }}
                          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                        >
                          Complete
                        </button>
                      )}
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Appointment Detail Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Appointment Details</h3>
              <button
                onClick={() => setSelectedAppointment(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Customer</p>
                  <p className="font-semibold mt-1">{selectedAppointment.customerName}</p>
                  <p className="text-sm text-gray-600">{selectedAppointment.customerPhone}</p>
                  <p className="text-sm text-gray-600">{selectedAppointment.customerEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Service Provider</p>
                  <p className="font-semibold mt-1">{selectedAppointment.staff.name}</p>
                  <p className="text-sm text-gray-600">{selectedAppointment.staff.role}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">Service</p>
                <p className="font-semibold mt-1">{selectedAppointment.service.name}</p>
                <p className="text-sm text-gray-600">Duration: {selectedAppointment.service.duration} minutes</p>
                <p className="text-sm text-gray-600">Price: ₹{selectedAppointment.service.price}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Time</p>
                <p className="font-semibold mt-1">
                  {selectedAppointment.date} • {selectedAppointment.time} - {selectedAppointment.endTime}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Status</p>
                <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold mt-1 border ${
                  getStatusColor(selectedAppointment.status)
                }`}>
                  {selectedAppointment.status.charAt(0).toUpperCase() + selectedAppointment.status.slice(1).replace('_', ' ')}
                </span>
              </div>

              {selectedAppointment.notes && (
                <div>
                  <p className="text-sm text-gray-600">Notes</p>
                  <p className="mt-1 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    {selectedAppointment.notes}
                  </p>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Edit Appointment
                </button>
                <button className="flex-1 px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50">
                  Cancel Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
