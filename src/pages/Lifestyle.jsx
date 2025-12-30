import { useNavigate } from 'react-router-dom';
import { Sparkles, ShoppingBag, Dumbbell, Calendar, UtensilsCrossed, Home as HomeIcon, Leaf, TrendingUp, Award, ArrowRight } from 'lucide-react';

export default function Lifestyle() {
  const navigate = useNavigate();

  const verticals = [
    {
      id: 'fashion',
      name: 'Fashion',
      description: 'Discover your style DNA & build the perfect wardrobe',
      icon: ShoppingBag,
      color: 'from-purple-600 to-pink-600',
      image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&h=400&fit=crop',
      features: ['Style DNA Quiz', 'Virtual Wardrobe', 'Outfit Calendar', 'Sustainability Tracking'],
      path: '/lifestyle/fashion/style-quiz',
      status: 'Available Now',
      badge: 'New'
    },
    {
      id: 'beauty',
      name: 'Beauty',
      description: 'Personalized skincare & makeup recommendations',
      icon: Sparkles,
      color: 'from-pink-600 to-rose-600',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop',
      features: ['Skin Analysis', 'Product Finder', 'Beauty Routine', 'Virtual Try-On'],
      path: '/beauty',
      status: 'Coming Soon',
      badge: 'Q2 2025'
    },
    {
      id: 'fitness',
      name: 'Fitness',
      description: 'Track workouts, nutrition & wellness goals',
      icon: Dumbbell,
      color: 'from-green-600 to-teal-600',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
      features: ['Workout Plans', 'Nutrition Tracker', 'Progress Analytics', 'Community Challenges'],
      path: '/fitness',
      status: 'Coming Soon',
      badge: 'Q2 2025'
    },
    {
      id: 'events',
      name: 'Events',
      description: 'Discover, book & manage lifestyle events',
      icon: Calendar,
      color: 'from-blue-600 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
      features: ['Event Discovery', 'Ticket Booking', 'Calendar Sync', 'Social Sharing'],
      path: '/events',
      status: 'Coming Soon',
      badge: 'Q3 2025'
    },
    {
      id: 'food',
      name: 'Food & Dining',
      description: 'Curated restaurants, recipes & meal planning',
      icon: UtensilsCrossed,
      color: 'from-orange-600 to-red-600',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
      features: ['Restaurant Discovery', 'Meal Planner', 'Recipe Collection', 'Food Diary'],
      path: '/food',
      status: 'Coming Soon',
      badge: 'Q3 2025'
    },
    {
      id: 'home',
      name: 'Home & Living',
      description: 'Transform your space with curated home solutions',
      icon: HomeIcon,
      color: 'from-amber-600 to-yellow-600',
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=400&fit=crop',
      features: ['Home Decor', 'Smart Home', 'Organization Tips', 'Interior Design'],
      path: '/home',
      status: 'Coming Soon',
      badge: 'Q4 2025'
    }
  ];

  const lifestyleStats = {
    activeUsers: '50K+',
    categoriesLive: '1 of 6',
    avgSavings: '₹12,400',
    sustainabilityScore: '75/100'
  };

  const fashionHighlights = [
    { icon: Sparkles, title: 'Style DNA', description: 'AI-powered personalization' },
    { icon: Leaf, title: 'Eco-Friendly', description: 'Track sustainability impact' },
    { icon: TrendingUp, title: 'Smart Wardrobe', description: 'Digital closet management' },
    { icon: Award, title: 'Rewards', description: 'Earn 2x RezCoins' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">Introducing ReZ Lifestyle</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Personal Lifestyle<br />
              <span className="text-yellow-300">Curator</span>
            </h1>

            <p className="text-xl text-purple-100 mb-8">
              Discover personalized fashion, beauty, fitness, food, events, and home solutions
              all in one place. AI-powered recommendations tailored just for you.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">{lifestyleStats.activeUsers}</div>
                <div className="text-sm text-purple-200">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">{lifestyleStats.categoriesLive}</div>
                <div className="text-sm text-purple-200">Categories Live</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">{lifestyleStats.avgSavings}</div>
                <div className="text-sm text-purple-200">Avg Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">{lifestyleStats.sustainabilityScore}</div>
                <div className="text-sm text-purple-200">Eco Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fashion Spotlight - Available Now */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12 text-white">
              <div className="inline-block bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
                ✨ AVAILABLE NOW
              </div>

              <h2 className="text-4xl font-bold mb-4">Fashion Vertical is Live!</h2>

              <p className="text-purple-100 mb-6">
                Start your style journey with AI-powered personalization, virtual wardrobe management,
                and sustainability tracking. Discover fashion that matches your DNA.
              </p>

              {/* Fashion Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {fashionHighlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{highlight.title}</div>
                        <div className="text-sm text-purple-200">{highlight.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => navigate('/lifestyle/fashion/style-quiz')}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-2 group"
              >
                Take Style DNA Quiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&h=600&fit=crop"
                alt="Fashion"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* All Verticals Grid */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore All Lifestyle Categories</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            const isAvailable = vertical.status === 'Available Now';

            return (
              <div
                key={vertical.id}
                className={`bg-white rounded-2xl overflow-hidden border-2 transition-all ${
                  isAvailable
                    ? 'border-purple-600 hover:shadow-2xl cursor-pointer'
                    : 'border-gray-200 hover:shadow-lg opacity-75'
                }`}
                onClick={() => isAvailable && navigate(vertical.path)}
              >
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={vertical.image}
                    alt={vertical.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${vertical.color} opacity-70`} />

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      isAvailable
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-700 text-white'
                    }`}>
                      {vertical.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vertical.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{vertical.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {vertical.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-200">
                    {isAvailable ? (
                      <div className="flex items-center justify-between">
                        <span className="text-purple-600 font-semibold">Get Started</span>
                        <ArrowRight className="w-5 h-5 text-purple-600" />
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="text-gray-500 text-sm">{vertical.status}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">More Categories Coming Soon</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're working hard to bring you Beauty, Fitness, Events, Food, and Home verticals.
            Stay tuned for updates!
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-lg transition-all">
              Notify Me
            </button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
