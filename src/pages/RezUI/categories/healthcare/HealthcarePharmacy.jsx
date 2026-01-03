import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Pill, MapPin, Clock, Star, Upload } from 'lucide-react';

function HealthcarePharmacy() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('nearby');
  const pharmacies = [
    { id: 1, name: 'MedPlus Pharmacy', distance: 0.5, delivery: '15 min', rating: 4.7, discount: 15, open24: true, image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400' },
    { id: 2, name: 'Apollo Pharmacy', distance: 1.2, delivery: '20 min', rating: 4.8, discount: 20, open24: true, image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400' },
    { id: 3, name: 'Wellness Forever', distance: 2.0, delivery: '30 min', rating: 4.6, discount: 10, open24: false, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div className="flex-1"><div className="flex items-center gap-2"><Pill className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Pharmacy</h1></div><p className="text-xs text-white/80">Order medicines</p></div>
          <button onClick={() => navigate('/healthcare/upload-bill')} className="px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-bold flex items-center gap-1"><Upload className="w-4 h-4" />Upload</button>
        </div>
      </div>
      <div className="px-4 py-3 border-b border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800">
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('nearby')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === 'nearby' ? 'bg-emerald-500 text-white' : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'}`}>Nearby</button>
          <button onClick={() => setActiveTab('24x7')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === '24x7' ? 'bg-emerald-500 text-white' : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'}`}>24x7 Open</button>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {pharmacies.filter(p => activeTab === 'nearby' || p.open24).map(pharmacy => (
          <div key={pharmacy.id} onClick={() => navigate(`/healthcare/pharmacy/${pharmacy.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 transition-all cursor-pointer">
            <div className="flex gap-3">
              <img src={pharmacy.image} alt={pharmacy.name} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-rez-navy dark:text-white">{pharmacy.name}</h3>
                  {pharmacy.open24 && <span className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">24x7</span>}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-rez-gray-400" /><span className="text-sm text-rez-gray-600 dark:text-gray-400">{pharmacy.distance} km</span></div>
                  <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-rez-gray-400" /><span className="text-sm text-rez-gray-600 dark:text-gray-400">{pharmacy.delivery}</span></div>
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{pharmacy.rating}</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Upto {pharmacy.discount}% OFF</span>
                  <button className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-bold text-sm">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthcarePharmacy;
