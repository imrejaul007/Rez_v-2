import React, { useState } from 'react';
import {
  ArrowLeft, QrCode, Printer, FileText, Image, MapPin,
  TrendingUp, Eye, ShoppingCart, Download, Plus, Edit2,
  Copy, ChevronRight, CheckCircle, Calendar, Users,
  Tag, Gift, Percent, Smartphone, Camera, Share2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantOfflineMarketing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('campaigns');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const stats = {
    totalScans: 12456,
    uniqueUsers: 8934,
    conversions: 1234,
    revenue: 456000,
    activeCampaigns: 5,
    printedMaterials: 15000
  };

  const campaigns = [
    {
      id: 1,
      name: 'Table Tent QR - Diwali Offer',
      type: 'table_tent',
      status: 'active',
      qrCode: 'REZ-TT-001',
      scans: 3456,
      uniqueUsers: 2345,
      conversions: 456,
      revenue: 125000,
      startDate: '2024-10-25',
      endDate: '2024-11-05',
      locations: ['Store 1', 'Store 2']
    },
    {
      id: 2,
      name: 'Counter Standee - Loyalty Sign Up',
      type: 'standee',
      status: 'active',
      qrCode: 'REZ-ST-002',
      scans: 2345,
      uniqueUsers: 1890,
      conversions: 567,
      revenue: 89000,
      startDate: '2024-11-01',
      endDate: '2024-11-30',
      locations: ['All Stores']
    },
    {
      id: 3,
      name: 'Bill Print Offer',
      type: 'bill',
      status: 'active',
      qrCode: 'REZ-BL-003',
      scans: 4567,
      uniqueUsers: 3456,
      conversions: 890,
      revenue: 156000,
      startDate: '2024-10-15',
      endDate: '2024-12-31',
      locations: ['POS Integrated']
    },
    {
      id: 4,
      name: 'Flyer Distribution - New Area',
      type: 'flyer',
      status: 'active',
      qrCode: 'REZ-FL-004',
      scans: 1234,
      uniqueUsers: 987,
      conversions: 123,
      revenue: 45000,
      startDate: '2024-11-01',
      endDate: '2024-11-15',
      locations: ['Andheri West', 'Bandra']
    },
    {
      id: 5,
      name: 'Window Poster - Weekend Special',
      type: 'poster',
      status: 'paused',
      qrCode: 'REZ-PS-005',
      scans: 890,
      uniqueUsers: 678,
      conversions: 89,
      revenue: 23000,
      startDate: '2024-10-01',
      endDate: '2024-10-31',
      locations: ['Store 1']
    }
  ];

  const materialTypes = [
    { id: 'table_tent', name: 'Table Tent', description: 'Place on tables for dine-in', icon: Tag },
    { id: 'standee', name: 'Counter Standee', description: 'Display at checkout counter', icon: FileText },
    { id: 'poster', name: 'Poster/Banner', description: 'Wall or window display', icon: Image },
    { id: 'flyer', name: 'Flyer/Leaflet', description: 'For distribution', icon: Share2 },
    { id: 'bill', name: 'Bill Print', description: 'QR on receipts', icon: Printer },
    { id: 'sticker', name: 'QR Sticker', description: 'Stick anywhere', icon: QrCode }
  ];

  const qrCodes = [
    {
      id: 1,
      code: 'REZ-MAIN-001',
      name: 'Main Store QR',
      purpose: 'General Store Visit',
      scans: 5678,
      active: true
    },
    {
      id: 2,
      code: 'REZ-MENU-002',
      name: 'Digital Menu',
      purpose: 'View Menu',
      scans: 3456,
      active: true
    },
    {
      id: 3,
      code: 'REZ-PAY-003',
      name: 'Scan & Pay',
      purpose: 'Payment QR',
      scans: 8934,
      active: true
    },
    {
      id: 4,
      code: 'REZ-REVIEW-004',
      name: 'Review Us',
      purpose: 'Leave a Review',
      scans: 1234,
      active: true
    }
  ];

  const getTypeIcon = (type) => {
    const material = materialTypes.find(m => m.id === type);
    return material?.icon || QrCode;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'paused':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'ended':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

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
                <QrCode size={24} className="mr-2" />
                Offline Marketing
              </h1>
              <p className="text-pink-200 text-sm">QR codes, flyers & print campaigns</p>
            </div>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-white text-pink-600 px-4 py-2 rounded-lg font-bold text-sm"
          >
            + Create
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(stats.totalScans/1000).toFixed(1)}K</p>
            <p className="text-xs text-pink-200">Scans</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.conversions}</p>
            <p className="text-xs text-pink-200">Orders</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(stats.revenue/1000).toFixed(0)}K</p>
            <p className="text-xs text-pink-200">Revenue</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.activeCampaigns}</p>
            <p className="text-xs text-pink-200">Active</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'campaigns', label: 'Campaigns' },
            { id: 'qrcodes', label: 'QR Codes' },
            { id: 'templates', label: 'Templates' }
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

      {/* Campaigns Tab */}
      {activeTab === 'campaigns' && (
        <div className="px-4 space-y-4">
          {/* How It Works */}
          <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
            <h4 className="text-pink-400 font-medium mb-2">How Offline Marketing Works</h4>
            <div className="flex items-start space-x-4">
              <div className="text-center flex-1">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-1 text-white text-sm">1</div>
                <p className="text-gray-300 text-xs">Create QR</p>
              </div>
              <div className="text-center flex-1">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-1 text-white text-sm">2</div>
                <p className="text-gray-300 text-xs">Print Material</p>
              </div>
              <div className="text-center flex-1">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-1 text-white text-sm">3</div>
                <p className="text-gray-300 text-xs">Customer Scans</p>
              </div>
              <div className="text-center flex-1">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-1 text-white text-sm">4</div>
                <p className="text-gray-300 text-xs">Track ROI</p>
              </div>
            </div>
          </div>

          {campaigns.map(campaign => {
            const TypeIcon = getTypeIcon(campaign.type);
            return (
              <div key={campaign.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mr-3">
                      <TypeIcon size={20} className="text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{campaign.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(campaign.status)}`}>
                          {campaign.status}
                        </span>
                        <span className="text-gray-400 text-xs">{campaign.type.replace('_', ' ')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button className="p-2 bg-gray-700 rounded-lg">
                      <Download size={14} className="text-gray-400" />
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg">
                      <Edit2 size={14} className="text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* QR Preview */}
                <div className="flex items-center bg-gray-700/50 rounded-lg p-3 mb-3">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-3">
                    <QrCode size={40} className="text-gray-800" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{campaign.qrCode}</p>
                    <p className="text-gray-400 text-sm">Locations: {campaign.locations.join(', ')}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold text-sm">{campaign.scans.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">Scans</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold text-sm">{campaign.uniqueUsers.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">Users</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold text-sm">{campaign.conversions}</p>
                    <p className="text-gray-400 text-xs">Orders</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-green-400 font-bold text-sm">₹{(campaign.revenue/1000).toFixed(0)}K</p>
                    <p className="text-gray-400 text-xs">Revenue</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{campaign.startDate} → {campaign.endDate}</span>
                  <button className="text-pink-400 flex items-center">
                    View Details <ChevronRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* QR Codes Tab */}
      {activeTab === 'qrcodes' && (
        <div className="px-4 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">{qrCodes.length} QR codes</p>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
              <Plus size={16} className="mr-1" />
              Generate QR
            </button>
          </div>

          {qrCodes.map(qr => (
            <div key={qr.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center">
                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mr-4">
                  <QrCode size={56} className="text-gray-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold">{qr.name}</h3>
                  <p className="text-gray-400 text-sm">{qr.purpose}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-pink-400 text-sm">{qr.scans.toLocaleString()} scans</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${qr.active ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                      {qr.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 mt-3">
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <Download size={14} className="mr-1" />
                  Download
                </button>
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <Copy size={14} className="mr-1" />
                  Copy Link
                </button>
                <button className="flex-1 bg-pink-600 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <Printer size={14} className="mr-1" />
                  Print
                </button>
              </div>
            </div>
          ))}

          {/* QR Settings */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">QR Code Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Auto-redirect to offers page</span>
                <div className="w-12 h-6 bg-pink-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Capture phone number on scan</span>
                <div className="w-12 h-6 bg-pink-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Track location of scans</span>
                <div className="w-12 h-6 bg-gray-600 rounded-full relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="px-4 space-y-4">
          <p className="text-gray-400 text-sm">Print-ready templates with your QR codes</p>

          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Table Tent', size: 'A5', preview: 'table-tent' },
              { name: 'Counter Standee', size: 'A4', preview: 'standee' },
              { name: 'Wall Poster', size: 'A3', preview: 'poster' },
              { name: 'Flyer', size: 'A5', preview: 'flyer' },
              { name: 'Window Sticker', size: '20x20cm', preview: 'sticker' },
              { name: 'Bill Footer', size: '80mm', preview: 'bill' }
            ].map((template, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="aspect-[3/4] bg-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <QrCode size={32} className="text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-400 text-xs">{template.name}</p>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-white font-medium text-sm">{template.name}</p>
                  <p className="text-gray-400 text-xs">Size: {template.size}</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="flex-1 bg-gray-700 text-white py-1.5 rounded text-xs">
                      Customize
                    </button>
                    <button className="flex-1 bg-pink-600 text-white py-1.5 rounded text-xs">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Design */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-2">Need Custom Design?</h3>
            <p className="text-gray-400 text-sm mb-3">
              Our design team can create custom marketing materials for your brand
            </p>
            <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold">
              Request Custom Design
            </button>
          </div>
        </div>
      )}

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-gray-800 w-full rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Create Offline Campaign</h3>

            {!selectedMaterial ? (
              <>
                <p className="text-gray-400 text-sm mb-4">Select marketing material type</p>
                <div className="grid grid-cols-2 gap-3">
                  {materialTypes.map(type => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedMaterial(type.id)}
                        className="bg-gray-700 rounded-xl p-4 text-left hover:border-2 hover:border-pink-500"
                      >
                        <Icon size={24} className="text-pink-400 mb-2" />
                        <p className="text-white font-medium">{type.name}</p>
                        <p className="text-gray-400 text-xs">{type.description}</p>
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm block mb-1">Campaign Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                    placeholder="e.g., Winter Sale Table Tent"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-1">Offer/Promotion</label>
                  <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                    <option>Select an offer...</option>
                    <option>20% Off First Order</option>
                    <option>Free Delivery</option>
                    <option>Buy 1 Get 1</option>
                    <option>Loyalty Points 2X</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-1">Landing Page</label>
                  <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                    <option>Store Page (Default)</option>
                    <option>Specific Offer Page</option>
                    <option>Menu/Catalog</option>
                    <option>Booking Page</option>
                    <option>Custom URL</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-1">Locations</label>
                  <div className="flex flex-wrap gap-2">
                    {['Store 1', 'Store 2', 'Store 3', 'All Stores'].map(loc => (
                      <button key={loc} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-gray-400 text-sm block mb-1">Start Date</label>
                    <input type="date" className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-1">End Date</label>
                    <input type="date" className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white" />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-1">Print Quantity</label>
                  <input
                    type="number"
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                    placeholder="e.g., 500"
                  />
                </div>
              </div>
            )}

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setSelectedMaterial(null);
                }}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              {selectedMaterial && (
                <button className="flex-1 bg-pink-600 text-white py-3 rounded-xl font-bold">
                  Create & Generate QR
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default MerchantOfflineMarketing;
