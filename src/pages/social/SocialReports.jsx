import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  AlertTriangle,
  Flag,
  Shield,
  XCircle,
  MessageSquare,
  User,
  Image as ImageIcon,
  CheckCircle,
  Send
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialReports = () => {
  const navigate = useNavigate();
  const { contentType, contentId } = useParams();
  const [selectedReason, setSelectedReason] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Report reasons
  const reportReasons = [
    {
      id: 'spam',
      icon: '📧',
      title: 'Spam',
      description: 'Unwanted or repetitive content'
    },
    {
      id: 'harassment',
      icon: '😠',
      title: 'Harassment or Bullying',
      description: 'Targeting or intimidating behavior'
    },
    {
      id: 'hate_speech',
      icon: '⚠️',
      title: 'Hate Speech',
      description: 'Content promoting hatred or violence'
    },
    {
      id: 'inappropriate',
      icon: '🚫',
      title: 'Inappropriate Content',
      description: 'Content not suitable for this platform'
    },
    {
      id: 'misinformation',
      icon: '❌',
      title: 'False Information',
      description: 'Misleading or false content'
    },
    {
      id: 'violence',
      icon: '⚔️',
      title: 'Violence or Threats',
      description: 'Content promoting violence'
    },
    {
      id: 'scam',
      icon: '💰',
      title: 'Scam or Fraud',
      description: 'Deceptive or fraudulent activity'
    },
    {
      id: 'copyright',
      icon: '©️',
      title: 'Copyright Violation',
      description: 'Unauthorized use of copyrighted content'
    },
    {
      id: 'impersonation',
      icon: '🎭',
      title: 'Impersonation',
      description: 'Pretending to be someone else'
    },
    {
      id: 'other',
      icon: '📝',
      title: 'Other',
      description: 'Something else not listed here'
    }
  ];

  const handleSubmit = async () => {
    if (!selectedReason) return;

    setIsSubmitting(true);

    // API: POST /api/social/reports
    // Body: {
    //   contentType: 'post' | 'comment' | 'user' | 'group',
    //   contentId,
    //   reason: selectedReason,
    //   additionalInfo
    // }
    // TODO: Implement report submission with backend

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const getContentTypeInfo = () => {
    switch (contentType) {
      case 'post':
        return { icon: MessageSquare, label: 'Post', color: 'blue' };
      case 'comment':
        return { icon: MessageSquare, label: 'Comment', color: 'purple' };
      case 'user':
        return { icon: User, label: 'User', color: 'green' };
      case 'group':
        return { icon: Shield, label: 'Group', color: 'orange' };
      default:
        return { icon: Flag, label: 'Content', color: 'red' };
    }
  };

  const contentInfo = getContentTypeInfo();
  const ContentIcon = contentInfo.icon;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-black pb-24">
        <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
          <div className="flex items-center gap-3 px-4 py-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Report Submitted</h1>
          </div>
        </div>

        <div className="px-4 py-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-3">
            Thank You for Reporting
          </h2>
          <p className="text-body text-rez-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
            We take these reports seriously and will review this content. We'll let you know if we take any action.
          </p>

          <div className="space-y-3 max-w-md mx-auto">
            <div className="p-4 rounded-rez-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
              <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-2">What happens next?</h3>
              <ul className="space-y-2 text-left text-body-sm text-rez-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="shrink-0">•</span>
                  <span>Our team will review the content within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">•</span>
                  <span>We'll take appropriate action if needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">•</span>
                  <span>You'll receive a notification about the outcome</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigate(-2)}
              className="w-full py-3 rounded-rez-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              Done
            </button>
          </div>
        </div>

        <BottomNavManager />
      </div>
    );
  }

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
          <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Report {contentInfo.label}</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Info Banner */}
        <div className="p-4 rounded-rez-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-500 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-1">
                Why are you reporting this {contentInfo.label.toLowerCase()}?
              </h3>
              <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
                Your report is anonymous. If someone is in immediate danger, call local emergency services.
              </p>
            </div>
          </div>
        </div>

        {/* Report Reasons */}
        <div>
          <h2 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">Select a Reason</h2>
          <div className="space-y-2">
            {reportReasons.map((reason) => (
              <button
                key={reason.id}
                onClick={() => setSelectedReason(reason.id)}
                className={`w-full p-4 rounded-rez-xl border-2 transition-all text-left ${
                  selectedReason === reason.id
                    ? 'border-red-500 bg-red-50 dark:bg-red-500/10'
                    : 'border-rez-gray-200 dark:border-white/10 bg-white dark:bg-bg-card hover:border-red-300 dark:hover:border-red-500/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl shrink-0">{reason.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
                      {reason.description}
                    </p>
                  </div>
                  {selectedReason === reason.id && (
                    <CheckCircle className="w-6 h-6 text-red-500 shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        {selectedReason && (
          <div>
            <h2 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">
              Additional Information (Optional)
            </h2>
            <textarea
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Provide any additional details that might help us review this report..."
              rows={4}
              maxLength={500}
              className="w-full px-4 py-3 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-red-500/50"
            />
            <div className="text-caption text-rez-gray-600 dark:text-gray-400 text-right mt-2">
              {additionalInfo.length}/500
            </div>
          </div>
        )}

        {/* Guidelines */}
        <div className="p-4 rounded-rez-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
          <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-500" />
            Community Guidelines
          </h3>
          <ul className="space-y-1 text-body-sm text-rez-gray-600 dark:text-gray-400">
            <li>• Be respectful to all community members</li>
            <li>• Don't share false or misleading information</li>
            <li>• Respect others' privacy and intellectual property</li>
            <li>• Report content that violates our guidelines</li>
          </ul>
        </div>
      </div>

      {/* Fixed Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-black border-t border-rez-gray-200 dark:border-white/10 pb-safe">
        <button
          onClick={handleSubmit}
          disabled={!selectedReason || isSubmitting}
          className={`w-full py-4 rounded-rez-xl font-bold transition-all ${
            selectedReason && !isSubmitting
              ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-rez-card'
              : 'bg-rez-gray-200 dark:bg-white/10 text-rez-gray-400 dark:text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            'Submitting Report...'
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Submit Report
            </div>
          )}
        </button>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialReports;
