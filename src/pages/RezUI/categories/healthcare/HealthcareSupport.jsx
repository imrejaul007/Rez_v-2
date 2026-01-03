import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Headphones, MessageCircle, Phone, Mail, HelpCircle } from 'lucide-react';

function HealthcareSupport() {
  const navigate = useNavigate();
  const supportOptions = [
    { id: 1, title: 'Live Chat', description: 'Chat with our support team', icon: MessageCircle, action: () => navigate('/support/chat'), color: 'from-blue-500 to-cyan-500' },
    { id: 2, title: 'Call Support', description: 'Speak to our healthcare team', icon: Phone, action: () => window.location.href = 'tel:18001234567', color: 'from-emerald-500 to-teal-500' },
    { id: 3, title: 'Email Us', description: 'Send us your queries', icon: Mail, action: () => window.location.href = 'mailto:healthcare@rez.com', color: 'from-purple-500 to-pink-500' },
    { id: 4, title: 'FAQ', description: 'Common questions & answers', icon: HelpCircle, action: () => navigate('/help'), color: 'from-orange-500 to-red-500' }
  ];

  const faqs = [
    { question: 'How do I book a doctor appointment?', answer: 'Go to Doctors section, select a doctor and tap Book Now.' },
    { question: 'Can I cancel my booking?', answer: 'Yes, you can cancel upto 2 hours before the appointment.' },
    { question: 'How do I upload my prescription?', answer: 'Go to Pharmacy, tap Upload and select prescription image.' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Headphones className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Support</h1></div><p className="text-xs text-white/80">We're here to help</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {supportOptions.map(option => (
            <div key={option.id} onClick={option.action} className={`p-4 rounded-2xl bg-gradient-to-br ${option.color} text-white cursor-pointer hover:scale-105 transition-transform`}>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                <option.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-1">{option.title}</h3>
              <p className="text-xs opacity-90">{option.description}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-dark-800 rounded-xl p-4 border border-rez-gray-200 dark:border-dark-700">
                <h3 className="font-bold text-rez-navy dark:text-white mb-2">{faq.question}</h3>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthcareSupport;
