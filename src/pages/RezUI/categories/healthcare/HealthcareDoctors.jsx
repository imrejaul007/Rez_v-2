import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Stethoscope, Star, Award } from 'lucide-react';

function HealthcareDoctors() {
  const navigate = useNavigate();
  const doctors = [
    { id: 1, name: 'Dr. Sarah Johnson', specialization: 'Cardiologist', experience: 15, rating: 4.9, consultationFee: 800, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400', verified: true },
    { id: 2, name: 'Dr. Rajesh Kumar', specialization: 'General Physician', experience: 10, rating: 4.7, consultationFee: 500, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400', verified: true }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Stethoscope className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Doctors</h1></div><p className="text-xs text-white/80">Book consultation</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {doctors.map(doc => (
          <div key={doc.id} onClick={() => navigate(`/healthcare/doctor/${doc.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-blue-500 transition-all cursor-pointer">
            <div className="flex gap-3">
              <img src={doc.image} alt={doc.name} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div><h3 className="font-bold text-rez-navy dark:text-white">{doc.name}</h3><p className="text-sm text-blue-600 dark:text-blue-400">{doc.specialization}</p></div>
                  {doc.verified && <Award className="w-5 h-5 text-blue-500" />}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{doc.rating}</span></div>
                  <span className="text-sm text-rez-gray-600 dark:text-gray-400">{doc.experience} yrs exp</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-rez-navy dark:text-white">₹{doc.consultationFee}</span>
                  <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-bold text-sm">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthcareDoctors;
