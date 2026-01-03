import React, { useState } from 'react';
import {
  ArrowLeft, Printer, FileText, Tag, Receipt, Image,
  Settings, Eye, Edit2, Copy, Plus, Trash2, Download,
  ChevronRight, CheckCircle, Smartphone, Monitor, Save,
  Type, Square, QrCode, Barcode, AlignLeft, AlignCenter, AlignRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantPrintTemplates = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('receipts');
  const [showEditor, setShowEditor] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const templateTypes = [
    { id: 'receipts', name: 'Receipts', icon: Receipt },
    { id: 'labels', name: 'Labels', icon: Tag },
    { id: 'invoices', name: 'Invoices', icon: FileText }
  ];

  const receiptTemplates = [
    {
      id: 1,
      name: 'Standard Receipt',
      size: '80mm',
      isDefault: true,
      elements: ['logo', 'store_name', 'items', 'total', 'payment', 'qr'],
      lastModified: '2024-11-01'
    },
    {
      id: 2,
      name: 'Compact Receipt',
      size: '58mm',
      isDefault: false,
      elements: ['store_name', 'items', 'total', 'payment'],
      lastModified: '2024-10-15'
    },
    {
      id: 3,
      name: 'Detailed Receipt',
      size: '80mm',
      isDefault: false,
      elements: ['logo', 'store_name', 'address', 'items', 'subtotal', 'tax', 'total', 'payment', 'terms', 'qr', 'barcode'],
      lastModified: '2024-10-28'
    }
  ];

  const labelTemplates = [
    {
      id: 1,
      name: 'Product Label',
      size: '50x30mm',
      isDefault: true,
      elements: ['product_name', 'price', 'mrp', 'barcode'],
      lastModified: '2024-10-20'
    },
    {
      id: 2,
      name: 'Price Tag',
      size: '40x20mm',
      isDefault: false,
      elements: ['price', 'mrp', 'discount'],
      lastModified: '2024-10-10'
    },
    {
      id: 3,
      name: 'Shelf Label',
      size: '60x40mm',
      isDefault: false,
      elements: ['product_name', 'sku', 'price', 'barcode', 'stock_info'],
      lastModified: '2024-10-05'
    },
    {
      id: 4,
      name: 'Expiry Label',
      size: '30x20mm',
      isDefault: false,
      elements: ['mfg_date', 'expiry_date', 'batch'],
      lastModified: '2024-09-28'
    }
  ];

  const invoiceTemplates = [
    {
      id: 1,
      name: 'GST Invoice',
      size: 'A4',
      isDefault: true,
      elements: ['logo', 'header', 'customer', 'items', 'tax_breakdown', 'total', 'bank_details', 'terms', 'signature'],
      lastModified: '2024-11-01'
    },
    {
      id: 2,
      name: 'Simple Invoice',
      size: 'A4',
      isDefault: false,
      elements: ['header', 'customer', 'items', 'total', 'payment_info'],
      lastModified: '2024-10-15'
    },
    {
      id: 3,
      name: 'Proforma Invoice',
      size: 'A4',
      isDefault: false,
      elements: ['logo', 'header', 'customer', 'items', 'validity', 'terms', 'bank_details'],
      lastModified: '2024-10-01'
    }
  ];

  const editorElements = [
    { id: 'text', name: 'Text', icon: Type },
    { id: 'image', name: 'Image/Logo', icon: Image },
    { id: 'qr', name: 'QR Code', icon: QrCode },
    { id: 'barcode', name: 'Barcode', icon: Barcode },
    { id: 'line', name: 'Line', icon: Square },
    { id: 'box', name: 'Box', icon: Square }
  ];

  const dynamicFields = [
    { id: 'store_name', name: 'Store Name' },
    { id: 'store_address', name: 'Store Address' },
    { id: 'store_phone', name: 'Store Phone' },
    { id: 'store_gstin', name: 'Store GSTIN' },
    { id: 'invoice_no', name: 'Invoice Number' },
    { id: 'invoice_date', name: 'Invoice Date' },
    { id: 'customer_name', name: 'Customer Name' },
    { id: 'customer_phone', name: 'Customer Phone' },
    { id: 'items_table', name: 'Items Table' },
    { id: 'subtotal', name: 'Subtotal' },
    { id: 'discount', name: 'Discount' },
    { id: 'tax_amount', name: 'Tax Amount' },
    { id: 'total', name: 'Grand Total' },
    { id: 'payment_mode', name: 'Payment Mode' },
    { id: 'upi_qr', name: 'UPI QR Code' }
  ];

  const getTemplates = () => {
    switch (activeTab) {
      case 'receipts':
        return receiptTemplates;
      case 'labels':
        return labelTemplates;
      case 'invoices':
        return invoiceTemplates;
      default:
        return [];
    }
  };

  const printerSettings = {
    thermalPrinter: {
      name: 'Epson TM-T82',
      status: 'connected',
      paperWidth: '80mm'
    },
    labelPrinter: {
      name: 'TSC TE200',
      status: 'connected',
      paperSize: '50x30mm'
    },
    a4Printer: {
      name: 'HP LaserJet Pro',
      status: 'connected',
      paperSize: 'A4'
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Printer size={24} className="mr-2" />
                Print Templates
              </h1>
              <p className="text-amber-200 text-sm">Customize receipts, labels & invoices</p>
            </div>
          </div>
          <button className="bg-white/20 px-3 py-1.5 rounded-lg text-sm flex items-center">
            <Settings size={16} className="mr-1" />
            Printers
          </button>
        </div>

        {/* Printer Status */}
        <div className="flex overflow-x-auto space-x-3 pb-2">
          <div className="flex-shrink-0 bg-white/10 rounded-lg px-3 py-2 flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
            <span className="text-sm">Thermal: {printerSettings.thermalPrinter.name}</span>
          </div>
          <div className="flex-shrink-0 bg-white/10 rounded-lg px-3 py-2 flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
            <span className="text-sm">Label: {printerSettings.labelPrinter.name}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {templateTypes.map(type => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center ${
                  activeTab === type.id ? 'bg-amber-600 text-white' : 'text-gray-400'
                }`}
              >
                <Icon size={16} className="mr-1" />
                {type.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Templates List */}
      {!showEditor && (
        <div className="px-4 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">{getTemplates().length} templates</p>
            <button
              onClick={() => {
                setSelectedTemplate(null);
                setShowEditor(true);
              }}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm flex items-center"
            >
              <Plus size={16} className="mr-1" />
              Create New
            </button>
          </div>

          {getTemplates().map(template => (
            <div key={template.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-white font-bold">{template.name}</h3>
                    {template.isDefault && (
                      <span className="ml-2 px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded text-xs">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">Size: {template.size}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowPreview(true)}
                    className="p-2 bg-gray-700 rounded-lg"
                  >
                    <Eye size={16} className="text-gray-400" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTemplate(template);
                      setShowEditor(true);
                    }}
                    className="p-2 bg-gray-700 rounded-lg"
                  >
                    <Edit2 size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                <p className="text-gray-400 text-xs mb-2">Elements:</p>
                <div className="flex flex-wrap gap-1">
                  {template.elements.map(el => (
                    <span key={el} className="px-2 py-0.5 bg-gray-600 text-gray-300 rounded text-xs">
                      {el.replace('_', ' ')}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs">Modified: {template.lastModified}</span>
                <div className="flex space-x-2">
                  <button className="text-gray-400 text-sm flex items-center">
                    <Copy size={14} className="mr-1" />
                    Duplicate
                  </button>
                  {!template.isDefault && (
                    <button className="text-amber-400 text-sm">Set Default</button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Paper Size Guide */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <h4 className="text-amber-400 font-medium mb-2">Paper Size Guide</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-300">
                <span className="text-gray-400">Thermal:</span> 58mm, 80mm
              </div>
              <div className="text-gray-300">
                <span className="text-gray-400">Labels:</span> 30x20 to 100x60mm
              </div>
              <div className="text-gray-300">
                <span className="text-gray-400">Invoice:</span> A4, A5, Letter
              </div>
              <div className="text-gray-300">
                <span className="text-gray-400">Custom:</span> Any size
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Template Editor */}
      {showEditor && (
        <div className="px-4 space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowEditor(false)}
              className="text-gray-400 flex items-center"
            >
              <ArrowLeft size={18} className="mr-1" />
              Back
            </button>
            <div className="flex space-x-2">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex items-center">
                <Eye size={16} className="mr-1" />
                Preview
              </button>
              <button className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
                <Save size={16} className="mr-1" />
                Save
              </button>
            </div>
          </div>

          {/* Template Settings */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Template Settings</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-gray-400 text-sm block mb-1">Template Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-3 py-2 text-white text-sm"
                  defaultValue={selectedTemplate?.name || ''}
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm block mb-1">Paper Size</label>
                <select className="w-full bg-gray-700 rounded-lg px-3 py-2 text-white text-sm">
                  <option>80mm (Thermal)</option>
                  <option>58mm (Thermal)</option>
                  <option>50x30mm (Label)</option>
                  <option>A4 (Invoice)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Design Elements */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Add Elements</h3>
            <div className="grid grid-cols-3 gap-2">
              {editorElements.map(el => {
                const Icon = el.icon;
                return (
                  <button
                    key={el.id}
                    className="bg-gray-700 rounded-lg p-3 text-center"
                  >
                    <Icon size={20} className="text-amber-400 mx-auto mb-1" />
                    <span className="text-gray-300 text-xs">{el.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Fields */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Dynamic Fields</h3>
            <p className="text-gray-400 text-sm mb-3">Click to insert into template</p>
            <div className="flex flex-wrap gap-2">
              {dynamicFields.map(field => (
                <button
                  key={field.id}
                  className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-lg text-sm hover:bg-amber-500/30"
                >
                  {`{{${field.name}}}`}
                </button>
              ))}
            </div>
          </div>

          {/* Canvas Preview */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Design Canvas</h3>
            <div className="bg-white rounded-lg p-4 min-h-64">
              {/* Receipt Preview */}
              <div className="text-center text-black">
                <div className="w-16 h-16 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                  <Image size={24} className="text-gray-400" />
                </div>
                <h4 className="font-bold text-lg">Store Name</h4>
                <p className="text-gray-500 text-sm">123 Main Street, City</p>
                <p className="text-gray-500 text-sm">Ph: +91 98765 43210</p>
                <p className="text-gray-500 text-sm">GSTIN: 27XXXXX1234X1Z5</p>

                <div className="border-t border-dashed border-gray-300 my-3" />

                <div className="text-left text-sm">
                  <div className="flex justify-between">
                    <span>Invoice #:</span>
                    <span>INV-001234</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>01/11/2024</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-300 my-3" />

                <div className="text-left text-sm">
                  <div className="flex justify-between border-b border-gray-200 py-1">
                    <span>Item 1 x 2</span>
                    <span>₹200</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 py-1">
                    <span>Item 2 x 1</span>
                    <span>₹150</span>
                  </div>
                </div>

                <div className="border-t border-gray-300 my-2" />

                <div className="text-left">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹350</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-24 h-24 bg-gray-100 mx-auto flex items-center justify-center">
                    <QrCode size={48} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-xs mt-1">Scan to pay</p>
                </div>

                <p className="text-gray-500 text-xs mt-4">Thank you for shopping!</p>
              </div>
            </div>
          </div>

          {/* Text Formatting */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Text Formatting</h3>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-700 rounded-lg">
                <AlignLeft size={18} className="text-gray-400" />
              </button>
              <button className="p-2 bg-amber-600 rounded-lg">
                <AlignCenter size={18} className="text-white" />
              </button>
              <button className="p-2 bg-gray-700 rounded-lg">
                <AlignRight size={18} className="text-gray-400" />
              </button>
              <div className="flex-1" />
              <select className="bg-gray-700 rounded-lg px-3 py-2 text-white text-sm">
                <option>Normal</option>
                <option>Bold</option>
                <option>Large</option>
                <option>Small</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
              <h3 className="text-white font-bold">Template Preview</h3>
              <button onClick={() => setShowPreview(false)} className="text-gray-400">✕</button>
            </div>

            <div className="p-4">
              <div className="bg-white rounded-lg p-4 text-black text-sm">
                <div className="text-center">
                  <h4 className="font-bold text-lg">Sample Store</h4>
                  <p className="text-gray-500 text-xs">123 Main Street</p>
                  <p className="text-gray-500 text-xs">Ph: +91 98765 43210</p>
                </div>
                <div className="border-t border-dashed my-2" />
                <div className="flex justify-between text-xs">
                  <span>Bill #: 1234</span>
                  <span>01/11/2024</span>
                </div>
                <div className="border-t border-dashed my-2" />
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Product A x 2</span>
                    <span>₹200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Product B x 1</span>
                    <span>₹150</span>
                  </div>
                </div>
                <div className="border-t my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹350</span>
                </div>
                <div className="text-center mt-3">
                  <p className="text-gray-500 text-xs">Thank you!</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-700 flex space-x-3">
              <button
                onClick={() => setShowPreview(false)}
                className="flex-1 bg-gray-700 text-white py-2 rounded-lg"
              >
                Close
              </button>
              <button className="flex-1 bg-amber-600 text-white py-2 rounded-lg flex items-center justify-center">
                <Printer size={16} className="mr-1" />
                Test Print
              </button>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantPrintTemplates;
