import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-4 flex items-center gap-4">
          <Link to="/" className="p-2 rounded-rez-lg hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-6 h-6 text-rez-navy dark:text-white" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-rez-lg bg-blue-500/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Privacy Policy</h1>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Last updated: Dec 26, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="prose prose-rez dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">1. Information We Collect</h2>
            <p className="text-body text-rez-gray-700 dark:text-gray-300 mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-rez-gray-700 dark:text-gray-300 ml-4">
              <li>Name, email address, and phone number</li>
              <li>Transaction history and shopping preferences</li>
              <li>Location data (with your permission)</li>
              <li>Payment information (securely processed)</li>
              <li>Device information and usage data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-body text-rez-gray-700 dark:text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-rez-gray-700 dark:text-gray-300 ml-4">
              <li>Provide and improve our services</li>
              <li>Process your transactions and rewards</li>
              <li>Send you personalized offers and recommendations</li>
              <li>Communicate with you about your account</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">3. Information Sharing</h2>
            <p className="text-body text-rez-gray-700 dark:text-gray-300 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-rez-gray-700 dark:text-gray-300 ml-4">
              <li>Partner merchants (only transaction-related data)</li>
              <li>Service providers who assist our operations</li>
              <li>Law enforcement when legally required</li>
              <li>Other parties with your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">4. Data Security</h2>
            <p className="text-body text-rez-gray-700 dark:text-gray-300 mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-rez-gray-700 dark:text-gray-300 ml-4">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security audits and updates</li>
              <li>Secure payment processing through certified providers</li>
              <li>Access controls and authentication</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">5. Your Rights</h2>
            <p className="text-body text-rez-gray-700 dark:text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-body text-rez-gray-700 dark:text-gray-300 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">6. Cookies and Tracking</h2>
            <p className="text-body text-rez-gray-700 dark:text-gray-300 mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.
              You can control cookie preferences in your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">7. Children's Privacy</h2>
            <p className="text-body text-rez-gray-700 dark:text-gray-300 mb-4">
              Our service is not directed to children under 13. We do not knowingly collect information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">8. Changes to This Policy</h2>
            <p className="text-body text-rez-gray-700 dark:text-gray-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or app notification.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4">9. Contact Us</h2>
            <p className="text-body text-rez-gray-700 dark:text-gray-300 mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10">
              <p className="text-body text-rez-navy dark:text-white mb-2">
                <strong>Email:</strong> privacy@rez.com
              </p>
              <p className="text-body text-rez-navy dark:text-white mb-2">
                <strong>Phone:</strong> +91 1800-XXX-XXXX
              </p>
              <p className="text-body text-rez-navy dark:text-white">
                <strong>Address:</strong> ReZ Technologies Pvt Ltd, Bangalore, India
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
