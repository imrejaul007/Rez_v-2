import { useState } from 'react';
import { DollarSign, Upload, Download, CheckCircle, AlertCircle, FileText, TrendingUp, CreditCard } from 'lucide-react';

export default function AdminBankReconciliation() {
  const [activeTab, setActiveTab] = useState('reconciliation');

  const [stats] = useState({
    totalRevenue: 12456789,
    reconciledAmount: 11234567,
    pendingReconciliation: 1222222,
    bnplOutstanding: 3456789,
    pendingGST: 234567
  });

  const [bankStatements] = useState([
    {
      id: 'BS-001',
      uploadDate: '2024-01-25',
      bank: 'HDFC Bank',
      period: 'Jan 1-15, 2024',
      totalTransactions: 12345,
      totalAmount: 5678900,
      matched: 12100,
      unmatched: 245,
      status: 'processing'
    }
  ]);

  const [bnplSettlements] = useState([
    {
      provider: 'LazyPay',
      pendingAmount: 1234567,
      transactions: 2345,
      nextSettlement: '2024-02-01',
      status: 'pending'
    },
    {
      provider: 'Simpl',
      pendingAmount: 987654,
      transactions: 1876,
      nextSettlement: '2024-02-05',
      status: 'pending'
    }
  ]);

  const [gstReports] = useState([
    {
      month: 'December 2023',
      taxableAmount: 4567890,
      cgst: 205455,
      sgst: 205455,
      igst: 102278,
      totalGST: 513188,
      filingStatus: 'pending',
      dueDate: '2024-01-20'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <DollarSign className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">Bank Reconciliation & Tax Management</h1>
            <p className="text-emerald-100">Auto-matching, BNPL settlements & GST reporting</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">₹{(stats.totalRevenue / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-emerald-200">Total Revenue</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">₹{(stats.reconciledAmount / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-emerald-200">Reconciled</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">₹{(stats.pendingReconciliation / 1000).toFixed(0)}K</div>
            <div className="text-sm text-emerald-200">Pending Match</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">₹{(stats.bnplOutstanding / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-emerald-200">BNPL Outstanding</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">₹{(stats.pendingGST / 1000).toFixed(0)}K</div>
            <div className="text-sm text-emerald-200">Pending GST</div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="flex gap-6 px-6">
          {['reconciliation', 'bnpl', 'gst'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 font-medium border-b-2 transition-colors uppercase ${
                activeTab === tab ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-gray-600'
              }`}
            >
              {tab === 'reconciliation' && 'Bank Reconciliation'}
              {tab === 'bnpl' && 'BNPL Settlements'}
              {tab === 'gst' && 'GST Reports'}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'reconciliation' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Bank Statement Reconciliation</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                <Upload className="w-4 h-4" /> Upload Statement
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {bankStatements.map((statement) => (
                <div key={statement.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">{statement.bank}</h3>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                          PROCESSING
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Period: {statement.period} • Uploaded: {statement.uploadDate}</p>
                      <div className="grid grid-cols-4 gap-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold">{statement.totalTransactions.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Total Transactions</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-emerald-600">₹{(statement.totalAmount / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-gray-600">Total Amount</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-green-600">{statement.matched}</div>
                          <div className="text-xs text-gray-600">Matched</div>
                        </div>
                        <div className="bg-red-50 rounded-lg p-3">
                          <div className="text-xl font-bold text-red-600">{statement.unmatched}</div>
                          <div className="text-xs text-gray-600">Unmatched</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Auto-Match</button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Manual Review</button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                      <Download className="w-4 h-4" /> Download Report
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'bnpl' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold">BNPL Settlement Tracking</h2>
            <div className="grid grid-cols-1 gap-4">
              {bnplSettlements.map((bnpl, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <CreditCard className="w-6 h-6 text-emerald-600" />
                        <h3 className="text-lg font-bold">{bnpl.provider}</h3>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                          PENDING SETTLEMENT
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-emerald-600">₹{(bnpl.pendingAmount / 1000000).toFixed(2)}M</div>
                          <div className="text-xs text-gray-600">Pending Amount</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-2xl font-bold">{bnpl.transactions.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Transactions</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-lg font-bold">{bnpl.nextSettlement}</div>
                          <div className="text-xs text-gray-600">Next Settlement</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gst' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">GST Reports & Filing</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                <FileText className="w-4 h-4" /> Generate Report
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {gstReports.map((report, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-bold">{report.month}</h3>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                          FILING PENDING
                        </span>
                        <span className="text-sm text-red-600">Due: {report.dueDate}</span>
                      </div>
                      <div className="grid grid-cols-5 gap-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-lg font-bold">₹{(report.taxableAmount / 100000).toFixed(1)}L</div>
                          <div className="text-xs text-gray-600">Taxable Amount</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-blue-600">₹{(report.cgst / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-gray-600">CGST</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-blue-600">₹{(report.sgst / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-gray-600">SGST</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-purple-600">₹{(report.igst / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-gray-600">IGST</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-green-600">₹{(report.totalGST / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-gray-600">Total GST</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Mark as Filed</button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                      <Download className="w-4 h-4" /> Download GSTR-1
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                      <Download className="w-4 h-4" /> Download GSTR-3B
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
