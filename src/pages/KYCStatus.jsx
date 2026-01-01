import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const KYCStatus = () => {
  const navigate = useNavigate();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Mock KYC data
  const [kycData] = useState({
    overallStatus: 'partial',
    completionPercentage: 75,
    tier: 'Silver',
    nextTier: 'Gold',
    documents: [
      {
        id: 'phone',
        name: 'Phone Number',
        icon: '📱',
        status: 'verified',
        verifiedOn: '2024-01-15',
        value: '+91 98765*****',
        required: true
      },
      {
        id: 'email',
        name: 'Email Address',
        icon: '📧',
        status: 'verified',
        verifiedOn: '2024-01-15',
        value: 'user***@gmail.com',
        required: true
      },
      {
        id: 'aadhaar',
        name: 'Aadhaar Card',
        icon: '🆔',
        status: 'verified',
        verifiedOn: '2024-02-20',
        value: 'XXXX XXXX 1234',
        required: true,
        documentType: 'aadhaar'
      },
      {
        id: 'pan',
        name: 'PAN Card',
        icon: '💳',
        status: 'verified',
        verifiedOn: '2024-02-20',
        value: 'ABCDE1234F',
        required: true,
        documentType: 'pan'
      },
      {
        id: 'address',
        name: 'Address Proof',
        icon: '🏠',
        status: 'pending',
        submittedOn: '2024-12-25',
        reason: 'Document is being verified. This usually takes 24-48 hours.',
        required: true,
        documentType: 'address'
      },
      {
        id: 'bank',
        name: 'Bank Account',
        icon: '🏦',
        status: 'not_submitted',
        required: false,
        benefits: 'Enable instant refunds and higher withdrawal limits'
      },
      {
        id: 'selfie',
        name: 'Selfie Verification',
        icon: '🤳',
        status: 'verified',
        verifiedOn: '2024-02-20',
        required: true
      },
      {
        id: 'video',
        name: 'Video KYC',
        icon: '🎥',
        status: 'not_submitted',
        required: false,
        benefits: 'Unlock premium features and highest transaction limits'
      }
    ],
    limits: {
      current: {
        daily: 50000,
        monthly: 200000,
        perTransaction: 25000
      },
      afterFull: {
        daily: 200000,
        monthly: 1000000,
        perTransaction: 100000
      }
    },
    benefits: {
      current: ['Basic cashback', 'Standard support', 'Normal processing'],
      afterFull: ['Priority cashback', 'VIP support', 'Instant processing', 'Higher limits', 'Premium deals']
    }
  });

  const getStatusColor = (status) => {
    const colors = {
      verified: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
      rejected: 'bg-red-100 text-red-700',
      not_submitted: 'bg-gray-100 text-gray-600'
    };
    return colors[status] || 'bg-gray-100 text-gray-600';
  };

  const getStatusIcon = (status) => {
    const icons = {
      verified: '✅',
      pending: '⏳',
      rejected: '❌',
      not_submitted: '📤'
    };
    return icons[status] || '❓';
  };

  const getStatusLabel = (status) => {
    const labels = {
      verified: 'Verified',
      pending: 'Pending',
      rejected: 'Rejected',
      not_submitted: 'Not Submitted'
    };
    return labels[status] || status;
  };

  const handleDocumentClick = (doc) => {
    if (doc.status === 'not_submitted' || doc.status === 'rejected') {
      setSelectedDocument(doc);
      setShowUploadModal(true);
    }
  };

  const verifiedCount = kycData.documents.filter(d => d.status === 'verified').length;
  const requiredCount = kycData.documents.filter(d => d.required).length;
  const requiredVerifiedCount = kycData.documents.filter(d => d.required && d.status === 'verified').length;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">KYC Verification</h1>
        </div>

        {/* Progress Card */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/80 text-sm">Verification Progress</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">{kycData.completionPercentage}%</span>
                <span className="text-white/60">Complete</span>
              </div>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${
                kycData.overallStatus === 'verified' ? 'bg-green-400' :
                kycData.overallStatus === 'partial' ? 'bg-yellow-400' :
                'bg-gray-400'
              }`}>
                {kycData.overallStatus === 'verified' ? '✅' :
                 kycData.overallStatus === 'partial' ? '⏳' : '📋'}
              </div>
              <p className="text-xs mt-2 text-white/80 capitalize">{kycData.overallStatus}</p>
            </div>
          </div>

          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all"
              style={{ width: `${kycData.completionPercentage}%` }}
            />
          </div>

          <div className="flex justify-between mt-2 text-xs text-white/70">
            <span>{verifiedCount} of {kycData.documents.length} verified</span>
            <span>{requiredVerifiedCount} of {requiredCount} required complete</span>
          </div>
        </div>
      </div>

      {/* Document Status */}
      <div className="p-4">
        <h2 className="font-semibold mb-3">Document Status</h2>
        <div className="space-y-3">
          {kycData.documents.map(doc => (
            <div
              key={doc.id}
              onClick={() => handleDocumentClick(doc)}
              className={`bg-white rounded-xl p-4 shadow-sm ${
                doc.status === 'not_submitted' || doc.status === 'rejected' ? 'cursor-pointer hover:shadow-md' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                    doc.status === 'verified' ? 'bg-green-100' :
                    doc.status === 'pending' ? 'bg-yellow-100' :
                    doc.status === 'rejected' ? 'bg-red-100' :
                    'bg-gray-100'
                  }`}>
                    {doc.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{doc.name}</p>
                      {doc.required && (
                        <span className="text-xs bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">
                          Required
                        </span>
                      )}
                    </div>
                    {doc.value && (
                      <p className="text-sm text-gray-500">{doc.value}</p>
                    )}
                    {doc.verifiedOn && (
                      <p className="text-xs text-green-600">Verified on {doc.verifiedOn}</p>
                    )}
                    {doc.submittedOn && doc.status === 'pending' && (
                      <p className="text-xs text-yellow-600">Submitted on {doc.submittedOn}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(doc.status)}`}>
                    {getStatusIcon(doc.status)} {getStatusLabel(doc.status)}
                  </span>
                  {(doc.status === 'not_submitted' || doc.status === 'rejected') && (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Pending reason */}
              {doc.status === 'pending' && doc.reason && (
                <div className="mt-3 bg-yellow-50 rounded-lg p-3 text-sm text-yellow-700">
                  {doc.reason}
                </div>
              )}

              {/* Rejection reason */}
              {doc.status === 'rejected' && doc.rejectionReason && (
                <div className="mt-3 bg-red-50 rounded-lg p-3 text-sm text-red-700">
                  <p className="font-medium">Reason for rejection:</p>
                  <p>{doc.rejectionReason}</p>
                </div>
              )}

              {/* Benefits for optional documents */}
              {doc.status === 'not_submitted' && doc.benefits && (
                <div className="mt-3 bg-purple-50 rounded-lg p-3 text-sm text-purple-700">
                  💡 {doc.benefits}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Limits Comparison */}
      <div className="p-4">
        <h2 className="font-semibold mb-3">Transaction Limits</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-2">Current Limits</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Daily</span>
                  <span className="font-medium">₹{kycData.limits.current.daily.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Monthly</span>
                  <span className="font-medium">₹{kycData.limits.current.monthly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Per Transaction</span>
                  <span className="font-medium">₹{kycData.limits.current.perTransaction.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="border-l pl-4">
              <p className="text-xs text-green-600 mb-2">After Full KYC</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Daily</span>
                  <span className="font-medium text-green-600">₹{kycData.limits.afterFull.daily.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Monthly</span>
                  <span className="font-medium text-green-600">₹{kycData.limits.afterFull.monthly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Per Transaction</span>
                  <span className="font-medium text-green-600">₹{kycData.limits.afterFull.perTransaction.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Comparison */}
      <div className="p-4">
        <h2 className="font-semibold mb-3">Benefits</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-2">Current Benefits</p>
            <div className="space-y-2">
              {kycData.benefits.current.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400">•</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-xs text-green-600 mb-2">After Full KYC</p>
            <div className="space-y-2">
              {kycData.benefits.afterFull.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-green-700">
                  <span className="text-green-500">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="p-4">
        <div className="bg-blue-50 rounded-xl p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Need Help?</h3>
          <p className="text-sm text-blue-700 mb-3">
            If you're facing issues with verification, our support team is here to help.
          </p>
          <div className="flex gap-3">
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
              Chat with Support
            </button>
            <button className="flex-1 bg-white text-blue-600 border border-blue-200 py-2 rounded-lg text-sm font-medium">
              FAQs
            </button>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && selectedDocument && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="font-bold">Upload {selectedDocument.name}</h2>
              <button onClick={() => setShowUploadModal(false)} className="text-2xl">&times;</button>
            </div>

            <div className="p-4 space-y-4">
              {/* Document Type Specific Instructions */}
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-medium text-blue-800 mb-2">Requirements</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  {selectedDocument.id === 'aadhaar' && (
                    <>
                      <li>• Clear photo of front and back</li>
                      <li>• All text should be readable</li>
                      <li>• No blur or glare</li>
                    </>
                  )}
                  {selectedDocument.id === 'pan' && (
                    <>
                      <li>• Clear photo of PAN card</li>
                      <li>• Name and PAN number visible</li>
                      <li>• Signature visible if present</li>
                    </>
                  )}
                  {selectedDocument.id === 'address' && (
                    <>
                      <li>• Utility bill, bank statement, or rental agreement</li>
                      <li>• Document should be less than 3 months old</li>
                      <li>• Address should match your profile</li>
                    </>
                  )}
                  {selectedDocument.id === 'bank' && (
                    <>
                      <li>• Bank statement or cancelled cheque</li>
                      <li>• Account holder name visible</li>
                      <li>• Account number and IFSC visible</li>
                    </>
                  )}
                  {selectedDocument.id === 'video' && (
                    <>
                      <li>• Schedule a video call with our agent</li>
                      <li>• Keep your Aadhaar/PAN handy</li>
                      <li>• Ensure good lighting and internet</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Upload Options */}
              {selectedDocument.id !== 'video' ? (
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-4 border-2 border-dashed rounded-xl hover:bg-gray-50">
                    <span className="text-3xl">📷</span>
                    <div className="text-left">
                      <p className="font-medium">Take Photo</p>
                      <p className="text-xs text-gray-500">Use camera to capture document</p>
                    </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 border-2 border-dashed rounded-xl hover:bg-gray-50">
                    <span className="text-3xl">📁</span>
                    <div className="text-left">
                      <p className="font-medium">Upload from Gallery</p>
                      <p className="text-xs text-gray-500">Select existing photo or PDF</p>
                    </div>
                  </button>
                  {selectedDocument.id === 'aadhaar' && (
                    <button className="w-full flex items-center gap-3 p-4 border-2 border-purple-200 bg-purple-50 rounded-xl">
                      <span className="text-3xl">🔗</span>
                      <div className="text-left">
                        <p className="font-medium text-purple-700">Fetch from DigiLocker</p>
                        <p className="text-xs text-purple-600">Fastest & most secure method</p>
                      </div>
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium">
                    Schedule Video KYC
                  </button>
                  <p className="text-xs text-center text-gray-500">
                    Available: 9 AM - 9 PM, Monday to Saturday
                  </p>
                </div>
              )}

              <p className="text-xs text-gray-500 text-center">
                Your documents are encrypted and stored securely. We follow RBI guidelines for KYC.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KYCStatus;
