import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Phone, MessageCircle, Clock, Gift } from 'lucide-react';

function BeautyConcierge() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
              <h1 className="text-h3 font-poppins text-white">Beauty Concierge</h1>
            </div>
            <p className="text-xs text-white/80">Your personal beauty advisor</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Hero */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-8 h-8 text-white fill-white" />
          </div>
          <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-2">Personalized Beauty Consultation</h2>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-4">
            Get expert advice on treatments, products, and services tailored just for you
          </p>
        </div>

        {/* Services */}
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-rez-navy dark:text-white mb-1">Schedule a Call</h3>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-3">
                  Talk to our beauty experts 24/7
                </p>
                <button className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-rez-navy dark:text-white mb-1">Live Chat</h3>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-3">
                  Instant answers to your beauty questions
                </p>
                <button className="w-full py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
          <div className="flex items-center gap-2 mb-3">
            <Gift className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-rez-navy dark:text-white">Exclusive Benefits</h3>
          </div>
          <ul className="space-y-2 text-sm text-rez-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Personalized treatment recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Priority booking at partner salons</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Exclusive deals on products & services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Free skin analysis & consultation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BeautyConcierge;
