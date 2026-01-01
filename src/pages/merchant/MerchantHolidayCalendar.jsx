import React, { useState } from 'react';
import {
  ArrowLeft, Calendar, Clock, Plus, Edit2, Trash2,
  ChevronLeft, ChevronRight, CheckCircle, XCircle,
  AlertCircle, Sun, Moon, Coffee, Store, Bell,
  Settings, Copy, RefreshCw, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantHolidayCalendar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('calendar');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [showSpecialHoursModal, setShowSpecialHoursModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const regularHours = {
    monday: { open: '09:00', close: '21:00', isOpen: true },
    tuesday: { open: '09:00', close: '21:00', isOpen: true },
    wednesday: { open: '09:00', close: '21:00', isOpen: true },
    thursday: { open: '09:00', close: '21:00', isOpen: true },
    friday: { open: '09:00', close: '22:00', isOpen: true },
    saturday: { open: '10:00', close: '22:00', isOpen: true },
    sunday: { open: '10:00', close: '20:00', isOpen: true }
  };

  const holidays = [
    {
      id: 1,
      name: 'Diwali',
      date: '2024-11-01',
      type: 'closed',
      recurring: true,
      notifyCustomers: true
    },
    {
      id: 2,
      name: 'New Year',
      date: '2025-01-01',
      type: 'closed',
      recurring: true,
      notifyCustomers: true
    },
    {
      id: 3,
      name: 'Holi',
      date: '2025-03-14',
      type: 'special_hours',
      hours: { open: '14:00', close: '22:00' },
      recurring: true,
      notifyCustomers: true
    },
    {
      id: 4,
      name: 'Annual Maintenance',
      date: '2024-12-25',
      type: 'closed',
      recurring: false,
      notifyCustomers: true
    }
  ];

  const specialDays = [
    {
      id: 1,
      name: 'Black Friday Sale',
      date: '2024-11-29',
      type: 'extended',
      hours: { open: '06:00', close: '23:59' },
      note: 'Extended hours for sale'
    },
    {
      id: 2,
      name: 'Christmas Eve',
      date: '2024-12-24',
      type: 'reduced',
      hours: { open: '09:00', close: '18:00' },
      note: 'Early closing'
    },
    {
      id: 3,
      name: 'Valentine Week',
      dateRange: { start: '2025-02-07', end: '2025-02-14' },
      type: 'extended',
      hours: { open: '08:00', close: '23:00' },
      note: 'Extended hours all week'
    }
  ];

  const upcomingHolidays = [
    { name: 'Diwali', date: '2024-11-01', daysAway: 3 },
    { name: 'Black Friday', date: '2024-11-29', daysAway: 31 },
    { name: 'Christmas', date: '2024-12-25', daysAway: 57 },
    { name: 'New Year', date: '2025-01-01', daysAway: 64 }
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const isHoliday = (date) => {
    if (!date) return null;
    const dateStr = date.toISOString().split('T')[0];
    return holidays.find(h => h.date === dateStr);
  };

  const isSpecialDay = (date) => {
    if (!date) return null;
    const dateStr = date.toISOString().split('T')[0];
    return specialDays.find(s => {
      if (s.date) return s.date === dateStr;
      if (s.dateRange) {
        return dateStr >= s.dateRange.start && dateStr <= s.dateRange.end;
      }
      return false;
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Calendar size={24} className="mr-2" />
                Holiday Calendar
              </h1>
              <p className="text-pink-200 text-sm">Store hours & holidays</p>
            </div>
          </div>
          <button
            onClick={() => setShowHolidayModal(true)}
            className="bg-white/20 px-3 py-1.5 rounded-lg text-sm flex items-center"
          >
            <Plus size={16} className="mr-1" />
            Add Holiday
          </button>
        </div>

        {/* Upcoming */}
        <div className="flex overflow-x-auto space-x-3 pb-2">
          {upcomingHolidays.slice(0, 3).map((holiday, idx) => (
            <div key={idx} className="flex-shrink-0 bg-white/10 rounded-lg px-3 py-2">
              <p className="text-white font-medium text-sm">{holiday.name}</p>
              <p className="text-pink-200 text-xs">in {holiday.daysAway} days</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'calendar', label: 'Calendar' },
            { id: 'hours', label: 'Regular Hours' },
            { id: 'holidays', label: 'Holidays' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-pink-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Tab */}
      {activeTab === 'calendar' && (
        <div className="px-4 space-y-4">
          {/* Month Navigation */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="p-2 bg-gray-700 rounded-lg"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              <h3 className="text-white font-bold text-lg">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="p-2 bg-gray-700 rounded-lg"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map(day => (
                <div key={day} className="text-center text-gray-400 text-xs py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(currentMonth).map((date, idx) => {
                const holiday = isHoliday(date);
                const special = isSpecialDay(date);
                const isToday = date && date.toDateString() === new Date().toDateString();

                return (
                  <button
                    key={idx}
                    onClick={() => date && setSelectedDate(date)}
                    className={`aspect-square rounded-lg flex flex-col items-center justify-center text-sm relative ${
                      !date ? 'opacity-0' :
                      holiday?.type === 'closed' ? 'bg-red-500/20 text-red-400' :
                      holiday?.type === 'special_hours' ? 'bg-yellow-500/20 text-yellow-400' :
                      special?.type === 'extended' ? 'bg-green-500/20 text-green-400' :
                      special?.type === 'reduced' ? 'bg-orange-500/20 text-orange-400' :
                      isToday ? 'bg-pink-600 text-white' :
                      'bg-gray-700/50 text-gray-300'
                    }`}
                    disabled={!date}
                  >
                    {date && (
                      <>
                        <span>{date.getDate()}</span>
                        {(holiday || special) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-current absolute bottom-1" />
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mt-4 text-xs">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-500/50 rounded mr-1" />
                <span className="text-gray-400">Closed</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500/50 rounded mr-1" />
                <span className="text-gray-400">Special Hours</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500/50 rounded mr-1" />
                <span className="text-gray-400">Extended</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-orange-500/50 rounded mr-1" />
                <span className="text-gray-400">Reduced</span>
              </div>
            </div>
          </div>

          {/* Selected Date Details */}
          {selectedDate && (
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-bold mb-2">
                {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </h4>
              {(() => {
                const holiday = isHoliday(selectedDate);
                const special = isSpecialDay(selectedDate);
                if (holiday) {
                  return (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <p className="text-red-400 font-medium">{holiday.name}</p>
                      <p className="text-gray-300 text-sm">
                        {holiday.type === 'closed' ? 'Store Closed' : `Special Hours: ${holiday.hours?.open} - ${holiday.hours?.close}`}
                      </p>
                    </div>
                  );
                } else if (special) {
                  return (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                      <p className="text-green-400 font-medium">{special.name}</p>
                      <p className="text-gray-300 text-sm">
                        {special.type === 'extended' ? 'Extended' : 'Reduced'} Hours: {special.hours.open} - {special.hours.close}
                      </p>
                      {special.note && <p className="text-gray-400 text-xs mt-1">{special.note}</p>}
                    </div>
                  );
                } else {
                  const dayName = dayNames[selectedDate.getDay()].toLowerCase();
                  const dayKey = dayName === 'sun' ? 'sunday' : dayName === 'sat' ? 'saturday' :
                    dayName === 'mon' ? 'monday' : dayName === 'tue' ? 'tuesday' :
                    dayName === 'wed' ? 'wednesday' : dayName === 'thu' ? 'thursday' : 'friday';
                  const hours = regularHours[dayKey];
                  return (
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <p className="text-gray-300">Regular Hours</p>
                      <p className="text-white font-medium">
                        {hours.isOpen ? `${hours.open} - ${hours.close}` : 'Closed'}
                      </p>
                    </div>
                  );
                }
              })()}

              <button
                onClick={() => setShowSpecialHoursModal(true)}
                className="w-full mt-3 bg-pink-600 text-white py-2 rounded-lg text-sm flex items-center justify-center"
              >
                <Clock size={16} className="mr-2" />
                Set Special Hours
              </button>
            </div>
          )}
        </div>
      )}

      {/* Regular Hours Tab */}
      {activeTab === 'hours' && (
        <div className="px-4 space-y-4">
          <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <Clock size={20} className="text-pink-400 mr-3 mt-0.5" />
              <div>
                <p className="text-pink-400 font-medium">Regular Store Hours</p>
                <p className="text-gray-300 text-sm">These hours apply unless overridden by holidays or special days</p>
              </div>
            </div>
          </div>

          {Object.entries(regularHours).map(([day, hours]) => (
            <div key={day} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    hours.isOpen ? 'bg-green-500/20' : 'bg-gray-700'
                  }`}>
                    {hours.isOpen ? (
                      <Store size={20} className="text-green-400" />
                    ) : (
                      <Moon size={20} className="text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-white font-medium capitalize">{day}</h4>
                    {hours.isOpen ? (
                      <p className="text-gray-400 text-sm">{hours.open} - {hours.close}</p>
                    ) : (
                      <p className="text-gray-500 text-sm">Closed</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-gray-700 rounded-lg">
                    <Edit2 size={16} className="text-gray-400" />
                  </button>
                  <div className={`w-12 h-6 rounded-full relative ${hours.isOpen ? 'bg-green-600' : 'bg-gray-600'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full ${hours.isOpen ? 'right-1' : 'left-1'}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Copy Hours */}
          <button className="w-full bg-gray-800 text-gray-400 py-3 rounded-xl flex items-center justify-center">
            <Copy size={18} className="mr-2" />
            Copy to All Weekdays
          </button>

          {/* Sync with GMB */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Globe size={20} className="text-blue-400 mr-3" />
                <div>
                  <p className="text-white font-medium">Google My Business</p>
                  <p className="text-gray-400 text-sm">Sync store hours</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
                <RefreshCw size={14} className="mr-1" />
                Sync
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Holidays Tab */}
      {activeTab === 'holidays' && (
        <div className="px-4 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">{holidays.length + specialDays.length} events configured</p>
            <button
              onClick={() => setShowHolidayModal(true)}
              className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm flex items-center"
            >
              <Plus size={16} className="mr-1" />
              Add
            </button>
          </div>

          {/* Holidays */}
          <h3 className="text-white font-bold">Holidays</h3>
          {holidays.map(holiday => (
            <div key={holiday.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-white font-bold">{holiday.name}</h4>
                  <p className="text-gray-400 text-sm">{holiday.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {holiday.recurring && (
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded text-xs">
                      Recurring
                    </span>
                  )}
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    holiday.type === 'closed' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {holiday.type === 'closed' ? 'Closed' : 'Special Hours'}
                  </span>
                </div>
              </div>

              {holiday.type === 'special_hours' && (
                <div className="bg-gray-700/50 rounded-lg p-2 mb-2">
                  <p className="text-gray-300 text-sm">
                    Hours: {holiday.hours.open} - {holiday.hours.close}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm">
                  {holiday.notifyCustomers && (
                    <span className="text-green-400 flex items-center">
                      <Bell size={14} className="mr-1" />
                      Notify customers
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-700 rounded-lg">
                    <Edit2 size={14} className="text-gray-400" />
                  </button>
                  <button className="p-2 bg-gray-700 rounded-lg">
                    <Trash2 size={14} className="text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Special Days */}
          <h3 className="text-white font-bold mt-6">Special Days</h3>
          {specialDays.map(special => (
            <div key={special.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-white font-bold">{special.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {special.date || `${special.dateRange.start} to ${special.dateRange.end}`}
                  </p>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  special.type === 'extended' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {special.type === 'extended' ? 'Extended Hours' : 'Reduced Hours'}
                </span>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-2 mb-2">
                <p className="text-gray-300 text-sm">
                  Hours: {special.hours.open} - {special.hours.close}
                </p>
                {special.note && <p className="text-gray-400 text-xs mt-1">{special.note}</p>}
              </div>

              <div className="flex justify-end space-x-2">
                <button className="p-2 bg-gray-700 rounded-lg">
                  <Edit2 size={14} className="text-gray-400" />
                </button>
                <button className="p-2 bg-gray-700 rounded-lg">
                  <Trash2 size={14} className="text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Holiday Modal */}
      {showHolidayModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-gray-800 w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Add Holiday / Special Day</h3>

            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm block mb-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="e.g., Independence Day"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Date</label>
                <input
                  type="date"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Type</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                  <option value="closed">Store Closed</option>
                  <option value="special_hours">Special Hours</option>
                  <option value="extended">Extended Hours</option>
                  <option value="reduced">Reduced Hours</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 text-sm block mb-1">Open Time</label>
                  <input
                    type="time"
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-1">Close Time</label>
                  <input
                    type="time"
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Recurring yearly</span>
                <div className="w-12 h-6 bg-pink-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Notify customers</span>
                <div className="w-12 h-6 bg-pink-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowHolidayModal(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowHolidayModal(false)}
                className="flex-1 bg-pink-600 text-white py-3 rounded-xl font-bold"
              >
                Add Holiday
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default MerchantHolidayCalendar;
