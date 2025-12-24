import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Terms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Terms of Service</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3">1. Acceptance of Terms</h2>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed">
            By using ReZ, you agree to these terms and conditions. Please read them carefully.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3">2. Use of Service</h2>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed">
            ReZ provides a platform for cashback rewards and shopping. You must use the service responsibly and in accordance with applicable laws.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3">3. ReZ Coins & Cashback</h2>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed">
            ReZ Coins and cashback are subject to terms and conditions. Coins may expire after a certain period. Please check wallet for details.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3">4. Privacy</h2>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3">5. Modifications</h2>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed">
            We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
