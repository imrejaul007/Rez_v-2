import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, User, Palette, Calendar, DollarSign, Leaf, ArrowRight } from 'lucide-react';

export default function StyleQuiz() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'color_palette',
      title: 'Which color palette speaks to you?',
      type: 'image_choice',
      options: [
        {
          id: 'monochrome',
          label: 'Monochrome Minimalist',
          colors: ['#000000', '#808080', '#FFFFFF'],
          image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop'
        },
        {
          id: 'earth_tones',
          label: 'Earthy & Natural',
          colors: ['#8B4513', '#D2691E', '#F5DEB3'],
          image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop'
        },
        {
          id: 'vibrant',
          label: 'Bold & Vibrant',
          colors: ['#FF6B35', '#004E89', '#F7FFF7'],
          image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop'
        },
        {
          id: 'pastels',
          label: 'Soft Pastels',
          colors: ['#FFB6C1', '#E6E6FA', '#F0E68C'],
          image: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=400&h=500&fit=crop'
        }
      ]
    },
    {
      id: 'style_vibe',
      title: 'Which outfit makes you feel most like yourself?',
      type: 'image_choice',
      options: [
        {
          id: 'minimalist',
          label: 'Clean Minimalist',
          image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop'
        },
        {
          id: 'boho',
          label: 'Boho Chic',
          image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop'
        },
        {
          id: 'streetwear',
          label: 'Urban Streetwear',
          image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop'
        },
        {
          id: 'ethnic',
          label: 'Traditional Ethnic',
          image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop'
        }
      ]
    },
    {
      id: 'fit_preference',
      title: 'How do you prefer your clothes to fit?',
      type: 'button_choice',
      icon: User,
      options: [
        { id: 'fitted', label: 'Fitted & Tailored', description: 'Clothes that hug your body shape' },
        { id: 'relaxed', label: 'Relaxed & Comfortable', description: 'Loose, breathable fits' },
        { id: 'oversized', label: 'Oversized & Flowy', description: 'Baggy, statement pieces' },
        { id: 'mixed', label: 'Mix of Both', description: 'Depends on the occasion' }
      ]
    },
    {
      id: 'occasion_frequency',
      title: 'Which occasions do you dress up for most?',
      type: 'button_choice',
      icon: Calendar,
      multiple: true,
      options: [
        { id: 'work', label: 'Work/Office', description: '5 days a week' },
        { id: 'casual', label: 'Casual Outings', description: 'Everyday wear' },
        { id: 'party', label: 'Parties/Clubs', description: 'Weekend nights' },
        { id: 'events', label: 'Weddings/Events', description: 'Monthly occasions' },
        { id: 'fitness', label: 'Gym/Sports', description: 'Active lifestyle' },
        { id: 'home', label: 'Loungewear', description: 'Comfort at home' }
      ]
    },
    {
      id: 'budget_range',
      title: 'What\'s your typical fashion budget per month?',
      type: 'button_choice',
      icon: DollarSign,
      options: [
        { id: 'budget', label: '₹2,000 - ₹5,000', description: 'Value for money' },
        { id: 'mid', label: '₹5,000 - ₹15,000', description: 'Quality & style' },
        { id: 'premium', label: '₹15,000 - ₹50,000', description: 'Premium brands' },
        { id: 'luxury', label: '₹50,000+', description: 'Designer & luxury' }
      ]
    },
    {
      id: 'sustainability',
      title: 'How important is sustainable fashion to you?',
      type: 'button_choice',
      icon: Leaf,
      options: [
        { id: 'very_high', label: 'Very Important', description: 'I only buy eco-friendly brands' },
        { id: 'high', label: 'Important', description: 'I prefer sustainable when possible' },
        { id: 'moderate', label: 'Somewhat', description: 'Nice to have, not a dealbreaker' },
        { id: 'low', label: 'Not Priority', description: 'Price and style come first' }
      ]
    },
    {
      id: 'body_type',
      title: 'What\'s your body type? (Optional)',
      type: 'button_choice',
      icon: User,
      optional: true,
      options: [
        { id: 'slim', label: 'Slim/Lean', description: 'Narrow shoulders, slim build' },
        { id: 'athletic', label: 'Athletic', description: 'Toned, muscular build' },
        { id: 'average', label: 'Average', description: 'Balanced proportions' },
        { id: 'curvy', label: 'Curvy', description: 'Fuller figure, curves' },
        { id: 'plus', label: 'Plus Size', description: 'Fuller body type' },
        { id: 'skip', label: 'Skip This Question', description: '' }
      ]
    },
    {
      id: 'shopping_goal',
      title: 'What brings you to ReZ Lifestyle Fashion?',
      type: 'button_choice',
      icon: Sparkles,
      options: [
        { id: 'discover', label: 'Discover My Style', description: 'Help me find my fashion identity' },
        { id: 'wardrobe', label: 'Build Smart Wardrobe', description: 'Curate a versatile collection' },
        { id: 'sustainable', label: 'Shop Sustainably', description: 'Eco-conscious fashion choices' },
        { id: 'deals', label: 'Find Great Deals', description: 'Save money on quality fashion' }
      ]
    }
  ];

  const handleAnswer = (questionId, answerId) => {
    const question = questions[currentStep];

    if (question.multiple) {
      // Multiple choice - toggle selection
      const currentAnswers = answers[questionId] || [];
      const newAnswers = currentAnswers.includes(answerId)
        ? currentAnswers.filter(id => id !== answerId)
        : [...currentAnswers, answerId];
      setAnswers({ ...answers, [questionId]: newAnswers });
    } else {
      // Single choice
      setAnswers({ ...answers, [questionId]: answerId });

      // Auto-advance after 300ms for single choice
      setTimeout(() => {
        if (currentStep < questions.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Quiz complete - navigate to results
      navigate('/lifestyle/fashion/style-dna-result', { state: { answers } });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isAnswered = () => {
    const question = questions[currentStep];
    if (question.optional) return true;
    const answer = answers[question.id];
    if (question.multiple) {
      return answer && answer.length > 0;
    }
    return answer !== undefined;
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];
  const Icon = currentQuestion.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => currentStep === 0 ? navigate(-1) : handleBack()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="text-sm text-gray-500">
              Question {currentStep + 1} of {questions.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Question Title */}
        <div className="text-center mb-12">
          {Icon && (
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8 text-white" />
            </div>
          )}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {currentQuestion.title}
          </h2>
          {currentQuestion.optional && (
            <p className="text-gray-500">This helps us give better recommendations</p>
          )}
        </div>

        {/* Answer Options */}
        {currentQuestion.type === 'image_choice' && (
          <div className="grid grid-cols-2 gap-6">
            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentQuestion.id] === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(currentQuestion.id, option.id)}
                  className={`relative rounded-2xl overflow-hidden transition-all transform hover:scale-105 ${
                    isSelected ? 'ring-4 ring-purple-600 shadow-2xl' : 'ring-1 ring-gray-200 hover:ring-2 hover:ring-purple-300'
                  }`}
                >
                  <div className="aspect-[4/5] relative">
                    <img
                      src={option.image}
                      alt={option.label}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent ${
                      isSelected ? 'from-purple-900/70' : ''
                    }`} />

                    {/* Color Palette */}
                    {option.colors && (
                      <div className="absolute top-4 right-4 flex gap-2">
                        {option.colors.map((color, idx) => (
                          <div
                            key={idx}
                            className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-lg">
                          {option.label}
                        </span>
                        {isSelected && (
                          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {currentQuestion.type === 'button_choice' && (
          <div className="max-w-2xl mx-auto space-y-4">
            {currentQuestion.options.map((option) => {
              const isSelected = currentQuestion.multiple
                ? (answers[currentQuestion.id] || []).includes(option.id)
                : answers[currentQuestion.id] === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(currentQuestion.id, option.id)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                    isSelected
                      ? 'border-purple-600 bg-purple-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-lg text-gray-900 mb-1">
                        {option.label}
                      </div>
                      {option.description && (
                        <div className="text-sm text-gray-500">
                          {option.description}
                        </div>
                      )}
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-4 ${
                      isSelected ? 'border-purple-600 bg-purple-600' : 'border-gray-300'
                    }`}>
                      {isSelected && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-center">
          {currentQuestion.multiple && (
            <button
              onClick={handleNext}
              disabled={!isAnswered()}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
                isAnswered()
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentStep === questions.length - 1 ? 'See My Style DNA' : 'Continue'}
              {currentStep === questions.length - 1 ? <Sparkles className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
