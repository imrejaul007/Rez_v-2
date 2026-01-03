import React, { useState } from 'react';
import { Share2, Copy, Mail } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function ReferralShareLinks() {
  const [copied, setCopied] = useState(false);

  const shareLink = 'https://rez.app/ref/REZ2025ABC';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Share2 size={28} /> Share Referral
        </h1>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <p className="text-sm text-gray-600 mb-2">Your Share Link</p>
            <code className="text-sm font-mono break-all text-blue-600">{shareLink}</code>
          </div>

          <button
            onClick={handleCopy}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-2"
          >
            <Copy size={18} /> {copied ? 'Copied!' : 'Copy Link'}
          </button>

          <button className="w-full border-2 border-indigo-500 text-indigo-600 py-2 rounded font-semibold flex items-center justify-center gap-2">
            <Mail size={18} /> Share via Email
          </button>

          <div className="grid grid-cols-3 gap-2">
            {['WhatsApp', 'Facebook', 'Twitter'].map(platform => (
              <button key={platform} className="bg-gray-100 text-gray-700 py-2 rounded text-sm font-semibold hover:bg-gray-200">
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}