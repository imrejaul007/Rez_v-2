import { useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, ShoppingBag, Palette, TrendingUp, Leaf, Award, ArrowRight, Download, Share2 } from 'lucide-react';

export default function StyleDNAResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || {};

  // Generate Style DNA based on answers
  const generateStyleDNA = () => {
    if (!answers) {
      return {
        code: 'MODERN_MINIMALIST',
        primary: 'Modern Minimalist',
        secondary: 'Casual Chic',
        description: 'You appreciate clean lines, timeless pieces, and versatile wardrobes.',
        colorPalette: ['#000000', '#FFFFFF', '#808080', '#C0C0C0'],
        vibes: ['minimalist', 'casual', 'modern'],
        score: 85
      };
    }

    // Map answers to style DNA
    const colorMap = {
      monochrome: 'Minimalist',
      earth_tones: 'Natural',
      vibrant: 'Bold',
      pastels: 'Soft'
    };

    const styleMap = {
      minimalist: 'Modern Minimalist',
      boho: 'Boho Chic',
      streetwear: 'Urban Street',
      ethnic: 'Ethnic Fusion'
    };

    const primary = styleMap[answers.style_vibe] || 'Modern Minimalist';
    const colorStyle = colorMap[answers.color_palette] || 'Modern';
    const code = `${colorStyle.toUpperCase()}_${primary.replace(' ', '_').toUpperCase()}`;

    return {
      code,
      primary,
      secondary: colorStyle + ' Style',
      description: getStyleDescription(primary),
      colorPalette: getColorPalette(answers.color_palette),
      vibes: [answers.style_vibe, answers.color_palette, 'versatile'],
      score: 92,
      sustainability: getSustainabilityScore(answers.sustainability),
      budget: answers.budget_range,
      occasions: answers.occasion_frequency || []
    };
  };

  const getStyleDescription = (style) => {
    const descriptions = {
      'Modern Minimalist': 'You appreciate clean lines, timeless pieces, and a capsule wardrobe. Quality over quantity is your mantra.',
      'Boho Chic': 'Free-spirited and eclectic, you love flowing fabrics, earthy tones, and unique vintage finds.',
      'Urban Street': 'Bold, trendy, and unapologetic. You mix high-fashion with streetwear effortlessly.',
      'Ethnic Fusion': 'You celebrate cultural heritage with modern twists, blending traditional and contemporary beautifully.'
    };
    return descriptions[style] || descriptions['Modern Minimalist'];
  };

  const getColorPalette = (palette) => {
    const palettes = {
      monochrome: ['#000000', '#FFFFFF', '#808080', '#C0C0C0'],
      earth_tones: ['#8B4513', '#D2691E', '#F5DEB3', '#DEB887'],
      vibrant: ['#FF6B35', '#004E89', '#F7FFF7', '#1A659E'],
      pastels: ['#FFB6C1', '#E6E6FA', '#F0E68C', '#B0E0E6']
    };
    return palettes[palette] || palettes.monochrome;
  };

  const getSustainabilityScore = (level) => {
    const scores = {
      very_high: 95,
      high: 80,
      moderate: 60,
      low: 30
    };
    return scores[level] || 60;
  };

  const styleDNA = generateStyleDNA();

  const recommendedCategories = [
    { name: 'Men', image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=300&h=200&fit=crop', count: 1250 },
    { name: 'Women', image: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=300&h=200&fit=crop', count: 2100 },
    { name: 'Ethnic', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&h=200&fit=crop', count: 780 },
    { name: 'Streetwear', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=300&h=200&fit=crop', count: 420 }
  ];

  const styleInsights = [
    {
      icon: Palette,
      title: 'Your Color Signature',
      description: 'Sophisticated neutrals with occasional bold accents',
      colors: styleDNA.colorPalette
    },
    {
      icon: TrendingUp,
      title: 'Style Match',
      description: `${styleDNA.score}% match with ${styleDNA.primary}`,
      metric: `${styleDNA.score}%`
    },
    {
      icon: Leaf,
      title: 'Sustainability Priority',
      description: 'Your eco-conscious fashion score',
      metric: `${styleDNA.sustainability}/100`
    },
    {
      icon: Award,
      title: 'Fashion Personality',
      description: styleDNA.description,
      badge: styleDNA.code
    }
  ];

  const handleStartShopping = () => {
    // Save style DNA to localStorage
    localStorage.setItem('userStyleDNA', JSON.stringify(styleDNA));
    navigate('/lifestyle/fashion');
  };

  const handleDownload = () => {
    // Download style DNA as image (future implementation)
    alert('Download feature coming soon!');
  };

  const handleShare = () => {
    // Share style DNA (future implementation)
    if (navigator.share) {
      navigator.share({
        title: 'My ReZ Style DNA',
        text: `I'm a ${styleDNA.primary}! Discover your style DNA on ReZ Lifestyle.`,
        url: window.location.href
      });
    } else {
      alert('Share feature coming soon!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Your Style DNA is Ready!</span>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4">
            You're a<br />
            <span className="text-yellow-300">{styleDNA.primary}</span>
          </h1>

          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-6">
            {styleDNA.description}
          </p>

          {/* DNA Code Badge */}
          <div className="inline-block bg-white text-purple-900 rounded-full px-6 py-3 font-mono font-bold text-lg">
            DNA: {styleDNA.code}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl transition-all"
            >
              <Download className="w-5 h-5" />
              Download
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl transition-all"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Style Insights Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Style Insights</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {styleInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{insight.description}</p>

                    {insight.colors && (
                      <div className="flex gap-2">
                        {insight.colors.map((color, idx) => (
                          <div
                            key={idx}
                            className="w-10 h-10 rounded-lg border-2 border-gray-200 shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    )}

                    {insight.metric && (
                      <div className="inline-block bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {insight.metric}
                      </div>
                    )}

                    {insight.badge && (
                      <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-mono">
                        {insight.badge}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recommended Categories */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Curated For You</h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {recommendedCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => navigate(`/fashion/category/${category.name.toLowerCase()}`)}
              className="group relative rounded-2xl overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="aspect-[3/2] relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{category.name}</h3>
                  <p className="text-purple-200 text-sm">{category.count} items</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Build Your Perfect Wardrobe?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            We've curated a personalized shopping experience just for you. Discover fashion that matches your Style DNA.
          </p>

          <button
            onClick={handleStartShopping}
            className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2 hover:scale-105"
          >
            <ShoppingBag className="w-5 h-5" />
            Start Shopping Your Style
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="mt-6 text-sm text-purple-200">
            <p>✨ Get 20% extra cashback on your first purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
