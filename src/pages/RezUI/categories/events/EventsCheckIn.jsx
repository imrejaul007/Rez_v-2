import React, { useState } from 'react';
import { QrCode, CheckCircle } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function EventsCheckIn() {
  const [checkedIn, setCheckedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <QrCode size={28} /> Event Check-In
        </h1>

        <div className="bg-white rounded-lg p-6 shadow text-center">
          {!checkedIn ? (
            <>
              <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <QrCode className="text-gray-400" size={64} />
              </div>
              <p className="text-gray-700 mb-4">Show this QR code at the entrance</p>
              <button
                onClick={() => setCheckedIn(true)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg font-semibold"
              >
                Mark as Checked In
              </button>
            </>
          ) : (
            <>
              <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
              <p className="text-2xl font-bold text-gray-900 mb-2">You are all set!</p>
              <p className="text-gray-600">Enjoy the event</p>
            </>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}