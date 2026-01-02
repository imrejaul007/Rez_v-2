import React, { useState } from 'react';
import {
  ArrowLeft, FileText, Plus, Search, Filter, Download, Send,
  CheckCircle, XCircle, Clock, AlertCircle, QrCode, Copy,
  Eye, Printer, Share2, RefreshCw, Building2, ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantEInvoice = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('generated');
  const [showGenerate, setShowGenerate] = useState(false);

  const invoices = [
    {
      id: 'INV-2024-0156',
      irn: '1234567890abcdef1234567890abcdef12345678',
      customer: 'ABC Electronics Pvt Ltd',
      gstin: '29AABCU9603R1ZM',
      amount: 45600,
      tax: 8208,
      total: 53808,
      date: '2024-01-17',
      status: 'generated',
      ackNo: 'ACK123456789',
      ackDate: '2024-01-17 10:30:00'
    },
    {
      id: 'INV-2024-0155',
      irn: '9876543210fedcba9876543210fedcba98765432',
      customer: 'XYZ Trading Co',
      gstin: '27AADCX9603R1ZN',
      amount: 28400,
      tax: 5112,
      total: 33512,
      date: '2024-01-16',
      status: 'generated',
      ackNo: 'ACK123456788',
      ackDate: '2024-01-16 14:20:00'
    },
    {
      id: 'INV-2024-0154',
      irn: null,
      customer: 'PQR Industries',
      gstin: '24AABCP9603R1ZO',
      amount: 67800,
      tax: 12204,
      total: 80004,
      date: '2024-01-15',
      status: 'pending',
      error: null
    },
    {
      id: 'INV-2024-0153',
      irn: null,
      customer: 'LMN Enterprises',
      gstin: '29AABCL9603R1ZP',
      amount: 15200,
      tax: 2736,
      total: 17936,
      date: '2024-01-15',
      status: 'failed',
      error: 'Invalid GSTIN format'
    },
    {
      id: 'INV-2024-0152',
      irn: '5555555555555555555555555555555555555555',
      customer: 'DEF Solutions',
      gstin: '32AABCD9603R1ZQ',
      amount: 92000,
      tax: 16560,
      total: 108560,
      date: '2024-01-14',
      status: 'cancelled',
      cancelReason: 'Order cancelled by customer'
    }
  ];

  const stats = {
    generated: 156,
    pending: 8,
    failed: 3,
    cancelled: 2,
    totalValue: 2845000
  };

  const einvoiceSettings = {
    autoGenerate: true,
    threshold: 50000,
    apiConnected: true,
    lastSync: '2 mins ago'
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'generated': return 'bg-green-500/20 text-green-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      case 'cancelled': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'generated': return <CheckCircle size={16} />;
      case 'pending': return <Clock size={16} />;
      case 'failed': return <XCircle size={16} />;
      case 'cancelled': return <XCircle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const filteredInvoices = activeTab === 'all'
    ? invoices
    : invoices.filter(inv => inv.status === activeTab);

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
              <h1 className="text-xl font-bold">E-Invoice (IRN)</h1>
              <p className="text-blue-200 text-sm">GST E-Invoice Generation</p>
            </div>
          </div>
          <button
            onClick={() => setShowGenerate(true)}
            className="bg-white/20 p-2 rounded-lg"
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.generated}</p>
            <p className="text-xs text-blue-200">Generated</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.pending}</p>
            <p className="text-xs text-blue-200">Pending</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.failed}</p>
            <p className="text-xs text-blue-200">Failed</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">₹{(stats.totalValue/100000).toFixed(1)}L</p>
            <p className="text-xs text-blue-200">Total Value</p>
          </div>
        </div>

        {/* API Status */}
        <div className="bg-white/10 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-2 ${
              einvoiceSettings.apiConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'
            }`} />
            <span className="text-sm">
              {einvoiceSettings.apiConnected ? 'IRP Connected' : 'IRP Disconnected'}
            </span>
          </div>
          <span className="text-blue-200 text-xs">Last sync: {einvoiceSettings.lastSync}</span>
        </div>
      </div>

      {/* Auto Generate Setting */}
      <div className="p-4">
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-white font-bold">Auto Generate E-Invoice</h3>
              <p className="text-gray-400 text-sm">For B2B invoices above ₹{einvoiceSettings.threshold.toLocaleString()}</p>
            </div>
            <div className={`w-12 h-6 rounded-full relative cursor-pointer ${
              einvoiceSettings.autoGenerate ? 'bg-green-600' : 'bg-gray-600'
            }`}>
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                einvoiceSettings.autoGenerate ? 'right-1' : 'left-1'
              }`} />
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="px-4 pb-2">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by invoice, customer, GSTIN..."
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl"
            />
          </div>
          <button className="bg-gray-800 text-white px-4 rounded-xl">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {[
            { id: 'all', label: 'All' },
            { id: 'generated', label: 'Generated' },
            { id: 'pending', label: 'Pending' },
            { id: 'failed', label: 'Failed' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Invoices List */}
      <div className="px-4 space-y-3">
        {filteredInvoices.map(invoice => (
          <div key={invoice.id} className="bg-gray-800 rounded-xl overflow-hidden">
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <p className="text-white font-bold">{invoice.id}</p>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs flex items-center ${getStatusColor(invoice.status)}`}>
                      {getStatusIcon(invoice.status)}
                      <span className="ml-1 capitalize">{invoice.status}</span>
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{invoice.customer}</p>
                  <p className="text-gray-500 text-xs">GSTIN: {invoice.gstin}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">₹{invoice.total.toLocaleString()}</p>
                  <p className="text-gray-400 text-xs">Tax: ₹{invoice.tax.toLocaleString()}</p>
                </div>
              </div>

              {/* IRN Info */}
              {invoice.irn && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-green-400 text-xs font-medium">IRN Generated</span>
                    <button className="text-green-400">
                      <Copy size={14} />
                    </button>
                  </div>
                  <p className="text-gray-300 text-xs font-mono truncate">{invoice.irn}</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Ack: {invoice.ackNo} | {invoice.ackDate}
                  </p>
                </div>
              )}

              {/* Error Info */}
              {invoice.error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-3">
                  <div className="flex items-center">
                    <AlertCircle size={14} className="text-red-400 mr-2" />
                    <span className="text-red-400 text-sm">{invoice.error}</span>
                  </div>
                </div>
              )}

              {/* Cancel Reason */}
              {invoice.cancelReason && (
                <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-sm">Cancelled: {invoice.cancelReason}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs">{invoice.date}</span>
                <div className="flex space-x-2">
                  {invoice.status === 'generated' && (
                    <>
                      <button className="text-gray-400 p-1">
                        <QrCode size={18} />
                      </button>
                      <button className="text-gray-400 p-1">
                        <Printer size={18} />
                      </button>
                      <button className="text-gray-400 p-1">
                        <Download size={18} />
                      </button>
                      <button className="text-gray-400 p-1">
                        <Share2 size={18} />
                      </button>
                    </>
                  )}
                  {invoice.status === 'pending' && (
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm flex items-center">
                      <Send size={14} className="mr-1" />
                      Generate
                    </button>
                  )}
                  {invoice.status === 'failed' && (
                    <button className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm flex items-center">
                      <RefreshCw size={14} className="mr-1" />
                      Retry
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bulk Actions */}
      <div className="p-4">
        <h3 className="text-white font-bold mb-3">Bulk Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <Send size={24} className="mx-auto mb-2 text-blue-400" />
            <p className="text-white text-sm font-medium">Generate All Pending</p>
            <p className="text-gray-400 text-xs">{stats.pending} invoices</p>
          </button>
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <RefreshCw size={24} className="mx-auto mb-2 text-orange-400" />
            <p className="text-white text-sm font-medium">Retry Failed</p>
            <p className="text-gray-400 text-xs">{stats.failed} invoices</p>
          </button>
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <Download size={24} className="mx-auto mb-2 text-green-400" />
            <p className="text-white text-sm font-medium">Export All</p>
            <p className="text-gray-400 text-xs">JSON / Excel</p>
          </button>
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <Building2 size={24} className="mx-auto mb-2 text-purple-400" />
            <p className="text-white text-sm font-medium">IRP Settings</p>
            <p className="text-gray-400 text-xs">API Configuration</p>
          </button>
        </div>
      </div>

      {/* Generate Modal */}
      {showGenerate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-bold">Generate E-Invoice</h3>
                <button onClick={() => setShowGenerate(false)} className="text-gray-400">
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4">
              {/* Invoice Selection */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Select Invoice</label>
                <select className="w-full bg-gray-700 text-white p-3 rounded-xl">
                  <option>INV-2024-0157 - ₹45,000</option>
                  <option>INV-2024-0158 - ₹28,000</option>
                  <option>INV-2024-0159 - ₹92,000</option>
                </select>
              </div>

              {/* Customer GSTIN */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Customer GSTIN</label>
                <input
                  type="text"
                  placeholder="29AABCU9603R1ZM"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl uppercase"
                />
              </div>

              {/* Document Type */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Document Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-blue-600 text-white p-3 rounded-xl">
                    Invoice
                  </button>
                  <button className="bg-gray-700 text-gray-300 p-3 rounded-xl">
                    Credit Note
                  </button>
                </div>
              </div>

              {/* Supply Type */}
              <div className="mb-6">
                <label className="text-gray-400 text-sm mb-2 block">Supply Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-blue-600 text-white p-3 rounded-xl">
                    B2B
                  </button>
                  <button className="bg-gray-700 text-gray-300 p-3 rounded-xl">
                    B2C
                  </button>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center">
                <Send size={20} className="mr-2" />
                Generate E-Invoice
              </button>

              <p className="text-gray-500 text-xs text-center mt-4">
                E-Invoice will be generated via NIC IRP portal
              </p>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantEInvoice;
