import { useState } from 'react';
import { Truck, Package, MapPin, Search, Plus, Settings, CheckCircle, Clock, AlertCircle, Printer, Eye } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantShipping() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddCourier, setShowAddCourier] = useState(false);
  const [showShipmentDetail, setShowShipmentDetail] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState(null);

  const [courierPartners, setCourierPartners] = useState([
    { id: 1, name: 'Delhivery', logo: '📦', status: 'active', shipmentsHandled: 1245, avgDeliveryTime: '2.5 days', rating: 4.5, cost: 'Low' },
    { id: 2, name: 'Blue Dart', logo: '🚚', status: 'active', shipmentsHandled: 892, avgDeliveryTime: '1.8 days', rating: 4.8, cost: 'High' },
    { id: 3, name: 'Ecom Express', logo: '📮', status: 'active', shipmentsHandled: 567, avgDeliveryTime: '3.2 days', rating: 4.2, cost: 'Medium' },
    { id: 4, name: 'DTDC', logo: '🚛', status: 'inactive', shipmentsHandled: 234, avgDeliveryTime: '3.5 days', rating: 4.0, cost: 'Low' }
  ]);

  const [shipments, setShipments] = useState([
    {
      id: 'SHIP001',
      trackingNumber: 'DEL123456789IN',
      orderNumber: '#REZ2024001',
      customer: { name: 'Rahul Sharma', phone: '+91 98765 43210', address: 'A-101, Green Park, Delhi - 110016' },
      courier: 'Delhivery',
      courierLogo: '📦',
      status: 'in_transit',
      estimatedDelivery: '2024-01-17',
      shippedDate: '2024-01-15',
      weight: '1.2 kg',
      dimensions: '30x20x10 cm',
      trackingHistory: [
        { status: 'Picked Up', timestamp: '2024-01-15 10:00 AM', location: 'Delhi Hub' },
        { status: 'In Transit', timestamp: '2024-01-15 06:30 PM', location: 'Delhi - Regional Sorting' },
        { status: 'Out for Delivery', timestamp: '2024-01-16 08:00 AM', location: 'Green Park' }
      ]
    },
    {
      id: 'SHIP002',
      trackingNumber: 'BD987654321IN',
      orderNumber: '#REZ2024002',
      customer: { name: 'Priya Patel', phone: '+91 87654 32109', address: 'B-202, Bandra West, Mumbai - 400050' },
      courier: 'Blue Dart',
      courierLogo: '🚚',
      status: 'delivered',
      estimatedDelivery: '2024-01-16',
      shippedDate: '2024-01-14',
      deliveredDate: '2024-01-16 02:30 PM',
      weight: '0.8 kg',
      dimensions: '25x15x8 cm',
      trackingHistory: [
        { status: 'Picked Up', timestamp: '2024-01-14 11:00 AM', location: 'Mumbai Hub' },
        { status: 'In Transit', timestamp: '2024-01-14 08:00 PM', location: 'Mumbai - City Sorting' },
        { status: 'Out for Delivery', timestamp: '2024-01-16 09:00 AM', location: 'Bandra West' },
        { status: 'Delivered', timestamp: '2024-01-16 02:30 PM', location: 'Bandra West' }
      ]
    },
    {
      id: 'SHIP003',
      trackingNumber: 'ECO555666777IN',
      orderNumber: '#REZ2024003',
      customer: { name: 'Amit Kumar', phone: '+91 76543 21098', address: 'C-303, Koramangala, Bangalore - 560034' },
      courier: 'Ecom Express',
      courierLogo: '📮',
      status: 'pending',
      estimatedDelivery: '2024-01-18',
      shippedDate: null,
      weight: '1.5 kg',
      dimensions: '35x25x12 cm',
      trackingHistory: []
    },
    {
      id: 'SHIP004',
      trackingNumber: 'DEL777888999IN',
      orderNumber: '#REZ2024004',
      customer: { name: 'Sneha Reddy', phone: '+91 65432 10987', address: 'D-404, Banjara Hills, Hyderabad - 500034' },
      courier: 'Delhivery',
      courierLogo: '📦',
      status: 'failed',
      estimatedDelivery: '2024-01-16',
      shippedDate: '2024-01-14',
      failedReason: 'Address not found',
      weight: '0.6 kg',
      dimensions: '20x15x5 cm',
      trackingHistory: [
        { status: 'Picked Up', timestamp: '2024-01-14 10:00 AM', location: 'Hyderabad Hub' },
        { status: 'Failed Delivery Attempt', timestamp: '2024-01-16 11:00 AM', location: 'Banjara Hills', reason: 'Address not found' }
      ]
    }
  ]);

  const stats = {
    totalShipments: shipments.length,
    pendingShipments: shipments.filter(s => s.status === 'pending').length,
    inTransitShipments: shipments.filter(s => s.status === 'in_transit').length,
    deliveredShipments: shipments.filter(s => s.status === 'delivered').length,
    failedShipments: shipments.filter(s => s.status === 'failed').length,
    avgDeliveryTime: 2.3,
    onTimeRate: 94.5
  };

  const filteredShipments = shipments.filter(shipment => {
    const matchesSearch = shipment.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         shipment.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         shipment.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || shipment.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const getStatusBadge = (status) => {
    const badges = {
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock, label: 'Pending Pickup' },
      in_transit: { bg: 'bg-blue-100', text: 'text-blue-800', icon: Truck, label: 'In Transit' },
      delivered: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle, label: 'Delivered' },
      failed: { bg: 'bg-red-100', text: 'text-red-800', icon: AlertCircle, label: 'Failed' }
    };
    const badge = badges[status];
    const Icon = badge.icon;
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
        <Icon className="w-3 h-3" />
        {badge.label}
      </span>
    );
  };

  return (
    <div className="p-6">
      <MerchantNav />
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Truck className="w-8 h-8 text-indigo-600" />
          Shipping & Logistics Management
        </h1>
        <p className="text-gray-600 mt-1">Manage courier partners, track shipments, and generate shipping labels</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Total Shipments</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{stats.totalShipments}</div>
        </div>
        <div className="bg-white rounded-lg border border-yellow-200 p-4">
          <div className="text-sm text-yellow-600">Pending Pickup</div>
          <div className="text-2xl font-bold text-yellow-900 mt-1">{stats.pendingShipments}</div>
        </div>
        <div className="bg-white rounded-lg border border-blue-200 p-4">
          <div className="text-sm text-blue-600">In Transit</div>
          <div className="text-2xl font-bold text-blue-900 mt-1">{stats.inTransitShipments}</div>
        </div>
        <div className="bg-white rounded-lg border border-green-200 p-4">
          <div className="text-sm text-green-600">Delivered</div>
          <div className="text-2xl font-bold text-green-900 mt-1">{stats.deliveredShipments}</div>
        </div>
        <div className="bg-white rounded-lg border border-red-200 p-4">
          <div className="text-sm text-red-600">Failed</div>
          <div className="text-2xl font-bold text-red-900 mt-1">{stats.failedShipments}</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Avg Delivery</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{stats.avgDeliveryTime}d</div>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-4 text-white">
          <div className="text-sm text-indigo-100">On-Time Rate</div>
          <div className="text-2xl font-bold mt-1">{stats.onTimeRate}%</div>
        </div>
      </div>

      {/* Courier Partners */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Courier Partners</h2>
          <button
            onClick={() => setShowAddCourier(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Courier
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courierPartners.map((courier) => (
            <div key={courier.id} className={`border-2 rounded-lg p-4 ${
              courier.status === 'active' ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{courier.logo}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  courier.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'
                }`}>
                  {courier.status}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{courier.name}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Shipments:</span>
                  <span className="font-medium text-gray-900">{courier.shipmentsHandled}</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Time:</span>
                  <span className="font-medium text-gray-900">{courier.avgDeliveryTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rating:</span>
                  <span className="font-medium text-gray-900">{courier.rating}⭐</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost:</span>
                  <span className={`font-medium ${
                    courier.cost === 'Low' ? 'text-green-600' :
                    courier.cost === 'Medium' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>{courier.cost}</span>
                </div>
              </div>
              <button className="w-full mt-3 px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-white text-sm flex items-center justify-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 flex gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by tracking number, order ID or customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Printer className="w-5 h-5" />
            Bulk Print Labels
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mt-4 border-t pt-4 overflow-x-auto">
          {['all', 'pending', 'in_transit', 'delivered', 'failed'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Shipments Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tracking Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredShipments.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium font-mono text-indigo-600">{shipment.trackingNumber}</div>
                    <div className="text-xs text-gray-500">{shipment.weight} • {shipment.dimensions}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{shipment.orderNumber}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{shipment.customer.name}</div>
                    <div className="text-sm text-gray-500">{shipment.customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{shipment.courierLogo}</span>
                      <span className="text-sm text-gray-900">{shipment.courier}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{shipment.estimatedDelivery}</div>
                    {shipment.deliveredDate && (
                      <div className="text-xs text-green-600">Delivered: {shipment.deliveredDate}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(shipment.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedShipment(shipment);
                          setShowShipmentDetail(true);
                        }}
                        className="p-1 text-gray-600 hover:text-indigo-600"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-600 hover:text-indigo-600">
                        <Printer className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredShipments.length === 0 && (
          <div className="text-center py-12">
            <Truck className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No shipments found</p>
          </div>
        )}
      </div>

      {/* Shipment Detail Modal */}
      {showShipmentDetail && selectedShipment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Tracking: {selectedShipment.trackingNumber}</h2>
                  <p className="text-sm text-gray-600 mt-1">Order: {selectedShipment.orderNumber}</p>
                </div>
                {getStatusBadge(selectedShipment.status)}
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Courier & Delivery Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Courier Partner</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{selectedShipment.courierLogo}</span>
                      <div>
                        <div className="font-medium text-gray-900">{selectedShipment.courier}</div>
                        <div className="text-sm text-gray-600">Track: {selectedShipment.trackingNumber}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Delivery Details</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipped:</span>
                      <span className="text-gray-900">{selectedShipment.shippedDate || 'Pending'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Est. Delivery:</span>
                      <span className="text-gray-900">{selectedShipment.estimatedDelivery}</span>
                    </div>
                    {selectedShipment.deliveredDate && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivered:</span>
                        <span className="text-green-600 font-medium">{selectedShipment.deliveredDate}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Customer & Address */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Delivery Address</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="font-medium text-gray-900">{selectedShipment.customer.name}</div>
                  <div className="text-sm text-gray-600">{selectedShipment.customer.phone}</div>
                  <div className="flex items-start gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div className="text-sm text-gray-900">{selectedShipment.customer.address}</div>
                  </div>
                </div>
              </div>

              {/* Package Info */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Package Details</h3>
                <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Weight</div>
                    <div className="text-sm font-medium text-gray-900 mt-1">{selectedShipment.weight}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Dimensions</div>
                    <div className="text-sm font-medium text-gray-900 mt-1">{selectedShipment.dimensions}</div>
                  </div>
                </div>
              </div>

              {/* Tracking History */}
              {selectedShipment.trackingHistory && selectedShipment.trackingHistory.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Tracking History</h3>
                  <div className="space-y-4">
                    {selectedShipment.trackingHistory.map((event, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${
                            index === 0 ? 'bg-indigo-600' : 'bg-gray-300'
                          }`} />
                          {index < selectedShipment.trackingHistory.length - 1 && (
                            <div className="w-0.5 h-full bg-gray-300 mt-1" />
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="font-medium text-gray-900">{event.status}</div>
                          <div className="text-sm text-gray-600 mt-1">{event.timestamp}</div>
                          <div className="text-sm text-gray-500">{event.location}</div>
                          {event.reason && (
                            <div className="text-sm text-red-600 mt-1">Reason: {event.reason}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Failed Reason */}
              {selectedShipment.status === 'failed' && selectedShipment.failedReason && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2">Delivery Failed</h3>
                  <p className="text-sm text-red-800">{selectedShipment.failedReason}</p>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-between">
              <button
                onClick={() => setShowShipmentDetail(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Printer className="w-4 h-4" />
                Print Shipping Label
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
