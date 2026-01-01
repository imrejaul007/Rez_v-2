import React, { useState } from 'react';
import {
  ArrowLeft, Camera, Upload, FileText, Check, Edit, Save,
  Sparkles, RefreshCw, Plus, Trash2, X, Image, Zap, AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantInvoiceScanner = () => {
  const navigate = useNavigate();
  const [scanStep, setScanStep] = useState('capture'); // capture, processing, review, saved
  const [scannedData, setScannedData] = useState(null);

  const [extractedData, setExtractedData] = useState({
    vendorName: 'Fresh Vegetables Supplier',
    vendorGSTIN: '27AABCU9603R1ZM',
    invoiceNumber: 'INV-2024-5847',
    invoiceDate: '2024-12-28',
    dueDate: '2025-01-15',
    items: [
      { name: 'Tomatoes', qty: 10, unit: 'kg', rate: 40, amount: 400 },
      { name: 'Onions', qty: 15, unit: 'kg', rate: 30, amount: 450 },
      { name: 'Potatoes', qty: 20, unit: 'kg', rate: 25, amount: 500 },
      { name: 'Green Chillies', qty: 2, unit: 'kg', rate: 80, amount: 160 },
    ],
    subtotal: 1510,
    cgst: 0,
    sgst: 0,
    totalAmount: 1510,
    paymentStatus: 'unpaid'
  });

  const [recentScans, setRecentScans] = useState([
    { id: 1, vendor: 'ABC Distributors', amount: 15000, date: '27 Dec 2024', status: 'processed' },
    { id: 2, vendor: 'Dairy Products Co.', amount: 8500, date: '25 Dec 2024', status: 'processed' },
    { id: 3, vendor: 'Packaging Supplies', amount: 3200, date: '22 Dec 2024', status: 'processed' },
  ]);

  const simulateScan = () => {
    setScanStep('processing');
    setTimeout(() => {
      setScanStep('review');
    }, 2500);
  };

  const saveInvoice = () => {
    setScanStep('saved');
    setTimeout(() => {
      setScanStep('capture');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Invoice Scanner</h1>
              <p className="text-amber-200 text-sm">AI-powered OCR digitization</p>
            </div>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <Sparkles size={16} className="mr-1" />
            <span className="text-sm">AI Powered</span>
          </div>
        </div>
      </div>

      {scanStep === 'capture' && (
        <div className="p-4">
          {/* Scan Options */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={simulateScan}
              className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera size={32} className="text-white" />
              </div>
              <p className="text-white font-bold">Take Photo</p>
              <p className="text-amber-200 text-sm">Scan invoice with camera</p>
            </button>

            <button
              onClick={simulateScan}
              className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700"
            >
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                <Upload size={32} className="text-gray-300" />
              </div>
              <p className="text-white font-bold">Upload Image</p>
              <p className="text-gray-400 text-sm">Select from gallery</p>
            </button>
          </div>

          {/* Tips */}
          <div className="bg-gray-800 rounded-xl p-4 mb-6">
            <h3 className="text-white font-medium mb-3 flex items-center">
              <Zap size={18} className="text-amber-400 mr-2" />
              Tips for Better Scanning
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start">
                <Check size={14} className="text-green-400 mr-2 mt-0.5" />
                Place invoice on a flat surface with good lighting
              </li>
              <li className="flex items-start">
                <Check size={14} className="text-green-400 mr-2 mt-0.5" />
                Ensure all text is clearly visible and not blurry
              </li>
              <li className="flex items-start">
                <Check size={14} className="text-green-400 mr-2 mt-0.5" />
                Capture the entire invoice including edges
              </li>
              <li className="flex items-start">
                <Check size={14} className="text-green-400 mr-2 mt-0.5" />
                Works best with printed invoices (typed text)
              </li>
            </ul>
          </div>

          {/* Recent Scans */}
          <div>
            <h3 className="text-white font-semibold mb-3">Recent Scans</h3>
            <div className="space-y-3">
              {recentScans.map(scan => (
                <div key={scan.id} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                      <FileText size={24} className="text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{scan.vendor}</p>
                      <p className="text-gray-400 text-sm">{scan.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">₹{scan.amount.toLocaleString()}</p>
                    <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                      {scan.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {scanStep === 'processing' && (
        <div className="flex flex-col items-center justify-center h-[60vh] p-4">
          <div className="relative">
            <div className="w-32 h-32 border-4 border-amber-400 rounded-2xl animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <RefreshCw size={40} className="text-amber-400 animate-spin" />
            </div>
          </div>
          <h2 className="text-white text-xl font-bold mt-6">Processing Invoice</h2>
          <p className="text-gray-400 mt-2 text-center">
            AI is extracting data from your invoice...
          </p>
          <div className="mt-6 space-y-2 text-sm text-gray-500">
            <p className="flex items-center"><Check size={14} className="text-green-400 mr-2" /> Detecting text regions</p>
            <p className="flex items-center"><RefreshCw size={14} className="text-amber-400 mr-2 animate-spin" /> Extracting vendor details</p>
            <p className="flex items-center text-gray-600"><Clock size={14} className="mr-2" /> Identifying line items</p>
          </div>
        </div>
      )}

      {scanStep === 'review' && (
        <div className="p-4">
          <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-4 mb-4 flex items-center">
            <Check size={24} className="text-green-400 mr-3" />
            <div>
              <p className="text-green-400 font-medium">Successfully Extracted!</p>
              <p className="text-green-300/70 text-sm">Review and edit if needed</p>
            </div>
          </div>

          {/* Extracted Data Form */}
          <div className="bg-gray-800 rounded-xl p-4 mb-4">
            <h3 className="text-white font-semibold mb-4">Vendor Details</h3>
            <div className="space-y-3">
              <div>
                <label className="text-gray-400 text-sm">Vendor Name</label>
                <input
                  type="text"
                  value={extractedData.vendorName}
                  onChange={(e) => setExtractedData({...extractedData, vendorName: e.target.value})}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg mt-1"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm">GSTIN</label>
                <input
                  type="text"
                  value={extractedData.vendorGSTIN}
                  onChange={(e) => setExtractedData({...extractedData, vendorGSTIN: e.target.value})}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 text-sm">Invoice No.</label>
                  <input
                    type="text"
                    value={extractedData.invoiceNumber}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg mt-1"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Invoice Date</label>
                  <input
                    type="date"
                    value={extractedData.invoiceDate}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg mt-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="bg-gray-800 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Line Items</h3>
              <button className="text-amber-400 text-sm flex items-center">
                <Plus size={14} className="mr-1" /> Add Item
              </button>
            </div>
            <div className="space-y-2">
              {extractedData.items.map((item, idx) => (
                <div key={idx} className="bg-gray-700/50 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-white">{item.name}</p>
                    <p className="text-gray-400 text-sm">{item.qty} {item.unit} × ₹{item.rate}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-white font-medium mr-3">₹{item.amount}</p>
                    <button className="text-gray-400">
                      <Edit size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Totals */}
          <div className="bg-gray-800 rounded-xl p-4 mb-6">
            <div className="space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>₹{extractedData.subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>CGST</span>
                <span>₹{extractedData.cgst}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>SGST</span>
                <span>₹{extractedData.sgst}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-gray-700">
                <span>Total</span>
                <span>₹{extractedData.totalAmount}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <button
              onClick={() => setScanStep('capture')}
              className="flex-1 bg-gray-700 text-white py-4 rounded-xl font-medium"
            >
              Rescan
            </button>
            <button
              onClick={saveInvoice}
              className="flex-1 bg-amber-500 text-white py-4 rounded-xl font-bold flex items-center justify-center"
            >
              <Save size={18} className="mr-2" /> Save to Ledger
            </button>
          </div>
        </div>
      )}

      {scanStep === 'saved' && (
        <div className="flex flex-col items-center justify-center h-[60vh] p-4">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
            <Check size={48} className="text-white" />
          </div>
          <h2 className="text-white text-xl font-bold">Invoice Saved!</h2>
          <p className="text-gray-400 mt-2 text-center">
            Added to your purchase ledger and expense tracker
          </p>
        </div>
      )}

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantInvoiceScanner;
