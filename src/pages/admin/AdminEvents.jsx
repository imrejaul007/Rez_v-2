import { useState } from 'react';
import {
  Film, Music, GraduationCap, Briefcase, Calendar, MapPin,
  Users, Ticket, DollarSign, Plus, Edit, Eye, Trash2,
  Clock, Star, TrendingUp, CheckCircle, XCircle, Search
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminEvents() {
  const [activeTab, setActiveTab] = useState('events');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Pathaan - Night Show',
      category: 'movie',
      venue: 'PVR Cinemas, Phoenix Mall',
      date: '2024-01-28',
      time: '21:30',
      price: 350,
      discountedPrice: 280,
      capacity: 200,
      booked: 156,
      rating: 4.5,
      status: 'active',
      image: 'https://via.placeholder.com/400x200',
      organizer: 'PVR Cinemas'
    },
    {
      id: 2,
      title: 'Arijit Singh Live Concert',
      category: 'concert',
      venue: 'Jawaharlal Nehru Stadium',
      date: '2024-02-10',
      time: '19:00',
      price: 2500,
      discountedPrice: 2000,
      capacity: 5000,
      booked: 3245,
      rating: 4.9,
      status: 'active',
      image: 'https://via.placeholder.com/400x200',
      organizer: 'BookMyShow Live'
    },
    {
      id: 3,
      title: 'TechFest 2024 - IIT Bombay',
      category: 'college_fest',
      venue: 'IIT Bombay Campus',
      date: '2024-02-15',
      time: '09:00',
      price: 500,
      discountedPrice: 400,
      capacity: 2000,
      booked: 1234,
      rating: 4.7,
      status: 'active',
      image: 'https://via.placeholder.com/400x200',
      organizer: 'IIT Bombay'
    },
    {
      id: 4,
      title: 'Digital Marketing Masterclass',
      category: 'workshop',
      venue: 'WeWork, BKC',
      date: '2024-02-05',
      time: '14:00',
      price: 1500,
      discountedPrice: 1200,
      capacity: 50,
      booked: 38,
      rating: 4.6,
      status: 'active',
      image: 'https://via.placeholder.com/400x200',
      organizer: 'Skill Academy'
    },
    {
      id: 5,
      title: 'Salaar - Evening Show',
      category: 'movie',
      venue: 'INOX, R City Mall',
      date: '2024-01-27',
      time: '18:45',
      price: 300,
      discountedPrice: 240,
      capacity: 180,
      booked: 164,
      rating: 4.3,
      status: 'active',
      image: 'https://via.placeholder.com/400x200',
      organizer: 'INOX Movies'
    }
  ]);

  const [ticketTypes, setTicketTypes] = useState([
    { id: 1, eventId: 2, name: 'General Admission', price: 2000, available: 1755 },
    { id: 2, eventId: 2, name: 'VIP', price: 5000, available: 234 },
    { id: 3, eventId: 2, name: 'Premium', price: 10000, available: 11 }
  ]);

  const [recentBookings, setRecentBookings] = useState([
    {
      id: 1,
      eventTitle: 'Arijit Singh Live Concert',
      user: 'Rahul Sharma',
      tickets: 2,
      amount: 4000,
      bookingDate: '2024-01-20',
      status: 'confirmed'
    },
    {
      id: 2,
      eventTitle: 'Digital Marketing Masterclass',
      user: 'Priya Patel',
      tickets: 1,
      amount: 1200,
      bookingDate: '2024-01-20',
      status: 'confirmed'
    },
    {
      id: 3,
      eventTitle: 'TechFest 2024 - IIT Bombay',
      user: 'Arjun Mehta',
      tickets: 3,
      amount: 1200,
      bookingDate: '2024-01-19',
      status: 'confirmed'
    },
    {
      id: 4,
      eventTitle: 'Pathaan - Night Show',
      user: 'Sneha Gupta',
      tickets: 4,
      amount: 1120,
      bookingDate: '2024-01-19',
      status: 'pending'
    }
  ]);

  const categoryIcons = {
    movie: Film,
    concert: Music,
    college_fest: GraduationCap,
    workshop: Briefcase
  };

  const categoryColors = {
    movie: 'bg-purple-100 text-purple-700',
    concert: 'bg-pink-100 text-pink-700',
    college_fest: 'bg-blue-100 text-blue-700',
    workshop: 'bg-green-100 text-green-700'
  };

  const stats = {
    totalEvents: events.length,
    activeEvents: events.filter(e => e.status === 'active').length,
    totalBookings: recentBookings.length,
    totalRevenue: recentBookings.reduce((sum, b) => sum + b.amount, 0),
    totalAttendees: events.reduce((sum, e) => sum + e.booked, 0),
    avgOccupancy: (events.reduce((sum, e) => sum + (e.booked / e.capacity * 100), 0) / events.length).toFixed(1)
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.venue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || event.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Event Management</h1>
              <p className="text-gray-600 mt-1">Manage movies, concerts, college fests, and workshops</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Plus className="w-5 h-5" />
              Create Event
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Events</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalEvents}</p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.activeEvents}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Bookings</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalBookings}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Ticket className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Revenue</p>
                <p className="text-3xl font-bold text-green-600 mt-2">₹{(stats.totalRevenue / 1000).toFixed(0)}K</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Attendees</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">{stats.totalAttendees.toLocaleString()}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Occupancy</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">{stats.avgOccupancy}%</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('events')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'events'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                All Events
              </div>
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'bookings'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Ticket className="w-5 h-5" />
                Recent Bookings
              </div>
            </button>
          </div>

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="p-6">
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Categories</option>
                  <option value="movie">Movies</option>
                  <option value="concert">Concerts</option>
                  <option value="college_fest">College Fests</option>
                  <option value="workshop">Workshops</option>
                </select>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => {
                  const CategoryIcon = categoryIcons[event.category];
                  const occupancyRate = (event.booked / event.capacity * 100).toFixed(0);

                  return (
                    <div key={event.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                        <div className="absolute top-3 right-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[event.category]}`}>
                            {event.category.replace('_', ' ').toUpperCase()}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/70 px-2 py-1 rounded">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-white text-sm font-medium">{event.rating}</span>
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            {event.venue}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-sm text-gray-500 line-through">₹{event.price}</p>
                            <p className="text-xl font-bold text-green-600">₹{event.discountedPrice}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">Booked</p>
                            <p className="text-lg font-bold text-blue-600">{event.booked}/{event.capacity}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Occupancy</span>
                            <span className="font-medium">{occupancyRate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                occupancyRate >= 90 ? 'bg-red-600' :
                                occupancyRate >= 70 ? 'bg-yellow-600' :
                                'bg-green-600'
                              }`}
                              style={{ width: `${occupancyRate}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button className="flex-1 px-3 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 text-sm font-medium flex items-center justify-center gap-1">
                            <Edit className="w-4 h-4" />
                            Edit
                          </button>
                          <button className="flex-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium flex items-center justify-center gap-1">
                            <Eye className="w-4 h-4" />
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bookings Tab */}
          {activeTab === 'bookings' && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tickets</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <span className="font-mono text-sm text-gray-900">#{booking.id.toString().padStart(6, '0')}</span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-medium text-gray-900">{booking.eventTitle}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-900">{booking.user}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1">
                            <Ticket className="w-4 h-4 text-blue-600" />
                            <span className="font-medium text-gray-900">{booking.tickets}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-green-600">₹{booking.amount.toLocaleString()}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{booking.bookingDate}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-700'
                              : booking.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded">
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
