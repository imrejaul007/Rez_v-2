import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Activity, Clock, MapPin, Star } from 'lucide-react';

function HealthcareDiagnostics() {
  const navigate = useNavigate();
  const tests = [
    { id: 1, name: 'Complete Blood Count', category: 'Blood Test', price: 350, time: '6 hours', discount: 20, rating: 4.7, image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400' },
    { id: 2, name: 'Lipid Profile', category: 'Blood Test', price: 600, time: '8 hours', discount: 15, rating: 4.8, image: 'https://images.unsplash.com/photo-1583912268742-0e7e965d7d71?w=400' },
    { id: 3, name: 'Thyroid Function Test', category: 'Hormone Test', price: 450, time: '12 hours', discount: 25, rating: 4.6, image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Activity className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Diagnostics</h1></div><p className="text-xs text-white/80">Book lab tests</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {tests.map(test => (
          <div key={test.id} onClick={() => navigate(`/healthcare/test/${test.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-teal-500 transition-all cursor-pointer">
            <div className="flex gap-3">
              <img src={test.image} alt={test.name} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-bold text-rez-navy dark:text-white mb-1">{test.name}</h3>
                <p className="text-sm text-teal-600 dark:text-teal-400 mb-2">{test.category}</p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-rez-gray-400" /><span className="text-sm text-rez-gray-600 dark:text-gray-400">{test.time}</span></div>
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{test.rating}</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <div><span className="text-lg font-bold text-rez-navy dark:text-white">₹{test.price}</span><span className="ml-2 px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">{test.discount}% OFF</span></div>
                  <button className="px-4 py-2 rounded-lg bg-teal-500 text-white font-bold text-sm">Book Test</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthcareDiagnostics;
