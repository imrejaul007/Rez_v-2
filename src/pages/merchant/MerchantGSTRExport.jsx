import React, { useState } from 'react';
import {
  ArrowLeft, FileSpreadsheet, Download, Calendar, CheckCircle,
  Clock, AlertCircle, RefreshCw, FileText, Upload, Eye,
  ChevronRight, Building2, TrendingUp, Filter, Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantGSTRExport = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('gstr1');
  const [selectedMonth, setSelectedMonth] = useState('2024-01');
  const [showExport, setShowExport] = useState(false);

  const gstrSummary = {
    gstr1: {
      b2b: { invoices: 45, taxable: 2845000, igst: 0, cgst: 256050, sgst: 256050 },
      b2c: { invoices: 320, taxable: 1580000, igst: 0, cgst: 142200, sgst: 142200 },
      cdnr: { invoices: 5, taxable: -45000, igst: 0, cgst: -4050, sgst: -4050 },
      exp: { invoices: 2, taxable: 180000, igst: 32400, cgst: 0, sgst: 0 },
      nil: { invoices: 12, taxable: 0, igst: 0, cgst: 0, sgst: 0 },
      hsn: { items: 156 }
    },
    gstr3b: {
      outward: { taxable: 4605000, igst: 32400, cgst: 398200, sgst: 398200 },
      inward: { taxable: 1200000, igst: 15000, cgst: 93000, sgst: 93000 },
      itc: { igst: 15000, cgst: 93000, sgst: 93000 },
      netPayable: { igst: 17400, cgst: 305200, sgst: 305200 }
    }
  };

  const filingHistory = [
    {
      period: 'December 2023',
      gstr1: { status: 'filed', filedOn: '2024-01-10', arn: 'AA290124001234' },
      gstr3b: { status: 'filed', filedOn: '2024-01-20', arn: 'AA290124001235' }
    },
    {
      period: 'November 2023',
      gstr1: { status: 'filed', filedOn: '2023-12-11', arn: 'AA291123001234' },
      gstr3b: { status: 'filed', filedOn: '2023-12-20', arn: 'AA291123001235' }
    },
    {
      period: 'October 2023',
      gstr1: { status: 'filed', filedOn: '2023-11-10', arn: 'AA291023001234' },
      gstr3b: { status: 'filed', filedOn: '2023-11-20', arn: 'AA291023001235' }
    }
  ];

  const exportFormats = [
    { id: 'json', name: 'JSON (GST Portal)', icon: FileText, description: 'Direct upload to GSTN' },
    { id: 'excel', name: 'Excel', icon: FileSpreadsheet, description: 'For manual review' },
    { id: 'csv', name: 'CSV', icon: FileText, description: 'For Tally/other software' }
  ];

  const formatCurrency = (amount) => {
    if (amount >= 100000) return `₹${(amount/100000).toFixed(2)}L`;
    if (amount >= 1000) return `₹${(amount/1000).toFixed(1)}K`;
    return `₹${amount}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">GSTR Export</h1>
              <p className="text-green-200 text-sm">GSTR-1 & GSTR-3B Reports</p>
            </div>
          </div>
          <button
            onClick={() => setShowExport(true)}
            className="bg-white/20 p-2 rounded-lg"
          >
            <Download size={24} />
          </button>
        </div>

        {/* Month Selector */}
        <div className="flex items-center justify-between bg-white/10 rounded-xl p-3">
          <div className="flex items-center">
            <Calendar size={20} className="mr-2" />
            <span>Return Period:</span>
          </div>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-transparent text-white font-medium"
          >
            <option value="2024-01" className="text-black">January 2024</option>
            <option value="2023-12" className="text-black">December 2023</option>
            <option value="2023-11" className="text-black">November 2023</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('gstr1')}
            className={`flex-1 py-3 rounded-lg font-medium ${
              activeTab === 'gstr1' ? 'bg-green-600 text-white' : 'text-gray-400'
            }`}
          >
            GSTR-1
          </button>
          <button
            onClick={() => setActiveTab('gstr3b')}
            className={`flex-1 py-3 rounded-lg font-medium ${
              activeTab === 'gstr3b' ? 'bg-green-600 text-white' : 'text-gray-400'
            }`}
          >
            GSTR-3B
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 rounded-lg font-medium ${
              activeTab === 'history' ? 'bg-green-600 text-white' : 'text-gray-400'
            }`}
          >
            History
          </button>
        </div>
      </div>

      {/* GSTR-1 Content */}
      {activeTab === 'gstr1' && (
        <div className="px-4 space-y-4">
          {/* B2B Invoices */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-white font-bold">B2B Invoices</h3>
                <p className="text-gray-400 text-sm">Registered recipients</p>
              </div>
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                {gstrSummary.gstr1.b2b.invoices} invoices
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">Taxable</p>
                <p className="text-white font-medium">{formatCurrency(gstrSummary.gstr1.b2b.taxable)}</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">CGST</p>
                <p className="text-white font-medium">{formatCurrency(gstrSummary.gstr1.b2b.cgst)}</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">SGST</p>
                <p className="text-white font-medium">{formatCurrency(gstrSummary.gstr1.b2b.sgst)}</p>
              </div>
            </div>
          </div>

          {/* B2C Invoices */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-white font-bold">B2C (Large) Invoices</h3>
                <p className="text-gray-400 text-sm">Unregistered recipients</p>
              </div>
              <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                {gstrSummary.gstr1.b2c.invoices} invoices
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">Taxable</p>
                <p className="text-white font-medium">{formatCurrency(gstrSummary.gstr1.b2c.taxable)}</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">CGST</p>
                <p className="text-white font-medium">{formatCurrency(gstrSummary.gstr1.b2c.cgst)}</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">SGST</p>
                <p className="text-white font-medium">{formatCurrency(gstrSummary.gstr1.b2c.sgst)}</p>
              </div>
            </div>
          </div>

          {/* Credit/Debit Notes */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-white font-bold">Credit/Debit Notes (CDNR)</h3>
                <p className="text-gray-400 text-sm">Against registered persons</p>
              </div>
              <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full text-xs">
                {gstrSummary.gstr1.cdnr.invoices} notes
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">Taxable</p>
                <p className="text-red-400 font-medium">{formatCurrency(gstrSummary.gstr1.cdnr.taxable)}</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">CGST</p>
                <p className="text-red-400 font-medium">{formatCurrency(gstrSummary.gstr1.cdnr.cgst)}</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                <p className="text-gray-400 text-xs">SGST</p>
                <p className="text-red-400 font-medium">{formatCurrency(gstrSummary.gstr1.cdnr.sgst)}</p>
              </div>
            </div>
          </div>

          {/* Other Sections */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-2">Exports</h4>
              <p className="text-2xl font-bold text-white">{gstrSummary.gstr1.exp.invoices}</p>
              <p className="text-gray-400 text-sm">{formatCurrency(gstrSummary.gstr1.exp.taxable)}</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-2">HSN Summary</h4>
              <p className="text-2xl font-bold text-white">{gstrSummary.gstr1.hsn.items}</p>
              <p className="text-gray-400 text-sm">Unique items</p>
            </div>
          </div>

          {/* Export Button */}
          <button
            onClick={() => setShowExport(true)}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center"
          >
            <Download size={20} className="mr-2" />
            Export GSTR-1 Data
          </button>
        </div>
      )}

      {/* GSTR-3B Content */}
      {activeTab === 'gstr3b' && (
        <div className="px-4 space-y-4">
          {/* Outward Supplies */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">3.1 Outward Supplies</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Taxable Value</span>
                <span className="text-white font-medium">{formatCurrency(gstrSummary.gstr3b.outward.taxable)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">IGST</span>
                <span className="text-white font-medium">{formatCurrency(gstrSummary.gstr3b.outward.igst)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">CGST</span>
                <span className="text-white font-medium">{formatCurrency(gstrSummary.gstr3b.outward.cgst)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">SGST</span>
                <span className="text-white font-medium">{formatCurrency(gstrSummary.gstr3b.outward.sgst)}</span>
              </div>
            </div>
          </div>

          {/* ITC Available */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">4. Eligible ITC</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">IGST</span>
                <span className="text-green-400 font-medium">-{formatCurrency(gstrSummary.gstr3b.itc.igst)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">CGST</span>
                <span className="text-green-400 font-medium">-{formatCurrency(gstrSummary.gstr3b.itc.cgst)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">SGST</span>
                <span className="text-green-400 font-medium">-{formatCurrency(gstrSummary.gstr3b.itc.sgst)}</span>
              </div>
            </div>
          </div>

          {/* Net Tax Payable */}
          <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30 rounded-xl p-4">
            <h3 className="text-green-400 font-bold mb-3">6. Net Tax Payable</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">IGST</span>
                <span className="text-white font-bold">{formatCurrency(gstrSummary.gstr3b.netPayable.igst)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">CGST</span>
                <span className="text-white font-bold">{formatCurrency(gstrSummary.gstr3b.netPayable.cgst)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">SGST</span>
                <span className="text-white font-bold">{formatCurrency(gstrSummary.gstr3b.netPayable.sgst)}</span>
              </div>
              <div className="border-t border-green-500/30 pt-2 mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-bold">Total Payable</span>
                  <span className="text-green-400 font-bold text-xl">
                    {formatCurrency(
                      gstrSummary.gstr3b.netPayable.igst +
                      gstrSummary.gstr3b.netPayable.cgst +
                      gstrSummary.gstr3b.netPayable.sgst
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Export Button */}
          <button
            onClick={() => setShowExport(true)}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center"
          >
            <Download size={20} className="mr-2" />
            Export GSTR-3B Data
          </button>
        </div>
      )}

      {/* History Content */}
      {activeTab === 'history' && (
        <div className="px-4 space-y-3">
          {filingHistory.map((period, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3">{period.period}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-green-400 mr-2" />
                    <div>
                      <p className="text-white font-medium">GSTR-1</p>
                      <p className="text-gray-400 text-xs">Filed: {period.gstr1.filedOn}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 text-xs">ARN</p>
                    <p className="text-gray-300 text-xs font-mono">{period.gstr1.arn}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-green-400 mr-2" />
                    <div>
                      <p className="text-white font-medium">GSTR-3B</p>
                      <p className="text-gray-400 text-xs">Filed: {period.gstr3b.filedOn}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 text-xs">ARN</p>
                    <p className="text-gray-300 text-xs font-mono">{period.gstr3b.arn}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Export Modal */}
      {showExport && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-bold">Export {activeTab.toUpperCase()}</h3>
                <button onClick={() => setShowExport(false)} className="text-gray-400">
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4">
              <p className="text-gray-400 text-sm mb-4">Select export format:</p>
              <div className="space-y-3">
                {exportFormats.map(format => {
                  const Icon = format.icon;
                  return (
                    <button
                      key={format.id}
                      className="w-full bg-gray-700 p-4 rounded-xl flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Icon size={24} className="text-green-400 mr-3" />
                        <div className="text-left">
                          <p className="text-white font-medium">{format.name}</p>
                          <p className="text-gray-400 text-sm">{format.description}</p>
                        </div>
                      </div>
                      <Download size={20} className="text-gray-400" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantGSTRExport;
