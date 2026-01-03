import React, { useState } from 'react';
import { Check, Upload, Camera, CheckCircle } from 'lucide-react';

// Contest Entry: Submit Contest Entry
// Backend API: POST /api/growth/contests/:id/submit
// Backend API: POST /api/growth/contests/:id/upload

const ContestEntry = () => {
  const [step, setStep] = useState(1);

  const contest = {
    title: 'Photo Contest',
    type: 'photo',
    requirements: 'Upload your best photo',
    prize: '₹10,000'
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-6 pb-8">
        <h1 className="text-xl font-bold text-white mb-2">Enter Contest</h1>
        <p className="text-purple-100 text-sm">{contest.title}</p>

        {/* Progress */}
        <div className="mt-4 flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 rounded-full ${
                s <= step ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="px-4 mt-4">
        {step === 1 && (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-gray-800 text-lg mb-4">Upload Your Entry</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-4">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-gray-800 text-lg mb-4">Add Details</h2>
            <div className="space-y-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows="4"
                  placeholder="Describe your entry"
                />
              </div>
            </div>
            <button
              onClick={() => setStep(3)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold"
            >
              Submit Entry
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="font-bold text-gray-800 text-xl mb-2">Entry Submitted!</h2>
            <p className="text-gray-600 mb-6">Your entry has been successfully submitted</p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold">
              View My Entries
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContestEntry;
