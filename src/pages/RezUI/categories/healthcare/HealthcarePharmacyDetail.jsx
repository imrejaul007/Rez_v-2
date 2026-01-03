import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Pill, MapPin, Clock, Star, Phone, Upload } from 'lucide-react';

function HealthcarePharmacyDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('medicines');

  const pharmacy = {
    id: 1,
    name: 'MedPlus Pharmacy',
    address: '123 Health Street, Mumbai',
    distance: 0.5,
    delivery: '15 min',
    rating: 4.7,
    reviews: 2340,
    discount: 15,
    open24: true,
    phone: '1800-123-4567',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400',
    timing: '24x7 Open'
  };

  const medicines = [
    { id: 1, name: 'Paracetamol 500mg', manufacturer: 'Cipla', price: 25, mrp: 30, stock: 'In Stock', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200' },
    { id: 2, name: 'Vitamin D3', manufacturer: 'HealthKart', price: 250, mrp: 300, stock: 'In Stock', image: 'https://images.unsplash.com/photo-1550572017-4e3fa4347e89?w=200' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div className="flex-1"><div className="flex items-center gap-2"><Pill className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Pharmacy</h1></div></div>
          <button onClick={() => navigate('/healthcare/upload-bill')} className="p-2 rounded-full bg-white/20 hover:bg-white/30"><Upload className="w-5 h-5 text-white" /></button>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex gap-3 mb-3">
            <img src={pharmacy.image} alt={pharmacy.name} className="w-20 h-20 rounded-xl object-cover" />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <h2 className="text-lg font-bold text-rez-navy dark:text-white">{pharmacy.name}</h2>
                {pharmacy.open24 && <span className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">24x7</span>}
              </div>
              <div className="flex items-center gap-1 mb-2"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{pharmacy.rating}</span><span className="text-xs text-rez-gray-600 dark:text-gray-400">({pharmacy.reviews})</span></div>
              <div className="flex items-center gap-3 text-sm text-rez-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1"><MapPin className="w-3 h-3" />{pharmacy.distance} km</div>
                <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{pharmacy.delivery}</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-3">{pharmacy.address}</p>
          <div className="flex gap-2">
            <button className="flex-1 py-2 rounded-lg bg-emerald-500 text-white font-bold text-sm">Order Medicines</button>
            <a href={`tel:${pharmacy.phone}`} className="px-4 py-2 rounded-lg border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2"><Phone className="w-4 h-4" />Call</a>
          </div>
        </div>
        <div className="flex gap-2 px-4">
          <button onClick={() => setActiveTab('medicines')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === 'medicines' ? 'bg-emerald-500 text-white' : 'bg-white dark:bg-dark-800 text-rez-gray-600 dark:text-gray-400'}`}>Medicines</button>
          <button onClick={() => setActiveTab('health')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === 'health' ? 'bg-emerald-500 text-white' : 'bg-white dark:bg-dark-800 text-rez-gray-600 dark:text-gray-400'}`}>Health Products</button>
        </div>
        <div className="space-y-3">
          {medicines.map(med => (
            <div key={med.id} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
              <div className="flex gap-3">
                <img src={med.image} alt={med.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-bold text-rez-navy dark:text-white mb-1">{med.name}</h3>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{med.manufacturer}</p>
                  <div className="flex items-center justify-between">
                    <div><span className="text-lg font-bold text-rez-navy dark:text-white">₹{med.price}</span><span className="ml-2 text-xs text-rez-gray-400 line-through">₹{med.mrp}</span></div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{med.stock}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HealthcarePharmacyDetail;
