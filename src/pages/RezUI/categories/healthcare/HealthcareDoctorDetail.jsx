import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, Award, MapPin, Clock, Calendar, Video, User } from 'lucide-react';

function HealthcareDoctorDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [consultationType, setConsultationType] = useState('clinic');

  const doctor = {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    qualification: 'MBBS, MD (Cardiology)',
    experience: 15,
    rating: 4.9,
    reviews: 1250,
    consultationFee: 800,
    onlineFee: 500,
    clinic: 'Heart Care Hospital',
    address: '123 Medical Street, Mumbai',
    distance: 2.5,
    languages: ['English', 'Hindi', 'Marathi'],
    verified: true,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
    about: 'Expert cardiologist with 15+ years of experience in treating heart diseases. Specializes in interventional cardiology and preventive care.',
    availability: ['Mon-Fri: 10 AM - 6 PM', 'Sat: 10 AM - 2 PM']
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <h1 className="text-h3 font-poppins text-white">Doctor Details</h1>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex gap-3 mb-4">
            <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-xl object-cover" />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <div><h2 className="text-xl font-bold text-rez-navy dark:text-white">{doctor.name}</h2><p className="text-sm text-blue-600 dark:text-blue-400">{doctor.specialization}</p></div>
                {doctor.verified && <Award className="w-6 h-6 text-blue-500" />}
              </div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{doctor.qualification}</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{doctor.rating}</span><span className="text-xs text-rez-gray-600 dark:text-gray-400">({doctor.reviews})</span></div>
                <span className="text-sm text-rez-gray-600 dark:text-gray-400">{doctor.experience} years exp</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-rez-gray-400 mt-0.5" /><div><p className="text-sm font-bold text-rez-navy dark:text-white">{doctor.clinic}</p><p className="text-xs text-rez-gray-600 dark:text-gray-400">{doctor.address} • {doctor.distance} km</p></div></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-rez-gray-400" /><p className="text-sm text-rez-gray-600 dark:text-gray-400">{doctor.availability.join(' | ')}</p></div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">About Doctor</h3>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-3">{doctor.about}</p>
          <div><p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Languages</p><p className="text-sm font-bold text-rez-navy dark:text-white">{doctor.languages.join(', ')}</p></div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Select Consultation Type</h3>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setConsultationType('clinic')} className={`p-3 rounded-xl border-2 transition-all ${consultationType === 'clinic' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-rez-gray-200 dark:border-dark-700'}`}>
              <User className={`w-6 h-6 mx-auto mb-2 ${consultationType === 'clinic' ? 'text-blue-500' : 'text-rez-gray-400'}`} />
              <p className="text-sm font-bold text-rez-navy dark:text-white">In-Clinic</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">₹{doctor.consultationFee}</p>
            </button>
            <button onClick={() => setConsultationType('online')} className={`p-3 rounded-xl border-2 transition-all ${consultationType === 'online' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-rez-gray-200 dark:border-dark-700'}`}>
              <Video className={`w-6 h-6 mx-auto mb-2 ${consultationType === 'online' ? 'text-blue-500' : 'text-rez-gray-400'}`} />
              <p className="text-sm font-bold text-rez-navy dark:text-white">Video Call</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">₹{doctor.onlineFee}</p>
            </button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center justify-between mb-3">
          <div><p className="text-xs text-rez-gray-600 dark:text-gray-400">Consultation Fee</p><p className="text-2xl font-bold text-rez-navy dark:text-white">₹{consultationType === 'clinic' ? doctor.consultationFee : doctor.onlineFee}</p></div>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold flex items-center gap-2"><Calendar className="w-5 h-5" />Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default HealthcareDoctorDetail;
