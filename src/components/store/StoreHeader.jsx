import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star, MapPin, Clock, Phone, ExternalLink, Coins } from 'lucide-react';

const StoreHeader = ({
  store,
  storeConfig,
  isSaved,
  onToggleSave,
  onShare,
  showBackButton = true
}) => {
  const theme = storeConfig.theme;

  return (
    <>
      {/* Hero Image with Overlay */}
      <div className="relative h-56">
        <img
          src={store.image || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800'}
          alt={store.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Navigation */}
        {showBackButton && (
          <Link
            to="/stores"
            className="absolute top-4 left-4 p-2 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
        )}

        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={onToggleSave}
            className="p-2 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur"
          >
            <Heart className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : 'text-rez-navy dark:text-white'}`} />
          </button>
          <button
            onClick={onShare}
            className="p-2 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur"
          >
            <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>

        {/* Cashback Badge */}
        <div className="absolute bottom-4 left-4">
          <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${theme.primary} backdrop-blur`}>
            <span className="text-sm font-bold text-white flex items-center gap-1.5">
              <Coins className="w-4 h-4" />
              Earn {store.cashback}% ReZ Coins
            </span>
          </div>
        </div>

        {/* Store Type Badge */}
        <div className="absolute bottom-4 right-4">
          <div className={`px-3 py-1.5 rounded-full ${theme.badge} backdrop-blur`}>
            <span className="text-xs font-bold flex items-center gap-1">
              <span>{storeConfig.icon}</span>
              {storeConfig.name}
            </span>
          </div>
        </div>
      </div>

      {/* Store Info */}
      <div className="px-4 pt-4 pb-3 bg-white dark:bg-dark-800">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-1">{store.name}</h1>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">{store.category}</p>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-rez-gray-100 dark:bg-dark-700">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-bold text-rez-navy dark:text-white">{store.rating}</span>
            <span className="text-xs text-rez-gray-600 dark:text-gray-400">({store.reviews})</span>
          </div>
        </div>

        {/* Mode Badges */}
        {(store.isHalal || store.isVegan || store.isVegetarian || store.isPrive || store.is60Min) && (
          <div className="flex flex-wrap gap-2 mb-3">
            {store.isHalal && (
              <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                🕌 Halal Verified
              </span>
            )}
            {store.isVegan && (
              <span className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-xs font-bold text-green-600 dark:text-green-400">
                🌱 Vegan
              </span>
            )}
            {store.isVegetarian && (
              <span className="px-3 py-1 rounded-full bg-lime-50 dark:bg-lime-900/20 text-xs font-bold text-lime-600 dark:text-lime-400">
                🥬 Vegetarian
              </span>
            )}
            {store.isPrive && (
              <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 text-xs font-bold text-amber-600 dark:text-amber-400">
                ✨ Privé
              </span>
            )}
            {store.is60Min && (
              <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-xs font-bold text-cyan-600 dark:text-cyan-400">
                ⚡ 60-min Delivery
              </span>
            )}
          </div>
        )}

        {/* Quick Info */}
        <div className="flex flex-wrap gap-4 text-sm text-rez-gray-600 dark:text-gray-400">
          {store.distance && (
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {store.distance}
            </span>
          )}
          {store.deliveryTime && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {store.deliveryTime}
            </span>
          )}
          <button
            onClick={() => window.location.href = store.phone ? `tel:${store.phone}` : 'tel:'}
            className="flex items-center gap-1.5 text-emerald-500"
          >
            <Phone className="w-4 h-4" />
            Call
          </button>
          <button
            onClick={() => console.log('Opening directions to store')}
            className="flex items-center gap-1.5 text-emerald-500"
          >
            <ExternalLink className="w-4 h-4" />
            Directions
          </button>
        </div>

        {/* Offers Banner */}
        {store.offers && store.offers.length > 0 && (
          <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <h3 className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1.5">
              🎉 {store.offers.length} Offer{store.offers.length > 1 ? 's' : ''} Available
            </h3>
            <ul className="space-y-1">
              {store.offers.slice(0, 2).map((offer, i) => (
                <li key={i} className="text-xs text-rez-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <span className="text-amber-500">•</span>
                  {offer}
                </li>
              ))}
            </ul>
            {store.offers.length > 2 && (
              <button
                onClick={() => console.log('Show all offers')}
                className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-1"
              >
                +{store.offers.length - 2} more offers
              </button>
            )}
          </div>
        )}
      </div>

      {/* Sticky Reward Strip */}
      <div className={`sticky top-0 z-30 px-4 py-3 bg-gradient-to-r ${theme.primary} border-b border-white/10`}>
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2 text-sm">
            <Coins className="w-4 h-4" />
            <span className="font-medium">{storeConfig.savingsMessage || 'Best savings auto-applied'}</span>
          </div>
          {storeConfig.rewardMultiplier > 1 && (
            <span className="px-2 py-1 rounded-full bg-white/20 text-xs font-bold">
              {storeConfig.rewardMultiplier}x Coins
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default StoreHeader;
