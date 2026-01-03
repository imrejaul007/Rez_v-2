import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Camera, FileText, CheckCircle } from 'lucide-react';

function HealthcareUploadBill() {
  const navigate = useNavigate();
  const [uploadMethod, setUploadMethod] = useState(null);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Upload className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Upload Prescription</h1></div><p className="text-xs text-white/80">Upload to order medicines</p></div>
        </div>
      </div>
      <div className="px-4 py-6 space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
          <div className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Safe & Secure</h3>
              <p className="text-sm text-blue-700 dark:text-blue-400">Your prescription is encrypted and verified by licensed pharmacists</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white">Choose Upload Method</h2>
          <div className="grid grid-cols-1 gap-3">
            <button onClick={() => setUploadMethod('camera')} className={`p-6 rounded-2xl border-2 transition-all ${uploadMethod === 'camera' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${uploadMethod === 'camera' ? 'bg-emerald-500' : 'bg-rez-gray-100 dark:bg-dark-700'}`}>
                  <Camera className={`w-7 h-7 ${uploadMethod === 'camera' ? 'text-white' : 'text-rez-gray-400'}`} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-rez-navy dark:text-white mb-1">Take Photo</h3>
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400">Use camera to capture prescription</p>
                </div>
              </div>
            </button>
            <button onClick={() => setUploadMethod('gallery')} className={`p-6 rounded-2xl border-2 transition-all ${uploadMethod === 'gallery' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${uploadMethod === 'gallery' ? 'bg-emerald-500' : 'bg-rez-gray-100 dark:bg-dark-700'}`}>
                  <FileText className={`w-7 h-7 ${uploadMethod === 'gallery' ? 'text-white' : 'text-rez-gray-400'}`} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-rez-navy dark:text-white mb-1">Upload from Gallery</h3>
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400">Choose existing image from device</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Guidelines</h3>
          <ul className="space-y-2 text-sm text-rez-gray-600 dark:text-gray-400">
            <li>• Ensure prescription is valid and not expired</li>
            <li>• Doctor's name, signature & date should be clear</li>
            <li>• All medicine names must be readable</li>
            <li>• Supports JPG, PNG, PDF formats</li>
          </ul>
        </div>
        {uploadMethod && (
          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg flex items-center justify-center gap-2">
            <Upload className="w-5 h-5" />
            {uploadMethod === 'camera' ? 'Open Camera' : 'Choose File'}
          </button>
        )}
      </div>
    </div>
  );
}

export default HealthcareUploadBill;
