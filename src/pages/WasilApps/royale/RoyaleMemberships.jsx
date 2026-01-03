import React from 'react';
import { Calendar, Crown, CheckCircle } from 'lucide-react';

// Royale+ Memberships
// Backend API: GET /api/wasil/royale/memberships

const RoyaleMemberships = () => {
  const memberships = [
    {
      id: 1,
      club: 'Bangalore Golf Club',
      type: 'Gold Membership',
      startDate: 'Jan 1, 2026',
      endDate: 'Dec 31, 2026',
      status: 'active',
      benefits: ['Unlimited golf access', 'Guest privileges', 'Dining discounts']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-yellow-600 to-amber-700 px-4 pt-6 pb-4">
        <div className="flex items-center gap-2">
          <Crown className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">My Memberships</h1>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {memberships.map((membership) => (
          <div key={membership.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-gray-800">{membership.club}</h3>
                <p className="text-sm text-gray-500">{membership.type}</p>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Active
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <Calendar className="w-4 h-4" />
              <span>Valid: {membership.startDate} - {membership.endDate}</span>
            </div>

            <div className="border-t pt-3">
              <p className="text-sm font-medium text-gray-700 mb-2">Benefits:</p>
              <ul className="space-y-1">
                {membership.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm text-gray-600">• {benefit}</li>
                ))}
              </ul>
            </div>

            <button className="w-full mt-4 bg-yellow-600 text-white py-2 rounded-lg text-sm">
              View Membership Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoyaleMemberships;
