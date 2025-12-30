import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Cloud, Sun, CloudRain, Eye, Edit2, Trash2, Sparkles } from 'lucide-react';

export default function OutfitCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPlanModal, setShowPlanModal] = useState(false);

  // Mock planned outfits
  const [plannedOutfits, setPlannedOutfits] = useState({
    '2025-01-18': {
      event: 'Team Meeting',
      eventType: 'work',
      weather: 'sunny',
      temperature: '24°C',
      outfit: [
        { type: 'top', name: 'White Formal Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=250&fit=crop' },
        { type: 'bottom', name: 'Black Trousers', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=250&fit=crop' },
        { type: 'shoes', name: 'Leather Oxfords', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=200&h=250&fit=crop' }
      ]
    },
    '2025-01-20': {
      event: 'Birthday Party',
      eventType: 'party',
      weather: 'cloudy',
      temperature: '22°C',
      outfit: [
        { type: 'top', name: 'Floral Shirt', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=200&h=250&fit=crop' },
        { type: 'bottom', name: 'Blue Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop' },
        { type: 'shoes', name: 'White Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop' }
      ]
    },
    '2025-01-25': {
      event: 'Wedding Function',
      eventType: 'wedding',
      weather: 'sunny',
      temperature: '26°C',
      outfit: [
        { type: 'ethnic', name: 'Maroon Kurta Set', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=200&h=250&fit=crop' },
        { type: 'accessories', name: 'Ethnic Footwear', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=200&h=250&fit=crop' }
      ]
    }
  });

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateStr);
  };

  const getDateKey = (day) => {
    return `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() &&
           currentDate.getMonth() === today.getMonth() &&
           currentDate.getFullYear() === today.getFullYear();
  };

  const eventTypeColors = {
    work: 'bg-blue-100 text-blue-700 border-blue-300',
    party: 'bg-purple-100 text-purple-700 border-purple-300',
    wedding: 'bg-pink-100 text-pink-700 border-pink-300',
    casual: 'bg-green-100 text-green-700 border-green-300',
    date: 'bg-red-100 text-red-700 border-red-300',
    travel: 'bg-orange-100 text-orange-700 border-orange-300'
  };

  const weatherIcons = {
    sunny: <Sun className="w-4 h-4" />,
    cloudy: <Cloud className="w-4 h-4" />,
    rainy: <CloudRain className="w-4 h-4" />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Outfit Calendar</h1>
              <p className="text-gray-500 mt-1">Plan your outfits 30 days ahead</p>
            </div>

            <button
              onClick={() => setShowPlanModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Plan Outfit
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={handlePrevMonth}
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <h2 className="text-2xl font-bold">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>

                  <button
                    onClick={handleNextMonth}
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Day Names */}
                <div className="grid grid-cols-7 gap-2">
                  {dayNames.map((day) => (
                    <div key={day} className="text-center text-sm font-medium py-2">
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="p-4">
                <div className="grid grid-cols-7 gap-2">
                  {/* Empty cells for days before month starts */}
                  {[...Array(startingDayOfWeek)].map((_, index) => (
                    <div key={`empty-${index}`} className="aspect-square" />
                  ))}

                  {/* Days of the month */}
                  {[...Array(daysInMonth)].map((_, index) => {
                    const day = index + 1;
                    const dateKey = getDateKey(day);
                    const hasOutfit = plannedOutfits[dateKey];
                    const isTodayDate = isToday(day);

                    return (
                      <button
                        key={day}
                        onClick={() => handleDateClick(day)}
                        className={`aspect-square rounded-xl border-2 p-2 transition-all hover:shadow-md ${
                          isTodayDate
                            ? 'border-purple-600 bg-purple-50'
                            : selectedDate === dateKey
                            ? 'border-pink-600 bg-pink-50'
                            : hasOutfit
                            ? 'border-gray-300 bg-gradient-to-br from-purple-50 to-pink-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-sm font-semibold text-gray-900 mb-1">{day}</div>

                        {hasOutfit && (
                          <div className="space-y-1">
                            <div className="flex gap-0.5">
                              {hasOutfit.outfit.slice(0, 3).map((item, idx) => (
                                <div key={idx} className="w-full aspect-square rounded overflow-hidden">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                            <div className={`text-xs px-1 py-0.5 rounded ${eventTypeColors[hasOutfit.eventType]} border text-center truncate`}>
                              {hasOutfit.event}
                            </div>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Event Types</h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(eventTypeColors).map(([type, colorClass]) => (
                  <div key={type} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded border ${colorClass}`} />
                    <span className="text-sm text-gray-600 capitalize">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outfit Detail Sidebar */}
          <div className="lg:col-span-1">
            {selectedDate && plannedOutfits[selectedDate] ? (
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden sticky top-4">
                <div className={`p-4 ${eventTypeColors[plannedOutfits[selectedDate].eventType]}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">
                      {new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      {weatherIcons[plannedOutfits[selectedDate].weather]}
                      <span>{plannedOutfits[selectedDate].temperature}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{plannedOutfits[selectedDate].event}</h3>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Planned Outfit</h4>
                  <div className="space-y-3">
                    {plannedOutfits[selectedDate].outfit.map((item, index) => (
                      <div key={index} className="flex gap-3 items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 capitalize">{item.type}</div>
                          <div className="font-medium text-gray-900">{item.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-6">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>

                  <button className="w-full mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Get AI Suggestions
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center sticky top-4">
                <CalendarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {selectedDate ? 'No Outfit Planned' : 'Select a Date'}
                </h3>
                <p className="text-gray-500 mb-4">
                  {selectedDate
                    ? 'Plan an outfit for this date'
                    : 'Click on a calendar date to view or plan an outfit'}
                </p>
                {selectedDate && (
                  <button
                    onClick={() => setShowPlanModal(true)}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all mx-auto"
                  >
                    <Plus className="w-5 h-5" />
                    Plan Outfit
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(plannedOutfits)
              .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
              .slice(0, 3)
              .map(([date, outfit]) => (
                <div key={date} className={`rounded-xl border-2 p-4 ${eventTypeColors[outfit.eventType]}`}>
                  <div className="text-sm font-medium mb-1">
                    {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                  <h3 className="font-bold mb-2">{outfit.event}</h3>
                  <div className="flex gap-1">
                    {outfit.outfit.slice(0, 3).map((item, idx) => (
                      <img
                        key={idx}
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 object-cover rounded"
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Plan Outfit Modal */}
      {showPlanModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Outfit</h2>

            <div className="space-y-4">
              {/* Event Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
                <input
                  type="text"
                  placeholder="e.g., Team Meeting, Birthday Party"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600">
                    <option>Work</option>
                    <option>Party</option>
                    <option>Wedding</option>
                    <option>Casual</option>
                    <option>Date</option>
                    <option>Travel</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>

              {/* AI Suggestion CTA */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Let AI Create Your Outfit</div>
                    <div className="text-sm text-gray-600">Get 3 complete outfit suggestions based on weather & occasion</div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg">
                    Get Suggestions
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowPlanModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg">
                Save Outfit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
