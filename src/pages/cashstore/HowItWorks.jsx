import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, ShoppingBag, Zap, CheckCircle, AlertCircle, HelpCircle, ExternalLink, Shield, Clock, Coins } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNav from '../../components/layout/BottomNav';

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Find Your Brand',
      description: 'Browse 1000+ online brands on ReZ Cash Store. See exactly how many ReZ Coins you\'ll earn.',
      details: [
        'Search by brand name or category',
        'Compare cashback rates across brands',
        'Check active offers and coupons',
        'Read brand-specific terms'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: 2,
      icon: ShoppingBag,
      title: 'Shop Normally',
      description: 'Tap "Shop Now" and you\'ll be redirected to the brand\'s website. Shop exactly as you normally would.',
      details: [
        'Same prices - no markup',
        'Same products & offers',
        'Use your existing account',
        'Apply brand coupons as usual'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: 3,
      icon: Zap,
      title: 'We Track Your Order',
      description: 'Complete your purchase in the same browser session. We automatically track your order in the background.',
      details: [
        'Tracking happens automatically',
        'No extra steps needed',
        'Status visible in 24-48 hours',
        'Track progress anytime'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      number: 4,
      icon: Coins,
      title: 'Get ReZ Coins',
      description: 'After the brand confirms your order (30-45 days), ReZ Coins are credited to your universal wallet.',
      details: [
        'Notification when credited',
        'View in transaction history',
        'Use across all ReZ modes',
        'Never expires'
      ],
      color: 'from-emerald-500 to-green-500'
    }
  ];

  const faqs = [
    {
      question: 'What is ReZ Cash Store?',
      answer: 'ReZ Cash Store is an affiliate cashback platform. When you shop through us, brands pay us a commission, and we share it with you as ReZ Coins. It\'s that simple!'
    },
    {
      question: 'Is cashback real money?',
      answer: 'No. All cashback is credited as ReZ Coins to your universal wallet. These coins can be used for shopping at offline stores, ReZ Mall, and future Privé benefits. ReZ Coins cannot be withdrawn to bank accounts.'
    },
    {
      question: 'Why does cashback take 30-45 days?',
      answer: 'Brands confirm your purchase and pay us commission only after the return window closes. Once we receive the commission, we immediately credit ReZ Coins to your wallet. Different brands have different timelines.'
    },
    {
      question: 'Can I use brand coupons + get ReZ Coins?',
      answer: 'Yes! Absolutely. ReZ Coins work on top of any discounts, sales, or coupons the brand offers. You get the best of both worlds.'
    },
    {
      question: 'What if I cancel or return my order?',
      answer: 'If you cancel before delivery or return after delivery, the pending ReZ Coins will be automatically reversed. Only confirmed, non-returned orders earn ReZ Coins.'
    },
    {
      question: 'Will my cashback be tracked if I use an ad blocker?',
      answer: 'Ad blockers can interfere with tracking. We recommend disabling ad blockers when shopping through ReZ Cash Store to ensure proper tracking.'
    },
    {
      question: 'What if my cashback is not tracked?',
      answer: 'If your cashback doesn\'t show up within 48 hours, you can report it via "Track Cashback" page. We\'ll investigate and manually track eligible orders. Report within 90 days of purchase.'
    },
    {
      question: 'Can I shop on the brand\'s app or website directly?',
      answer: 'To earn ReZ Coins, you MUST click "Shop Now" from ReZ Cash Store. If you visit the brand\'s website or app directly, we can\'t track your purchase and you won\'t earn coins.'
    }
  ];

  const importantNotes = [
    {
      icon: Shield,
      title: 'Always Click "Shop Now"',
      description: 'Start your shopping journey from ReZ Cash Store. Direct visits to brand websites won\'t be tracked.'
    },
    {
      icon: Clock,
      title: 'Complete in Same Session',
      description: 'Finish your purchase in the same browser session. Don\'t switch browsers or clear cookies mid-purchase.'
    },
    {
      icon: AlertCircle,
      title: 'Disable Ad Blockers',
      description: 'Ad blockers can prevent tracking. Turn them off when shopping through Cash Store.'
    },
    {
      icon: CheckCircle,
      title: 'Track Your Orders',
      description: 'Check "Track Cashback" page regularly. Report missing cashback within 90 days.'
    }
  ];

  const examples = [
    {
      brand: 'Amazon',
      logo: '📦',
      scenario: 'Buy electronics worth ₹10,000',
      calculation: [
        { label: 'Product Price', value: '₹10,000', highlight: false },
        { label: 'Amazon Discount (if any)', value: '-₹1,000', highlight: false },
        { label: 'You Pay', value: '₹9,000', highlight: true },
        { label: 'ReZ Coins (12%)', value: '🪙 1,080', highlight: true }
      ],
      note: 'ReZ Coins calculated on final paid amount after discounts'
    },
    {
      brand: 'Myntra',
      logo: '👔',
      scenario: 'Buy fashion items worth ₹3,000',
      calculation: [
        { label: 'Product Price', value: '₹3,000', highlight: false },
        { label: 'Myntra Coupon', value: '-₹600', highlight: false },
        { label: 'You Pay', value: '₹2,400', highlight: true },
        { label: 'ReZ Coins (28%)', value: '🪙 672', highlight: true }
      ],
      note: 'Stack brand coupons + earn ReZ Coins on top!'
    }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Page Header */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate('/cash-store')}
            className="p-2 rounded-full bg-white dark:bg-dark-800 hover:bg-rez-gray-100 dark:hover:bg-dark-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-rez-navy dark:text-white">How Cash Store Works</h1>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Shop online, earn ReZ Coins</p>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-4 mb-6">
        <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <h2 className="text-xl font-bold mb-2">💰 Simple. Transparent. Rewarding.</h2>
          <p className="text-white/90 text-sm">
            Shop at 1000+ online brands you already love. Earn ReZ Coins on every purchase. No tricks, no catches.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-4">4 Simple Steps</h2>
        <div className="space-y-4">
          {steps.map((step) => {
            const StepIcon = step.icon;
            return (
              <div key={step.number} className="p-5 rounded-2xl bg-white dark:bg-dark-800">
                {/* Step Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <StepIcon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-rez-gray-500 dark:text-gray-500">STEP {step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-rez-gray-700 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>

                {/* Step Details */}
                <div className="pl-4 border-l-2 border-rez-gray-200 dark:border-dark-700 ml-7">
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-rez-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Examples */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-4">💡 Real Examples</h2>
        <div className="space-y-3">
          {examples.map((example, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-dark-800">
              {/* Brand Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center text-2xl">
                  {example.logo}
                </div>
                <div>
                  <h3 className="font-bold text-rez-navy dark:text-white">{example.brand}</h3>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">{example.scenario}</p>
                </div>
              </div>

              {/* Calculation */}
              <div className="space-y-2 mb-3">
                {example.calculation.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-2 ${
                      item.highlight ? 'px-3 rounded-xl bg-emerald-500/10' : ''
                    }`}
                  >
                    <span className={`text-sm ${
                      item.highlight
                        ? 'font-bold text-rez-navy dark:text-white'
                        : 'text-rez-gray-600 dark:text-gray-400'
                    }`}>
                      {item.label}
                    </span>
                    <span className={`text-sm ${
                      item.highlight
                        ? 'font-bold text-emerald-600 dark:text-emerald-400'
                        : 'text-rez-navy dark:text-white'
                    }`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-800 dark:text-blue-300">{example.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notes */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-4">⚠️ Important Notes</h2>
        <div className="grid gap-3">
          {importantNotes.map((note, idx) => {
            const NoteIcon = note.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <NoteIcon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-rez-navy dark:text-white mb-1">{note.title}</h3>
                    <p className="text-sm text-rez-gray-700 dark:text-gray-300">{note.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ReZ Coins Notice */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white">
          <div className="flex items-start gap-3 mb-3">
            <Coins className="w-6 h-6 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">🪙 Cashback = ReZ Coins (not cash)</h3>
              <p className="text-sm text-white/90 mb-3">
                All cashback is credited as ReZ Coins to your universal wallet. These are rewards points you can use across:
              </p>
              <ul className="space-y-1 text-sm text-white/90">
                <li>• Offline stores (ReZ Near You)</li>
                <li>• Online shopping (ReZ Mall)</li>
                <li>• Exclusive deals (Privé, coming soon)</li>
              </ul>
              <div className="mt-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                <p className="text-xs text-white/90">
                  <strong>Important:</strong> ReZ Coins cannot be withdrawn to bank accounts or converted to cash. They are a closed-loop reward currency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-4 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-dark-800">
              <h3 className="font-bold text-rez-navy dark:text-white mb-2 text-sm">{faq.question}</h3>
              <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 mb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white text-center">
          <h3 className="text-lg font-bold mb-2">Ready to Start Earning?</h3>
          <p className="text-sm text-white/90 mb-4">
            Browse 1000+ brands and start earning ReZ Coins on every purchase.
          </p>
          <button
            onClick={() => navigate('/cash-store')}
            className="w-full py-3 rounded-xl bg-white text-purple-600 font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Explore Cash Store
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default HowItWorks;
