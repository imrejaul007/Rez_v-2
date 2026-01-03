import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, Award, MapPin, Clock, Calendar, Smile } from 'lucide-react';

function HealthcareDentalDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const dentist = {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialization: 'Orthodontist',
    clinic: 'Bright Smile Dental',
    qualification: 'BDS, MDS (Orthodontics)',
    experience: 12,
    rating: 4.8,
    reviews: 890,
    consultationFee: 600,
    address: '456 Dental Plaza, Mumbai',
    distance: 1.2,
    verified: true,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400',
    services: ['Teeth Whitening', 'Braces & Aligners', 'Root Canal', 'Dental Implants', 'Teeth Cleaning'],
    availability: ['Mon-Sat: 9 AM - 7 PM']
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div className="flex items-center gap-2"><Smile className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Dentist Details</h1></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex gap-3 mb-4">
            <img src={dentist.image} alt={dentist.name} className="w-24 h-24 rounded-xl object-cover" />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <div><h2 className="text-xl font-bold text-rez-navy dark:text-white">{dentist.name}</h2><p className="text-sm text-cyan-600 dark:text-cyan-400">{dentist.specialization}</p></div>
                {dentist.verified && <Award className="w-6 h-6 text-cyan-500" />}
              </div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{dentist.qualification}</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{dentist.rating}</span><span className="text-xs text-rez-gray-600 dark:text-gray-400">({dentist.reviews})</span></div>
                <span className="text-sm text-rez-gray-600 dark:text-gray-400">{dentist.experience} years exp</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-rez-gray-400 mt-0.5" /><div><p className="text-sm font-bold text-rez-navy dark:text-white">{dentist.clinic}</p><p className="text-xs text-rez-gray-600 dark:text-gray-400">{dentist.address} • {dentist.distance} km</p></div></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-rez-gray-400" /><p className="text-sm text-rez-gray-600 dark:text-gray-400">{dentist.availability.join(' | ')}</p></div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Services Offered</h3>
          <div className="flex flex-wrap gap-2">
            {dentist.services.map((service, i) => (
              <span key={i} className="px-3 py-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-sm font-bold">{service}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center justify-between">
          <div><p className="text-xs text-rez-gray-600 dark:text-gray-400">Consultation Fee</p><p className="text-2xl font-bold text-rez-navy dark:text-white">₹{dentist.consultationFee}</p></div>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold flex items-center gap-2"><Calendar className="w-5 h-5" />Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default HealthcareDentalDetail;
