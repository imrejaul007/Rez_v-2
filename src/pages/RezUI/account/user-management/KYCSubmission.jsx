import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Upload, CheckCircle, AlertCircle, X } from 'lucide-react';

/**
 * KYC SUBMISSION - KYC Document Upload
 *
 * Backend APIs needed:
 * - POST /api/user/kyc/submit (submit KYC documents)
 * - GET /api/user/kyc/status (check KYC status)
 * - POST /api/upload/document (upload document file)
 *
 * Connected to: RTMN_MASTER_DOCUMENTATION/FRONTEND_INVENTORY_TRACKER.md
 * Status: ✅ BUILT (Jan 2, 2026)
 * Priority: MEDIUM - Required for certain features
 */

function KYCSubmission() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    documentType: 'aadhaar',
    documentNumber: '',
    fullName: '',
    dateOfBirth: '',
    frontImage: null,
    backImage: null,
    selfie: null
  });
  const [previews, setPreviews] = useState({
    frontImage: null,
    backImage: null,
    selfie: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (field, file) => {
    if (file && file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setFormData({ ...formData, [field]: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews({ ...previews, [field]: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      setPreviews({ ...previews, [field]: null });
    }
  };

  const removeFile = (field) => {
    setFormData({ ...formData, [field]: null });
    setPreviews({ ...previews, [field]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setUploadProgress(0);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('documentType', formData.documentType);
      formDataToSend.append('documentNumber', formData.documentNumber);
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('dateOfBirth', formData.dateOfBirth);
      formDataToSend.append('frontImage', formData.frontImage);
      if (formData.backImage) formDataToSend.append('backImage', formData.backImage);
      formDataToSend.append('selfie', formData.selfie);

      // TODO: Connect to backend API
      const response = await fetch('/api/user/kyc/submit', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: formDataToSend
      });

      const data = await response.json();

      if (response.ok) {
        setStep(3);
      } else {
        setError(data.message || 'Failed to submit KYC');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const documentTypes = [
    { value: 'aadhaar', label: 'Aadhaar Card', requiresBack: true },
    { value: 'pan', label: 'PAN Card', requiresBack: false },
    { value: 'passport', label: 'Passport', requiresBack: false },
    { value: 'driving_license', label: 'Driving License', requiresBack: true }
  ];

  const selectedDocType = documentTypes.find(d => d.value === formData.documentType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">KYC Verification</h1>
            <p className="text-gray-600">Complete your KYC to unlock all features</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Document Type</label>
                <select
                  value={formData.documentType}
                  onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  {documentTypes.map(doc => (
                    <option key={doc.value} value={doc.value}>{doc.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Document Number</label>
                <input
                  type="text"
                  value={formData.documentNumber}
                  onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value.toUpperCase() })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter document number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name (as on document)</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Continue to Document Upload
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Upload Guidelines:</strong><br/>
                  • Clear, well-lit photos<br/>
                  • All corners visible<br/>
                  • No glare or shadows<br/>
                  • File size less than 5MB each
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Front Side of {selectedDocType?.label}
                </label>
                {previews.frontImage ? (
                  <div className="relative">
                    <img
                      src={previews.frontImage}
                      alt="Front preview"
                      className="w-full h-48 object-cover rounded-lg border-2 border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile('frontImage')}
                      className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-all">
                    <Upload className="w-12 h-12 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">Click to upload front side</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange('frontImage', e.target.files[0])}
                      className="hidden"
                      required
                    />
                  </label>
                )}
              </div>

              {selectedDocType?.requiresBack && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Back Side of {selectedDocType?.label}
                  </label>
                  {previews.backImage ? (
                    <div className="relative">
                      <img
                        src={previews.backImage}
                        alt="Back preview"
                        className="w-full h-48 object-cover rounded-lg border-2 border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() => removeFile('backImage')}
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-all">
                      <Upload className="w-12 h-12 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600">Click to upload back side</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange('backImage', e.target.files[0])}
                        className="hidden"
                        required
                      />
                    </label>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selfie with Document
                </label>
                {previews.selfie ? (
                  <div className="relative">
                    <img
                      src={previews.selfie}
                      alt="Selfie preview"
                      className="w-full h-48 object-cover rounded-lg border-2 border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile('selfie')}
                      className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-all">
                    <Upload className="w-12 h-12 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">Click to upload selfie</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange('selfie', e.target.files[0])}
                      className="hidden"
                      required
                    />
                  </label>
                )}
              </div>

              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 px-4 text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg disabled:opacity-50 transition-all"
                >
                  {loading ? 'Submitting...' : 'Submit KYC'}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">KYC Submitted Successfully!</h2>
              <p className="text-gray-600 mb-8">
                Your documents are under review. You will be notified once verification is complete.
                This usually takes 24-48 hours.
              </p>
              <button
                onClick={() => navigate('/profile')}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Back to Profile
              </button>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 mt-8">
            {[1, 2, 3].map(s => (
              <div
                key={s}
                className={`w-2 h-2 rounded-full transition-all ${
                  s === step ? 'bg-purple-500 w-8' : s < step ? 'bg-purple-300' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default KYCSubmission;
