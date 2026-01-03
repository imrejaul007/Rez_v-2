import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ScanLine, QrCode, Camera, Upload, Zap, ShieldCheck, Gift } from 'lucide-react';

function ScanPay() {
  const navigate = useNavigate();
  const [scanMode, setScanMode] = useState('qr'); // 'qr' or 'barcode'

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div>
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Scan & Pay</h1>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Earn while you shop in-store</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Scan Mode Toggle */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setScanMode('qr')}
            className={`p-4 rounded-2xl border-2 transition-all ${
              scanMode === 'qr'
                ? 'border-rez-green-500 bg-rez-green-500/10'
                : 'border-rez-gray-200 dark:border-dark-700'
            }`}
          >
            <QrCode className={`w-8 h-8 mx-auto mb-2 ${
              scanMode === 'qr' ? 'text-rez-green-500' : 'text-rez-gray-600 dark:text-gray-400'
            }`} />
            <p className="text-sm font-semibold text-rez-navy dark:text-white">QR Code</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Store payment</p>
          </button>

          <button
            onClick={() => setScanMode('barcode')}
            className={`p-4 rounded-2xl border-2 transition-all ${
              scanMode === 'barcode'
                ? 'border-rez-green-500 bg-rez-green-500/10'
                : 'border-rez-gray-200 dark:border-dark-700'
            }`}
          >
            <ScanLine className={`w-8 h-8 mx-auto mb-2 ${
              scanMode === 'barcode' ? 'text-rez-green-500' : 'text-rez-gray-600 dark:text-gray-400'
            }`} />
            <p className="text-sm font-semibold text-rez-navy dark:text-white">Barcode</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Product scan</p>
          </button>
        </div>

        {/* Scanner View */}
        <div className="relative aspect-square rounded-2xl bg-rez-gray-900 dark:bg-black border-4 border-rez-green-500 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-sm opacity-75">Camera view will appear here</p>
              <p className="text-xs opacity-50 mt-2">Position {scanMode === 'qr' ? 'QR code' : 'barcode'} within frame</p>
            </div>
          </div>

          {/* Scanner Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-4 border-rez-green-500 rounded-2xl relative">
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-lg"></div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
          <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-3">Why Scan & Pay?</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Zap className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-rez-gray-700 dark:text-gray-300">Instant cashback on every purchase</p>
            </div>
            <div className="flex items-start gap-2">
              <Gift className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-rez-gray-700 dark:text-gray-300">Earn ReZ Coins automatically</p>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-rez-gray-700 dark:text-gray-300">100% secure payments</p>
            </div>
          </div>
        </div>

        {/* Upload Bill Option */}
        <button className="w-full p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-rez-green-500 transition-all active:scale-98">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Upload className="w-6 h-6 text-purple-500" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-rez-navy dark:text-white">Upload Bill Instead</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get cashback on offline purchases</p>
            </div>
          </div>
        </button>

        {/* Instructions */}
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <p className="text-xs text-blue-400 mb-2 font-semibold">How it works:</p>
          <ol className="text-xs text-rez-gray-700 dark:text-gray-300 space-y-1 list-decimal list-inside">
            <li>Scan store QR code at checkout</li>
            <li>Confirm payment amount</li>
            <li>Complete payment securely</li>
            <li>Earn instant cashback & coins</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ScanPay;
