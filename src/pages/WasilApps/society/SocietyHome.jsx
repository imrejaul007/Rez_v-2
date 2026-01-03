import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Bell,
  Users, Building2, MessageSquare, Calendar, Shield,
  Wrench, Car, Package, AlertTriangle, FileText, Vote
} from 'lucide-react';

// Society+ Home: Gated Community Management
// Backend API: GET /api/wasil/society/home
// Backend API: GET /api/wasil/society/notices
// Backend API: GET /api/wasil/society/services
// Backend API: POST /api/wasil/society/complaints

const SocietyHome = () => {
  const [activeTab, setActiveTab] = useState('home');

  const myCommunity = {
    name: "Brigade Gateway",
    block: "Tower A, 1205",
    type: "Premium Apartment",
    residents: 450,
    dues: 8500,
    dueDate: "Jan 10, 2025"
  };

  const quickActions = [
    { id: 1, name: "Pay Dues", icon: "💳", color: "bg-green-500", badge: "₹8.5K" },
    { id: 2, name: "Gate Pass", icon: "🎫", color: "bg-blue-500" },
    { id: 3, name: "Complaint", icon: "📝", color: "bg-red-500" },
    { id: 4, name: "Book Amenity", icon: "🏊", color: "bg-cyan-500" }
  ];

  const notices = [
    {
      id: 1,
      title: "Water Supply Interruption",
      description: "Maintenance on Jan 5, 10 AM - 2 PM",
      type: "alert",
      date: "Today",
      priority: "high"
    },
    {
      id: 2,
      title: "Annual General Meeting",
      description: "Clubhouse, Jan 15 at 6 PM",
      type: "event",
      date: "Jan 15",
      priority: "medium"
    },
    {
      id: 3,
      title: "New Gym Equipment",
      description: "Treadmills and cycles added",
      type: "info",
      date: "Dec 30",
      priority: "low"
    }
  ];

  const amenities = [
    { id: 1, name: "Swimming Pool", icon: "🏊", status: "Open", slots: 8 },
    { id: 2, name: "Gym", icon: "🏋️", status: "Open", slots: 12 },
    { id: 3, name: "Clubhouse", icon: "🏠", status: "Available", slots: 2 },
    { id: 4, name: "Tennis Court", icon: "🎾", status: "Booked", slots: 0 },
    { id: 5, name: "Party Hall", icon: "🎉", status: "Available", slots: 1 }
  ];

  const pendingDeliveries = [
    { id: 1, name: "Amazon Package", from: "Gate 1", time: "10:30 AM", status: "Waiting" },
    { id: 2, name: "Swiggy Order", from: "Gate 2", time: "12:15 PM", status: "Collected" }
  ];

  const helpServices = [
    { id: 1, name: "Plumber", icon: "🔧", available: true, time: "30 min" },
    { id: 2, name: "Electrician", icon: "💡", available: true, time: "45 min" },
    { id: 3, name: "Carpenter", icon: "🪚", available: false, time: "2 hrs" },
    { id: 4, name: "Pest Control", icon: "🦟", available: true, time: "1 hr" }
  ];

  const myComplaints = [
    { id: 1, title: "Lift not working - Tower A", status: "In Progress", date: "Jan 1" },
    { id: 2, title: "Street light issue - Block C", status: "Resolved", date: "Dec 28" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-lg font-bold text-white">{myCommunity.name}</h1>
            <p className="text-indigo-200 text-sm">{myCommunity.block}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative bg-white/20 p-2 rounded-full">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">3</span>
            </button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-white/10 rounded-xl p-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-indigo-200 text-xs">Residents</p>
            <p className="text-white font-bold text-lg">{myCommunity.residents}</p>
          </div>
          <div className="text-center border-x border-white/20">
            <p className="text-indigo-200 text-xs">Dues</p>
            <p className="text-white font-bold text-lg">₹{(myCommunity.dues/1000).toFixed(1)}K</p>
          </div>
          <div className="text-center">
            <p className="text-indigo-200 text-xs">Due Date</p>
            <p className="text-white font-bold text-lg">Jan 10</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 -mt-2">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((action) => (
              <button key={action.id} className="flex flex-col items-center gap-2 relative">
                <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {action.icon}
                </div>
                {action.badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {action.badge}
                  </span>
                )}
                <span className="text-xs text-gray-700 font-medium">{action.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notices */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Bell className="w-5 h-5 text-indigo-500" />
            Notices
          </h2>
          <button className="text-indigo-600 text-sm">View All</button>
        </div>

        <div className="space-y-2">
          {notices.map((notice) => (
            <div key={notice.id} className={`bg-white rounded-xl p-4 shadow-sm border-l-4 ${
              notice.priority === 'high' ? 'border-red-500' :
              notice.priority === 'medium' ? 'border-yellow-500' : 'border-green-500'
            }`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">{notice.title}</h3>
                  <p className="text-sm text-gray-500">{notice.description}</p>
                </div>
                <span className="text-xs text-gray-400">{notice.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pending Deliveries */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Package className="w-5 h-5 text-indigo-500" />
            Deliveries
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {pendingDeliveries.map((delivery, idx) => (
            <div key={delivery.id} className={`p-4 flex items-center gap-3 ${
              idx !== pendingDeliveries.length - 1 ? 'border-b border-gray-100' : ''
            }`}>
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-xl">
                📦
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm">{delivery.name}</h3>
                <p className="text-xs text-gray-500">{delivery.from} • {delivery.time}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                delivery.status === 'Waiting'
                  ? 'bg-yellow-100 text-yellow-600'
                  : 'bg-green-100 text-green-600'
              }`}>
                {delivery.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Book Amenities */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Amenities</h2>
          <button className="text-indigo-600 text-sm">Book Now</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="flex-shrink-0 w-28 bg-white rounded-xl p-3 shadow-sm text-center">
              <span className="text-2xl">{amenity.icon}</span>
              <h3 className="font-medium text-gray-800 text-xs mt-2">{amenity.name}</h3>
              <p className={`text-xs mt-1 ${
                amenity.status === 'Open' || amenity.status === 'Available'
                  ? 'text-green-600'
                  : 'text-red-500'
              }`}>
                {amenity.status}
              </p>
              {amenity.slots > 0 && (
                <p className="text-xs text-gray-500">{amenity.slots} slots</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Help Services */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-indigo-500" />
            Society Help
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {helpServices.map((service) => (
            <button key={service.id} className="bg-white rounded-xl p-3 shadow-sm text-center">
              <span className="text-2xl">{service.icon}</span>
              <p className="text-xs font-medium text-gray-800 mt-1">{service.name}</p>
              <p className={`text-xs ${service.available ? 'text-green-600' : 'text-gray-400'}`}>
                {service.available ? service.time : 'Unavailable'}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* My Complaints */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">My Complaints</h2>
          <button className="text-indigo-600 text-sm">New Complaint</button>
        </div>

        <div className="space-y-2">
          {myComplaints.map((complaint) => (
            <div key={complaint.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                complaint.status === 'Resolved' ? 'bg-green-100' : 'bg-yellow-100'
              }`}>
                {complaint.status === 'Resolved' ? '✅' : '⏳'}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm">{complaint.title}</h3>
                <p className="text-xs text-gray-500">{complaint.date}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                complaint.status === 'Resolved'
                  ? 'bg-green-100 text-green-600'
                  : 'bg-yellow-100 text-yellow-600'
              }`}>
                {complaint.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Emergency Helpline</h3>
              <p className="text-red-100 text-sm">Security: 9876543210</p>
            </div>
            <button className="bg-white text-red-600 px-4 py-2 rounded-xl font-medium text-sm">
              Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietyHome;
