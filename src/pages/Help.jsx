import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ChevronRight, Package, CreditCard, RefreshCw, Shield,
  Truck, HelpCircle, MessageCircle, Phone, Mail, Clock, CheckCircle
} from 'lucide-react';

function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const faqCategories = [
    {
      id: 'orders',
      title: 'Orders & Delivery',
      icon: Package,
      color: 'emerald',
      faqs: [
        {
          question: 'How do I track my order?',
          answer: 'You can track your order by going to Orders section and clicking on the specific order. You\'ll see real-time tracking updates and estimated delivery time.'
        },
        {
          question: 'Can I cancel my order?',
          answer: 'Yes, you can cancel orders that haven\'t been shipped yet. Go to Order Details and click "Cancel Order". Refund will be processed within 5-7 business days.'
        },
        {
          question: 'What if my order is delayed?',
          answer: 'If your order is delayed beyond the estimated delivery date, please contact our support team. We\'ll help track your package and provide updates.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments & Refunds',
      icon: CreditCard,
      color: 'blue',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept UPI, Credit/Debit Cards, Net Banking, Wallets (Paytm, PhonePe), and Cash on Delivery for eligible orders.'
        },
        {
          question: 'How long does it take to get a refund?',
          answer: 'Refunds are processed within 5-7 business days. The amount will be credited to your original payment method or ReZ Wallet based on your preference.'
        },
        {
          question: 'Is it safe to save my card details?',
          answer: 'Yes, absolutely. We use bank-grade encryption and never store your CVV. Your card details are stored securely by our PCI-DSS compliant payment partners.'
        }
      ]
    },
    {
      id: 'cashback',
      title: 'Cashback & ReZ Coins',
      icon: RefreshCw,
      color: 'amber',
      faqs: [
        {
          question: 'How do I earn cashback?',
          answer: 'You earn cashback on every purchase! The cashback percentage varies by store and product. Check the product page for exact cashback amount before purchase.'
        },
        {
          question: 'When will I receive my cashback?',
          answer: 'Cashback is credited to your wallet within 24-48 hours after successful delivery. For services, it\'s credited immediately after completion.'
        },
        {
          question: 'What are ReZ Coins and how to use them?',
          answer: 'ReZ Coins are reward points you earn with purchases. 100 coins = ₹1. Use them at checkout to get instant discounts on your next purchase.'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account & Security',
      icon: Shield,
      color: 'purple',
      faqs: [
        {
          question: 'How do I change my password?',
          answer: 'Go to Settings > Security > Change Password. Enter your current password and create a new one. We recommend using a strong, unique password.'
        },
        {
          question: 'How can I update my profile information?',
          answer: 'Navigate to Profile section and tap "Edit Profile". You can update your name, email, phone number, and profile picture.'
        },
        {
          question: 'Is my personal data safe?',
          answer: 'Yes, we take data security seriously. All your information is encrypted and stored securely. We never share your data with third parties without consent.'
        }
      ]
    }
  ];

  const quickActions = [
    { icon: MessageCircle, label: 'Chat Support', description: 'Get instant help', route: '/support/chat', color: 'emerald' },
    { icon: Phone, label: 'Call Us', description: '+91 80 1234 5678', route: 'tel:+918012345678', color: 'blue' },
    { icon: Mail, label: 'Email Support', description: 'support@rez.com', route: 'mailto:support@rez.com', color: 'purple' },
    { icon: Package, label: 'My Orders', description: 'Track orders', route: '/orders', color: 'amber' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'bg-emerald-500/20 text-emerald-400',
      blue: 'bg-blue-500/20 text-blue-400',
      amber: 'bg-amber-500/20 text-amber-400',
      purple: 'bg-purple-500/20 text-purple-400',
      red: 'bg-red-500/20 text-red-400'
    };
    return colors[color] || colors.emerald;
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4">
          <h1 className="text-h2 font-poppins text-rez-navy dark:text-white">Help Center</h1>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">Find answers to your questions</p>
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-400 dark:text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search help articles..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-rez-gray-100 dark:bg-dark-700 border border-rez-gray-200 dark:border-dark-600 text-rez-navy dark:text-white placeholder-rez-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rez-green-500"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Quick Actions */}
        <div>
          <h2 className="text-sm font-semibold text-rez-gray-700 dark:text-gray-300 mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, idx) => (
              <Link
                key={idx}
                to={action.route}
                className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-rez-green-500 dark:hover:border-emerald-500 transition-all active:scale-98"
              >
                <div className={`w-10 h-10 rounded-full ${getColorClasses(action.color)} flex items-center justify-center mb-3`}>
                  <action.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">{action.label}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Categories */}
        <div>
          <h2 className="text-sm font-semibold text-rez-gray-700 dark:text-gray-300 mb-3">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {filteredCategories.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
                <HelpCircle className="w-12 h-12 mx-auto text-rez-gray-300 dark:text-gray-600 mb-3" />
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">No results found for "{searchQuery}"</p>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                    className="w-full px-4 py-4 flex items-center gap-3 hover:bg-rez-gray-50 dark:hover:bg-dark-700 transition-all"
                  >
                    <div className={`w-10 h-10 rounded-full ${getColorClasses(category.color)} flex items-center justify-center flex-shrink-0`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-sm font-semibold text-rez-navy dark:text-white">{category.title}</h3>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                        {category.faqs.length} article{category.faqs.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-rez-gray-400 dark:text-gray-500 flex-shrink-0 transition-transform ${
                      expandedCategory === category.id ? 'rotate-90' : ''
                    }`} />
                  </button>

                  {expandedCategory === category.id && (
                    <div className="border-t border-rez-gray-100 dark:border-dark-700">
                      {category.faqs.map((faq, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-4 border-t border-rez-gray-100 dark:border-dark-700 first:border-t-0"
                        >
                          <div className="flex gap-2 mb-2">
                            <HelpCircle className="w-4 h-4 text-rez-green-500 flex-shrink-0 mt-0.5" />
                            <h4 className="text-sm font-semibold text-rez-navy dark:text-white">{faq.question}</h4>
                          </div>
                          <p className="text-sm text-rez-gray-600 dark:text-gray-400 pl-6 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Support Hours */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-blue-400" />
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white">Support Hours</h3>
          </div>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-1">Monday - Saturday: 9:00 AM - 8:00 PM</p>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300">Sunday: 10:00 AM - 6:00 PM</p>
          <div className="mt-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400">Currently Available</span>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-rez-green-500 to-emerald-600 text-white">
          <h3 className="text-h3 font-poppins mb-2">Still need help?</h3>
          <p className="text-sm mb-4 opacity-90">Our support team is here to assist you 24/7</p>
          <Link
            to="/support/chat"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-rez-green-500 font-semibold active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Start Live Chat
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Help;
