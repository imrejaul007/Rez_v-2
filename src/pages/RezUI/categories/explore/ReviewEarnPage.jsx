import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Coins, Camera, Upload, CheckCircle2, TrendingUp, MessageSquare } from 'lucide-react';

const recentPurchases = [
  {
    id: 1,
    name: 'Chicken Biryani',
    store: 'Paradise Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200',
    purchaseDate: '2 days ago',
    coins: 25,
    reviewed: false
  },
  {
    id: 2,
    name: 'Nike Air Max 90',
    store: 'Nike Store',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200',
    purchaseDate: '5 days ago',
    coins: 50,
    reviewed: false
  },
  {
    id: 3,
    name: 'Coffee & Croissant',
    store: 'Starbucks',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200',
    purchaseDate: '1 week ago',
    coins: 15,
    reviewed: true,
    rating: 5
  }
];

const ReviewEarnPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [photos, setPhotos] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const selectedProduct = productId
    ? recentPurchases.find(p => p.id === parseInt(productId))
    : null;

  const handleSubmitReview = () => {
    if (rating === 0) return;
    setSubmitted(true);
    setTimeout(() => {
      navigate('/explore/review-earn');
    }, 2000);
  };

  // Review Form View
  if (selectedProduct && !selectedProduct.reviewed) {
    return (
      <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
        {/* Header */}
        <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
          <div className="px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
              >
                <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
              </button>
              <div className="flex-1">
                <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">
                  Write Review
                </h1>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                  Share your experience & earn ₹{selectedProduct.coins}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="p-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl text-center animate-bounce mx-4">
              <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-4 fill-white" />
              <h3 className="text-3xl font-bold text-white mb-2">
                +₹{selectedProduct.coins} Earned!
              </h3>
              <p className="text-white/90">
                Thank you for your review!
              </p>
            </div>
          </div>
        )}

        {/* Product Info */}
        <div className="px-4 py-4">
          <div className="p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl flex gap-3">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                {selectedProduct.name}
              </h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                {selectedProduct.store}
              </p>
              <div className="flex items-center gap-1 px-2 py-1 bg-amber-500/20 rounded-lg inline-block">
                <Coins className="w-3 h-3 text-amber-500" />
                <span className="text-xs font-semibold text-amber-500">
                  Earn ₹{selectedProduct.coins}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="px-4 mb-6">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
            How would you rate it?
          </h3>
          <div className="flex gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="transition-transform active:scale-95"
              >
                <Star
                  className={`w-12 h-12 ${
                    star <= rating
                      ? 'text-amber-400 fill-amber-400'
                      : 'text-rez-gray-300 dark:text-gray-600'
                  }`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-center text-sm text-rez-gray-600 dark:text-gray-400 mt-2">
              {rating === 5 && 'Excellent! 🌟'}
              {rating === 4 && 'Great! 😊'}
              {rating === 3 && 'Good 👍'}
              {rating === 2 && 'Could be better 😐'}
              {rating === 1 && 'Not satisfied 😞'}
            </p>
          )}
        </div>

        {/* Review Text */}
        <div className="px-4 mb-6">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
            Share your experience (optional)
          </h3>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="What did you like or dislike? Help others make better decisions..."
            className="w-full p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl text-rez-navy dark:text-white placeholder-rez-gray-400 dark:placeholder-gray-500 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-rez-green-500"
            rows={5}
          />
          <p className="text-xs text-rez-gray-500 dark:text-gray-500 mt-2">
            {reviewText.length}/500 characters
          </p>
        </div>

        {/* Photos */}
        <div className="px-4 mb-6">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
            Add photos (optional) <span className="text-amber-500">+₹10 bonus</span>
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {photos.map((photo, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden bg-rez-gray-100 dark:bg-white/10">
                <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
            {photos.length < 4 && (
              <button className="aspect-square rounded-xl border-2 border-dashed border-rez-gray-300 dark:border-gray-600 flex flex-col items-center justify-center gap-1 hover:border-rez-green-500 transition-colors">
                <Camera className="w-5 h-5 text-rez-gray-400 dark:text-gray-500" />
                <span className="text-[10px] text-rez-gray-500 dark:text-gray-500">Add</span>
              </button>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="px-4">
          <button
            onClick={handleSubmitReview}
            disabled={rating === 0}
            className={`w-full py-4 rounded-2xl font-bold text-white transition-all ${
              rating === 0
                ? 'bg-rez-gray-400 cursor-not-allowed'
                : 'bg-rez-green-500 hover:bg-rez-green-600 active:scale-95 shadow-lg'
            }`}
          >
            Submit Review & Earn ₹{selectedProduct.coins + (photos.length > 0 ? 10 : 0)}
          </button>
        </div>

        {/* Guidelines */}
        <div className="px-4 py-6">
          <div className="p-4 bg-rez-gray-50 dark:bg-white/5 rounded-2xl">
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
              Review Guidelines
            </h3>
            <div className="space-y-2 text-sm text-rez-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
                <p>Be honest and specific about your experience</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
                <p>Include photos to earn bonus coins</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
                <p>Avoid offensive language or spam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Review List View
  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-500" />
                Review & Earn
              </h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                Share your experience to earn coins
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-center">
            <MessageSquare className="w-5 h-5 text-purple-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">12</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Reviews</p>
          </div>
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
            <Coins className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">₹340</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Earned</p>
          </div>
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-center">
            <Star className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">4.8</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Avg rating</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-white" />
            <h3 className="text-sm font-bold text-white">Earn More with Photos</h3>
          </div>
          <p className="text-xs text-white/90">
            Add photos to your reviews and earn an extra ₹10 bonus per review!
          </p>
        </div>
      </div>

      {/* Pending Reviews */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
          Pending Reviews ({recentPurchases.filter(p => !p.reviewed).length})
        </h3>
        <div className="space-y-3">
          {recentPurchases.filter(p => !p.reviewed).map((product) => (
            <Link
              key={product.id}
              to={`/explore/review-earn/${product.id}`}
              className="block p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl hover:bg-rez-gray-50 dark:hover:bg-white/20 transition-colors"
            >
              <div className="flex gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-rez-navy dark:text-white line-clamp-1 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                    {product.store} • {product.purchaseDate}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 px-2 py-1 bg-amber-500/20 rounded-lg">
                      <Coins className="w-3 h-3 text-amber-500" />
                      <span className="text-xs font-semibold text-amber-500">
                        Earn ₹{product.coins}
                      </span>
                    </div>
                    <span className="text-xs text-rez-green-500 font-medium">
                      Write Review →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Completed Reviews */}
      <div className="px-4">
        <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
          Your Reviews ({recentPurchases.filter(p => p.reviewed).length})
        </h3>
        <div className="space-y-3">
          {recentPurchases.filter(p => p.reviewed).map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl"
            >
              <div className="flex gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                    {product.name}
                  </h4>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                    {product.store}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs text-emerald-500 font-medium">
                      +₹{product.coins}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewEarnPage;
