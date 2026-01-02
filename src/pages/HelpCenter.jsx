import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelpCircle, Search, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';

/**
 * HELP CENTER - FAQ and Help Articles
 *
 * Backend APIs needed:
 * - GET /api/support/faqs (fetch FAQ categories and articles)
 * - GET /api/support/search (search help articles)
 *
 * Connected to: RTMN_MASTER_DOCUMENTATION/FRONTEND_INVENTORY_TRACKER.md
 * Status: ✅ BUILT (Jan 2, 2026)
 * Priority: MEDIUM - User support
 */

function HelpCenter() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    {
      id: 1,
      title: 'Getting Started',
      icon: '🚀',
      faqs: [
        { q: 'How do I create an account?', a: 'Download the ReZ app, tap "Sign Up", and follow the registration process with your phone number or email.' },
        { q: 'How do I verify my account?', a: 'Enter the OTP sent to your phone number during registration to verify your account.' },
        { q: 'What are the benefits of creating an account?', a: 'Track orders, earn rewards, save addresses, get personalized recommendations, and access exclusive deals.' }
      ]
    },
    {
      id: 2,
      title: 'Orders & Delivery',
      icon: '📦',
      faqs: [
        { q: 'How do I track my order?', a: 'Go to Orders section, select your order, and view real-time tracking information.' },
        { q: 'What are the delivery charges?', a: 'Delivery charges vary based on distance, order value, and delivery speed. Free delivery on orders above ₹500.' },
        { q: 'Can I cancel my order?', a: 'Yes, you can cancel orders before they are dispatched from the Delivery page.' },
        { q: 'What is the return policy?', a: 'Most items can be returned within 7 days of delivery if unopened and in original packaging.' }
      ]
    },
    {
      id: 3,
      title: 'Payments & Wallet',
      icon: '💳',
      faqs: [
        { q: 'What payment methods are accepted?', a: 'We accept UPI, credit/debit cards, net banking, wallets, and cash on delivery.' },
        { q: 'How do I add money to my wallet?', a: 'Go to Wallet, tap "Add Money", enter amount, and complete payment.' },
        { q: 'When will I receive my refund?', a: 'Refunds are processed within 5-7 business days to your original payment method.' },
        { q: 'Is it safe to save my card details?', a: 'Yes, all payment information is encrypted and stored securely using industry standards.' }
      ]
    },
    {
      id: 4,
      title: 'Rewards & Points',
      icon: '🎁',
      faqs: [
        { q: 'How do I earn ReZ Points?', a: 'Earn points on every purchase, referrals, daily check-ins, and completing challenges.' },
        { q: 'How can I redeem my points?', a: 'Use points for discounts, free products, or convert to cashback in the Rewards section.' },
        { q: 'Do points expire?', a: 'Points are valid for 12 months from the date of earning.' },
        { q: 'What are badges and how do I earn them?', a: 'Badges are achievements earned by reaching milestones, completing challenges, or special activities.' }
      ]
    },
    {
      id: 5,
      title: 'Account & Security',
      icon: '🔒',
      faqs: [
        { q: 'How do I change my password?', a: 'Go to Profile > Settings > Change Password and follow the instructions.' },
        { q: 'How do I update my profile information?', a: 'Tap on your profile, then Edit Profile to update your details.' },
        { q: 'What is KYC and why is it required?', a: 'KYC verification unlocks higher transaction limits and certain premium features for security.' },
        { q: 'How do I delete my account?', a: 'Go to Settings > Account > Delete Account. Note: This action is permanent.' }
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleFaq = (faqIndex) => {
    setExpandedFaq(expandedFaq === faqIndex ? null : faqIndex);
  };

  const filteredCategories = categories.map(cat => ({
    ...cat,
    faqs: cat.faqs.filter(faq =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.faqs.length > 0 || !searchQuery);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-6"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Help Center</h1>
            <p className="text-gray-600">Find answers to common questions</p>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Search for help..."
            />
          </div>
        </motion.div>

        <div className="space-y-4 mb-6">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-lg font-bold text-gray-900">{category.title}</h2>
                  <span className="text-sm text-gray-500">({category.faqs.length})</span>
                </div>
                {expandedCategory === category.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {expandedCategory === category.id && (
                <div className="border-t border-gray-200">
                  {category.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-100 last:border-0">
                      <button
                        onClick={() => toggleFaq(`${category.id}-${faqIndex}`)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <p className="font-medium text-gray-900">{faq.q}</p>
                          {expandedFaq === `${category.id}-${faqIndex}` ? (
                            <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          )}
                        </div>
                      </button>
                      {expandedFaq === `${category.id}-${faqIndex}` && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Still need help?</h3>
          <p className="text-gray-600 mb-6">Our support team is here to assist you</p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/chat-support')}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Live Chat
            </button>
            <button
              onClick={() => navigate('/contact-support')}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HelpCenter;
