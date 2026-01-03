import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home, Phone, Mail, Clock, Award } from 'lucide-react';

const PartnerSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-150" />
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-2xl">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-rez-navy dark:text-white mb-3">
            Application Submitted!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Thank you for choosing ReZ as your business partner. We're excited to grow together!
          </p>
        </div>

        {/* Next Steps */}
        <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 mb-6">
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4">What Happens Next?</h3>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-rez-navy dark:text-white mb-1">Verification</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our team will verify your business details
                </p>
              </div>
              <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-rez-navy dark:text-white mb-1">Onboarding Call</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We'll call you within 24-48 hours
                </p>
              </div>
              <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-rez-navy dark:text-white mb-1">Go Live!</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Start accepting customers and earning
                </p>
              </div>
              <Award className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 mb-6">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                Need Help?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Contact us at{' '}
                <a href="mailto:partner@rez.app" className="text-blue-600 dark:text-blue-400 font-semibold">
                  partner@rez.app
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <button
          onClick={() => navigate('/')}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PartnerSuccess;
