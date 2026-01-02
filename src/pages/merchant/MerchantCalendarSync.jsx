import React, { useState } from 'react';
import {
  ArrowLeft, Calendar, RefreshCw, CheckCircle, XCircle, Link2,
  ExternalLink, Clock, Users, Settings, AlertCircle, Plus,
  ChevronRight, Smartphone, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantCalendarSync = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('connected');

  const connectedCalendars = [
    {
      id: 1,
      name: 'Google Calendar',
      email: 'business@gmail.com',
      icon: '📅',
      status: 'synced',
      lastSync: '2 mins ago',
      events: 45,
      color: '#4285F4'
    },
    {
      id: 2,
      name: 'Outlook Calendar',
      email: 'owner@business.com',
      icon: '📆',
      status: 'synced',
      lastSync: '10 mins ago',
      events: 23,
      color: '#0078D4'
    }
  ];

  const availableCalendars = [
    {
      id: 'google',
      name: 'Google Calendar',
      description: 'Sync with your Google account',
      icon: '📅'
    },
    {
      id: 'outlook',
      name: 'Microsoft Outlook',
      description: 'Sync with Outlook calendar',
      icon: '📆'
    },
    {
      id: 'apple',
      name: 'Apple Calendar',
      description: 'Sync with iCloud calendar',
      icon: '🍎'
    },
    {
      id: 'ical',
      name: 'iCal Feed',
      description: 'Generate iCal subscription URL',
      icon: '🔗'
    }
  ];

  const syncSettings = {
    autoSync: true,
    syncInterval: 15,
    syncPastEvents: false,
    syncFutureDays: 30,
    createReminders: true,
    reminderTime: 60,
    includeCustomerDetails: true,
    blockTimeSlots: true
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Haircut - Rahul S.',
      time: '10:00 AM - 10:45 AM',
      date: 'Today',
      staff: 'Amit',
      source: 'Google Calendar',
      synced: true
    },
    {
      id: 2,
      title: 'Hair Spa - Priya P.',
      time: '11:00 AM - 12:30 PM',
      date: 'Today',
      staff: 'Neha',
      source: 'ReZ Booking',
      synced: true
    },
    {
      id: 3,
      title: 'Staff Meeting',
      time: '2:00 PM - 3:00 PM',
      date: 'Today',
      staff: 'All',
      source: 'Outlook',
      synced: true
    },
    {
      id: 4,
      title: 'Facial - Sneha R.',
      time: '3:30 PM - 4:30 PM',
      date: 'Tomorrow',
      staff: 'Pooja',
      source: 'ReZ Booking',
      synced: false
    }
  ];

  const syncConflicts = [
    {
      id: 1,
      type: 'overlap',
      event1: 'Haircut - Rahul',
      event2: 'Team Meeting',
      time: '10:00 AM - 10:45 AM',
      date: 'Jan 20, 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Calendar Sync</h1>
              <p className="text-blue-200 text-sm">Sync bookings with external calendars</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <RefreshCw size={24} />
          </button>
        </div>

        {/* Sync Status */}
        <div className="bg-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2" />
              <span>All Calendars Synced</span>
            </div>
            <span className="text-blue-200 text-sm">Last sync: 2 mins ago</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('connected')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'connected' ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
          >
            Connected
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'events' ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Connected Calendars */}
      {activeTab === 'connected' && (
        <div className="px-4 space-y-4">
          {/* Connected List */}
          <div className="space-y-3">
            {connectedCalendars.map(calendar => (
              <div key={calendar.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mr-3"
                      style={{ backgroundColor: `${calendar.color}20` }}
                    >
                      {calendar.icon}
                    </div>
                    <div>
                      <p className="text-white font-bold">{calendar.name}</p>
                      <p className="text-gray-400 text-sm">{calendar.email}</p>
                    </div>
                  </div>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs flex items-center">
                    <CheckCircle size={12} className="mr-1" />
                    Synced
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{calendar.events}</p>
                    <p className="text-gray-400 text-xs">Events</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{calendar.lastSync}</p>
                    <p className="text-gray-400 text-xs">Last Sync</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <RefreshCw size={14} className="mr-1" />
                    Sync Now
                  </button>
                  <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                    <Settings size={18} />
                  </button>
                  <button className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg">
                    <XCircle size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Calendar */}
          <div>
            <h3 className="text-white font-bold mb-3">Add Calendar</h3>
            <div className="grid grid-cols-2 gap-3">
              {availableCalendars.map(calendar => (
                <button
                  key={calendar.id}
                  className="bg-gray-800 p-4 rounded-xl text-center"
                >
                  <span className="text-3xl block mb-2">{calendar.icon}</span>
                  <p className="text-white font-medium text-sm">{calendar.name}</p>
                  <p className="text-gray-400 text-xs">{calendar.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Conflicts */}
          {syncConflicts.length > 0 && (
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
              <div className="flex items-center mb-3">
                <AlertCircle size={20} className="text-orange-400 mr-2" />
                <span className="text-orange-400 font-medium">Sync Conflicts</span>
              </div>
              {syncConflicts.map(conflict => (
                <div key={conflict.id} className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-white text-sm">{conflict.event1} overlaps with {conflict.event2}</p>
                  <p className="text-gray-400 text-xs">{conflict.date} • {conflict.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Events Tab */}
      {activeTab === 'events' && (
        <div className="px-4 space-y-3">
          {upcomingEvents.map(event => (
            <div key={event.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-white font-bold">{event.title}</p>
                  <p className="text-gray-400 text-sm">{event.date} • {event.time}</p>
                </div>
                {event.synced ? (
                  <CheckCircle size={18} className="text-green-400" />
                ) : (
                  <Clock size={18} className="text-yellow-400" />
                )}
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Users size={14} className="text-gray-400 mr-1" />
                  <span className="text-gray-400">{event.staff}</span>
                </div>
                <span className="text-blue-400 text-xs">{event.source}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="px-4 space-y-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-4">Sync Settings</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Auto Sync</p>
                  <p className="text-gray-400 text-sm">Automatically sync changes</p>
                </div>
                <div className={`w-12 h-6 rounded-full relative cursor-pointer ${
                  syncSettings.autoSync ? 'bg-blue-600' : 'bg-gray-600'
                }`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                    syncSettings.autoSync ? 'right-1' : 'left-1'
                  }`} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Sync Interval</p>
                  <p className="text-gray-400 text-sm">How often to sync</p>
                </div>
                <select className="bg-gray-700 text-white px-3 py-2 rounded-lg">
                  <option>5 minutes</option>
                  <option selected>15 minutes</option>
                  <option>30 minutes</option>
                  <option>1 hour</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Sync Future Days</p>
                  <p className="text-gray-400 text-sm">Days ahead to sync</p>
                </div>
                <select className="bg-gray-700 text-white px-3 py-2 rounded-lg">
                  <option>7 days</option>
                  <option>14 days</option>
                  <option selected>30 days</option>
                  <option>60 days</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Create Reminders</p>
                  <p className="text-gray-400 text-sm">Add reminders to synced events</p>
                </div>
                <div className={`w-12 h-6 rounded-full relative cursor-pointer ${
                  syncSettings.createReminders ? 'bg-blue-600' : 'bg-gray-600'
                }`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                    syncSettings.createReminders ? 'right-1' : 'left-1'
                  }`} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Include Customer Details</p>
                  <p className="text-gray-400 text-sm">Add customer info to events</p>
                </div>
                <div className={`w-12 h-6 rounded-full relative cursor-pointer ${
                  syncSettings.includeCustomerDetails ? 'bg-blue-600' : 'bg-gray-600'
                }`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                    syncSettings.includeCustomerDetails ? 'right-1' : 'left-1'
                  }`} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Block Time Slots</p>
                  <p className="text-gray-400 text-sm">Block external events in ReZ</p>
                </div>
                <div className={`w-12 h-6 rounded-full relative cursor-pointer ${
                  syncSettings.blockTimeSlots ? 'bg-blue-600' : 'bg-gray-600'
                }`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                    syncSettings.blockTimeSlots ? 'right-1' : 'left-1'
                  }`} />
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">
            Save Settings
          </button>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantCalendarSync;
