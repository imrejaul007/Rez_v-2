import React, { useState } from 'react';
import {
  ArrowLeft, Upload, FileSpreadsheet, CheckCircle, XCircle,
  AlertTriangle, Download, Eye, Trash2, RefreshCw, ChevronRight,
  File, Database, Users, Package, ShoppingCart, CreditCard,
  Settings, HelpCircle, Play, Clock, Filter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantBulkImport = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('import');
  const [selectedDataType, setSelectedDataType] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [importStatus, setImportStatus] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const dataTypes = [
    {
      id: 'products',
      name: 'Products',
      icon: Package,
      description: 'Import product catalog with prices, SKUs, categories',
      fields: ['name', 'sku', 'price', 'mrp', 'category', 'stock', 'hsn_code', 'gst_rate'],
      color: 'blue'
    },
    {
      id: 'customers',
      name: 'Customers',
      icon: Users,
      description: 'Import customer database with contact info',
      fields: ['name', 'phone', 'email', 'address', 'city', 'pincode', 'loyalty_points'],
      color: 'green'
    },
    {
      id: 'inventory',
      name: 'Inventory',
      icon: Database,
      description: 'Update stock levels and batch information',
      fields: ['sku', 'quantity', 'batch_no', 'expiry_date', 'cost_price', 'warehouse'],
      color: 'purple'
    },
    {
      id: 'orders',
      name: 'Orders',
      icon: ShoppingCart,
      description: 'Import historical orders for migration',
      fields: ['order_id', 'date', 'customer_phone', 'items', 'total', 'status', 'payment_mode'],
      color: 'orange'
    },
    {
      id: 'transactions',
      name: 'Transactions',
      icon: CreditCard,
      description: 'Import payment and transaction history',
      fields: ['txn_id', 'date', 'amount', 'type', 'mode', 'reference', 'narration'],
      color: 'cyan'
    },
    {
      id: 'suppliers',
      name: 'Suppliers',
      icon: Users,
      description: 'Import vendor/supplier database',
      fields: ['name', 'gstin', 'phone', 'email', 'address', 'payment_terms', 'credit_limit'],
      color: 'pink'
    }
  ];

  const importHistory = [
    {
      id: 1,
      type: 'products',
      filename: 'products_catalog_nov2024.csv',
      date: '2024-11-01 14:30',
      totalRows: 1500,
      success: 1456,
      failed: 44,
      status: 'completed'
    },
    {
      id: 2,
      type: 'customers',
      filename: 'customer_database.xlsx',
      date: '2024-10-28 10:15',
      totalRows: 5000,
      success: 4892,
      failed: 108,
      status: 'completed'
    },
    {
      id: 3,
      type: 'inventory',
      filename: 'stock_update_weekly.csv',
      date: '2024-10-25 16:45',
      totalRows: 800,
      success: 800,
      failed: 0,
      status: 'completed'
    },
    {
      id: 4,
      type: 'products',
      filename: 'new_products_batch.csv',
      date: '2024-11-02 09:00',
      totalRows: 250,
      success: 0,
      failed: 0,
      status: 'processing'
    }
  ];

  const validationResults = {
    totalRows: 1500,
    validRows: 1456,
    errorRows: 44,
    warnings: 23,
    errors: [
      { row: 15, field: 'sku', error: 'Duplicate SKU found: SKU-001234' },
      { row: 45, field: 'price', error: 'Invalid price format' },
      { row: 78, field: 'gst_rate', error: 'GST rate must be 0, 5, 12, 18, or 28' },
      { row: 156, field: 'category', error: 'Category not found: Electronics2' },
      { row: 234, field: 'hsn_code', error: 'Invalid HSN code format' }
    ],
    preview: [
      { name: 'Premium Widget', sku: 'SKU-001', price: 999, stock: 50, status: 'valid' },
      { name: 'Basic Gadget', sku: 'SKU-002', price: 499, stock: 100, status: 'valid' },
      { name: 'Super Tool', sku: 'SKU-003', price: 'invalid', stock: 25, status: 'error' },
      { name: 'Pro Device', sku: 'SKU-004', price: 1499, stock: 30, status: 'valid' },
      { name: 'Mini Accessory', sku: 'SKU-001', price: 199, stock: 200, status: 'duplicate' }
    ]
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile({
        name: file.name,
        size: (file.size / 1024).toFixed(2) + ' KB',
        type: file.type
      });
      setImportStatus('validating');
      // Simulate validation
      setTimeout(() => {
        setImportStatus('validated');
        setShowPreview(true);
      }, 2000);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400';
      case 'processing':
        return 'bg-blue-500/20 text-blue-400';
      case 'failed':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getRowStatusColor = (status) => {
    switch (status) {
      case 'valid':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      case 'duplicate':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Upload size={24} className="mr-2" />
                Bulk Import
              </h1>
              <p className="text-indigo-200 text-sm">Import data from CSV/Excel</p>
            </div>
          </div>
          <button className="bg-white/20 px-3 py-1.5 rounded-lg text-sm flex items-center">
            <HelpCircle size={16} className="mr-1" />
            Guide
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'import', label: 'Import Data' },
            { id: 'history', label: 'History' },
            { id: 'templates', label: 'Templates' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-indigo-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Import Tab */}
      {activeTab === 'import' && (
        <div className="px-4 space-y-4">
          {/* Step 1: Select Data Type */}
          {!selectedDataType && (
            <>
              <h3 className="text-white font-bold">Step 1: Select Data Type</h3>
              <div className="grid grid-cols-2 gap-3">
                {dataTypes.map(type => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedDataType(type)}
                      className={`bg-gray-800 rounded-xl p-4 text-left border-2 border-transparent hover:border-${type.color}-500`}
                    >
                      <Icon size={24} className={`text-${type.color}-400 mb-2`} />
                      <h4 className="text-white font-bold">{type.name}</h4>
                      <p className="text-gray-400 text-xs mt-1">{type.description}</p>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Step 2: Upload File */}
          {selectedDataType && !uploadedFile && (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold">Step 2: Upload {selectedDataType.name} File</h3>
                <button
                  onClick={() => setSelectedDataType(null)}
                  className="text-gray-400 text-sm"
                >
                  Change
                </button>
              </div>

              {/* Required Fields */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <p className="text-blue-400 font-medium mb-2">Required Fields</p>
                <div className="flex flex-wrap gap-2">
                  {selectedDataType.fields.map(field => (
                    <span key={field} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              {/* Upload Area */}
              <label className="block">
                <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-500 transition-colors">
                  <Upload size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-white font-medium">Drop your file here</p>
                  <p className="text-gray-400 text-sm mt-1">or click to browse</p>
                  <p className="text-gray-500 text-xs mt-2">Supports CSV, XLSX, XLS (Max 10MB)</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileUpload}
                />
              </label>

              {/* Download Template */}
              <button className="w-full bg-gray-800 text-white py-3 rounded-xl flex items-center justify-center">
                <Download size={18} className="mr-2" />
                Download {selectedDataType.name} Template
              </button>
            </>
          )}

          {/* Step 3: Validation */}
          {uploadedFile && importStatus === 'validating' && (
            <div className="text-center py-8">
              <RefreshCw size={48} className="text-indigo-400 mx-auto mb-4 animate-spin" />
              <p className="text-white font-medium">Validating your file...</p>
              <p className="text-gray-400 text-sm mt-1">{uploadedFile.name}</p>
            </div>
          )}

          {/* Step 4: Preview & Confirm */}
          {uploadedFile && importStatus === 'validated' && (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold">Step 3: Review & Import</h3>
                <button
                  onClick={() => {
                    setUploadedFile(null);
                    setImportStatus(null);
                    setShowPreview(false);
                  }}
                  className="text-gray-400 text-sm"
                >
                  Upload Different
                </button>
              </div>

              {/* File Info */}
              <div className="bg-gray-800 rounded-xl p-4 flex items-center">
                <FileSpreadsheet size={32} className="text-green-400 mr-3" />
                <div className="flex-1">
                  <p className="text-white font-medium">{uploadedFile.name}</p>
                  <p className="text-gray-400 text-sm">{uploadedFile.size}</p>
                </div>
                <CheckCircle size={24} className="text-green-400" />
              </div>

              {/* Validation Summary */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 text-center">
                  <CheckCircle size={24} className="text-green-400 mx-auto mb-1" />
                  <p className="text-white font-bold">{validationResults.validRows}</p>
                  <p className="text-green-400 text-xs">Valid</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-center">
                  <XCircle size={24} className="text-red-400 mx-auto mb-1" />
                  <p className="text-white font-bold">{validationResults.errorRows}</p>
                  <p className="text-red-400 text-xs">Errors</p>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3 text-center">
                  <AlertTriangle size={24} className="text-yellow-400 mx-auto mb-1" />
                  <p className="text-white font-bold">{validationResults.warnings}</p>
                  <p className="text-yellow-400 text-xs">Warnings</p>
                </div>
              </div>

              {/* Errors List */}
              {validationResults.errors.length > 0 && (
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold">Validation Errors</h4>
                    <button className="text-indigo-400 text-sm">Download Report</button>
                  </div>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {validationResults.errors.map((error, idx) => (
                      <div key={idx} className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 text-sm">
                        <span className="text-red-400">Row {error.row}:</span>
                        <span className="text-gray-300 ml-1">[{error.field}]</span>
                        <span className="text-gray-400 ml-1">{error.error}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preview Table */}
              <div className="bg-gray-800 rounded-xl p-4">
                <h4 className="text-white font-bold mb-3">Data Preview</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-400 border-b border-gray-700">
                        <th className="text-left py-2 px-2">Name</th>
                        <th className="text-left py-2 px-2">SKU</th>
                        <th className="text-left py-2 px-2">Price</th>
                        <th className="text-left py-2 px-2">Stock</th>
                        <th className="text-left py-2 px-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {validationResults.preview.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50">
                          <td className="py-2 px-2 text-white">{row.name}</td>
                          <td className="py-2 px-2 text-gray-300">{row.sku}</td>
                          <td className={`py-2 px-2 ${row.status === 'error' ? 'text-red-400' : 'text-gray-300'}`}>
                            {row.price}
                          </td>
                          <td className="py-2 px-2 text-gray-300">{row.stock}</td>
                          <td className={`py-2 px-2 ${getRowStatusColor(row.status)}`}>
                            {row.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Import Options */}
              <div className="bg-gray-800 rounded-xl p-4">
                <h4 className="text-white font-bold mb-3">Import Options</h4>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-gray-300">Skip rows with errors</span>
                    <div className="w-12 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-gray-300">Update existing records</span>
                    <div className="w-12 h-6 bg-gray-600 rounded-full relative">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-gray-300">Send notification on complete</span>
                    <div className="w-12 h-6 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold">
                  Cancel
                </button>
                <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold flex items-center justify-center">
                  <Play size={18} className="mr-2" />
                  Import {validationResults.validRows} Records
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <div className="px-4 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">{importHistory.length} imports</p>
            <button className="text-indigo-400 text-sm flex items-center">
              <Filter size={14} className="mr-1" />
              Filter
            </button>
          </div>

          {importHistory.map(item => (
            <div key={item.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <FileSpreadsheet size={20} className="text-indigo-400 mr-2" />
                  <div>
                    <h4 className="text-white font-medium">{item.filename}</h4>
                    <p className="text-gray-400 text-xs">{item.date}</p>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-white font-bold">{item.totalRows}</p>
                  <p className="text-gray-400 text-xs">Total</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-green-400 font-bold">{item.success}</p>
                  <p className="text-gray-400 text-xs">Success</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className={`font-bold ${item.failed > 0 ? 'text-red-400' : 'text-gray-400'}`}>
                    {item.failed}
                  </p>
                  <p className="text-gray-400 text-xs">Failed</p>
                </div>
              </div>

              {item.status === 'completed' && item.failed > 0 && (
                <button className="w-full mt-3 text-indigo-400 text-sm py-2 border border-indigo-500/30 rounded-lg">
                  Download Error Report
                </button>
              )}

              {item.status === 'processing' && (
                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Processing...</span>
                    <span className="text-indigo-400">45%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-indigo-500 h-2 rounded-full w-[45%]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="px-4 space-y-4">
          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
            <p className="text-indigo-400 font-medium">Download Templates</p>
            <p className="text-gray-300 text-sm mt-1">
              Use these templates to ensure your data is in the correct format for import.
            </p>
          </div>

          {dataTypes.map(type => {
            const Icon = type.icon;
            return (
              <div key={type.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center mb-3">
                  <Icon size={24} className={`text-${type.color}-400 mr-3`} />
                  <div>
                    <h4 className="text-white font-bold">{type.name} Template</h4>
                    <p className="text-gray-400 text-xs">{type.fields.length} columns</p>
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-xs mb-2">Columns included:</p>
                  <p className="text-gray-300 text-sm">{type.fields.join(', ')}</p>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <Download size={14} className="mr-1" />
                    CSV
                  </button>
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <Download size={14} className="mr-1" />
                    Excel
                  </button>
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <Eye size={14} className="mr-1" />
                    Sample
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default MerchantBulkImport;
