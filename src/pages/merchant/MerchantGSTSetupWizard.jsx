import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle, FileText, Building,
  Percent, Tag, HelpCircle, AlertCircle, Search, Download,
  Eye, Settings, Shield, ChevronRight, Info
} from 'lucide-react';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantGSTSetupWizard = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gstin: '',
    legalName: '',
    tradeName: '',
    businessType: '',
    category: '',
    defaultGstRate: '18',
    hsnCodes: [],
    invoicePrefix: 'INV',
    invoiceStartNumber: '1001'
  });

  const [gstVerified, setGstVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const businessTypes = [
    { id: 'regular', name: 'Regular', desc: 'Turnover > 40 lakhs, file monthly returns' },
    { id: 'composition', name: 'Composition', desc: 'Turnover < 1.5 crore, pay fixed tax rate' },
    { id: 'unregistered', name: 'Not GST Registered', desc: 'Turnover < 40 lakhs' }
  ];

  const categories = [
    { id: 'restaurant', name: 'Restaurant/Cafe', defaultGst: '5', hsn: '996331' },
    { id: 'grocery', name: 'Grocery Store', defaultGst: 'Mixed', hsn: 'Multiple' },
    { id: 'salon', name: 'Salon/Spa', defaultGst: '18', hsn: '998871' },
    { id: 'retail', name: 'Retail Store', defaultGst: '12', hsn: 'Multiple' },
    { id: 'pharmacy', name: 'Pharmacy', defaultGst: '12', hsn: '3004' },
    { id: 'electronics', name: 'Electronics', defaultGst: '18', hsn: '8471' }
  ];

  const commonHSNCodes = [
    { code: '996331', desc: 'Restaurant services', rate: '5%' },
    { code: '998871', desc: 'Beauty & spa services', rate: '18%' },
    { code: '6101', desc: 'Apparel (Men)', rate: '12%' },
    { code: '6104', desc: 'Apparel (Women)', rate: '12%' },
    { code: '8471', desc: 'Computers & accessories', rate: '18%' },
    { code: '3004', desc: 'Medicaments', rate: '12%' },
    { code: '1006', desc: 'Rice', rate: '0%' },
    { code: '0402', desc: 'Milk products', rate: '5%' }
  ];

  const verifyGSTIN = () => {
    if (formData.gstin.length !== 15) return;
    setVerifying(true);
    setTimeout(() => {
      setGstVerified(true);
      setVerifying(false);
      setFormData(prev => ({
        ...prev,
        legalName: 'Sample Business Pvt Ltd',
        tradeName: 'Sample Store'
      }));
    }, 1500);
  };

  const totalSteps = 4;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-white">GST Registration</h2>
              <p className="text-gray-400 mt-2">Let's set up your GST for proper invoicing</p>
            </div>

            {/* Business Type Selection */}
            <div className="space-y-3">
              <label className="text-sm text-gray-400">Business Type</label>
              {businessTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setFormData(prev => ({ ...prev, businessType: type.id }))}
                  className={`w-full p-4 rounded-xl border text-left transition-colors ${
                    formData.businessType === type.id
                      ? 'bg-blue-500/20 border-blue-500'
                      : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <p className="font-medium text-white">{type.name}</p>
                  <p className="text-sm text-gray-400 mt-1">{type.desc}</p>
                </button>
              ))}
            </div>

            {/* GSTIN Input */}
            {formData.businessType && formData.businessType !== 'unregistered' && (
              <div className="mt-4">
                <label className="text-sm text-gray-400 mb-2 block">GSTIN Number</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.gstin}
                    onChange={(e) => setFormData(prev => ({ ...prev, gstin: e.target.value.toUpperCase() }))}
                    placeholder="22AAAAA0000A1Z5"
                    maxLength={15}
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white uppercase"
                  />
                  <button
                    onClick={verifyGSTIN}
                    disabled={formData.gstin.length !== 15 || verifying}
                    className={`px-4 py-3 rounded-lg transition-colors ${
                      formData.gstin.length === 15 && !verifying
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {verifying ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
                {gstVerified && (
                  <div className="mt-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">GSTIN Verified</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Legal Name: {formData.legalName}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Tag className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Business Category</h2>
              <p className="text-gray-400 mt-2">We'll auto-configure GST rates based on your category</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFormData(prev => ({ ...prev, category: cat.id, defaultGstRate: cat.defaultGst }))}
                  className={`p-4 rounded-xl border text-left transition-colors ${
                    formData.category === cat.id
                      ? 'bg-purple-500/20 border-purple-500'
                      : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <p className="font-medium text-white">{cat.name}</p>
                  <p className="text-xs text-gray-400 mt-1">Default: {cat.defaultGst}% GST</p>
                </button>
              ))}
            </div>

            {formData.category && (
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-white">Auto-configured for {categories.find(c => c.id === formData.category)?.name}</p>
                    <ul className="text-xs text-gray-400 mt-2 space-y-1">
                      <li>Default GST Rate: {categories.find(c => c.id === formData.category)?.defaultGst}%</li>
                      <li>HSN/SAC Code: {categories.find(c => c.id === formData.category)?.hsn}</li>
                      <li>You can customize per product later</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-xl font-bold text-white">HSN/SAC Codes</h2>
              <p className="text-gray-400 mt-2">Common codes for your category (editable later)</p>
            </div>

            {/* Search HSN */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search HSN/SAC code or description..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white"
              />
            </div>

            {/* Common HSN Codes */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="p-3 border-b border-gray-700 bg-gray-750">
                <p className="text-sm font-medium text-white">Suggested for your category</p>
              </div>
              <div className="divide-y divide-gray-700">
                {commonHSNCodes.slice(0, 5).map((hsn, idx) => (
                  <div key={idx} className="p-3 flex items-center justify-between">
                    <div>
                      <p className="text-white font-mono">{hsn.code}</p>
                      <p className="text-sm text-gray-400">{hsn.desc}</p>
                    </div>
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded">
                      {hsn.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white font-medium">Auto-HSN Suggestions</p>
                  <p className="text-xs text-gray-400 mt-1">
                    When you add products, we'll automatically suggest the correct HSN code based on the product name.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Invoice Settings</h2>
              <p className="text-gray-400 mt-2">Configure your invoice format</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Invoice Prefix</label>
                <input
                  type="text"
                  value={formData.invoicePrefix}
                  onChange={(e) => setFormData(prev => ({ ...prev, invoicePrefix: e.target.value.toUpperCase() }))}
                  placeholder="INV"
                  maxLength={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Starting Invoice Number</label>
                <input
                  type="text"
                  value={formData.invoiceStartNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, invoiceStartNumber: e.target.value }))}
                  placeholder="1001"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
                />
              </div>

              {/* Invoice Preview */}
              <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                <p className="text-sm text-gray-400 mb-3">Invoice Preview</p>
                <div className="bg-white text-black p-4 rounded-lg">
                  <div className="text-center border-b border-gray-200 pb-3 mb-3">
                    <p className="font-bold">{formData.tradeName || 'Your Store Name'}</p>
                    <p className="text-xs text-gray-600">GSTIN: {formData.gstin || '22AAAAA0000A1Z5'}</p>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span>Invoice No:</span>
                      <span className="font-mono">{formData.invoicePrefix}-{formData.invoiceStartNumber}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span>Date:</span>
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="border-t border-gray-200 my-2 pt-2">
                      <div className="flex justify-between text-xs">
                        <span>Sample Item x 1</span>
                        <span>100.00</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>GST @ 18%</span>
                        <span>18.00</span>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-2 font-bold flex justify-between">
                      <span>Total</span>
                      <span>118.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CA Export */}
            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <div className="flex items-start gap-3">
                <Download className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white font-medium">One-Click CA Export</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Export all sales data in Tally-compatible format anytime. Your CA will love this.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => step > 1 ? setStep(step - 1) : navigate('/merchant')} className="p-2 hover:bg-gray-700 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-white">GST Setup</h1>
              <p className="text-xs text-gray-400">Step {step} of {totalSteps}</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/merchant')}
            className="text-sm text-gray-400 hover:text-white"
          >
            Skip for now
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 flex gap-1">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div
              key={idx}
              className={`flex-1 h-1 rounded-full ${
                idx < step ? 'bg-green-500' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {renderStep()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex gap-3">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={() => {
              if (step < totalSteps) {
                setStep(step + 1);
              } else {
                navigate('/merchant');
              }
            }}
            className="flex-1 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
          >
            {step < totalSteps ? (
              <>
                Next
                <ArrowRight className="w-5 h-5" />
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                Complete Setup
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantGSTSetupWizard;
