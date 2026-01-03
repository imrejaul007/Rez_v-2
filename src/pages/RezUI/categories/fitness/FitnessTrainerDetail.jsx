import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, Award, Calendar, Clock } from 'lucide-react';

function FitnessTrainerDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const trainer = {
    id: 1,
    name: 'Rahul Sharma',
    specialization: 'Weight Loss & Strength',
    qualification: 'Certified Personal Trainer, Sports Nutritionist',
    experience: 8,
    rating: 4.9,
    reviews: 350,
    price: 2000,
    certified: true,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
    about: 'Experienced fitness trainer specializing in weight loss and strength training. Helped 500+ clients achieve their fitness goals.',
    expertise: ['Weight Loss', 'Muscle Building', 'Sports Nutrition', 'HIIT Training', 'Functional Fitness'],
    availability: ['Mon-Fri: 6 AM - 10 AM', 'Mon-Fri: 5 PM - 9 PM', 'Sat-Sun: 7 AM - 12 PM']
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <h1 className="text-h3 font-poppins text-white">Trainer Profile</h1>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex gap-3 mb-4">
            <img src={trainer.image} alt={trainer.name} className="w-24 h-24 rounded-xl object-cover" />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <div><h2 className="text-xl font-bold text-rez-navy dark:text-white">{trainer.name}</h2><p className="text-sm text-blue-600 dark:text-blue-400">{trainer.specialization}</p></div>
                {trainer.certified && <Award className="w-6 h-6 text-blue-500" />}
              </div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{trainer.qualification}</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{trainer.rating}</span><span className="text-xs text-rez-gray-600 dark:text-gray-400">({trainer.reviews})</span></div>
                <span className="text-sm text-rez-gray-600 dark:text-gray-400">{trainer.experience} years exp</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">{trainer.about}</p>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {trainer.expertise.map((skill, i) => (
              <span key={i} className="px-3 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-bold">{skill}</span>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3 flex items-center gap-2"><Clock className="w-5 h-5 text-blue-500" />Availability</h3>
          <ul className="space-y-2">
            {trainer.availability.map((slot, i) => (
              <li key={i} className="text-sm text-rez-gray-600 dark:text-gray-400">• {slot}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center justify-between">
          <div><p className="text-xs text-rez-gray-600 dark:text-gray-400">Session Fee</p><p className="text-2xl font-bold text-rez-navy dark:text-white">₹{trainer.price}</p></div>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold flex items-center gap-2"><Calendar className="w-5 h-5" />Book Session</button>
        </div>
      </div>
    </div>
  );
}

export default FitnessTrainerDetail;
