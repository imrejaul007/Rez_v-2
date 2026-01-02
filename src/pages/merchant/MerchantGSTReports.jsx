import React, { useState } from 'react';
import {
  ArrowLeft, Download, FileText, Calendar, Filter, Search,
  TrendingUp, TrendingDown, IndianRupee, Building, Package,
  ChevronRight, CheckCircle, AlertCircle, Clock, Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantGSTReports = () => {
  const navigate = useNavigate();
  const [activeReport, setActiveReport] = useState('gstr1');
  const [selectedMonth, setSelectedMonth] = useState('December 2024');
  const [showPreview, setShowPreview] = useState(false);

  const gstSummary = {
    totalSales: 485000,
    totalPurchases: 320000,
    outputGST: 87300,
    inputGST: 57600,
    netPayable: 29700,
    filingStatus: 'pending'
  };

  const gstr1Data = {
    b2b: [
      { gstin: '27AABCU9603R1ZM', name: 'ABC Corp', invoices: 12, taxable: 125000, cgst: 11250, sgst: 11250, total: 147500 },
      { gstin: '27AADCS0472N1Z4', name: 'XYZ Ltd', invoices: 8, taxable: 85000, cgst: 7650, sgst: 7650, total: 100300 },
    ],
    b2c: {
      invoices: 450,
      taxable: 275000,
      cgst: 24750,
      sgst: 24750,
      total: 324500
    },
    hsn: [
      { code: '2106', description: 'Food preparations', qty: 1250, uqc: 'NOS', taxable: 180000, rate: 18, cgst: 16200, sgst: 16200 },
      { code: '2202', description: 'Beverages', qty: 800, uqc: 'LTR', taxable: 95000, rate: 18, cgst: 8550, sgst: 8550 },
      { code: '1905', description: 'Bakery products', qty: 500, uqc: 'KGS', taxable: 120000, rate: 12, cgst: 7200, sgst: 7200 },
    ]
  };

  const gstr3bData = {
    outwardSupplies: {
      taxable: 485000,
      igst: 0,
      cgst: 43650,
      sgst: 43650,
      cess: 0
    },
    inwardSupplies: {
      taxable: 320000,
      igst: 0,
      cgst: 28800,
      sgst: 28800,
      cess: 0
    },
    itc: {
      igst: 0,
      cgst: 28800,
      sgst: 28800,
      cess: 0
    },
    payment: {
      cgst: 14850,
      sgst: 14850,
      igst: 0,
      cess: 0,
      total: 29700
    }
  };

  const filingHistory = [
    { month: 'November 2024', gstr1: 'filed', gstr3b: 'filed', date: '11 Dec 2024' },
    { month: 'October 2024', gstr1: 'filed', gstr3b: 'filed', date: '10 Nov 2024' },
    { month: 'September 2024', gstr1: 'filed', gstr3b: 'filed', date: '11 Oct 2024' },
  ];

  const months = [
    'December 2024', 'November 2024', 'October 2024', 'September 2024',
    'August 2024', 'July 2024', 'June 2024'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">GST Reports</h1>
              <p className="text-blue-200 text-sm">GSTIN: 27AABCU9603R1ZM</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <Download size={20} />
          </button>
        </div>

        {/* Month Selector */}
        <div className="flex items-center bg-white/10 rounded-lg p-2 mb-4">
          <Calendar size={18} className="mr-2 text-blue-200" />
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-transparent text-white flex-1"
          >
            {months.map(m => (
              <option key={m} value={m} className="text-black">{m}</option>
            ))}
          </select>
        </div>

        {/* GST Summary */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-blue-200 text-xs mb-1">Output GST</p>
            <p className="text-xl font-bold">₹{(gstSummary.outputGST/1000).toFixed(1)}K</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-blue-200 text-xs mb-1">Input GST (ITC)</p>
            <p className="text-xl font-bold">₹{(gstSummary.inputGST/1000).toFixed(1)}K</p>
          </div>
          <div className="bg-green-500/20 rounded-lg p-3 col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-200 text-xs mb-1">Net GST Payable</p>
                <p className="text-2xl font-bold">₹{gstSummary.netPayable.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
                  Filing Pending
                </span>
                <p className="text-xs text-gray-300 mt-1">Due: 11 Jan 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700 overflow-x-auto">
        {[
          { id: 'gstr1', label: 'GSTR-1' },
          { id: 'gstr3b', label: 'GSTR-3B' },
          { id: 'history', label: 'History' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveReport(tab.id)}
            className={`flex-1 py-3 px-4 text-sm font-medium whitespace-nowrap ${
              activeReport === tab.id
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {activeReport === 'gstr1' && (
          <div className="space-y-4">
            {/* B2B Sales */}
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold flex items-center">
                  <Building size={18} className="mr-2 text-blue-400" />
                  B2B Sales (Registered Dealers)
                </h3>
                <span className="text-gray-400 text-sm">{gstr1Data.b2b.length} parties</span>
              </div>

              {gstr1Data.b2b.map((party, idx) => (
                <div key={idx} className="bg-gray-700/50 rounded-lg p-3 mb-2">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-white font-medium">{party.name}</p>
                      <p className="text-gray-400 text-xs">{party.gstin}</p>
                    </div>
                    <p className="text-white font-bold">₹{party.total.toLocaleString()}</p>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div>
                      <p className="text-gray-400">Invoices</p>
                      <p className="text-white">{party.invoices}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Taxable</p>
                      <p className="text-white">₹{(party.taxable/1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <p className="text-gray-400">CGST</p>
                      <p className="text-white">₹{party.cgst.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">SGST</p>
                      <p className="text-white">₹{party.sgst.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* B2C Sales */}
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold flex items-center">
                  <Package size={18} className="mr-2 text-green-400" />
                  B2C Sales (Consumers)
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Invoices</p>
                  <p className="text-white font-bold">{gstr1Data.b2c.invoices}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Taxable Value</p>
                  <p className="text-white font-bold">₹{(gstr1Data.b2c.taxable/1000).toFixed(0)}K</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">CGST</p>
                  <p className="text-white font-bold">₹{gstr1Data.b2c.cgst.toLocaleString()}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">SGST</p>
                  <p className="text-white font-bold">₹{gstr1Data.b2c.sgst.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* HSN Summary */}
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">HSN Summary</h3>
                <button className="text-blue-400 text-sm">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 text-xs">
                      <th className="text-left py-2">HSN</th>
                      <th className="text-left py-2">Description</th>
                      <th className="text-right py-2">Rate</th>
                      <th className="text-right py-2">Tax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gstr1Data.hsn.map((item, idx) => (
                      <tr key={idx} className="border-t border-gray-700">
                        <td className="py-2 text-white">{item.code}</td>
                        <td className="py-2 text-gray-300">{item.description}</td>
                        <td className="py-2 text-right text-white">{item.rate}%</td>
                        <td className="py-2 text-right text-white">₹{(item.cgst + item.sgst).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Download Button */}
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center">
              <Download size={20} className="mr-2" />
              Download GSTR-1 JSON
            </button>
          </div>
        )}

        {activeReport === 'gstr3b' && (
          <div className="space-y-4">
            {/* 3.1 Outward Supplies */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-3">3.1 Outward Supplies</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Taxable Value</span>
                  <span className="text-white font-medium">₹{gstr3bData.outwardSupplies.taxable.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">CGST</span>
                  <span className="text-white font-medium">₹{gstr3bData.outwardSupplies.cgst.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">SGST</span>
                  <span className="text-white font-medium">₹{gstr3bData.outwardSupplies.sgst.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* 4. ITC */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-3">4. Eligible ITC</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">CGST</span>
                  <span className="text-green-400 font-medium">₹{gstr3bData.itc.cgst.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">SGST</span>
                  <span className="text-green-400 font-medium">₹{gstr3bData.itc.sgst.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* 6.1 Payment */}
            <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-xl p-4 border border-blue-500/30">
              <h3 className="text-white font-semibold mb-3">6.1 Tax Payable</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">CGST Payable</span>
                  <span className="text-white font-medium">₹{gstr3bData.payment.cgst.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">SGST Payable</span>
                  <span className="text-white font-medium">₹{gstr3bData.payment.sgst.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-blue-500/30">
                  <span className="text-white">Total Payable</span>
                  <span className="text-yellow-400">₹{gstr3bData.payment.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => setShowPreview(true)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-medium flex items-center justify-center"
              >
                <Eye size={18} className="mr-2" /> Preview
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium flex items-center justify-center">
                <Download size={18} className="mr-2" /> Download JSON
              </button>
            </div>
          </div>
        )}

        {activeReport === 'history' && (
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Filing History</h3>

            {filingHistory.map((item, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">{item.month}</h4>
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>
                <div className="flex space-x-3">
                  <div className="flex-1 bg-green-900/30 rounded-lg p-3 flex items-center">
                    <CheckCircle size={18} className="text-green-400 mr-2" />
                    <div>
                      <p className="text-white text-sm font-medium">GSTR-1</p>
                      <p className="text-green-400 text-xs capitalize">{item.gstr1}</p>
                    </div>
                  </div>
                  <div className="flex-1 bg-green-900/30 rounded-lg p-3 flex items-center">
                    <CheckCircle size={18} className="text-green-400 mr-2" />
                    <div>
                      <p className="text-white text-sm font-medium">GSTR-3B</p>
                      <p className="text-green-400 text-xs capitalize">{item.gstr3b}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Current Month Status */}
            <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-xl p-4">
              <div className="flex items-center mb-3">
                <AlertCircle size={20} className="text-yellow-400 mr-2" />
                <h4 className="text-white font-medium">{selectedMonth}</h4>
              </div>
              <div className="flex space-x-3">
                <div className="flex-1 bg-gray-800 rounded-lg p-3">
                  <p className="text-white text-sm font-medium">GSTR-1</p>
                  <p className="text-yellow-400 text-xs">Pending</p>
                </div>
                <div className="flex-1 bg-gray-800 rounded-lg p-3">
                  <p className="text-white text-sm font-medium">GSTR-3B</p>
                  <p className="text-yellow-400 text-xs">Pending</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantGSTReports;
