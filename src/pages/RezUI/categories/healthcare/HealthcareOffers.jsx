import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag, Clock, Percent } from 'lucide-react';

function HealthcareOffers() {
  const navigate = useNavigate();
  const offers = [
    { id: 1, title: 'Free Health Checkup', description: 'Get full body checkup worth ₹2000 for free', code: 'HEALTH100', validUntil: '2024-02-15', discount: 100, type: 'diagnostics', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400' },
    { id: 2, title: '50% Off on Medicines', description: 'Flat 50% discount on all medicines', code: 'MEDS50', validUntil: '2024-01-31', discount: 50, type: 'pharmacy', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400' },
    { id: 3, title: 'Doctor Consultation at ₹99', description: 'Online consultation with top doctors', code: 'DOC99', validUntil: '2024-02-28', discount: 85, type: 'consultation', image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Tag className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Healthcare Offers</h1></div><p className="text-xs text-white/80">Exclusive deals & coupons</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {offers.map(offer => (
          <div key={offer.id} onClick={() => navigate(`/healthcare/offer/${offer.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-orange-500 transition-all cursor-pointer">
            <div className="relative h-32">
              <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center gap-1">
                <Percent className="w-4 h-4" />{offer.discount}% OFF
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-rez-navy dark:text-white mb-1">{offer.title}</h3>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-3">{offer.description}</p>
              <div className="flex items-center justify-between">
                <div className="px-3 py-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 border border-dashed border-orange-500">
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-0.5">Code</p>
                  <p className="text-sm font-bold text-orange-600 dark:text-orange-400">{offer.code}</p>
                </div>
                <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Valid till {offer.validUntil}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthcareOffers;
