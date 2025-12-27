import { useState } from 'react';
import {
  FileText, Shield, Lock, Upload, Download, CheckCircle, AlertCircle,
  XCircle, File, ExternalLink, Eye, Calendar, DollarSign, Info,
  Check, X, ChevronRight, Award, Building, Receipt, Scale, FileCheck,
  Clock, Users, Database, BookOpen, HelpCircle, ScrollText
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantCompliance() {
  const [activeTab, setActiveTab] = useState('terms');

  const [complianceChecklist, setComplianceChecklist] = useState([
    {
      id: 1,
      item: 'Merchant Agreement Signed',
      status: 'complete',
      completedDate: '2023-06-15',
      required: true
    },
    {
      id: 2,
      item: 'Trade License Uploaded',
      status: 'complete',
      completedDate: '2023-06-16',
      required: true
    },
    {
      id: 3,
      item: 'GST Registration Verified',
      status: 'complete',
      completedDate: '2023-06-16',
      required: true
    },
    {
      id: 4,
      item: 'FSSAI License (Food Businesses)',
      status: 'complete',
      completedDate: '2023-06-17',
      required: true
    },
    {
      id: 5,
      item: 'Bank Account Verified',
      status: 'complete',
      completedDate: '2023-06-15',
      required: true
    },
    {
      id: 6,
      item: 'Privacy Policy Acknowledged',
      status: 'complete',
      completedDate: '2023-06-15',
      required: true
    },
    {
      id: 7,
      item: 'Data Protection Training',
      status: 'pending',
      completedDate: null,
      required: false
    },
    {
      id: 8,
      item: 'Annual Compliance Review',
      status: 'pending',
      completedDate: null,
      required: false
    }
  ]);

  const [termsDocuments, setTermsDocuments] = useState([
    {
      id: 1,
      name: 'ReZ Merchant Agreement',
      description: 'Complete terms and conditions for merchants',
      version: '2.1',
      effectiveDate: '2024-01-01',
      status: 'signed',
      icon: FileText
    },
    {
      id: 2,
      name: 'Commission Structure',
      description: 'Detailed breakdown of platform fees and commissions',
      version: '1.5',
      effectiveDate: '2024-01-01',
      status: 'active',
      icon: DollarSign
    },
    {
      id: 3,
      name: 'Settlement Terms',
      description: 'Payment schedules and settlement procedures',
      version: '1.3',
      effectiveDate: '2024-01-01',
      status: 'active',
      icon: Calendar
    },
    {
      id: 4,
      name: 'Refund Policy',
      description: 'Customer refund and dispute resolution procedures',
      version: '1.8',
      effectiveDate: '2024-01-01',
      status: 'active',
      icon: Receipt
    }
  ]);

  const [taxDocuments, setTaxDocuments] = useState([
    {
      id: 1,
      month: 'January 2024',
      gstReport: 'available',
      tdsReport: 'available',
      revenue: 456789,
      gstCollected: 68518,
      tdsDeducted: 4568
    },
    {
      id: 2,
      month: 'December 2023',
      gstReport: 'available',
      tdsReport: 'available',
      revenue: 445678,
      gstCollected: 66851,
      tdsDeducted: 4457
    },
    {
      id: 3,
      month: 'November 2023',
      gstReport: 'available',
      tdsReport: 'available',
      revenue: 423456,
      gstCollected: 63518,
      tdsDeducted: 4235
    }
  ]);

  const [uploadedDocuments, setUploadedDocuments] = useState([
    {
      id: 1,
      name: 'Trade License',
      type: 'Trade License',
      uploadDate: '2023-06-16',
      expiryDate: '2025-06-15',
      status: 'verified',
      size: '2.3 MB'
    },
    {
      id: 2,
      name: 'FSSAI License',
      type: 'FSSAI',
      uploadDate: '2023-06-17',
      expiryDate: '2025-12-31',
      status: 'verified',
      size: '1.8 MB'
    },
    {
      id: 3,
      name: 'GST Certificate',
      type: 'GST',
      uploadDate: '2023-06-16',
      expiryDate: 'N/A',
      status: 'verified',
      size: '1.2 MB'
    },
    {
      id: 4,
      name: 'Shop Act License',
      type: 'Other',
      uploadDate: '2023-06-18',
      expiryDate: '2024-12-31',
      status: 'expiring_soon',
      size: '1.5 MB'
    }
  ]);

  const [privacyCompliance, setPrivacyCompliance] = useState({
    dataProtectionOfficer: 'Rajesh Kumar',
    lastAudit: '2024-01-15',
    customerDataRecords: 1234,
    dataRetentionPeriod: '3 years',
    gdprCompliant: true,
    encryptionEnabled: true
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'complete':
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'expiring_soon':
        return <Clock className="w-5 h-5 text-orange-600" />;
      case 'expired':
      case 'not_started':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Info className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      complete: 'bg-green-100 text-green-700',
      verified: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      expiring_soon: 'bg-orange-100 text-orange-700',
      expired: 'bg-red-100 text-red-700',
      not_started: 'bg-gray-100 text-gray-700',
      signed: 'bg-blue-100 text-blue-700',
      active: 'bg-green-100 text-green-700'
    };
    return badges[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Compliance & Policies</h1>
              <p className="text-gray-600 mt-1">Legal documents, tax compliance, and data privacy</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium">
                <Shield className="w-5 h-5 inline mr-2" />
                Fully Compliant
              </div>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Compliance Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600 font-medium">Completed</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {complianceChecklist.filter(c => c.status === 'complete').length}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              of {complianceChecklist.length} items
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <p className="text-sm text-gray-600 font-medium">Pending</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {complianceChecklist.filter(c => c.status === 'pending').length}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Action required
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <File className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-600 font-medium">Documents</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{uploadedDocuments.length}</p>
            <p className="text-sm text-gray-600 mt-1">
              Uploaded & verified
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-purple-600" />
              <p className="text-sm text-gray-600 font-medium">Data Privacy</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">100%</p>
            <p className="text-sm text-gray-600 mt-1">
              Compliant
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex gap-1 p-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-5 h-5" />
              Terms & Agreements
            </button>
            <button
              onClick={() => setActiveTab('tax')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === 'tax'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Receipt className="w-5 h-5" />
              Tax Compliance
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Lock className="w-5 h-5" />
              Data Privacy
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === 'documents'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Upload className="w-5 h-5" />
              Legal Documents
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === 'checklist'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              Compliance Checklist
            </button>
          </div>
        </div>

        {/* Terms & Agreements Tab */}
        {activeTab === 'terms' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Legal Agreements & Policies</h2>
              <div className="space-y-4">
                {termsDocuments.map((doc) => {
                  const IconComponent = doc.icon;
                  return (
                    <div key={doc.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-indigo-100 rounded-lg">
                          <IconComponent className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1">{doc.name}</h3>
                              <p className="text-sm text-gray-600">{doc.description}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(doc.status)}`}>
                              {doc.status.replace('_', ' ')}
                            </span>
                          </div>
                          <div className="flex items-center gap-6 mt-4 text-sm text-gray-600">
                            <span>Version {doc.version}</span>
                            <span>Effective: {doc.effectiveDate}</span>
                          </div>
                          <div className="flex gap-3 mt-4">
                            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
                              <Eye className="w-4 h-4" />
                              View Document
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
                              <Download className="w-4 h-4" />
                              Download PDF
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Terms Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Key Terms Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-2">Commission Structure</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Base commission: 8% per transaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Premium tier: 6% (for high volume)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>No setup or monthly fees</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-2">Settlement Terms</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Settlement cycle: T+2 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Automatic bank transfer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Detailed transaction reports</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-2">Refund Policy</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-600 mt-0.5" />
                      <span>7-day refund window for customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-600 mt-0.5" />
                      <span>Merchant approval required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-600 mt-0.5" />
                      <span>Commission refunded on approved refunds</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h3 className="font-bold text-gray-900 mb-2">Merchant Obligations</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-orange-600 mt-0.5" />
                      <span>Honor all valid offer redemptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-orange-600 mt-0.5" />
                      <span>Maintain accurate business information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-orange-600 mt-0.5" />
                      <span>Comply with all applicable laws</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tax Compliance Tab */}
        {activeTab === 'tax' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">GST & Tax Reports</h2>
                  <p className="text-sm text-gray-600 mt-1">Download GST-ready transaction reports</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Download className="w-5 h-5" />
                  Download Form 26AS
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Period</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">GST Collected</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">TDS Deducted</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Reports</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {taxDocuments.map((doc) => (
                      <tr key={doc.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <p className="font-medium text-gray-900">{doc.month}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-semibold text-green-600">₹{doc.revenue.toLocaleString()}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-900">₹{doc.gstCollected.toLocaleString()}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-900">₹{doc.tdsDeducted.toLocaleString()}</p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-sm font-medium">
                              GST Report
                            </button>
                            <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 text-sm font-medium">
                              TDS Certificate
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tax Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Tax Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-3">GST Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">GSTIN:</span>
                      <span className="font-semibold text-gray-900">27AABCU9603R1ZM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GST Rate:</span>
                      <span className="font-semibold text-gray-900">18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Registration Date:</span>
                      <span className="font-semibold text-gray-900">15-Jun-2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Filing Status:</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Up to date
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-3">TDS Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">PAN:</span>
                      <span className="font-semibold text-gray-900">AABCU9603R</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">TDS Rate:</span>
                      <span className="font-semibold text-gray-900">1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Quarter TDS:</span>
                      <span className="font-semibold text-gray-900">₹13,260</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Form 26AS:</span>
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium text-xs">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Data Privacy Tab */}
        {activeTab === 'privacy' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-green-600" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Data Protection Compliance</h2>
                  <p className="text-sm text-gray-600">GDPR & Indian Data Protection Laws</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="font-bold text-gray-900">GDPR Compliant</h3>
                  </div>
                  <p className="text-sm text-gray-600">All customer data handling meets GDPR standards</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Encrypted</h3>
                  </div>
                  <p className="text-sm text-gray-600">256-bit AES encryption for all stored data</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-purple-600" />
                    <h3 className="font-bold text-gray-900">Secure Storage</h3>
                  </div>
                  <p className="text-sm text-gray-600">ISO 27001 certified data centers</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Privacy Compliance Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-gray-600">Data Protection Officer</label>
                      <p className="font-semibold text-gray-900">{privacyCompliance.dataProtectionOfficer}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Last Privacy Audit</label>
                      <p className="font-semibold text-gray-900">{privacyCompliance.lastAudit}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Customer Records</label>
                      <p className="font-semibold text-gray-900">{privacyCompliance.customerDataRecords.toLocaleString()}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Data Retention Period</label>
                      <p className="font-semibold text-gray-900">{privacyCompliance.dataRetentionPeriod}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Customer Data Handling Policy</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Data Collection</p>
                        <p className="text-sm text-gray-600">Only essential customer information is collected (name, contact, transaction history)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Data Usage</p>
                        <p className="text-sm text-gray-600">Customer data used only for service delivery and personalization</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Data Sharing</p>
                        <p className="text-sm text-gray-600">No third-party sharing without explicit customer consent</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Right to Deletion</p>
                        <p className="text-sm text-gray-600">Customers can request data deletion at any time</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy Policy Links */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Privacy Resources</h2>
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    <span className="font-medium text-gray-900">ReZ Privacy Policy</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <span className="font-medium text-gray-900">Data Protection Guidelines</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <Scale className="w-5 h-5 text-indigo-600" />
                    <span className="font-medium text-gray-900">GDPR Compliance Guide</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Legal Documents Tab */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Uploaded Legal Documents</h2>
                  <p className="text-sm text-gray-600 mt-1">Required licenses and certificates</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Upload className="w-5 h-5" />
                  Upload Document
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {uploadedDocuments.map((doc) => (
                  <div key={doc.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <FileCheck className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{doc.type}</h3>
                          <p className="text-sm text-gray-600">{doc.name}</p>
                        </div>
                      </div>
                      {getStatusIcon(doc.status)}
                    </div>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Uploaded:</span>
                        <span className="font-medium text-gray-900">{doc.uploadDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expiry:</span>
                        <span className={`font-medium ${
                          doc.status === 'expiring_soon' ? 'text-orange-600' : 'text-gray-900'
                        }`}>
                          {doc.expiryDate}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Size:</span>
                        <span className="font-medium text-gray-900">{doc.size}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 text-sm font-medium">
                        <Eye className="w-4 h-4 inline mr-1" />
                        View
                      </button>
                      <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium">
                        <Download className="w-4 h-4 inline mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Required Documents</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-900">Trade License</span>
                  </div>
                  <span className="text-sm text-green-600">Uploaded & Verified</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-900">FSSAI License (Food Businesses)</span>
                  </div>
                  <span className="text-sm text-green-600">Uploaded & Verified</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-900">GST Certificate</span>
                  </div>
                  <span className="text-sm text-green-600">Uploaded & Verified</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">Shop Act License</span>
                  </div>
                  <span className="text-sm text-orange-600">Expiring Soon - Renew</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Compliance Checklist Tab */}
        {activeTab === 'checklist' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Compliance Checklist</h2>
            <div className="space-y-3">
              {complianceChecklist.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                    item.status === 'complete'
                      ? 'bg-green-50 border-green-200'
                      : 'bg-yellow-50 border-yellow-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {getStatusIcon(item.status)}
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-900">{item.item}</p>
                        {item.required && (
                          <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">
                            REQUIRED
                          </span>
                        )}
                      </div>
                      {item.completedDate && (
                        <p className="text-sm text-gray-600">Completed on {item.completedDate}</p>
                      )}
                    </div>
                  </div>
                  {item.status === 'pending' && (
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
                      Complete Now
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Progress Summary */}
            <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-8 h-8 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Compliance Progress</h3>
                  <p className="text-sm text-gray-600">
                    {complianceChecklist.filter(c => c.status === 'complete').length} of {complianceChecklist.length} items completed
                  </p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-full h-4">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 h-4 rounded-full"
                  style={{
                    width: `${(complianceChecklist.filter(c => c.status === 'complete').length / complianceChecklist.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
