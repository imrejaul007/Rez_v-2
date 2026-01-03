import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, User } from 'lucide-react';

function HomeServicesBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('2024-02-15');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  const service = {
    id: 1,
    name: 'AC Repair & Service',
    price: 399,
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400',
    description: 'Complete AC service including gas refill, filter cleaning, and performance check'
  };

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <h1 className="text-h3 font-poppins text-white">Book Service</h1>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700">
          <img src={service.image} alt={service.name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-2">{service.name}</h2>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-3">{service.description}</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">₹{service.price}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3 flex items-center gap-2"><Calendar className="w-5 h-5 text-blue-500" />Select Date</h3>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full p-3 rounded-lg border-2 border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-rez-navy dark:text-white" />
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3 flex items-center gap-2"><Clock className="w-5 h-5 text-blue-500" />Select Time</h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map(time => (
              <button key={time} onClick={() => setSelectedTime(time)} className={`py-2 rounded-lg border-2 transition-all ${selectedTime === time ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'border-rez-gray-200 dark:border-dark-700 text-rez-gray-600 dark:text-gray-400'} font-bold text-sm`}>{time}</button>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-500" />Service Address</h3>
          <textarea placeholder="Enter your complete address" rows={3} className="w-full p-3 rounded-lg border-2 border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-rez-navy dark:text-white resize-none"></textarea>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold">Confirm Booking</button>
      </div>
    </div>
  );
}

export default HomeServicesBook;
