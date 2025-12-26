import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ThumbsUp,
  MessageCircle,
  Share2,
  Camera,
  Video,
  Heart,
  Coins,
  Users,
  Clock,
  CheckCircle,
  Upload,
  Send,
  Star,
  Trophy,
  Gift,
  Sparkles,
  MapPin,
  Calendar,
  TrendingUp,
  Award
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialActivityDetail = () => {
  const navigate = useNavigate();
  const { type, id } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Poll state
  const [selectedOption, setSelectedOption] = useState(null);

  // Comment state
  const [comment, setComment] = useState('');

  // Share state
  const [shareMethod, setShareMethod] = useState(null);

  // Photo upload state
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Video/Reel state
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Rating state
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  // Activity data based on type and ID
  const getActivityData = () => {
    const activities = {
      'vote-poll': {
        '1': {
          title: 'Vote: Best Coffee Shop?',
          description: 'Help the community decide which coffee shop offers the best experience and value!',
          reward: 10,
          participants: 1247,
          timeLeft: '12h left',
          options: [
            { id: 1, label: 'Starbucks', votes: 456, percentage: 37 },
            { id: 2, label: 'CCD', votes: 234, percentage: 19 },
            { id: 3, label: 'Blue Tokai', votes: 312, percentage: 25 },
            { id: 4, label: 'Third Wave', votes: 245, percentage: 19 }
          ],
          category: 'Food & Beverage',
          icon: '☕',
          color: 'from-blue-500 to-cyan-500'
        },
        '7': {
          title: 'Vote: Favorite Cuisine',
          description: 'Which cuisine do you prefer for dining out?',
          reward: 10,
          participants: 2341,
          timeLeft: 'Completed',
          options: [
            { id: 1, label: 'Italian', votes: 678, percentage: 29 },
            { id: 2, label: 'Chinese', votes: 812, percentage: 35 },
            { id: 3, label: 'Indian', votes: 567, percentage: 24 },
            { id: 4, label: 'Mexican', votes: 284, percentage: 12 }
          ],
          category: 'Food & Beverage',
          icon: '🍽️',
          color: 'from-purple-500 to-pink-500'
        }
      },
      'comment': {
        '2': {
          title: 'Share Your Experience at Pizza Hut',
          description: 'Write a detailed review about your recent visit. Quality comments earn more coins!',
          reward: 15,
          bonusReward: 50,
          store: 'Pizza Hut, Indiranagar',
          storeImage: '🍕',
          comments: 234,
          guidelines: [
            'Be honest and specific',
            'Mention food quality, service, ambiance',
            'Minimum 50 characters',
            'No offensive language'
          ],
          sampleTopics: ['Food Quality', 'Service', 'Ambiance', 'Value for Money'],
          color: 'from-purple-500 to-pink-500'
        }
      },
      'share-offer': {
        '3': {
          title: 'Share: 50% Off at Zara',
          description: 'Share this amazing offer with friends and earn coins when they view it!',
          reward: 25,
          bonusReward: 50,
          store: 'Zara',
          deal: '50% Off',
          dealDetails: '50% off on all summer collection',
          validUntil: 'Dec 31, 2024',
          shares: 89,
          views: 456,
          storeImage: '👗',
          shareBonus: 'Earn 5 bonus coins per friend who views (max 10 friends)',
          color: 'from-pink-500 to-red-500'
        }
      },
      'upload-photo': {
        '4': {
          title: 'Upload Store Photo',
          description: 'Take and upload a high-quality photo of any partner store to help the community!',
          reward: 30,
          bonusReward: 100,
          requirements: [
            'Clear lighting (daylight preferred)',
            'Store front or interior visible',
            'No blur or shaky shots',
            'Minimum resolution: 1080x1080',
            'No watermarks or filters'
          ],
          photoTypes: ['Store Front', 'Interior', 'Products', 'Menu/Signage'],
          qualityBonus: 'High-quality photos earn up to 100 bonus coins',
          color: 'from-green-500 to-teal-500'
        }
      },
      'create-reel': {
        '5': {
          title: 'Create Shopping Reel',
          description: 'Create an engaging video showcasing your shopping experience!',
          reward: 100,
          bonusReward: 200,
          requirements: [
            '15-30 seconds duration',
            'Show products clearly',
            'Add hashtag #ReZSaves',
            'Good lighting and audio',
            'Original content only'
          ],
          tips: [
            'Show price comparisons',
            'Mention deals/discounts',
            'Be energetic and authentic',
            'Use trending music'
          ],
          featuredBonus: 'Best reels get featured and earn 200 bonus coins',
          color: 'from-red-500 to-orange-500'
        }
      },
      'rate-event': {
        '6': {
          title: 'Rate: Weekend Food Fest',
          description: 'Share your experience at the Weekend Food Fest event',
          reward: 20,
          event: 'Weekend Food Fest',
          location: 'Phoenix Mall',
          date: 'Dec 20-22, 2024',
          requiresAttendance: true,
          ratingCategories: [
            { id: 'food', label: 'Food Quality', icon: '🍽️' },
            { id: 'variety', label: 'Variety', icon: '🎨' },
            { id: 'service', label: 'Service', icon: '👥' },
            { id: 'ambiance', label: 'Ambiance', icon: '✨' },
            { id: 'value', label: 'Value', icon: '💰' }
          ],
          color: 'from-orange-500 to-amber-500'
        }
      }
    };

    return activities[type]?.[id] || activities['vote-poll']['1'];
  };

  const activity = getActivityData();

  const handleSubmit = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setIsCompleted(true);
      setShowConfirmation(false);
    }, 1500);
  };

  const canSubmit = () => {
    if (type === 'vote-poll') return selectedOption !== null;
    if (type === 'comment') return comment.length >= 50;
    if (type === 'share-offer') return shareMethod !== null;
    if (type === 'upload-photo') return selectedPhoto !== null;
    if (type === 'create-reel') return selectedVideo !== null;
    if (type === 'rate-event') return rating > 0 && reviewText.length >= 30;
    return false;
  };

  // Render different UI based on activity type
  const renderActivityContent = () => {
    if (type === 'vote-poll') {
      return (
        <div className="space-y-4">
          <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4">Cast Your Vote</h3>
            <div className="space-y-3">
              {activity.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => !isCompleted && setSelectedOption(option.id)}
                  disabled={isCompleted}
                  className={`w-full p-4 rounded-rez-lg border-2 transition-all ${
                    selectedOption === option.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10'
                      : 'border-rez-gray-200 dark:border-white/10 bg-white dark:bg-bg-card hover:border-blue-300 dark:hover:border-blue-500/30'
                  } ${isCompleted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-body font-medium text-rez-navy dark:text-white">{option.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-body-sm text-rez-gray-600 dark:text-gray-400">{option.votes} votes</span>
                      {selectedOption === option.id && (
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                  </div>
                  <div className="w-full h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${option.percentage}%` }}
                    />
                  </div>
                  <span className="text-caption text-rez-gray-600 dark:text-gray-400">{option.percentage}%</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-rez-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-body-sm font-medium text-rez-navy dark:text-white">{activity.participants.toLocaleString()} people voted</p>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">{activity.timeLeft}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'comment') {
      return (
        <div className="space-y-4">
          <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-rez-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl">
                {activity.storeImage}
              </div>
              <div>
                <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">{activity.store}</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">{activity.comments} reviews</p>
              </div>
            </div>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              disabled={isCompleted}
              placeholder="Share your detailed experience here... (minimum 50 characters)"
              rows={6}
              className="w-full px-4 py-3 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:cursor-not-allowed"
            />
            <div className="flex items-center justify-between mt-2">
              <span className={`text-caption ${comment.length >= 50 ? 'text-green-500' : 'text-rez-gray-600 dark:text-gray-400'}`}>
                {comment.length}/50 characters
              </span>
            </div>
          </div>

          <div className="p-4 rounded-rez-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30">
            <h4 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-2">Review Guidelines</h4>
            <div className="space-y-1">
              {activity.guidelines.map((guideline, idx) => (
                <div key={idx} className="flex items-start gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                  <span>{guideline}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h4 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-2">Suggested Topics</h4>
            <div className="flex flex-wrap gap-2">
              {activity.sampleTopics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => setComment(comment + (comment ? ' ' : '') + topic + ': ')}
                  disabled={isCompleted}
                  className="px-3 py-1.5 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 text-caption font-medium text-rez-navy dark:text-white hover:bg-purple-500/20 transition-all disabled:cursor-not-allowed"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (type === 'share-offer') {
      const shareOptions = [
        { id: 'whatsapp', label: 'WhatsApp', icon: '💬', color: 'from-green-500 to-emerald-500' },
        { id: 'instagram', label: 'Instagram', icon: '📸', color: 'from-purple-500 to-pink-500' },
        { id: 'facebook', label: 'Facebook', icon: '👥', color: 'from-blue-500 to-cyan-500' },
        { id: 'twitter', label: 'Twitter', icon: '🐦', color: 'from-blue-400 to-sky-400' },
        { id: 'link', label: 'Copy Link', icon: '🔗', color: 'from-gray-500 to-slate-500' }
      ];

      return (
        <div className="space-y-4">
          <div className="p-6 rounded-rez-xl bg-gradient-to-br from-pink-500 to-red-500 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-rez-lg bg-white/20 flex items-center justify-center text-5xl">
                {activity.storeImage}
              </div>
              <div className="flex-1">
                <h3 className="text-h4 font-poppins mb-1">{activity.store}</h3>
                <p className="text-h3 font-bold mb-1">{activity.deal}</p>
                <p className="text-body-sm opacity-90">{activity.dealDetails}</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="text-caption">Valid until {activity.validUntil}</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-caption">{activity.shares} shares</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4">Choose Share Method</h3>
            <div className="grid grid-cols-3 gap-3">
              {shareOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setShareMethod(option.id)}
                  disabled={isCompleted}
                  className={`p-4 rounded-rez-lg border-2 transition-all ${
                    shareMethod === option.id
                      ? 'border-pink-500 bg-pink-50 dark:bg-pink-500/10'
                      : 'border-rez-gray-200 dark:border-white/10 bg-white dark:bg-bg-card hover:border-pink-300 dark:hover:border-pink-500/30'
                  } ${isCompleted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center text-2xl`}>
                    {option.icon}
                  </div>
                  <p className="text-caption font-medium text-rez-navy dark:text-white text-center">{option.label}</p>
                  {shareMethod === option.id && (
                    <CheckCircle className="w-4 h-4 text-pink-500 mx-auto mt-1" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-rez-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30">
            <div className="flex items-start gap-3">
              <Gift className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-1">Bonus Rewards</h4>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">{activity.shareBonus}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'upload-photo') {
      return (
        <div className="space-y-4">
          <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4">Upload Photo</h3>

            <label className={`block w-full aspect-square rounded-rez-xl border-2 border-dashed transition-all cursor-pointer ${
              selectedPhoto
                ? 'border-green-500 bg-green-50 dark:bg-green-500/10'
                : 'border-rez-gray-300 dark:border-white/20 bg-rez-gray-50 dark:bg-white/5 hover:border-green-500 dark:hover:border-green-500/50'
            }`}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedPhoto(e.target.files[0])}
                disabled={isCompleted}
                className="hidden"
              />
              <div className="w-full h-full flex flex-col items-center justify-center">
                {selectedPhoto ? (
                  <>
                    <CheckCircle className="w-16 h-16 text-green-500 mb-3" />
                    <p className="text-body font-semibold text-green-600 dark:text-green-400 mb-1">Photo Selected</p>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">{selectedPhoto.name}</p>
                  </>
                ) : (
                  <>
                    <Camera className="w-16 h-16 text-rez-gray-400 mb-3" />
                    <p className="text-body font-semibold text-rez-navy dark:text-white mb-1">Tap to Upload Photo</p>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">JPG, PNG (max 10MB)</p>
                  </>
                )}
              </div>
            </label>
          </div>

          <div className="p-4 rounded-rez-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30">
            <h4 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Photo Requirements
            </h4>
            <div className="space-y-1">
              {activity.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h4 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-3">Photo Categories</h4>
            <div className="grid grid-cols-2 gap-2">
              {activity.photoTypes.map((photoType, idx) => (
                <div key={idx} className="p-3 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 text-center">
                  <p className="text-caption font-medium text-rez-navy dark:text-white">{photoType}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-rez-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-1">Quality Bonus</h4>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">{activity.qualityBonus}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'create-reel') {
      return (
        <div className="space-y-4">
          <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4">Upload Video Reel</h3>

            <label className={`block w-full aspect-video rounded-rez-xl border-2 border-dashed transition-all cursor-pointer ${
              selectedVideo
                ? 'border-red-500 bg-red-50 dark:bg-red-500/10'
                : 'border-rez-gray-300 dark:border-white/20 bg-rez-gray-50 dark:bg-white/5 hover:border-red-500 dark:hover:border-red-500/50'
            }`}>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setSelectedVideo(e.target.files[0])}
                disabled={isCompleted}
                className="hidden"
              />
              <div className="w-full h-full flex flex-col items-center justify-center">
                {selectedVideo ? (
                  <>
                    <CheckCircle className="w-16 h-16 text-red-500 mb-3" />
                    <p className="text-body font-semibold text-red-600 dark:text-red-400 mb-1">Video Selected</p>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">{selectedVideo.name}</p>
                  </>
                ) : (
                  <>
                    <Video className="w-16 h-16 text-rez-gray-400 mb-3" />
                    <p className="text-body font-semibold text-rez-navy dark:text-white mb-1">Tap to Upload Video</p>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">MP4, MOV (15-30 sec, max 100MB)</p>
                  </>
                )}
              </div>
            </label>
          </div>

          <div className="p-4 rounded-rez-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30">
            <h4 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-red-500" />
              Reel Requirements
            </h4>
            <div className="space-y-1">
              {activity.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h4 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              Pro Tips
            </h4>
            <div className="space-y-2">
              {activity.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                  <Sparkles className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-rez-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-1">Featured Bonus</h4>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">{activity.featuredBonus}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'rate-event') {
      return (
        <div className="space-y-4">
          <div className="p-6 rounded-rez-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white">
            <div className="text-center mb-4">
              <h3 className="text-h3 font-poppins mb-2">{activity.event}</h3>
              <div className="flex items-center justify-center gap-4 text-body-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{activity.date}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4">Overall Rating</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => !isCompleted && setRating(star)}
                  disabled={isCompleted}
                  className="transition-transform hover:scale-110 disabled:cursor-not-allowed"
                >
                  <Star
                    className={`w-12 h-12 ${
                      star <= rating
                        ? 'fill-amber-500 text-amber-500'
                        : 'text-rez-gray-300 dark:text-white/20'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-body-sm text-rez-gray-600 dark:text-gray-400">
                {rating === 5 && 'Excellent!'}
                {rating === 4 && 'Very Good!'}
                {rating === 3 && 'Good'}
                {rating === 2 && 'Fair'}
                {rating === 1 && 'Needs Improvement'}
              </p>
            )}
          </div>

          <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4">Category Ratings</h3>
            <div className="space-y-4">
              {activity.ratingCategories.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{category.icon}</span>
                      <span className="text-body-sm font-medium text-rez-navy dark:text-white">{category.label}</span>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= 3
                              ? 'fill-amber-500 text-amber-500'
                              : 'text-rez-gray-300 dark:text-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">Share Your Experience</h3>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              disabled={isCompleted}
              placeholder="Tell us about your experience... (minimum 30 characters)"
              rows={4}
              className="w-full px-4 py-3 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-orange-500/50 disabled:cursor-not-allowed"
            />
            <div className="flex items-center justify-between mt-2">
              <span className={`text-caption ${reviewText.length >= 30 ? 'text-green-500' : 'text-rez-gray-600 dark:text-gray-400'}`}>
                {reviewText.length}/30 characters
              </span>
            </div>
          </div>

          {activity.requiresAttendance && (
            <div className="p-4 rounded-rez-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-1">Verified Attendee</h4>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">You attended this event</p>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">{activity.title}</h1>
            {activity.category && (
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">{activity.category}</p>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Hero */}
        {activity.icon && (
          <div className={`p-6 rounded-rez-xl bg-gradient-to-br ${activity.color} text-white text-center`}>
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-4xl">
              {activity.icon}
            </div>
            <h2 className="text-h4 font-poppins mb-2">{activity.title}</h2>
            <p className="text-body-sm opacity-90 mb-4">{activity.description}</p>
            <div className="flex items-center justify-center gap-2 p-3 rounded-rez-lg bg-white/10 backdrop-blur-sm">
              <Coins className="w-6 h-6" />
              <span className="text-h4 font-poppins">+{activity.reward}</span>
              {activity.bonusReward && (
                <>
                  <span className="text-body-sm opacity-80">•</span>
                  <Gift className="w-5 h-5" />
                  <span className="text-body font-medium">Up to +{activity.bonusReward}</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Activity Content */}
        {renderActivityContent()}

        {/* Success State */}
        {isCompleted && (
          <div className="p-6 rounded-rez-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h3 className="text-h3 font-poppins mb-2">Completed!</h3>
            <p className="text-body-sm opacity-90 mb-4">Great job! Your contribution helps the community.</p>
            <div className="p-4 rounded-rez-lg bg-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Coins className="w-6 h-6" />
                <span className="text-h3 font-poppins">+{activity.reward}</span>
              </div>
              <p className="text-caption opacity-80">Coins earned</p>
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="p-6 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center animate-in fade-in zoom-in duration-200">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-emerald-500 animate-in zoom-in duration-300" />
              </div>
              <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">Processing...</h3>
              <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">Submitting your contribution</p>
            </div>
          </div>
        )}
      </div>

      {/* Fixed Submit Button */}
      {!isCompleted && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-black border-t border-rez-gray-200 dark:border-white/10 pb-safe">
          <button
            onClick={handleSubmit}
            disabled={!canSubmit()}
            className={`w-full py-4 rounded-rez-xl font-bold transition-all ${
              canSubmit()
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-rez-card'
                : 'bg-rez-gray-200 dark:bg-white/10 text-rez-gray-400 dark:text-gray-500 cursor-not-allowed'
            }`}
          >
            {canSubmit() ? (
              <div className="flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Submit & Earn {activity.reward} Coins
              </div>
            ) : (
              'Complete the activity to submit'
            )}
          </button>
        </div>
      )}

      <BottomNavManager />
    </div>
  );
};

export default SocialActivityDetail;
