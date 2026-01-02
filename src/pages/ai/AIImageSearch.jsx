import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Camera, Upload, Image as ImageIcon, Sparkles, Search,
  X, Star, ShoppingBag, TrendingUp, Loader2, Check, Filter,
  RefreshCw, Download, Share2, Zap, Eye, ScanLine
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AIImageSearch = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [detectedItems, setDetectedItems] = useState([]);

  const [searchHistory, setSearchHistory] = useState([
    { id: 1, image: '👕', query: 'Blue Denim Jacket', date: '2 hours ago', results: 23 },
    { id: 2, image: '👟', query: 'White Sneakers', date: '1 day ago', results: 45 },
    { id: 3, image: '👜', query: 'Leather Handbag', date: '2 days ago', results: 18 }
  ]);

  const [quickActions, setQuickActions] = useState([
    { id: 1, name: 'Take Photo', icon: Camera, action: 'camera' },
    { id: 2, name: 'Upload Image', icon: Upload, action: 'upload' },
    { id: 3, name: 'Scan Barcode', icon: ScanLine, action: 'barcode' },
    { id: 4, name: 'View Gallery', icon: ImageIcon, action: 'gallery' }
  ]);

  const [features, setFeatures] = useState([
    {
      id: 1,
      title: 'Visual Search',
      description: 'Find products by uploading images',
      icon: Eye,
      color: 'purple'
    },
    {
      id: 2,
      title: 'Smart Detection',
      description: 'AI identifies items in photos',
      icon: Sparkles,
      color: 'blue'
    },
    {
      id: 3,
      title: 'Similar Products',
      description: 'Discover alternatives instantly',
      icon: TrendingUp,
      color: 'green'
    }
  ]);

  // API Comment: POST /api/ai/image/analyze
  // Payload: { image: base64, detectObjects: true, findSimilar: true }
  // ML Model: Computer Vision (ResNet/EfficientNet) for object detection
  // Response: { detectedItems: [], colors: [], style: string, category: string }
  const analyzeImage = async (imageData) => {
    setIsAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      const mockResults = {
        category: 'Fashion',
        mainItem: 'Denim Jacket',
        colors: ['Blue', 'Navy', 'White'],
        style: 'Casual',
        confidence: 94,
        price_range: '₹1,500 - ₹3,500',
        detectedItems: [
          { name: 'Denim Jacket', confidence: 94, bbox: [100, 50, 300, 400] },
          { name: 'White T-Shirt', confidence: 87, bbox: [120, 250, 280, 450] }
        ]
      };

      const mockProducts = [
        {
          id: 1,
          name: 'Classic Denim Jacket',
          brand: 'Levi\'s',
          price: 2999,
          originalPrice: 4999,
          rating: 4.5,
          reviews: 1240,
          image: '🧥',
          similarity: 95,
          merchant: 'Myntra'
        },
        {
          id: 2,
          name: 'Vintage Denim Jacket',
          brand: 'H&M',
          price: 1799,
          originalPrice: 2999,
          rating: 4.2,
          reviews: 890,
          image: '🧥',
          similarity: 92,
          merchant: 'Ajio'
        },
        {
          id: 3,
          name: 'Oversized Denim',
          brand: 'Zara',
          price: 3499,
          originalPrice: 5999,
          rating: 4.6,
          reviews: 2100,
          image: '🧥',
          similarity: 88,
          merchant: 'Flipkart'
        },
        {
          id: 4,
          name: 'Slim Fit Denim',
          brand: 'Wrangler',
          price: 2199,
          originalPrice: 3499,
          rating: 4.3,
          reviews: 650,
          image: '🧥',
          similarity: 85,
          merchant: 'Amazon'
        }
      ];

      setAnalysisResults(mockResults);
      setSimilarProducts(mockProducts);
      setDetectedItems(mockResults.detectedItems);
      setIsAnalyzing(false);
    }, 2500);
  };

  // API Comment: POST /api/ai/image/visual-search
  // Payload: { image: base64, filters: {}, maxResults: 50 }
  // ML Model: Image embedding + similarity search (CLIP/ViT)
  // Response: { products: [], categories: [], suggestions: [] }
  const performVisualSearch = (imageData) => {
    analyzeImage(imageData);
  };

  // API Comment: POST /api/ai/image/reverse-search
  // Payload: { productImage: base64, findCheaper: true }
  // ML Model: Product matching across merchants
  const reverseProductSearch = (imageData) => {
    // Find same product at different merchants
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        analyzeImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        analyzeImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQuickAction = (action) => {
    switch (action) {
      case 'camera':
        cameraInputRef.current?.click();
        break;
      case 'upload':
        fileInputRef.current?.click();
        break;
      case 'barcode':
        navigate('/qr-scanner');
        break;
      case 'gallery':
        fileInputRef.current?.click();
        break;
    }
  };

  const resetSearch = () => {
    setUploadedImage(null);
    setAnalysisResults(null);
    setSimilarProducts([]);
    setDetectedItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hidden file inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCameraCapture}
        className="hidden"
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">AI Image Search</h1>
            <p className="text-xs text-cyan-100">Search products using photos</p>
          </div>
          {uploadedImage && (
            <button onClick={resetSearch} className="p-2 hover:bg-white/10 rounded-lg">
              <RefreshCw className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      {!uploadedImage ? (
        <div className="p-4">
          {/* Upload Section */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200 text-center mb-6">
            <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-10 h-10 text-cyan-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Visual Search</h2>
            <p className="text-gray-600 text-sm mb-6">
              Take a photo or upload an image to find similar products instantly
            </p>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
              {quickActions.slice(0, 2).map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.id}
                    onClick={() => handleQuickAction(action.action)}
                    className="flex flex-col items-center gap-2 p-6 bg-white border border-cyan-200 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all"
                  >
                    <Icon className="w-8 h-8 text-cyan-600" />
                    <span className="text-sm font-semibold text-gray-900">{action.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">How It Works</h3>
            <div className="space-y-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className={`bg-gradient-to-r ${
                      feature.color === 'purple'
                        ? 'from-purple-50 to-pink-50 border-purple-200'
                        : feature.color === 'blue'
                        ? 'from-blue-50 to-cyan-50 border-blue-200'
                        : 'from-green-50 to-emerald-50 border-green-200'
                    } rounded-xl p-4 border`}
                  >
                    <div className="flex gap-3">
                      <Icon
                        className={`w-5 h-5 ${
                          feature.color === 'purple'
                            ? 'text-purple-600'
                            : feature.color === 'blue'
                            ? 'text-blue-600'
                            : 'text-green-600'
                        }`}
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Search History */}
          {searchHistory.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Recent Searches</h3>
                <button className="text-sm text-cyan-600 font-medium">Clear All</button>
              </div>
              <div className="space-y-2">
                {searchHistory.map((search) => (
                  <div
                    key={search.id}
                    className="bg-white rounded-xl p-3 border hover:border-cyan-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{search.image}</div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{search.query}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <span>{search.date}</span>
                          <span>•</span>
                          <span>{search.results} results</span>
                        </div>
                      </div>
                      <Search className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* Uploaded Image Preview */}
          <div className="p-4">
            <div className="bg-white rounded-xl overflow-hidden border mb-4">
              <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
                {/* Placeholder for actual image */}
                <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                  <Camera className="w-20 h-20 text-cyan-600" />
                </div>
                <button
                  onClick={resetSearch}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Analysis Progress */}
            {isAnalyzing && (
              <div className="bg-white rounded-xl p-6 border text-center mb-4">
                <Loader2 className="w-8 h-8 text-cyan-600 animate-spin mx-auto mb-3" />
                <p className="font-semibold text-gray-900 mb-1">Analyzing Image...</p>
                <p className="text-sm text-gray-600">AI is identifying products and finding matches</p>
              </div>
            )}

            {/* Analysis Results */}
            {analysisResults && !isAnalyzing && (
              <div className="space-y-4">
                {/* Detection Summary */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-cyan-600" />
                    <h3 className="font-semibold text-gray-900">AI Detection Results</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Category</p>
                      <p className="font-semibold text-gray-900">{analysisResults.category}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Confidence</p>
                      <p className="font-semibold text-green-600">{analysisResults.confidence}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Style</p>
                      <p className="font-semibold text-gray-900">{analysisResults.style}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Price Range</p>
                      <p className="font-semibold text-gray-900">{analysisResults.price_range}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-600 mb-2">Detected Colors</p>
                    <div className="flex gap-2">
                      {analysisResults.colors.map((color, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detected Items */}
                {detectedItems.length > 0 && (
                  <div className="bg-white rounded-xl p-4 border">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Detected Items ({detectedItems.length})
                    </h3>
                    <div className="space-y-2">
                      {detectedItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-900">{item.name}</span>
                          <span className="text-xs text-green-600 font-medium">{item.confidence}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Similar Products */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">
                      Similar Products ({similarProducts.length})
                    </h3>
                    <button className="flex items-center gap-1 text-sm text-cyan-600 font-medium">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                  </div>

                  <div className="space-y-3">
                    {similarProducts.map((product) => (
                      <div key={product.id} className="bg-white rounded-xl p-4 border hover:border-cyan-300 transition-all">
                        <div className="flex gap-3">
                          <div className="text-5xl">{product.image}</div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-semibold text-gray-900">{product.name}</h4>
                                <p className="text-xs text-gray-500">{product.brand}</p>
                              </div>
                              <div className="flex items-center gap-1 px-2 py-1 bg-cyan-50 rounded-lg">
                                <Zap className="w-3 h-3 text-cyan-600" />
                                <span className="text-xs font-medium text-cyan-600">
                                  {product.similarity}% match
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 mb-2">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{product.rating}</span>
                                <span className="text-xs text-gray-500">({product.reviews.toLocaleString()})</span>
                              </div>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-600">{product.merchant}</span>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-900">
                                  ₹{product.price.toLocaleString()}
                                </span>
                                <span className="text-sm text-gray-400 line-through">
                                  ₹{product.originalPrice.toLocaleString()}
                                </span>
                                <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded">
                                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                </span>
                              </div>
                              <button className="px-4 py-2 bg-cyan-600 text-white text-sm font-medium rounded-lg hover:bg-cyan-700">
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 p-3 bg-white border border-cyan-200 rounded-lg hover:border-cyan-400 transition-all">
                    <Share2 className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm font-semibold text-gray-900">Share</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 p-3 bg-white border border-cyan-200 rounded-lg hover:border-cyan-400 transition-all">
                    <Download className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm font-semibold text-gray-900">Save</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <BottomNavManager currentPage="explore" />
    </div>
  );
};

export default AIImageSearch;
