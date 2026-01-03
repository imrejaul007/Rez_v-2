import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Share2, Heart, MapPin, Clock, Phone, Navigation,
  Copy, Check, Info, Coins, CreditCard, Smartphone, Building2
} from 'lucide-react';
import { useState } from 'react';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

// Import all deals to find the one we need
import {
  nearbyOffers,
  todaysOffers,
  bogoDeals,
  lightningDeals,
  superCashbackStores,
  studentDeals,
  corporateDeals,
  womenExclusiveDeals
} from '../data/deals';

const DealDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copiedCode, setCopiedCode] = useState(false);
  const [saved, setSaved] = useState(false);

  // Find the deal from all sources
  const allDeals = [
    ...nearbyOffers,
    ...todaysOffers,
    ...bogoDeals,
    ...lightningDeals,
    ...superCashbackStores,
    ...studentDeals,
    ...corporateDeals,
    ...womenExclusiveDeals
  ];

  const deal = allDeals.find(d => d.id === id);

  if (!deal) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <span className="text-4xl mb-4">🔍</span>
        <h2 className="text-xl font-semibold text-rez-navy dark:text-white mb-2">Deal not found</h2>
        <p className="text-rez-gray-600 dark:text-gray-400 text-center mb-4">
          This deal might have expired or been removed.
        </p>
        <Link to="/deal-store" className="text-emerald-400">Browse more deals</Link>
      </div>
    );
  }

  const handleCopyCode = () => {
    if (deal.code) {
      navigator.clipboard.writeText(deal.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleShare = () => {
    // Share functionality
    if (navigator.share) {
      navigator.share({
        title: deal.title,
        text: `Check out this deal: ${deal.discount} off at ${deal.store}`,
        url: window.location.href
      }).catch(() => console.log('Share cancelled'));
    } else {
      console.log('Share not supported - implement fallback');
    }
  };

  const handleDirections = () => {
    // Open maps with store location
    console.log('Opening directions to store');
    // TODO: Implement actual directions with store coordinates
  };

  const handleCall = () => {
    // Initiate phone call
    if (deal.phone) {
      window.location.href = `tel:${deal.phone}`;
    } else {
      console.log('Store phone number not available');
    }
  };

  const getDiscountColor = () => {
    if (deal.discountType === 'bogo') return 'from-purple-500 to-pink-500';
    if (deal.discountType === 'freebie' || deal.discount === 'FREE') return 'from-emerald-500 to-green-500';
    if (deal.type === 'cashback') return 'from-amber-500 to-orange-500';
    return 'from-red-500 to-orange-500';
  };

  return (
    <div className="pb-32">
      {/* Hero Image */}
      <div className="relative h-64">
        {deal.image ? (
          <img
            src={deal.image}
            alt={deal.store}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <img
              src={deal.storeLogo}
              alt={deal.store}
              className="w-24 h-24 rounded-2xl object-contain bg-white"
              onError={(e) => {
                e.target.innerHTML = '<span class="text-6xl">🏪</span>';
              }}
            />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 p-2 rounded-full bg-white dark:bg-black/50 backdrop-blur"
        >
          <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
        </button>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setSaved(!saved)}
            className="p-2 rounded-full bg-white dark:bg-black/50 backdrop-blur"
          >
            <Heart className={`w-5 h-5 ${saved ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white dark:bg-black/50 backdrop-blur"
          >
            <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>

        {/* Discount Badge */}
        <div className="absolute bottom-4 left-4">
          <div className={`px-4 py-2 rounded-xl bg-gradient-to-r ${getDiscountColor()}`}>
            <span className="text-xl font-bold text-rez-navy dark:text-white">{deal.discount || deal.cashback}</span>
            {deal.type === 'cashback' && <span className="text-rez-navy dark:text-white ml-1">Cashback</span>}
          </div>
        </div>

        {/* Timer if expiring */}
        {deal.expiresIn && (
          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-red-500/90 flex items-center gap-1">
            <Clock className="w-4 h-4 text-rez-navy dark:text-white" />
            <span className="text-sm font-medium text-rez-navy dark:text-white">{deal.expiresIn}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-4 pt-4">
        {/* Store Info */}
        <div className="flex items-center gap-3 mb-3">
          {deal.storeLogo && (
            <img
              src={deal.storeLogo}
              alt={deal.store}
              className="w-12 h-12 rounded-xl object-contain bg-white"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
          <div>
            <h1 className="text-xl font-bold text-rez-navy dark:text-white">{deal.store}</h1>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">{deal.category}</p>
          </div>
        </div>

        {/* Deal Title */}
        <h2 className="text-lg font-semibold text-rez-navy dark:text-white mb-2">{deal.title}</h2>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {deal.badge && <Badge variant="prive">{deal.badge}</Badge>}
          {deal.trending && <Badge variant="danger">🔥 Trending</Badge>}
          {deal.redeemCount && (
            <Badge variant="default">{deal.redeemCount} people used</Badge>
          )}
          {deal.validTill && (
            <Badge variant="default">Valid till {deal.validTill}</Badge>
          )}
        </div>

        {/* Quick Info */}
        {deal.distance && (
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-rez-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {deal.distance}
            </span>
            <button
              onClick={handleDirections}
              className="flex items-center gap-1 text-emerald-400"
            >
              <Navigation className="w-4 h-4" />
              Directions
            </button>
            <button
              onClick={handleCall}
              className="flex items-center gap-1 text-blue-400"
            >
              <Phone className="w-4 h-4" />
              Call
            </button>
          </div>
        )}

        {/* Promo Code */}
        {deal.code && (
          <Card className="p-4 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-1">Use code at checkout</p>
                <p className="text-xl font-mono font-bold text-amber-400">{deal.code}</p>
              </div>
              <button
                onClick={handleCopyCode}
                className="px-4 py-2 bg-rez-gray-100 dark:bg-white/10 rounded-xl flex items-center gap-2 active:bg-white/20"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-rez-navy dark:text-white" />
                    <span className="text-sm text-rez-navy dark:text-white">Copy</span>
                  </>
                )}
              </button>
            </div>
          </Card>
        )}

        {/* Coin Earnings Preview (for cashback) */}
        {deal.type === 'cashback' && (
          <Card className="p-4 mb-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <span className="text-2xl">🪙</span>
              </div>
              <div>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">Estimated earnings</p>
                <p className="text-lg font-semibold text-amber-400">
                  Up to {deal.coinsEarned || 500} ReZ Coins
                </p>
              </div>
            </div>
            {deal.maxCashback && (
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-2">Max cashback: {deal.maxCashback}</p>
            )}
          </Card>
        )}

        {/* How to Redeem */}
        <Card className="p-4 mb-4">
          <h3 className="font-semibold text-rez-navy dark:text-white mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-emerald-400" />
            How to Redeem
          </h3>
          <ol className="space-y-3">
            {deal.type === 'cashback' ? (
              <>
                <RedeemStep number={1} text="Visit the store or shop online" />
                <RedeemStep number={2} text="Make your purchase as usual" />
                <RedeemStep number={3} text="Pay using ReZ Wallet for auto-tracking" />
                <RedeemStep number={4} text="Cashback credited within 7-30 days" />
              </>
            ) : (
              <>
                <RedeemStep number={1} text={deal.code ? "Copy the promo code above" : "Show this deal at the store"} />
                <RedeemStep number={2} text="Add items to your cart" />
                <RedeemStep number={3} text={deal.code ? "Apply code at checkout" : "Mention ReZ deal at billing"} />
                <RedeemStep number={4} text="Enjoy your savings!" />
              </>
            )}
          </ol>
        </Card>

        {/* Eligible Payment Methods */}
        <Card className="p-4 mb-4">
          <h3 className="font-semibold text-rez-navy dark:text-white mb-3">Eligible Payment Methods</h3>
          <div className="flex flex-wrap gap-2">
            <PaymentBadge icon={<Smartphone className="w-4 h-4" />} label="UPI" />
            <PaymentBadge icon={<CreditCard className="w-4 h-4" />} label="Cards" />
            <PaymentBadge icon={<Building2 className="w-4 h-4" />} label="Net Banking" />
            <PaymentBadge icon={<span>🪙</span>} label="ReZ Coins" />
          </div>
        </Card>

        {/* Terms & Conditions */}
        <Card className="p-4 mb-4">
          <h3 className="font-semibold text-rez-navy dark:text-white mb-3">Terms & Conditions</h3>
          <ul className="space-y-2">
            {deal.terms ? (
              deal.terms.map((term, i) => (
                <li key={i} className="text-sm text-rez-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-rez-gray-700 dark:text-gray-600">•</span>
                  {term}
                </li>
              ))
            ) : (
              <>
                <li className="text-sm text-rez-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-rez-gray-700 dark:text-gray-600">•</span>
                  Valid for limited time only
                </li>
                <li className="text-sm text-rez-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-rez-gray-700 dark:text-gray-600">•</span>
                  Cannot be combined with other offers
                </li>
                <li className="text-sm text-rez-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-rez-gray-700 dark:text-gray-600">•</span>
                  Store reserves the right to modify or cancel
                </li>
              </>
            )}
            {deal.eligibility && (
              <li className="text-sm text-rez-gray-600 dark:text-gray-400 flex items-start gap-2">
                <span className="text-rez-gray-700 dark:text-gray-600">•</span>
                {deal.eligibility}
              </li>
            )}
          </ul>
        </Card>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-20 left-0 right-0 p-4 glass">
        <Button variant="primary" fullWidth>
          {deal.type === 'cashback' ? 'Visit Store & Earn' : 'Get This Deal'}
        </Button>
        <p className="text-center text-xs text-rez-gray-600 dark:text-gray-400 mt-2">
          {deal.type === 'cashback'
            ? 'Pay with ReZ Wallet for automatic tracking'
            : 'Show at store or apply online'
          }
        </p>
      </div>
    </div>
  );
};

// Helper Components
const RedeemStep = ({ number, text }) => (
  <li className="flex items-start gap-3">
    <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
      <span className="text-xs font-bold text-emerald-400">{number}</span>
    </span>
    <span className="text-sm text-rez-gray-700 dark:text-gray-300">{text}</span>
  </li>
);

const PaymentBadge = ({ icon, label }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rez-gray-50 dark:bg-white/5">
    <span className="text-rez-gray-600 dark:text-gray-400">{icon}</span>
    <span className="text-sm text-rez-gray-700 dark:text-gray-300">{label}</span>
  </div>
);

export default DealDetail;
