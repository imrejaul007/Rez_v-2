import { useState } from 'react';
import { offers } from '../data/offers';
import { useApp } from '../contexts/AppContext';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { Copy, Check, Clock, Zap } from 'lucide-react';
import BottomNavManager from '../components/layout/BottomNavManager';

const Offers = () => {
  const { filters } = useApp();
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Filter mode-specific offers
  const relevantOffers = offers.filter(offer => {
    if (offer.category === 'Halal' && !filters.halal) return true;
    if (offer.category === 'Vegan' && !filters.vegan) return true;
    return true;
  });

  const flashDeals = relevantOffers.filter(o => o.type === 'flash');
  const cashbackOffers = relevantOffers.filter(o => o.type === 'cashback');
  const modeOffers = relevantOffers.filter(o => o.type === 'mode_specific');

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-2 pb-4">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white">Offers</h1>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-1">Deals that actually work near you</p>
      </div>

      {/* Flash Deals Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-orange-400" />
            <span className="font-semibold text-rez-navy dark:text-white">Flash Deals</span>
            <Badge variant="danger" size="xs">Limited Time</Badge>
          </div>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300">Grab these before they're gone!</p>
        </div>
      </div>

      {/* Flash Deals */}
      <div className="px-4 space-y-3 mb-6">
        {flashDeals.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            copiedCode={copiedCode}
            onCopyCode={handleCopyCode}
          />
        ))}
      </div>

      {/* Mode-Specific Offers */}
      {(filters.halal || filters.vegan) && modeOffers.length > 0 && (
        <>
          <div className="px-4 mb-3">
            <h2 className="text-lg font-semibold text-rez-navy dark:text-white">For Your Mode</h2>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Special offers based on your preferences</p>
          </div>
          <div className="px-4 space-y-3 mb-6">
            {modeOffers.map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                copiedCode={copiedCode}
                onCopyCode={handleCopyCode}
              />
            ))}
          </div>
        </>
      )}

      {/* Cashback Offers */}
      <div className="px-4 mb-3">
        <h2 className="text-lg font-semibold text-rez-navy dark:text-white">Cashback Offers</h2>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Earn more on every purchase</p>
      </div>
      <div className="px-4 space-y-3 mb-6">
        {cashbackOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            copiedCode={copiedCode}
            onCopyCode={handleCopyCode}
          />
        ))}
      </div>

      {/* All Offers */}
      <div className="px-4 mb-3">
        <h2 className="text-lg font-semibold text-rez-navy dark:text-white">All Offers</h2>
      </div>
      <div className="px-4 space-y-3">
        {relevantOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            copiedCode={copiedCode}
            onCopyCode={handleCopyCode}
          />
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

const OfferCard = ({ offer, copiedCode, onCopyCode }) => {
  return (
    <Card className="overflow-hidden">
      <div className="flex">
        {/* Image */}
        <div className="w-28 h-28 shrink-0">
          <img
            src={offer.image}
            alt={offer.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-xl font-bold text-emerald-400">{offer.discount}</span>
              <h3 className="font-semibold text-rez-navy dark:text-white">{offer.title}</h3>
            </div>
            <Badge variant="default" size="xs">
              <Clock className="w-3 h-3" />
              {offer.validTill}
            </Badge>
          </div>

          <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-1">{offer.subtitle}</p>

          {/* Code */}
          {offer.code && (
            <button
              onClick={() => onCopyCode(offer.code)}
              className="mt-2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rez-gray-100 dark:bg-white/10 active:bg-white/20"
            >
              <span className="text-sm font-mono text-amber-400">{offer.code}</span>
              {copiedCode === offer.code ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
              )}
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Offers;
