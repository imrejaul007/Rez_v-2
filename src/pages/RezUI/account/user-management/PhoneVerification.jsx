import React, { useState } from 'react';
import { Phone, Check, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PhoneVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Phone</h1>
          <p className="text-gray-600">Enter the 6-digit code sent to<br />+91 98765 43210</p>
        </div>
        <div className="flex gap-2 justify-center mb-6">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => {
                const newOtp = [...otp];
                newOtp[idx] = e.target.value;
                setOtp(newOtp);
              }}
              className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none"
            />
          ))}
        </div>
        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all">
          Verify & Continue
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Didn't receive code? <button className="text-indigo-600 font-semibold hover:underline">Resend</button>
        </p>
      </div>
    </div>
  );
};

export default PhoneVerification;
