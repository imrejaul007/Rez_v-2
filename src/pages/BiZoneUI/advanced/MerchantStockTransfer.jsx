import { useState } from 'react';
import { ArrowLeftRight, MapPin, Package, Plus, Search, Send, CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantStockTransfer() {
  const [activeTab, setActiveTab] = useState('pending');
  const [showNewTransfer, setShowNewTransfer] = useState(false);
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');

  // Mock data
  const warehouses = [
    { id: 'WH001', name: 'Main Warehouse', location: 'Sector 18, Noida', stock: 1250 },
    { id: 'WH002', name: 'Central Store', location: 'Connaught Place, Delhi', stock: 890 },
    { id: 'WH003', name: 'South Branch', location: 'Saket, Delhi', stock: 650 },
    { id: 'WH004', name: 'North Hub', location: 'Rohini, Delhi', stock: 420 }
  ];

  const transfers = [
    {
      id: 'TR001',
      from: 'Main Warehouse',
      to: 'Central Store',
      items: 45,
      value: 125000,
      status: 'pending',
      requestedBy: 'Rajesh Kumar',
      requestDate: '2024-01-15',
      expectedDate: '2024-01-18'
    },
    {
      id: 'TR002',
      from: 'Central Store',
      to: 'South Branch',
      items: 32,
      value: 89000,
      status: 'in_transit',
      requestedBy: 'Priya Sharma',
      requestDate: '2024-01-14',
      expectedDate: '2024-01-17',
      trackingNumber: 'TRK987654321'
    },
    {
      id: 'TR003',
      from: 'Main Warehouse',
      to: 'North Hub',
      items: 28,
      value: 65000,
      status: 'completed',
      requestedBy: 'Amit Verma',
      requestDate: '2024-01-12',
      completedDate: '2024-01-14'
    },
    {
      id: 'TR004',
      from: 'South Branch',
      to: 'Main Warehouse',
      items: 15,
      value: 42000,
      status: 'rejected',
      requestedBy: 'Neha Singh',
      requestDate: '2024-01-13',
      rejectionReason: 'Insufficient stock at source'
    }
  ];

  const stats = {
    pending: transfers.filter(t => t.status === 'pending').length,
    inTransit: transfers.filter(t => t.status === 'in_transit').length,
    completed: transfers.filter(t => t.status === 'completed').length,
    totalValue: transfers.reduce((sum, t) => sum + t.value, 0)
  };

  const filteredTransfers = transfers.filter(t =>
    activeTab === 'all' || t.status === activeTab
  );

  const getStatusBadge = (status) => {
    const badges = {
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock, label: 'Pending Approval' },
      in_transit: { bg: 'bg-blue-100', text: 'text-blue-800', icon: ArrowLeftRight, label: 'In Transit' },
      completed: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle, label: 'Completed' },
      rejected: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle, label: 'Rejected' }
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
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
          <div className="flex items-center gap-3">
            <ArrowLeftRight className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Stock Transfer Management</h1>
              <p className="text-blue-100">Transfer inventory between warehouses and stores</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-yellow-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-yellow-600">Pending Approval</div>
                  <div className="text-2xl font-bold text-yellow-900 mt-1">{stats.pending}</div>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg border border-blue-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-blue-600">In Transit</div>
                  <div className="text-2xl font-bold text-blue-900 mt-1">{stats.inTransit}</div>
                </div>
                <ArrowLeftRight className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-green-600">Completed</div>
                  <div className="text-2xl font-bold text-green-900 mt-1">{stats.completed}</div>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg p-4 text-white">
              <div className="text-sm text-blue-100">Total Transfer Value</div>
              <div className="text-2xl font-bold mt-1">₹{(stats.totalValue / 100000).toFixed(1)}L</div>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {['all', 'pending', 'in_transit', 'completed'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowNewTransfer(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-5 h-5" />
                New Transfer Request
              </button>
            </div>
          </div>

          {/* Transfers List */}
          <div className="space-y-4">
            {filteredTransfers.map(transfer => (
              <div key={transfer.id} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">Transfer #{transfer.id}</h3>
                      {getStatusBadge(transfer.status)}
                    </div>
                    <div className="text-sm text-gray-600">
                      Requested by {transfer.requestedBy} on {transfer.requestDate}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">₹{transfer.value.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">{transfer.items} items</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">From</div>
                      <div className="font-medium text-gray-900">{transfer.from}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">To</div>
                      <div className="font-medium text-gray-900">{transfer.to}</div>
                    </div>
                  </div>
                </div>

                {transfer.trackingNumber && (
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-blue-900">Tracking Number</div>
                      <div className="font-mono text-sm font-medium text-blue-600">{transfer.trackingNumber}</div>
                    </div>
                  </div>
                )}

                {transfer.rejectionReason && (
                  <div className="bg-red-50 border border-red-100 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <div className="text-sm text-red-900">{transfer.rejectionReason}</div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                    View Details
                  </button>
                  {transfer.status === 'pending' && (
                    <>
                      <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">
                        Approve
                      </button>
                      <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium">
                        Reject
                      </button>
                    </>
                  )}
                  {transfer.status === 'in_transit' && (
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                      Track Shipment
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredTransfers.length === 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <Package className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No transfers found</p>
            </div>
          )}
        </div>
      </div>

      {/* New Transfer Modal */}
      {showNewTransfer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Create New Transfer Request</h2>
              <p className="text-sm text-gray-600 mt-1">Transfer stock between your locations</p>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Source Location</label>
                  <select
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select source</option>
                    {warehouses.map(wh => (
                      <option key={wh.id} value={wh.id}>{wh.name} - {wh.location}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination Location</label>
                  <select
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select destination</option>
                    {warehouses.map(wh => (
                      <option key={wh.id} value={wh.id}>{wh.name} - {wh.location}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Products to Transfer</label>
                <div className="border border-gray-300 rounded-lg p-3">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Plus className="w-4 h-4" />
                    Add Products
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transfer Notes</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Add any special instructions or notes..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Transfer Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowNewTransfer(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Send className="w-4 h-4 inline mr-2" />
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Backend API endpoints needed:
// GET /api/merchant/stock-transfers - List all transfers
// POST /api/merchant/stock-transfers - Create new transfer
// PUT /api/merchant/stock-transfers/:id/approve - Approve transfer
// PUT /api/merchant/stock-transfers/:id/reject - Reject transfer
// GET /api/merchant/warehouses - List warehouses
// GET /api/merchant/stock-transfers/:id/track - Track shipment
