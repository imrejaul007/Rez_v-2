import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Tag, Copy, Calendar, Gift } from 'lucide-react';

function FinancialOfferDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const offer = {
    id: 1,
    title: 'Get 100% Cashback',
    description: 'Get 100% cashback on your first electricity bill payment. Maximum cashback ₹100. Valid for new users only.',
    code: 'FIRSTBILL',
    cashback: 100,
    validUntil: '2024-02-28',
    category: 'Bill Payment',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
    terms: [
      'Valid for first-time bill payment only',
      'Minimum transaction amount ₹500',
      'Maximum cashback ₹100',
      'Cashback credited within 24 hours',
      'Cannot be combined with other offers'
    ]
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div className="flex items-center gap-2"><Tag className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Offer Details</h1></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700">
          <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-xs text-orange-600 dark:text-orange-400 mb-1">{offer.category}</p>
            <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-2">{offer.title}</h2>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-4">{offer.description}</p>
            <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border-2 border-dashed border-orange-500">
              <div className="flex items-center justify-between">
                <div><p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Coupon Code</p><p className="text-2xl font-bold text-orange-600 dark:text-orange-400 tracking-wider">{offer.code}</p></div>
                <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold flex items-center gap-2"><Copy className="w-4 h-4" />COPY</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3 flex items-center gap-2"><Gift className="w-5 h-5 text-orange-500" />Offer Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b border-rez-gray-200 dark:border-dark-700">
              <span className="text-sm text-rez-gray-600 dark:text-gray-400">Max Cashback</span>
              <span className="text-sm font-bold text-rez-navy dark:text-white">₹{offer.cashback}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-rez-gray-200 dark:border-dark-700">
              <span className="text-sm text-rez-gray-600 dark:text-gray-400">Valid Until</span>
              <span className="text-sm font-bold text-rez-navy dark:text-white">{offer.validUntil}</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Terms & Conditions</h3>
          <ul className="space-y-2">
            {offer.terms.map((term, i) => (
              <li key={i} className="text-sm text-rez-gray-600 dark:text-gray-400">• {term}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold">Use Offer</button>
      </div>
    </div>
  );
}

export default FinancialOfferDetail;
