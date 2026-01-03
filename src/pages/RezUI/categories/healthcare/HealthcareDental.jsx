import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Smile, Star, Award, MapPin } from 'lucide-react';

function HealthcareDental() {
  const navigate = useNavigate();
  const dentists = [
    { id: 1, name: 'Dr. Priya Sharma', clinic: 'Bright Smile Dental', specialization: 'Orthodontist', experience: 12, rating: 4.8, consultationFee: 600, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400', verified: true, distance: 1.2 },
    { id: 2, name: 'Dr. Amit Patel', clinic: 'Advanced Dental Care', specialization: 'Cosmetic Dentist', experience: 18, rating: 4.9, consultationFee: 800, image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400', verified: true, distance: 2.5 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Smile className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Dental Care</h1></div><p className="text-xs text-white/80">Book dental appointments</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {dentists.map(doc => (
          <div key={doc.id} onClick={() => navigate(`/healthcare/dental/${doc.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-cyan-500 transition-all cursor-pointer">
            <div className="flex gap-3">
              <img src={doc.image} alt={doc.name} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div><h3 className="font-bold text-rez-navy dark:text-white">{doc.name}</h3><p className="text-sm text-cyan-600 dark:text-cyan-400">{doc.specialization}</p></div>
                  {doc.verified && <Award className="w-5 h-5 text-cyan-500" />}
                </div>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{doc.clinic}</p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{doc.rating}</span></div>
                  <span className="text-sm text-rez-gray-600 dark:text-gray-400">{doc.experience} yrs</span>
                  <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-rez-gray-400" /><span className="text-sm text-rez-gray-600 dark:text-gray-400">{doc.distance} km</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-rez-navy dark:text-white">₹{doc.consultationFee}</span>
                  <button className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-bold text-sm">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthcareDental;
