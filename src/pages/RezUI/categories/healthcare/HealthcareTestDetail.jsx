import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Activity, Clock, Star, Home, Building2, Calendar } from 'lucide-react';

function HealthcareTestDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [collectionType, setCollectionType] = useState('home');

  const test = {
    id: 1,
    name: 'Complete Blood Count (CBC)',
    category: 'Blood Test',
    description: 'Comprehensive blood test that measures red blood cells, white blood cells, hemoglobin, and platelets.',
    price: 350,
    homePrice: 400,
    labPrice: 350,
    discount: 20,
    rating: 4.7,
    reviews: 3500,
    reportTime: '6 hours',
    fasting: 'Not Required',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400',
    parameters: ['RBC Count', 'WBC Count', 'Hemoglobin', 'Platelets', 'Hematocrit', 'MCV', 'MCH', 'MCHC'],
    preparation: ['No special preparation needed', 'Can be done at any time', 'Results in 6 hours']
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div className="flex items-center gap-2"><Activity className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Test Details</h1></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700">
          <img src={test.image} alt={test.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-1">{test.name}</h2>
            <p className="text-sm text-teal-600 dark:text-teal-400 mb-3">{test.category}</p>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{test.rating}</span><span className="text-xs text-rez-gray-600 dark:text-gray-400">({test.reviews})</span></div>
              <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-rez-gray-400" /><span className="text-sm text-rez-gray-600 dark:text-gray-400">{test.reportTime}</span></div>
            </div>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">{test.description}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Parameters Included ({test.parameters.length})</h3>
          <div className="grid grid-cols-2 gap-2">
            {test.parameters.map((param, i) => (
              <div key={i} className="px-3 py-2 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 text-sm">• {param}</div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Test Preparation</h3>
          <ul className="space-y-2">
            {test.preparation.map((item, i) => (
              <li key={i} className="text-sm text-rez-gray-600 dark:text-gray-400">• {item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Select Sample Collection</h3>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setCollectionType('home')} className={`p-3 rounded-xl border-2 transition-all ${collectionType === 'home' ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20' : 'border-rez-gray-200 dark:border-dark-700'}`}>
              <Home className={`w-6 h-6 mx-auto mb-2 ${collectionType === 'home' ? 'text-teal-500' : 'text-rez-gray-400'}`} />
              <p className="text-sm font-bold text-rez-navy dark:text-white">Home Visit</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">₹{test.homePrice}</p>
            </button>
            <button onClick={() => setCollectionType('lab')} className={`p-3 rounded-xl border-2 transition-all ${collectionType === 'lab' ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20' : 'border-rez-gray-200 dark:border-dark-700'}`}>
              <Building2 className={`w-6 h-6 mx-auto mb-2 ${collectionType === 'lab' ? 'text-teal-500' : 'text-rez-gray-400'}`} />
              <p className="text-sm font-bold text-rez-navy dark:text-white">Visit Lab</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">₹{test.labPrice}</p>
            </button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center justify-between">
          <div><p className="text-xs text-rez-gray-600 dark:text-gray-400">Test Price</p><p className="text-2xl font-bold text-rez-navy dark:text-white">₹{collectionType === 'home' ? test.homePrice : test.labPrice}</p></div>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold flex items-center gap-2"><Calendar className="w-5 h-5" />Book Test</button>
        </div>
      </div>
    </div>
  );
}

export default HealthcareTestDetail;
