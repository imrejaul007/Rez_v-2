import { useState } from 'react';
import {
  FileText, Upload, Download, CheckCircle, AlertCircle, XCircle, Clock,
  Eye, Trash2, RefreshCw, Shield, Camera, Building2, CreditCard, IdCard,
  FileCheck, AlertTriangle, Calendar, ImageIcon, File, Plus, X
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantDocuments() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadDocType, setUploadDocType] = useState('');

  const [kycProgress] = useState({
    completed: 7,
    total: 8,
    verificationStatus: 'verified',
    lastUpdated: '2024-01-15'
  });

  const [documentTypes] = useState([
    {
      id: 'business_license',
      name: 'Business License',
      description: 'Trade license or shop establishment certificate',
      required: true,
      icon: Building2,
      category: 'Business'
    },
    {
      id: 'gst_certificate',
      name: 'GST Certificate',
      description: 'Goods and Services Tax registration',
      required: true,
      icon: FileText,
      category: 'Tax'
    },
    {
      id: 'pan_card',
      name: 'PAN Card',
      description: 'Permanent Account Number',
      required: true,
      icon: IdCard,
      category: 'Identity'
    },
    {
      id: 'aadhar',
      name: 'Aadhar Card',
      description: 'Aadhar card of business owner',
      required: true,
      icon: IdCard,
      category: 'Identity'
    },
    {
      id: 'bank_proof',
      name: 'Bank Proof',
      description: 'Cancelled cheque or bank statement',
      required: true,
      icon: CreditCard,
      category: 'Banking'
    },
    {
      id: 'store_photos',
      name: 'Store Photos',
      description: 'Interior and exterior store images',
      required: true,
      icon: Camera,
      category: 'Business'
    },
    {
      id: 'fssai',
      name: 'FSSAI License',
      description: 'Food Safety license (if applicable)',
      required: false,
      icon: FileCheck,
      category: 'Business'
    },
    {
      id: 'other',
      name: 'Other Documents',
      description: 'Additional certificates or licenses',
      required: false,
      icon: File,
      category: 'Other'
    }
  ]);

  const [documents, setDocuments] = useState([
    {
      id: 1,
      type: 'business_license',
      typeName: 'Business License',
      fileName: 'trade_license.pdf',
      uploadDate: '2023-12-15',
      expiryDate: '2025-12-31',
      status: 'approved',
      size: '2.3 MB',
      verifiedBy: 'ReZ Compliance Team',
      verifiedDate: '2023-12-16',
      comments: null,
      preview: null
    },
    {
      id: 2,
      type: 'gst_certificate',
      typeName: 'GST Certificate',
      fileName: 'gst_registration.pdf',
      uploadDate: '2023-12-15',
      expiryDate: null,
      status: 'approved',
      size: '1.8 MB',
      verifiedBy: 'ReZ Compliance Team',
      verifiedDate: '2023-12-16',
      comments: null,
      preview: null
    },
    {
      id: 3,
      type: 'pan_card',
      typeName: 'PAN Card',
      fileName: 'pan_card.jpg',
      uploadDate: '2023-12-15',
      expiryDate: null,
      status: 'approved',
      size: '890 KB',
      verifiedBy: 'ReZ Compliance Team',
      verifiedDate: '2023-12-16',
      comments: null,
      preview: 'image'
    },
    {
      id: 4,
      type: 'aadhar',
      typeName: 'Aadhar Card',
      fileName: 'aadhar_card.jpg',
      uploadDate: '2023-12-15',
      expiryDate: null,
      status: 'approved',
      size: '1.2 MB',
      verifiedBy: 'ReZ Compliance Team',
      verifiedDate: '2023-12-16',
      comments: null,
      preview: 'image'
    },
    {
      id: 5,
      type: 'bank_proof',
      typeName: 'Bank Proof',
      fileName: 'cancelled_cheque.jpg',
      uploadDate: '2023-12-15',
      expiryDate: null,
      status: 'approved',
      size: '650 KB',
      verifiedBy: 'ReZ Compliance Team',
      verifiedDate: '2023-12-16',
      comments: null,
      preview: 'image'
    },
    {
      id: 6,
      type: 'store_photos',
      typeName: 'Store Photos',
      fileName: 'store_exterior.jpg',
      uploadDate: '2023-12-15',
      expiryDate: null,
      status: 'approved',
      size: '3.4 MB',
      verifiedBy: 'ReZ Compliance Team',
      verifiedDate: '2023-12-16',
      comments: null,
      preview: 'image'
    },
    {
      id: 7,
      type: 'fssai',
      typeName: 'FSSAI License',
      fileName: 'fssai_license.pdf',
      uploadDate: '2024-01-10',
      expiryDate: '2025-06-30',
      status: 'pending',
      size: '1.5 MB',
      verifiedBy: null,
      verifiedDate: null,
      comments: null,
      preview: null
    },
    {
      id: 8,
      type: 'business_license',
      typeName: 'Business License',
      fileName: 'shop_act_license.pdf',
      uploadDate: '2024-01-12',
      expiryDate: '2024-03-31',
      status: 'expired',
      size: '1.1 MB',
      verifiedBy: null,
      verifiedDate: null,
      comments: 'Document expired. Please upload renewed license.',
      preview: null
    }
  ]);

  const [auditTrail] = useState([
    {
      id: 1,
      action: 'Document Approved',
      documentType: 'Business License',
      user: 'ReZ Compliance Team',
      timestamp: '2023-12-16 14:30',
      details: 'Document verified and approved'
    },
    {
      id: 2,
      action: 'Document Uploaded',
      documentType: 'FSSAI License',
      user: 'Merchant',
      timestamp: '2024-01-10 10:15',
      details: 'New document uploaded for verification'
    },
    {
      id: 3,
      action: 'Document Expired',
      documentType: 'Shop Act License',
      user: 'System',
      timestamp: '2024-01-12 00:00',
      details: 'Document expired, renewal required'
    },
    {
      id: 4,
      action: 'Document Uploaded',
      documentType: 'Shop Act License',
      user: 'Merchant',
      timestamp: '2024-01-12 16:45',
      details: 'Expired document resubmitted'
    }
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'expired':
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      approved: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      rejected: 'bg-red-100 text-red-700',
      expired: 'bg-orange-100 text-orange-700'
    };
    return badges[status] || 'bg-gray-100 text-gray-700';
  };

  const isExpiringSoon = (expiryDate) => {
    if (!expiryDate) return false;
    const today = new Date();
    const expiry = new Date(expiryDate);
    const daysUntilExpiry = Math.floor((expiry - today) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
  };

  const getDocumentsByStatus = (status) => {
    return documents.filter(doc => doc.status === status);
  };

  const getRequiredDocumentsCount = () => {
    const requiredTypes = documentTypes.filter(dt => dt.required).map(dt => dt.id);
    const uploadedRequired = documents.filter(doc =>
      requiredTypes.includes(doc.type) && doc.status === 'approved'
    );
    return { uploaded: uploadedRequired.length, total: requiredTypes.length };
  };

  const requiredDocsCount = getRequiredDocumentsCount();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Documents & KYC</h1>
              <p className="text-gray-600 mt-1">Manage business documents and verification</p>
            </div>
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                kycProgress.verificationStatus === 'verified'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                <Shield className="w-5 h-5" />
                {kycProgress.verificationStatus === 'verified' ? 'KYC Verified' : 'KYC Pending'}
              </div>
              <button
                onClick={() => setShowUploadModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Upload className="w-5 h-5" />
                Upload Document
              </button>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KYC Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600 font-medium">Approved</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {getDocumentsByStatus('approved').length}
            </p>
            <p className="text-sm text-gray-600 mt-1">Documents verified</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              <p className="text-sm text-gray-600 font-medium">Pending</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {getDocumentsByStatus('pending').length}
            </p>
            <p className="text-sm text-gray-600 mt-1">Under review</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              <p className="text-sm text-gray-600 font-medium">Expired</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {getDocumentsByStatus('expired').length}
            </p>
            <p className="text-sm text-gray-600 mt-1">Need renewal</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <FileCheck className="w-5 h-5 text-indigo-600" />
              <p className="text-sm text-gray-600 font-medium">Required</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {requiredDocsCount.uploaded}/{requiredDocsCount.total}
            </p>
            <p className="text-sm text-gray-600 mt-1">Documents complete</p>
          </div>
        </div>

        {/* KYC Progress Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">KYC Verification Progress</h2>
              <p className="text-sm text-gray-600 mt-1">
                {kycProgress.completed} of {kycProgress.total} steps completed
              </p>
            </div>
            <span className="text-2xl font-bold text-indigo-600">
              {Math.round((kycProgress.completed / kycProgress.total) * 100)}%
            </span>
          </div>
          <div className="bg-gray-200 rounded-full h-4 mb-2">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-4 rounded-full transition-all"
              style={{ width: `${(kycProgress.completed / kycProgress.total) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500">Last updated: {kycProgress.lastUpdated}</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex gap-1 p-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-5 h-5" />
              All Documents
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
              KYC Checklist
            </button>
            <button
              onClick={() => setActiveTab('alerts')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === 'alerts'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <AlertTriangle className="w-5 h-5" />
              Alerts
              {getDocumentsByStatus('expired').length > 0 && (
                <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">
                  {getDocumentsByStatus('expired').length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === 'history'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Clock className="w-5 h-5" />
              Audit Trail
            </button>
          </div>
        </div>

        {/* All Documents Tab */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Uploaded Documents</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Document Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      File Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Upload Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Expiry Date
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {documents.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          {doc.preview === 'image' ? (
                            <ImageIcon className="w-5 h-5 text-indigo-600" />
                          ) : (
                            <FileText className="w-5 h-5 text-indigo-600" />
                          )}
                          <span className="font-medium text-gray-900">{doc.typeName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <p className="text-sm text-gray-900">{doc.fileName}</p>
                          <p className="text-xs text-gray-500">{doc.size}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {doc.uploadDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {doc.expiryDate ? (
                          <div>
                            <p className={`text-sm ${
                              doc.status === 'expired' ? 'text-red-600 font-semibold' :
                              isExpiringSoon(doc.expiryDate) ? 'text-orange-600 font-semibold' :
                              'text-gray-900'
                            }`}>
                              {doc.expiryDate}
                            </p>
                            {isExpiringSoon(doc.expiryDate) && doc.status !== 'expired' && (
                              <p className="text-xs text-orange-600">Expiring soon</p>
                            )}
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500">N/A</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex flex-col items-center gap-1">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(doc.status)}`}>
                            {doc.status}
                          </span>
                          {doc.verifiedDate && (
                            <span className="text-xs text-gray-500">
                              {doc.verifiedDate}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedDocument(doc)}
                            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
                            title="View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                            title="Download"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          {(doc.status === 'rejected' || doc.status === 'expired') && (
                            <button
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                              title="Resubmit"
                            >
                              <RefreshCw className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* KYC Checklist Tab */}
        {activeTab === 'checklist' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Required Documents Checklist</h2>
            <div className="space-y-4">
              {documentTypes.map((docType) => {
                const IconComponent = docType.icon;
                const uploadedDoc = documents.find(d => d.type === docType.id && d.status === 'approved');
                const isComplete = uploadedDoc !== undefined;

                return (
                  <div
                    key={docType.id}
                    className={`p-5 rounded-xl border-2 transition-all ${
                      isComplete
                        ? 'bg-green-50 border-green-200'
                        : docType.required
                        ? 'bg-orange-50 border-orange-200'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`p-3 rounded-lg ${
                          isComplete ? 'bg-green-100' :
                          docType.required ? 'bg-orange-100' : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${
                            isComplete ? 'text-green-600' :
                            docType.required ? 'text-orange-600' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-gray-900">{docType.name}</h3>
                            {docType.required && (
                              <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">
                                REQUIRED
                              </span>
                            )}
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                              {docType.category}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{docType.description}</p>
                          {uploadedDoc && (
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-green-700 font-medium">
                                {uploadedDoc.fileName} - Approved on {uploadedDoc.verifiedDate}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        {isComplete ? (
                          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium">
                            View Document
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setUploadDocType(docType.id);
                              setShowUploadModal(true);
                            }}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium"
                          >
                            Upload Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="space-y-4">
            {getDocumentsByStatus('expired').length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Expired Documents</h3>
                    <p className="text-sm text-gray-600">These documents need immediate renewal</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {getDocumentsByStatus('expired').map((doc) => (
                    <div key={doc.id} className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{doc.typeName}</p>
                          <p className="text-sm text-gray-600">Expired on: {doc.expiryDate}</p>
                          {doc.comments && (
                            <p className="text-sm text-red-700 mt-1">{doc.comments}</p>
                          )}
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium">
                          <RefreshCw className="w-4 h-4" />
                          Renew Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {documents.filter(d => d.expiryDate && isExpiringSoon(d.expiryDate) && d.status !== 'expired').length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Expiring Soon</h3>
                    <p className="text-sm text-gray-600">Documents expiring within 30 days</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {documents
                    .filter(d => d.expiryDate && isExpiringSoon(d.expiryDate) && d.status !== 'expired')
                    .map((doc) => (
                      <div key={doc.id} className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-900">{doc.typeName}</p>
                            <p className="text-sm text-gray-600">Expires on: {doc.expiryDate}</p>
                          </div>
                          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm font-medium">
                            Update Document
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {getDocumentsByStatus('pending').length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Pending Verification</h3>
                    <p className="text-sm text-gray-600">Documents under review</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {getDocumentsByStatus('pending').map((doc) => (
                    <div key={doc.id} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{doc.typeName}</p>
                          <p className="text-sm text-gray-600">Uploaded on: {doc.uploadDate}</p>
                        </div>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">
                          Under Review
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Audit Trail Tab */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Document History & Audit Trail</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {auditTrail.map((entry) => (
                  <div key={entry.id} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-indigo-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <h4 className="font-semibold text-gray-900">{entry.action}</h4>
                          <p className="text-sm text-gray-600">{entry.documentType}</p>
                        </div>
                        <span className="text-xs text-gray-500">{entry.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">{entry.details}</p>
                      <p className="text-xs text-gray-500 mt-1">By: {entry.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Upload Document</h3>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document Type *
                </label>
                <select
                  value={uploadDocType}
                  onChange={(e) => setUploadDocType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select document type</option>
                  {documentTypes.map((dt) => (
                    <option key={dt.id} value={dt.id}>
                      {dt.name} {dt.required ? '(Required)' : '(Optional)'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Drag and drop your file here
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  or click to browse
                </p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Choose File
                </button>
                <p className="text-xs text-gray-500 mt-4">
                  Supported formats: PDF, JPG, PNG (Max 10MB)
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Upload Document
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Document Preview Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{selectedDocument.typeName}</h3>
                <button
                  onClick={() => setSelectedDocument(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(selectedDocument.status)}
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(selectedDocument.status)}`}>
                  {selectedDocument.status}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">File Name</p>
                  <p className="font-medium text-gray-900">{selectedDocument.fileName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Upload Date</p>
                  <p className="font-medium text-gray-900">{selectedDocument.uploadDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">File Size</p>
                  <p className="font-medium text-gray-900">{selectedDocument.size}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expiry Date</p>
                  <p className="font-medium text-gray-900">{selectedDocument.expiryDate || 'N/A'}</p>
                </div>
                {selectedDocument.verifiedBy && (
                  <>
                    <div>
                      <p className="text-sm text-gray-600">Verified By</p>
                      <p className="font-medium text-gray-900">{selectedDocument.verifiedBy}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Verified Date</p>
                      <p className="font-medium text-gray-900">{selectedDocument.verifiedDate}</p>
                    </div>
                  </>
                )}
              </div>

              {selectedDocument.comments && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-yellow-900 mb-1">Comments</p>
                  <p className="text-sm text-yellow-800">{selectedDocument.comments}</p>
                </div>
              )}

              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-6">
                {selectedDocument.preview === 'image' ? (
                  <ImageIcon className="w-16 h-16 text-gray-400" />
                ) : (
                  <FileText className="w-16 h-16 text-gray-400" />
                )}
                <p className="text-gray-500 ml-4">Document preview</p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Download className="w-5 h-5" />
                  Download
                </button>
                {(selectedDocument.status === 'rejected' || selectedDocument.status === 'expired') && (
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <RefreshCw className="w-5 h-5" />
                    Resubmit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
