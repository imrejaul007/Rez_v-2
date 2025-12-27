import { useState } from 'react';
import { Grid3x3, Users, Clock, CheckCircle, XCircle, AlertCircle, Plus, Edit, Trash2, QrCode, Bell, DollarSign, Eye, MapPin, ArrowRight, RotateCw } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantTableManagement() {
  const [selectedFloor, setSelectedFloor] = useState('ground');
  const [selectedTable, setSelectedTable] = useState(null);
  const [showAddTable, setShowAddTable] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid, list

  // Mock floor data
  const floors = [
    { id: 'ground', name: 'Ground Floor', tableCount: 15, activeOrders: 8 },
    { id: 'first', name: 'First Floor', tableCount: 12, activeOrders: 5 },
    { id: 'terrace', name: 'Terrace', tableCount: 8, activeOrders: 3 },
    { id: 'garden', name: 'Garden', tableCount: 6, activeOrders: 2 }
  ];

  // Mock table data with comprehensive states
  const [tables, setTables] = useState([
    {
      id: 'table-001',
      number: '1',
      floor: 'ground',
      capacity: 4,
      status: 'occupied', // available, occupied, reserved, cleaning, maintenance
      currentOrder: {
        orderId: 'ORD-001',
        customerName: 'Rahul Sharma',
        guestCount: 3,
        startTime: '12:30 PM',
        duration: 45, // minutes
        currentBill: 1250,
        server: 'Amit'
      },
      zone: 'Window Side',
      hasQRCode: true
    },
    {
      id: 'table-002',
      number: '2',
      floor: 'ground',
      capacity: 2,
      status: 'available',
      zone: 'Main Hall',
      hasQRCode: true
    },
    {
      id: 'table-003',
      number: '3',
      floor: 'ground',
      capacity: 6,
      status: 'reserved',
      reservation: {
        name: 'Priya Gupta',
        time: '2:00 PM',
        guestCount: 5,
        phone: '+91 98765 43210',
        specialRequest: 'Birthday celebration'
      },
      zone: 'Corner',
      hasQRCode: true
    },
    {
      id: 'table-004',
      number: '4',
      floor: 'ground',
      capacity: 4,
      status: 'cleaning',
      zone: 'Main Hall',
      hasQRCode: true
    },
    {
      id: 'table-005',
      number: '5',
      floor: 'ground',
      capacity: 4,
      status: 'occupied',
      currentOrder: {
        orderId: 'ORD-002',
        customerName: 'Neha Patel',
        guestCount: 4,
        startTime: '1:15 PM',
        duration: 20,
        currentBill: 890,
        server: 'Rohit'
      },
      zone: 'Window Side',
      hasQRCode: true
    },
    {
      id: 'table-006',
      number: '6',
      floor: 'ground',
      capacity: 8,
      status: 'available',
      zone: 'VIP Section',
      hasQRCode: true
    }
  ]);

  // Floor statistics
  const getFloorStats = (floorId) => {
    const floorTables = tables.filter(t => t.floor === floorId);
    return {
      total: floorTables.length,
      available: floorTables.filter(t => t.status === 'available').length,
      occupied: floorTables.filter(t => t.status === 'occupied').length,
      reserved: floorTables.filter(t => t.status === 'reserved').length,
      cleaning: floorTables.filter(t => t.status === 'cleaning').length
    };
  };

  const currentFloorStats = getFloorStats(selectedFloor);
  const currentFloorTables = tables.filter(t => t.floor === selectedFloor);

  // Table actions
  const markTableAvailable = (tableId) => {
    setTables(tables.map(t =>
      t.id === tableId ? { ...t, status: 'available', currentOrder: null, reservation: null } : t
    ));
  };

  const markTableCleaning = (tableId) => {
    setTables(tables.map(t =>
      t.id === tableId ? { ...t, status: 'cleaning' } : t
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'occupied':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'reserved':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'cleaning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'maintenance':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available':
        return <CheckCircle className="w-4 h-4" />;
      case 'occupied':
        return <Users className="w-4 h-4" />;
      case 'reserved':
        return <Clock className="w-4 h-4" />;
      case 'cleaning':
        return <RotateCw className="w-4 h-4" />;
      case 'maintenance':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <XCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Table Management</h1>
              <p className="text-gray-600">Real-time table status and restaurant floor management</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <QrCode className="w-5 h-5" />
                Generate QR Codes
              </button>
              <button
                onClick={() => setShowAddTable(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Table
              </button>
            </div>
          </div>
        </div>

        {/* Floor Selector */}
        <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
          {floors.map(floor => (
            <button
              key={floor.id}
              onClick={() => setSelectedFloor(floor.id)}
              className={`px-6 py-3 rounded-lg border-2 transition-all whitespace-nowrap ${
                selectedFloor === floor.id
                  ? 'bg-indigo-50 border-indigo-600 text-indigo-700'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="font-semibold">{floor.name}</div>
              <div className="text-sm mt-1">
                {floor.tableCount} tables • {floor.activeOrders} active
              </div>
            </button>
          ))}
        </div>

        {/* Floor Statistics */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Tables</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{currentFloorStats.total}</p>
              </div>
              <Grid3x3 className="w-8 h-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Available</p>
                <p className="text-2xl font-bold text-green-700 mt-1">{currentFloorStats.available}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600">Occupied</p>
                <p className="text-2xl font-bold text-red-700 mt-1">{currentFloorStats.occupied}</p>
              </div>
              <Users className="w-8 h-8 text-red-500" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Reserved</p>
                <p className="text-2xl font-bold text-blue-700 mt-1">{currentFloorStats.reserved}</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-600">Cleaning</p>
                <p className="text-2xl font-bold text-yellow-700 mt-1">{currentFloorStats.cleaning}</p>
              </div>
              <RotateCw className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="mb-4 flex justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'list' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {/* Table Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentFloorTables.map(table => (
              <div
                key={table.id}
                className={`bg-white rounded-lg border-2 p-4 cursor-pointer transition-all hover:shadow-lg ${
                  getStatusColor(table.status)
                }`}
                onClick={() => setSelectedTable(table)}
              >
                {/* Table Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Table {table.number}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      <Users className="w-4 h-4 inline mr-1" />
                      Capacity: {table.capacity}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                    getStatusColor(table.status)
                  }`}>
                    {getStatusIcon(table.status)}
                    {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
                  </div>
                </div>

                {/* Table Zone */}
                {table.zone && (
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {table.zone}
                  </div>
                )}

                {/* Occupied Info */}
                {table.status === 'occupied' && table.currentOrder && (
                  <div className="border-t border-gray-200 pt-3 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{table.currentOrder.customerName}</span>
                      <span className="text-gray-500">({table.currentOrder.guestCount} guests)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Started: {table.currentOrder.startTime}</span>
                      <span className="text-gray-400">•</span>
                      <span>{table.currentOrder.duration} min</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <DollarSign className="w-4 h-4" />
                      ₹{table.currentOrder.currentBill}
                    </div>
                    <div className="text-xs text-gray-500">
                      Server: {table.currentOrder.server}
                    </div>
                  </div>
                )}

                {/* Reserved Info */}
                {table.status === 'reserved' && table.reservation && (
                  <div className="border-t border-gray-200 pt-3 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span>{table.reservation.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{table.reservation.time}</span>
                      <span className="text-gray-400">•</span>
                      <span>{table.reservation.guestCount} guests</span>
                    </div>
                    {table.reservation.specialRequest && (
                      <div className="text-xs text-gray-500 italic">
                        {table.reservation.specialRequest}
                      </div>
                    )}
                  </div>
                )}

                {/* QR Code Indicator */}
                {table.hasQRCode && (
                  <div className="mt-3 pt-3 border-t border-gray-200 flex items-center gap-2 text-xs text-gray-500">
                    <QrCode className="w-4 h-4" />
                    QR Code Active
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Table</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentFloorTables.map(table => (
                  <tr key={table.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Table {table.number}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${
                        getStatusColor(table.status)
                      }`}>
                        {getStatusIcon(table.status)}
                        {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        {table.capacity}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{table.zone}</div>
                    </td>
                    <td className="px-6 py-4">
                      {table.status === 'occupied' && table.currentOrder && (
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">{table.currentOrder.customerName}</div>
                          <div className="text-gray-500">₹{table.currentOrder.currentBill} • {table.currentOrder.duration} min</div>
                        </div>
                      )}
                      {table.status === 'reserved' && table.reservation && (
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">{table.reservation.name}</div>
                          <div className="text-gray-500">{table.reservation.time}</div>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedTable(table)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {table.status === 'occupied' && (
                          <button
                            onClick={() => markTableCleaning(table.id)}
                            className="text-yellow-600 hover:text-yellow-900"
                          >
                            <RotateCw className="w-4 h-4" />
                          </button>
                        )}
                        {(table.status === 'cleaning' || table.status === 'reserved') && (
                          <button
                            onClick={() => markTableAvailable(table.id)}
                            className="text-green-600 hover:text-green-900"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Table Detail Modal */}
      {selectedTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Table {selectedTable.number} Details</h3>
              <button
                onClick={() => setSelectedTable(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold mt-1 ${
                  getStatusColor(selectedTable.status)
                }`}>
                  {selectedTable.status.charAt(0).toUpperCase() + selectedTable.status.slice(1)}
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-600">Capacity</p>
                <p className="font-medium">{selectedTable.capacity} persons</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Zone</p>
                <p className="font-medium">{selectedTable.zone}</p>
              </div>

              {selectedTable.currentOrder && (
                <>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Current Order</p>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Customer:</span> {selectedTable.currentOrder.customerName}</p>
                      <p><span className="text-gray-600">Guests:</span> {selectedTable.currentOrder.guestCount}</p>
                      <p><span className="text-gray-600">Start Time:</span> {selectedTable.currentOrder.startTime}</p>
                      <p><span className="text-gray-600">Duration:</span> {selectedTable.currentOrder.duration} minutes</p>
                      <p><span className="text-gray-600">Current Bill:</span> ₹{selectedTable.currentOrder.currentBill}</p>
                      <p><span className="text-gray-600">Server:</span> {selectedTable.currentOrder.server}</p>
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-2 pt-4">
                {selectedTable.status === 'occupied' && (
                  <button
                    onClick={() => {
                      markTableCleaning(selectedTable.id);
                      setSelectedTable(null);
                    }}
                    className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                  >
                    Mark for Cleaning
                  </button>
                )}
                {(selectedTable.status === 'cleaning' || selectedTable.status === 'reserved') && (
                  <button
                    onClick={() => {
                      markTableAvailable(selectedTable.id);
                      setSelectedTable(null);
                    }}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Mark Available
                  </button>
                )}
                <button
                  onClick={() => setSelectedTable(null)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
