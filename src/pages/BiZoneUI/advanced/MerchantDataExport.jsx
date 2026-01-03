import React, { useState } from 'react';
import {
  ArrowLeft, Download, FileText, Database, Shield, Clock, CheckCircle,
  AlertTriangle, Lock, Unlock, Eye, EyeOff, Package, Archive, Trash2,
  ExternalLink, Copy, HelpCircle, FileSpreadsheet, FileJson, File,
  Calendar, ChevronRight, RefreshCw, Key, Mail, Smartphone, Server,
  CloudOff, Cloud, Settings, BarChart2, Users, Receipt, CreditCard,
  ShoppingBag, Heart, Star, Zap
} from 'lucide-react';

const MerchantDataExport = () => {
  const [activeTab, setActiveTab] = useState('export');
  const [exportProgress, setExportProgress] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // ==========================================
  // EXIT TRUST & DATA EXPORT SYSTEM
  // "You can leave anytime with ALL your data"
  // This is what builds REAL trust
  // ==========================================

  const [dataInventory, setDataInventory] = useState({
    transactions: { count: 15234, size: '45.2 MB', lastUpdated: '2024-01-15' },
    customers: { count: 2847, size: '8.5 MB', lastUpdated: '2024-01-15' },
    products: { count: 456, size: '2.1 MB', lastUpdated: '2024-01-14' },
    inventory: { count: 1203, size: '3.4 MB', lastUpdated: '2024-01-15' },
    staff: { count: 12, size: '0.5 MB', lastUpdated: '2024-01-10' },
    reports: { count: 365, size: '12.8 MB', lastUpdated: '2024-01-15' },
    settings: { count: 1, size: '0.1 MB', lastUpdated: '2024-01-12' },
    audit: { count: 28456, size: '18.3 MB', lastUpdated: '2024-01-15' }
  });

  const [exportFormats, setExportFormats] = useState([
    { id: 'csv', name: 'CSV', icon: <FileSpreadsheet size={20} />, description: 'Excel/Sheets compatible', popular: true },
    { id: 'json', name: 'JSON', icon: <FileJson size={20} />, description: 'Developer-friendly format', popular: false },
    { id: 'xml', name: 'XML', icon: <File size={20} />, description: 'Tally/ERP compatible', popular: true },
    { id: 'pdf', name: 'PDF Reports', icon: <FileText size={20} />, description: 'Print-ready reports', popular: true },
    { id: 'sqlite', name: 'SQLite Database', icon: <Database size={20} />, description: 'Complete database backup', popular: false }
  ]);

  const [dataOwnershipPolicy, setDataOwnershipPolicy] = useState({
    policyVersion: '2.1',
    lastUpdated: '2024-01-01',
    keyPoints: [
      { title: 'Your Data is Yours', description: 'All transaction data, customer information, and business records belong to you, not ReZ.' },
      { title: 'Free Export Anytime', description: 'Export all your data at any time, in any format, completely free of charge.' },
      { title: 'No Lock-In', description: 'We do not use proprietary formats. All data exports are in standard, open formats.' },
      { title: 'Post-Cancellation Access', description: 'After subscription ends, you have 90 days to export data before account deletion.' },
      { title: 'Deletion on Request', description: 'Request complete data deletion anytime. We comply within 7 business days.' },
      { title: 'No Data Selling', description: 'We never sell, share, or monetize your business data with third parties.' }
    ]
  });

  const [migrationSupport, setMigrationSupport] = useState([
    { id: 'tally', name: 'Tally Prime', status: 'supported', format: 'XML', guide: true },
    { id: 'zoho', name: 'Zoho Inventory', status: 'supported', format: 'CSV', guide: true },
    { id: 'quickbooks', name: 'QuickBooks', status: 'supported', format: 'CSV', guide: true },
    { id: 'busy', name: 'BUSY Accounting', status: 'supported', format: 'CSV', guide: true },
    { id: 'marg', name: 'Marg ERP', status: 'supported', format: 'XML', guide: true },
    { id: 'custom', name: 'Custom POS', status: 'contact', format: 'Various', guide: false }
  ]);

  const [exportHistory, setExportHistory] = useState([
    { id: 1, date: '2024-01-10', type: 'Full Backup', format: 'ZIP', size: '85.2 MB', status: 'completed' },
    { id: 2, date: '2024-01-05', type: 'Transactions (Dec)', format: 'CSV', size: '12.4 MB', status: 'completed' },
    { id: 3, date: '2024-01-01', type: 'Customer Data', format: 'JSON', size: '8.5 MB', status: 'completed' },
    { id: 4, date: '2023-12-15', type: 'Year-End Report', format: 'PDF', size: '2.1 MB', status: 'completed' }
  ]);

  const handleFullExport = async () => {
    setExportProgress({ stage: 'preparing', percent: 0 });

    // Simulate export progress
    const stages = [
      { stage: 'preparing', percent: 10, label: 'Preparing data...' },
      { stage: 'transactions', percent: 30, label: 'Exporting transactions...' },
      { stage: 'customers', percent: 50, label: 'Exporting customers...' },
      { stage: 'inventory', percent: 70, label: 'Exporting inventory...' },
      { stage: 'reports', percent: 85, label: 'Generating reports...' },
      { stage: 'packaging', percent: 95, label: 'Creating ZIP archive...' },
      { stage: 'complete', percent: 100, label: 'Export complete!' }
    ];

    for (const s of stages) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setExportProgress(s);
    }

    setTimeout(() => setExportProgress(null), 2000);
  };

  const getTotalDataSize = () => {
    let totalMB = 0;
    Object.values(dataInventory).forEach(item => {
      const size = parseFloat(item.size.replace(' MB', ''));
      totalMB += size;
    });
    return totalMB.toFixed(1);
  };

  const renderExportTab = () => (
    <div className="space-y-4">
      {/* One-Click Full Export */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4 text-white">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Download size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">Export Everything</h3>
            <p className="text-sm text-white/80">Download ALL your data in one click</p>
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-3 mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Total Data Size</span>
            <span className="font-bold">{getTotalDataSize()} MB</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <div className="text-center">
              <p className="font-bold">{dataInventory.transactions.count.toLocaleString()}</p>
              <p className="text-white/70">Transactions</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{dataInventory.customers.count.toLocaleString()}</p>
              <p className="text-white/70">Customers</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{dataInventory.products.count.toLocaleString()}</p>
              <p className="text-white/70">Products</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{dataInventory.reports.count}</p>
              <p className="text-white/70">Reports</p>
            </div>
          </div>
        </div>

        {exportProgress ? (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{exportProgress.label}</span>
              <span>{exportProgress.percent}%</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${exportProgress.percent}%` }}
              ></div>
            </div>
            {exportProgress.stage === 'complete' && (
              <button className="w-full py-2 bg-white text-green-600 rounded-lg font-bold mt-2 flex items-center justify-center gap-2">
                <Download size={18} />
                Download rez_backup_20240115.zip
              </button>
            )}
          </div>
        ) : (
          <button
            onClick={handleFullExport}
            className="w-full py-3 bg-white text-green-600 rounded-lg font-bold flex items-center justify-center gap-2"
          >
            <Package size={18} />
            Export All Data (ZIP)
          </button>
        )}
      </div>

      {/* Data Categories */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="font-bold">Export by Category</h3>
          <p className="text-sm text-gray-500">Download specific data types</p>
        </div>
        <div className="divide-y">
          {Object.entries(dataInventory).map(([key, data]) => (
            <div key={key} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  {key === 'transactions' ? <Receipt size={18} className="text-blue-600" /> :
                   key === 'customers' ? <Users size={18} className="text-green-600" /> :
                   key === 'products' ? <ShoppingBag size={18} className="text-purple-600" /> :
                   key === 'inventory' ? <Package size={18} className="text-orange-600" /> :
                   key === 'staff' ? <Users size={18} className="text-pink-600" /> :
                   key === 'reports' ? <BarChart2 size={18} className="text-cyan-600" /> :
                   key === 'audit' ? <Shield size={18} className="text-red-600" /> :
                   <Settings size={18} className="text-gray-600" />}
                </div>
                <div>
                  <p className="font-medium capitalize">{key}</p>
                  <p className="text-xs text-gray-500">
                    {data.count.toLocaleString()} records • {data.size}
                  </p>
                </div>
              </div>
              <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <Download size={16} className="text-gray-600" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Export Formats */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="font-bold">Export Formats</h3>
        </div>
        <div className="p-4 grid grid-cols-2 gap-3">
          {exportFormats.map(format => (
            <button
              key={format.id}
              className="p-3 border rounded-lg text-left hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                {format.icon}
                <span className="font-medium">{format.name}</span>
                {format.popular && (
                  <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-xs">Popular</span>
                )}
              </div>
              <p className="text-xs text-gray-500">{format.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Export History */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-bold">Export History</h3>
          <span className="text-sm text-gray-500">Last 30 days</span>
        </div>
        <div className="divide-y">
          {exportHistory.map(exp => (
            <div key={exp.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={18} />
                </div>
                <div>
                  <p className="font-medium">{exp.type}</p>
                  <p className="text-xs text-gray-500">{exp.date} • {exp.format} • {exp.size}</p>
                </div>
              </div>
              <button className="text-blue-600 text-sm font-medium">
                Re-download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMigrationTab = () => (
    <div className="space-y-4">
      {/* Migration Promise */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <ExternalLink className="text-blue-600 mt-0.5" size={24} />
          <div>
            <h3 className="font-bold text-blue-800">Easy Migration</h3>
            <p className="text-sm text-blue-700 mt-1">
              Moving to another platform? We make it easy with export formats compatible with popular accounting & POS software.
            </p>
          </div>
        </div>
      </div>

      {/* Supported Platforms */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="font-bold">Supported Migration Targets</h3>
        </div>
        <div className="divide-y">
          {migrationSupport.map(platform => (
            <div key={platform.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-600">
                  {platform.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{platform.name}</p>
                  <p className="text-xs text-gray-500">Format: {platform.format}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  platform.status === 'supported' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {platform.status === 'supported' ? 'Supported' : 'Contact Us'}
                </span>
                {platform.guide && (
                  <button className="p-2 bg-gray-100 rounded-lg">
                    <FileText size={14} className="text-gray-600" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Migration Guide */}
      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-bold mb-3">Migration Steps</h3>
        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <div>
              <p className="font-medium">Export Your Data</p>
              <p className="text-sm text-gray-500">Use the "Export Everything" button to download all your data</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <div>
              <p className="font-medium">Choose Target Format</p>
              <p className="text-sm text-gray-500">Select the export format compatible with your new software</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <div>
              <p className="font-medium">Import to New Platform</p>
              <p className="text-sm text-gray-500">Follow the import guide for your target platform</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
            <div>
              <p className="font-medium">Verify Data</p>
              <p className="text-sm text-gray-500">Cross-check totals and records to ensure complete migration</p>
            </div>
          </li>
        </ol>
      </div>

      {/* Need Help */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-purple-800">Need Migration Help?</h3>
            <p className="text-sm text-purple-700">Our team can assist with complex migrations</p>
          </div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );

  const renderPolicyTab = () => (
    <div className="space-y-4">
      {/* Policy Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 text-white">
        <div className="flex items-center gap-3 mb-3">
          <Shield size={32} />
          <div>
            <h3 className="font-bold text-lg">Data Ownership Policy</h3>
            <p className="text-sm text-white/70">Version {dataOwnershipPolicy.policyVersion} • Updated {dataOwnershipPolicy.lastUpdated}</p>
          </div>
        </div>
        <p className="text-sm text-white/80">
          Your business data belongs to you. This policy explains your rights and our commitments.
        </p>
      </div>

      {/* Key Points */}
      <div className="space-y-3">
        {dataOwnershipPolicy.keyPoints.map((point, idx) => (
          <div key={idx} className="bg-white rounded-lg border p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle className="text-green-600" size={16} />
              </div>
              <div>
                <h4 className="font-bold">{point.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{point.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Data Deletion */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Trash2 className="text-red-600 mt-0.5" size={24} />
          <div>
            <h3 className="font-bold text-red-800">Request Data Deletion</h3>
            <p className="text-sm text-red-700 mt-1">
              You can request complete deletion of all your data at any time. This action is irreversible.
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium"
              >
                Request Deletion
              </button>
              <button className="px-4 py-2 bg-white text-red-600 border border-red-300 rounded-lg text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact DPO */}
      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-bold mb-3">Data Protection Officer</h3>
        <p className="text-sm text-gray-600 mb-3">
          For any data-related queries, contact our Data Protection Officer:
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-gray-400" />
            <span className="text-sm">dpo@rez.app</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone size={16} className="text-gray-400" />
            <span className="text-sm">+91 1800-REZ-DATA</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrivacyTab = () => (
    <div className="space-y-4">
      {/* Privacy Status */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold">Privacy Controls</h3>
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
            All Protected
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Lock className="text-green-600" size={20} />
              <div>
                <p className="font-medium">Data Encryption</p>
                <p className="text-xs text-gray-500">AES-256 encryption at rest and in transit</p>
              </div>
            </div>
            <CheckCircle className="text-green-600" size={20} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="text-green-600" size={20} />
              <div>
                <p className="font-medium">Access Control</p>
                <p className="text-xs text-gray-500">Role-based permissions for staff</p>
              </div>
            </div>
            <CheckCircle className="text-green-600" size={20} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Eye className="text-green-600" size={20} />
              <div>
                <p className="font-medium">Audit Logging</p>
                <p className="text-xs text-gray-500">All data access is logged</p>
              </div>
            </div>
            <CheckCircle className="text-green-600" size={20} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Server className="text-green-600" size={20} />
              <div>
                <p className="font-medium">Data Location</p>
                <p className="text-xs text-gray-500">Stored in India (Mumbai region)</p>
              </div>
            </div>
            <CheckCircle className="text-green-600" size={20} />
          </div>
        </div>
      </div>

      {/* Third-Party Sharing */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="font-bold">Third-Party Data Sharing</h3>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <EyeOff className="text-red-600" size={24} />
            </div>
            <div>
              <p className="font-bold text-red-800">NO Data Selling</p>
              <p className="text-sm text-gray-600">We never sell or share your business data</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-sm text-gray-600">
              <strong>Limited sharing only for:</strong>
            </p>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• Payment processing (encrypted transaction data)</li>
              <li>• Tax compliance (GST filing with your consent)</li>
              <li>• Legal requirements (court orders only)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-bold mb-3">Compliance & Certifications</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-gray-50 rounded-lg text-center">
            <p className="font-bold text-lg">ISO 27001</p>
            <p className="text-xs text-gray-500">Information Security</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg text-center">
            <p className="font-bold text-lg">GDPR</p>
            <p className="text-xs text-gray-500">Compliant</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg text-center">
            <p className="font-bold text-lg">PCI DSS</p>
            <p className="text-xs text-gray-500">Payment Security</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg text-center">
            <p className="font-bold text-lg">SOC 2</p>
            <p className="text-xs text-gray-500">Type II</p>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'export', label: 'Export', icon: <Download size={16} /> },
    { id: 'migration', label: 'Migration', icon: <ExternalLink size={16} /> },
    { id: 'policy', label: 'Policy', icon: <FileText size={16} /> },
    { id: 'privacy', label: 'Privacy', icon: <Shield size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="font-bold text-lg">Your Data</h1>
          <p className="text-xs text-gray-500">Export, migrate, or delete anytime</p>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="bg-green-600 text-white px-4 py-2 text-center text-sm">
        <Shield size={14} className="inline mr-1" />
        Your data belongs to YOU. Export everything, anytime, free.
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'text-green-600 border-green-600 bg-green-50/50'
                  : 'text-gray-600 border-transparent'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'export' && renderExportTab()}
        {activeTab === 'migration' && renderMigrationTab()}
        {activeTab === 'policy' && renderPolicyTab()}
        {activeTab === 'privacy' && renderPrivacyTab()}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-sm p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Delete All Data?</h3>
                <p className="text-sm text-gray-500">This action cannot be undone</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-red-700">
                Before deleting, we recommend:
              </p>
              <ul className="text-sm text-red-700 mt-2 space-y-1">
                <li>• Export all your data first</li>
                <li>• Ensure all bills are settled</li>
                <li>• Download tax reports</li>
              </ul>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2 bg-gray-100 rounded-lg font-medium"
              >
                Cancel
              </button>
              <button className="flex-1 py-2 bg-red-600 text-white rounded-lg font-medium">
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantDataExport;
