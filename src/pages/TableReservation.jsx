import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TableReservation = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const [partySize, setPartySize] = useState(2);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [specialRequests, setSpecialRequests] = useState('');

  // Mock restaurant data
  const [restaurant] = useState({
    id: restaurantId || '1',
    name: 'The Grand Kitchen',
    image: '🍽️',
    cuisine: 'Multi-Cuisine',
    rating: 4.5,
    address: 'Lower Parel, Mumbai',
    openingHours: '12:00 PM - 11:00 PM',
    avgCost: 1500,
    tables: [
      { id: 1, name: 'Table 1', type: 'indoor', seats: 2, status: 'available', position: { x: 10, y: 10 } },
      { id: 2, name: 'Table 2', type: 'indoor', seats: 2, status: 'occupied', position: { x: 30, y: 10 } },
      { id: 3, name: 'Table 3', type: 'indoor', seats: 4, status: 'available', position: { x: 50, y: 10 } },
      { id: 4, name: 'Table 4', type: 'indoor', seats: 4, status: 'reserved', position: { x: 70, y: 10 } },
      { id: 5, name: 'Table 5', type: 'outdoor', seats: 2, status: 'available', position: { x: 10, y: 40 } },
      { id: 6, name: 'Table 6', type: 'outdoor', seats: 4, status: 'available', position: { x: 30, y: 40 } },
      { id: 7, name: 'VIP Room 1', type: 'private', seats: 8, status: 'available', position: { x: 50, y: 40 } },
      { id: 8, name: 'VIP Room 2', type: 'private', seats: 12, status: 'reserved', position: { x: 70, y: 40 } },
      { id: 9, name: 'Table 9', type: 'indoor', seats: 6, status: 'available', position: { x: 10, y: 70 } },
      { id: 10, name: 'Table 10', type: 'indoor', seats: 6, status: 'occupied', position: { x: 30, y: 70 } }
    ],
    amenities: ['WiFi', 'AC', 'Parking', 'Live Music', 'Outdoor Seating']
  });

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

  const getTableStatusColor = (status) => {
    const colors = {
      available: 'bg-green-100 border-green-500 text-green-700',
      occupied: 'bg-red-100 border-red-500 text-red-700',
      reserved: 'bg-yellow-100 border-yellow-500 text-yellow-700'
    };
    return colors[status] || 'bg-gray-100 border-gray-500';
  };

  const getTableTypeIcon = (type) => {
    const icons = {
      indoor: '🏠',
      outdoor: '🌳',
      private: '👑'
    };
    return icons[type] || '🪑';
  };

  const availableTables = restaurant.tables.filter(
    t => t.status === 'available' && t.seats >= partySize
  );

  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' })
    };
  };

  const handleReservation = () => {
    setShowConfirmation(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-20">
        <div className="flex items-center gap-3 p-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Reserve a Table</h1>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="bg-white p-4 border-b">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
            {restaurant.image}
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-lg">{restaurant.name}</h2>
            <p className="text-sm text-gray-500">{restaurant.cuisine} • {restaurant.address}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-yellow-500">⭐ {restaurant.rating}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 text-sm">₹{restaurant.avgCost} for two</span>
            </div>
          </div>
        </div>
      </div>

      {/* Party Size */}
      <div className="p-4 bg-white mt-2">
        <h3 className="font-semibold mb-3">Number of Guests</h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {partySizes.map(size => (
            <button
              key={size}
              onClick={() => setPartySize(size)}
              className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-medium ${
                partySize === size
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="p-4 bg-white mt-2">
        <h3 className="font-semibold mb-3">Select Date</h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {generateDates().map((date, idx) => {
            const { day, date: d, month } = formatDate(date);
            const isSelected = selectedDate.toDateString() === date.toDateString();
            return (
              <button
                key={idx}
                onClick={() => setSelectedDate(date)}
                className={`flex-shrink-0 w-16 py-3 rounded-xl text-center ${
                  isSelected
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <p className="text-xs">{day}</p>
                <p className="text-lg font-bold">{d}</p>
                <p className="text-xs">{month}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Selection */}
      <div className="p-4 bg-white mt-2">
        <h3 className="font-semibold mb-3">Select Time</h3>
        <div className="grid grid-cols-4 gap-2">
          {timeSlots.map(time => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-2 px-3 rounded-lg text-sm font-medium ${
                selectedTime === time
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Table Layout */}
      <div className="p-4 bg-white mt-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Choose Your Table</h3>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-green-500"></span> Available
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-red-500"></span> Occupied
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span> Reserved
            </span>
          </div>
        </div>

        {/* Floor Plan View */}
        <div className="bg-gray-100 rounded-xl p-4 relative min-h-64">
          <div className="grid grid-cols-4 gap-3">
            {restaurant.tables.map(table => {
              const isSelectable = table.status === 'available' && table.seats >= partySize;
              const isSelected = selectedTable?.id === table.id;

              return (
                <button
                  key={table.id}
                  onClick={() => isSelectable && setSelectedTable(table)}
                  disabled={!isSelectable}
                  className={`p-3 rounded-xl border-2 text-center transition-all ${
                    isSelected
                      ? 'bg-purple-100 border-purple-500 ring-2 ring-purple-300'
                      : getTableStatusColor(table.status)
                  } ${!isSelectable ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}`}
                >
                  <div className="text-xl mb-1">{getTableTypeIcon(table.type)}</div>
                  <p className="text-xs font-medium">{table.name}</p>
                  <p className="text-xs text-gray-500">{table.seats} seats</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Table Legend */}
        <div className="flex items-center gap-4 mt-4 text-xs justify-center">
          <span className="flex items-center gap-1">🏠 Indoor</span>
          <span className="flex items-center gap-1">🌳 Outdoor</span>
          <span className="flex items-center gap-1">👑 Private</span>
        </div>
      </div>

      {/* Selected Table Info */}
      {selectedTable && (
        <div className="p-4 bg-white mt-2">
          <h3 className="font-semibold mb-3">Selected Table</h3>
          <div className="bg-purple-50 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                {getTableTypeIcon(selectedTable.type)}
              </div>
              <div>
                <p className="font-medium">{selectedTable.name}</p>
                <p className="text-sm text-gray-500 capitalize">
                  {selectedTable.type} • {selectedTable.seats} seats
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedTable(null)}
              className="text-red-500 text-sm"
            >
              Change
            </button>
          </div>
        </div>
      )}

      {/* Special Requests */}
      <div className="p-4 bg-white mt-2">
        <h3 className="font-semibold mb-3">Special Requests (Optional)</h3>
        <textarea
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          className="w-full border rounded-xl p-3 h-20"
          placeholder="Birthday celebration, high chair needed, dietary restrictions..."
        />
      </div>

      {/* Amenities */}
      <div className="p-4 bg-white mt-2">
        <h3 className="font-semibold mb-3">Amenities</h3>
        <div className="flex flex-wrap gap-2">
          {restaurant.amenities.map((amenity, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {amenity}
            </span>
          ))}
        </div>
      </div>

      {/* Reserve Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-gray-500">Reservation for</p>
            <p className="font-semibold">
              {partySize} guests • {formatDate(selectedDate).date} {formatDate(selectedDate).month}
              {selectedTime && ` • ${selectedTime}`}
            </p>
          </div>
        </div>
        <button
          onClick={handleReservation}
          disabled={!selectedTime || !selectedTable}
          className={`w-full py-4 rounded-xl font-semibold ${
            selectedTime && selectedTable
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {selectedTime && selectedTable
            ? 'Confirm Reservation'
            : 'Select time and table to continue'}
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white text-center">
              <div className="text-5xl mb-3">✅</div>
              <h2 className="text-xl font-bold">Reservation Confirmed!</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Restaurant</span>
                  <span className="font-medium">{restaurant.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date</span>
                  <span className="font-medium">
                    {formatDate(selectedDate).date} {formatDate(selectedDate).month}, {selectedDate.getFullYear()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Time</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Guests</span>
                  <span className="font-medium">{partySize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Table</span>
                  <span className="font-medium">{selectedTable?.name}</span>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-3 mb-4 text-sm text-yellow-700">
                ⏰ Please arrive 15 minutes before your reservation time. Table will be held for 15 minutes.
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate('/bookings')}
                  className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-medium"
                >
                  View My Bookings
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="flex-1 border border-gray-200 py-3 rounded-xl font-medium"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableReservation;
