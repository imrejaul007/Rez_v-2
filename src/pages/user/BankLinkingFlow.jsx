import React, { useState } from 'react';
import { Building2, CheckCircle } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function BankLinkingFlow() {
  const [step, setStep] = useState(1);
  const [accountNumber, setAccountNumber] = useState('');

  const steps = ['Account Details', 'Verify', 'Confirm'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Building2 size={28} /> Link Bank Account
        </h1>

        <div className="flex gap-2 mb-6">
          {steps.map((s, i) => (
            <div key={i} className="flex-1">
              <div className={`aspect-square rounded-full flex items-center justify-center font-bold text-white ${step > i + 1 ? 'bg-green-500' : step === i + 1 ? 'bg-blue-500' : 'bg-gray-300'}`}>
                {step > i + 1 ? <CheckCircle size={24} /> : i + 1}
              </div>
              <p className="text-xs text-center mt-1 text-gray-600">{s}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          {step === 1 && (
            <>
              <input type="text" placeholder="Account Number" className="w-full border border-gray-300 rounded px-3 py-2" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
              <input type="text" placeholder="IFSC Code" className="w-full border border-gray-300 rounded px-3 py-2" />
              <button onClick={() => setStep(2)} className="w-full bg-blue-500 text-white py-2 rounded font-semibold">Next</button>
            </>
          )}
          {step === 2 && <p className="text-center text-gray-600">Verifying your account...</p>}
          {step === 3 && <p className="text-center text-green-600 font-semibold">Account linked successfully!</p>}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}