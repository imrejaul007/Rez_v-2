import React, { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function LanguageSelector() {
  const [language, setLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Globe size={28} /> Language
        </h1>
        <p className="text-gray-600 mb-6">Select your preferred language</p>

        <div className="space-y-2">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`w-full p-4 rounded-lg flex items-center justify-between transition ${language === lang.code ? 'bg-blue-100 border-l-4 border-blue-500' : 'bg-white'}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{lang.flag}</span>
                <p className="font-semibold text-gray-900">{lang.name}</p>
              </div>
              {language === lang.code && <Check className="text-blue-500" size={20} />}
            </button>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}