import React, { useState } from 'react';
import {
  ArrowLeft, Clock, Play, Square, User, Calendar, Timer,
  CheckCircle, DollarSign, Star, Plus, Filter, Search,
  ChevronRight, AlertCircle, TrendingUp, Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantSessionTracking = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  const [showStartSession, setShowStartSession] = useState(false);

  const stats = {
    activeSessions: 5,
    completedToday: 18,
    avgDuration: 45,
    revenueToday: 28500,
    utilizationRate: 78
  };

  const activeSessions = [
    {
      id: 1,
      customer: 'Rahul Sharma',
      phone: '9876543210',
      service: 'Premium Haircut + Beard',
      staff: 'Amit (Senior Stylist)',
      startTime: '14:30',
      estimatedDuration: 60,
      elapsedTime: 25,
      station: 'Station 3',
      status: 'in_progress'
    },
    {
      id: 2,
      customer: 'Priya Patel',
      phone: '9876543211',
      service: 'Hair Spa Treatment',
      staff: 'Neha (Therapist)',
      startTime: '14:15',
      estimatedDuration: 90,
      elapsedTime: 40,
      station: 'Room 2',
      status: 'in_progress'
    },
    {
      id: 3,
      customer: 'Sneha Reddy',
      phone: '9876543212',
      service: 'Manicure + Pedicure',
      staff: 'Pooja (Beautician)',
      startTime: '14:45',
      estimatedDuration: 75,
      elapsedTime: 10,
      station: 'Station 5',
      status: 'in_progress'
    },
    {
      id: 4,
      customer: 'Vikram Singh',
      phone: '9876543213',
      service: 'Full Body Massage',
      staff: 'Ravi (Therapist)',
      startTime: '13:30',
      estimatedDuration: 60,
      elapsedTime: 85,
      station: 'Room 1',
      status: 'overtime'
    }
  ];

  const completedSessions = [
    {
      id: 101,
      customer: 'Amit Kumar',
      service: 'Basic Haircut',
      staff: 'Suresh',
      duration: 35,
      startTime: '13:00',
      endTime: '13:35',
      amount: 350,
      rating: 5
    },
    {
      id: 102,
      customer: 'Neha Gupta',
      service: 'Facial + Cleanup',
      staff: 'Priya',
      duration: 50,
      startTime: '12:00',
      endTime: '12:50',
      amount: 1200,
      rating: 4
    },
    {
      id: 103,
      customer: 'Rajesh Kumar',
      service: 'Hair Color',
      staff: 'Amit',
      duration: 90,
      startTime: '10:30',
      endTime: '12:00',
      amount: 2500,
      rating: 5
    }
  ];

  const staffAvailability = [
    { name: 'Amit', role: 'Senior Stylist', status: 'busy', currentClient: 'Rahul Sharma' },
    { name: 'Neha', role: 'Therapist', status: 'busy', currentClient: 'Priya Patel' },
    { name: 'Pooja', role: 'Beautician', status: 'busy', currentClient: 'Sneha Reddy' },
    { name: 'Suresh', role: 'Stylist', status: 'available', currentClient: null },
    { name: 'Ravi', role: 'Therapist', status: 'busy', currentClient: 'Vikram Singh' },
    { name: 'Priya', role: 'Beautician', status: 'available', currentClient: null }
  ];

  const getProgressPercent = (elapsed, estimated) => {
    return Math.min((elapsed / estimated) * 100, 100);
  };

  const getTimeStatus = (elapsed, estimated) => {
    const percent = (elapsed / estimated) * 100;
    if (percent > 100) return 'overtime';
    if (percent > 80) return 'warning';
    return 'normal';
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Session Tracking</h1>
              <p className="text-cyan-200 text-sm">Track service sessions in real-time</p>
            </div>
          </div>
          <button
            onClick={() => setShowStartSession(true)}
            className="bg-white/20 p-2 rounded-lg"
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.activeSessions}</p>
            <p className="text-xs text-cyan-200">Active</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.completedToday}</p>
            <p className="text-xs text-cyan-200">Completed</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.avgDuration}m</p>
            <p className="text-xs text-cyan-200">Avg Time</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.utilizationRate}%</p>
            <p className="text-xs text-cyan-200">Utilization</p>
          </div>
        </div>
      </div>

      {/* Staff Availability */}
      <div className="p-4">
        <h3 className="text-white font-bold mb-3 flex items-center">
          <Users size={18} className="mr-2" />
          Staff Status
        </h3>
        <div className="flex overflow-x-auto space-x-3 pb-2">
          {staffAvailability.map((staff, idx) => (
            <div key={idx} className={`flex-shrink-0 bg-gray-800 rounded-xl p-3 w-32 border ${
              staff.status === 'available' ? 'border-green-500/30' : 'border-gray-700'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{staff.name}</span>
                <div className={`w-2 h-2 rounded-full ${
                  staff.status === 'available' ? 'bg-green-500' : 'bg-orange-500'
                }`} />
              </div>
              <p className="text-gray-400 text-xs">{staff.role}</p>
              {staff.currentClient && (
                <p className="text-cyan-400 text-xs mt-1 truncate">{staff.currentClient}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'active' ? 'bg-cyan-600 text-white' : 'text-gray-400'
            }`}
          >
            Active ({activeSessions.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'completed' ? 'bg-cyan-600 text-white' : 'text-gray-400'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Active Sessions */}
      {activeTab === 'active' && (
        <div className="p-4 space-y-3">
          {activeSessions.map(session => {
            const timeStatus = getTimeStatus(session.elapsedTime, session.estimatedDuration);
            const progressPercent = getProgressPercent(session.elapsedTime, session.estimatedDuration);

            return (
              <div key={session.id} className={`bg-gray-800 rounded-xl p-4 border ${
                timeStatus === 'overtime' ? 'border-red-500/50' :
                timeStatus === 'warning' ? 'border-yellow-500/50' :
                'border-gray-700'
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-white font-bold">{session.customer}</p>
                    <p className="text-gray-400 text-sm">{session.service}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    timeStatus === 'overtime' ? 'bg-red-500/20 text-red-400' :
                    timeStatus === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {timeStatus === 'overtime' ? 'Overtime' : 'In Progress'}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">
                      {session.elapsedTime} min elapsed
                    </span>
                    <span className="text-gray-400">
                      Est. {session.estimatedDuration} min
                    </span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className={`h-full rounded-full transition-all ${
                        timeStatus === 'overtime' ? 'bg-red-500' :
                        timeStatus === 'warning' ? 'bg-yellow-500' :
                        'bg-cyan-500'
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Staff</p>
                    <p className="text-white font-medium truncate">{session.staff}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Station</p>
                    <p className="text-white font-medium">{session.station}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Started</p>
                    <p className="text-white font-medium">{session.startTime}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                    <CheckCircle size={16} className="mr-1" />
                    Complete
                  </button>
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                    <Timer size={16} className="mr-1" />
                    Extend
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Completed Sessions */}
      {activeTab === 'completed' && (
        <div className="p-4 space-y-3">
          {completedSessions.map(session => (
            <div key={session.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-white font-bold">{session.customer}</p>
                  <p className="text-gray-400 text-sm">{session.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-bold">₹{session.amount}</p>
                  <div className="flex items-center justify-end">
                    {[...Array(session.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{session.staff}</span>
                <span>{session.startTime} - {session.endTime} ({session.duration} min)</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Start Session Modal */}
      {showStartSession && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-bold">Start New Session</h3>
                <button onClick={() => setShowStartSession(false)} className="text-gray-400">
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Customer</label>
                <input
                  type="text"
                  placeholder="Search customer or enter phone"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Service</label>
                <select className="w-full bg-gray-700 text-white p-3 rounded-xl">
                  <option>Select service</option>
                  <option>Premium Haircut</option>
                  <option>Hair Spa Treatment</option>
                  <option>Facial + Cleanup</option>
                  <option>Manicure + Pedicure</option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Staff</label>
                <select className="w-full bg-gray-700 text-white p-3 rounded-xl">
                  <option>Select staff</option>
                  {staffAvailability.filter(s => s.status === 'available').map(s => (
                    <option key={s.name}>{s.name} ({s.role})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Station/Room</label>
                <select className="w-full bg-gray-700 text-white p-3 rounded-xl">
                  <option>Select station</option>
                  <option>Station 1</option>
                  <option>Station 2</option>
                  <option>Room 1</option>
                  <option>Room 2</option>
                </select>
              </div>

              <button className="w-full bg-cyan-600 text-white py-4 rounded-xl font-bold flex items-center justify-center">
                <Play size={20} className="mr-2" />
                Start Session
              </button>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantSessionTracking;
