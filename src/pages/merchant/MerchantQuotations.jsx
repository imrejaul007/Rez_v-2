import React, { useState } from 'react';
import {
  ArrowLeft, Plus, Search, Filter, FileText, Send, Check, X,
  Clock, ChevronRight, Copy, Download, Edit, Trash2, ArrowRight,
  Building, Phone, Mail, Calendar, IndianRupee, Percent
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantQuotations = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedQuotation, setSelectedQuotation] = useState(null);

  const [quotations, setQuotations] = useState([
    {
      id: 'QT001',
      customer: 'ABC Corporation',
      phone: '9876543210',
      email: 'procurement@abc.com',
      items: [
        { name: 'Catering - Veg Thali', qty: 100, price: 250, total: 25000 },
        { name: 'Catering - Non-Veg Thali', qty: 50, price: 350, total: 17500 },
        { name: 'Beverages Package', qty: 150, price: 50, total: 7500 },
      ],
      subtotal: 50000,
      discount: 5000,
      tax: 8100,
      total: 53100,
      status: 'pending',
      createdAt: '28 Dec 2024',
      validUntil: '05 Jan 2025',
      notes: 'Corporate event catering for 150 pax'
    },
    {
      id: 'QT002',
      customer: 'Wedding Planners Co.',
      phone: '9876543211',
      email: 'events@weddingplanners.com',
      items: [
        { name: 'Wedding Menu - Premium', qty: 500, price: 800, total: 400000 },
        { name: 'Decoration Package', qty: 1, price: 50000, total: 50000 },
      ],
      subtotal: 450000,
      discount: 45000,
      tax: 72900,
      total: 477900,
      status: 'accepted',
      createdAt: '25 Dec 2024',
      validUntil: '10 Jan 2025',
      notes: 'Wedding reception - 500 guests'
    },
    {
      id: 'QT003',
      customer: 'Tech Startup Inc.',
      phone: '9876543212',
      email: 'admin@techstartup.com',
      items: [
        { name: 'Daily Lunch - Veg', qty: 30, price: 150, total: 4500 },
        { name: 'Daily Lunch - Non-Veg', qty: 20, price: 180, total: 3600 },
      ],
      subtotal: 8100,
      discount: 0,
      tax: 1458,
      total: 9558,
      status: 'expired',
      createdAt: '15 Dec 2024',
      validUntil: '22 Dec 2024',
      notes: 'Monthly office lunch subscription inquiry'
    },
    {
      id: 'QT004',
      customer: 'Birthday Party Client',
      phone: '9876543213',
      email: 'personal@gmail.com',
      items: [
        { name: 'Party Package - 50 pax', qty: 1, price: 25000, total: 25000 },
        { name: 'Birthday Cake', qty: 1, price: 2500, total: 2500 },
      ],
      subtotal: 27500,
      discount: 2500,
      tax: 4500,
      total: 29500,
      status: 'converted',
      createdAt: '20 Dec 2024',
      validUntil: '27 Dec 2024',
      invoiceId: 'INV-2024-0458',
      notes: 'Birthday party for 50 guests'
    },
  ]);

  const stats = {
    total: quotations.length,
    pending: quotations.filter(q => q.status === 'pending').length,
    accepted: quotations.filter(q => q.status === 'accepted').length,
    converted: quotations.filter(q => q.status === 'converted').length,
    totalValue: quotations.filter(q => q.status === 'pending' || q.status === 'accepted').reduce((sum, q) => sum + q.total, 0)
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'accepted': return 'bg-green-500';
      case 'expired': return 'bg-gray-500';
      case 'converted': return 'bg-blue-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'pending': return 'Pending';
      case 'accepted': return 'Accepted';
      case 'expired': return 'Expired';
      case 'converted': return 'Converted to Invoice';
      case 'rejected': return 'Rejected';
      default: return status;
    }
  };

  const filteredQuotations = activeTab === 'all'
    ? quotations
    : quotations.filter(q => q.status === activeTab);

  const convertToInvoice = (quotation) => {
    alert(`Converting ${quotation.id} to Invoice...`);
    setQuotations(prev => prev.map(q =>
      q.id === quotation.id ? { ...q, status: 'converted', invoiceId: `INV-2024-${Math.floor(Math.random() * 9999)}` } : q
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Quotations</h1>
              <p className="text-cyan-200 text-sm">Estimates & Proposals</p>
            </div>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-white/20 px-4 py-2 rounded-lg flex items-center"
          >
            <Plus size={18} className="mr-1" /> Create
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.total}</p>
            <p className="text-xs text-cyan-200">Total</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.pending}</p>
            <p className="text-xs text-cyan-200">Pending</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.converted}</p>
            <p className="text-xs text-cyan-200">Converted</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(stats.totalValue/1000).toFixed(0)}K</p>
            <p className="text-xs text-cyan-200">Pipeline</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700 overflow-x-auto">
        {['all', 'pending', 'accepted', 'converted', 'expired'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 px-4 text-sm font-medium whitespace-nowrap capitalize ${
              activeTab === tab ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Quotation List */}
      <div className="p-4 space-y-3">
        {filteredQuotations.map(quotation => (
          <div key={quotation.id} className="bg-gray-800 rounded-xl overflow-hidden">
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center mb-1">
                    <span className="text-cyan-400 font-mono font-bold mr-2">{quotation.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full text-white ${getStatusColor(quotation.status)}`}>
                      {getStatusLabel(quotation.status)}
                    </span>
                  </div>
                  <h3 className="text-white font-medium">{quotation.customer}</h3>
                  <p className="text-gray-400 text-sm">{quotation.notes}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-lg">₹{quotation.total.toLocaleString()}</p>
                  <p className="text-gray-500 text-xs">{quotation.items.length} items</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <span>Created: {quotation.createdAt}</span>
                <span>Valid until: {quotation.validUntil}</span>
              </div>

              {/* Items Preview */}
              <div className="bg-gray-700/30 rounded-lg p-3 mb-3">
                {quotation.items.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm py-1">
                    <span className="text-gray-300">{item.name} x{item.qty}</span>
                    <span className="text-white">₹{item.total.toLocaleString()}</span>
                  </div>
                ))}
                {quotation.items.length > 2 && (
                  <p className="text-gray-500 text-xs mt-1">+{quotation.items.length - 2} more items</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                {quotation.status === 'pending' && (
                  <>
                    <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                      <Send size={14} className="mr-1" /> Send
                    </button>
                    <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                      <Edit size={14} className="mr-1" /> Edit
                    </button>
                  </>
                )}
                {quotation.status === 'accepted' && (
                  <button
                    onClick={() => convertToInvoice(quotation)}
                    className="flex-1 bg-cyan-600 text-white py-2 rounded-lg text-sm flex items-center justify-center"
                  >
                    <ArrowRight size={14} className="mr-1" /> Convert to Invoice
                  </button>
                )}
                {quotation.status === 'converted' && (
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <FileText size={14} className="mr-1" /> View Invoice {quotation.invoiceId}
                  </button>
                )}
                <button className="bg-gray-700 text-white p-2 rounded-lg">
                  <Download size={16} />
                </button>
                <button className="bg-gray-700 text-white p-2 rounded-lg">
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Quotation Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="w-full bg-gray-900 rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-bold">Create Quotation</h3>
              <button onClick={() => setShowCreateModal(false)}>
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Customer Details */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Customer Name *</label>
                <input
                  type="text"
                  placeholder="Company or Customer Name"
                  className="w-full bg-gray-800 text-white p-3 rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="9876543210"
                    className="w-full bg-gray-800 text-white p-3 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="w-full bg-gray-800 text-white p-3 rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Add Items */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-gray-400 text-sm">Items</label>
                <button className="text-cyan-400 text-sm flex items-center">
                  <Plus size={14} className="mr-1" /> Add Item
                </button>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-700">
                  <div>
                    <p className="text-white">Sample Item</p>
                    <p className="text-gray-400 text-sm">Qty: 10 × ₹500</p>
                  </div>
                  <p className="text-white font-medium">₹5,000</p>
                </div>
                <button className="w-full mt-3 border border-dashed border-gray-600 text-gray-400 py-3 rounded-lg flex items-center justify-center">
                  <Plus size={18} className="mr-2" /> Add More Items
                </button>
              </div>
            </div>

            {/* Discount & Validity */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Discount (%)</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-gray-800 text-white p-3 rounded-xl"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Valid Until</label>
                <input
                  type="date"
                  className="w-full bg-gray-800 text-white p-3 rounded-xl"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">Notes</label>
              <textarea
                placeholder="Any additional notes..."
                className="w-full bg-gray-800 text-white p-3 rounded-xl h-20"
              ></textarea>
            </div>

            {/* Create Button */}
            <button className="w-full bg-cyan-600 text-white py-4 rounded-xl font-bold">
              Create Quotation
            </button>
          </div>
        </div>
      )}

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantQuotations;
