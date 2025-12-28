import { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Target, AlertCircle, CheckCircle, BarChart3, Activity, Zap, Eye, Users, ShoppingCart, Percent, ArrowUp, ArrowDown, Minus, Filter, RefreshCw } from 'lucide-react';

export default function MerchantPricingIntelligence() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Competitive pricing data
  const competitivePricing = [
    {
      id: 'prod-001',
      sku: 'TSHIRT-BLK-M-001',
      productName: 'Premium Cotton T-Shirt - Black M',
      yourPrice: 799,
      costPrice: 320,
      currentMargin: 59.9,
      competitors: [
        { name: 'Competitor A', price: 749, position: 'lower' },
        { name: 'Competitor B', price: 899, position: 'higher' },
        { name: 'Competitor C', price: 799, position: 'match' }
      ],
      marketAverage: 815,
      recommendedPrice: 779,
      priceElasticity: -1.8,
      demandImpact: '+12%',
      revenueImpact: '+₹8,940',
      status: 'overpriced',
      lastUpdated: '2025-12-28 10:30 AM'
    },
    {
      id: 'prod-002',
      sku: 'WALLET-LEA-BRN-002',
      productName: 'Leather Wallet - Brown',
      yourPrice: 1299,
      costPrice: 650,
      currentMargin: 50.0,
      competitors: [
        { name: 'Competitor A', price: 1349, position: 'higher' },
        { name: 'Competitor B', price: 1199, position: 'lower' },
        { name: 'Competitor C', price: 1299, position: 'match' }
      ],
      marketAverage: 1282,
      recommendedPrice: 1299,
      priceElasticity: -1.2,
      demandImpact: '0%',
      revenueImpact: '₹0',
      status: 'optimal',
      lastUpdated: '2025-12-28 11:15 AM'
    },
    {
      id: 'prod-003',
      sku: 'COFFEE-ORG-500-003',
      productName: 'Organic Coffee Beans 500g',
      yourPrice: 499,
      costPrice: 280,
      currentMargin: 43.9,
      competitors: [
        { name: 'Competitor A', price: 549, position: 'higher' },
        { name: 'Competitor B', price: 589, position: 'higher' },
        { name: 'Competitor C', price: 539, position: 'higher' }
      ],
      marketAverage: 559,
      recommendedPrice: 529,
      priceElasticity: -1.5,
      demandImpact: '-6%',
      revenueImpact: '+₹5,640',
      status: 'underpriced',
      lastUpdated: '2025-12-28 09:45 AM'
    }
  ];

  // Pricing strategies
  const pricingStrategies = [
    {
      id: 'competitive',
      name: 'Competitive Pricing',
      description: 'Match or slightly undercut competitors',
      products: 245,
      avgMargin: 38.5,
      revenue: 1456780,
      recommended: true
    },
    {
      id: 'premium',
      name: 'Premium Positioning',
      description: 'Price 10-15% above market average',
      products: 89,
      avgMargin: 52.3,
      revenue: 892340,
      recommended: false
    },
    {
      id: 'penetration',
      name: 'Market Penetration',
      description: 'Aggressive pricing to gain market share',
      products: 134,
      avgMargin: 28.7,
      revenue: 1234560,
      recommended: false
    },
    {
      id: 'dynamic',
      name: 'Dynamic Pricing',
      description: 'AI-powered real-time price adjustments',
      products: 178,
      avgMargin: 45.2,
      revenue: 1678900,
      recommended: true
    }
  ];

  // Price optimization opportunities
  const optimizationOpportunities = [
    {
      type: 'increase',
      count: 34,
      potentialRevenue: 125600,
      avgIncrease: 6.5,
      reason: 'Products priced below market average with high demand'
    },
    {
      type: 'decrease',
      count: 23,
      potentialRevenue: 89400,
      avgDecrease: 4.2,
      reason: 'Overpriced products with low conversion rates'
    },
    {
      type: 'bundle',
      count: 15,
      potentialRevenue: 67800,
      avgIncrease: 12.3,
      reason: 'Create bundles to increase cart value'
    },
    {
      type: 'dynamic',
      count: 45,
      potentialRevenue: 234500,
      avgIncrease: 8.7,
      reason: 'Enable time-based dynamic pricing'
    }
  ];

  // Performance metrics
  const performanceMetrics = [
    {
      label: 'Avg Margin',
      value: '42.3%',
      change: '+3.2%',
      trend: 'up',
      icon: Percent,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Price Competitiveness',
      value: '87/100',
      change: '+5',
      trend: 'up',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Revenue Opportunity',
      value: '₹5.17L',
      change: '+₹67K',
      trend: 'up',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Products Tracked',
      value: '512',
      change: '+23',
      trend: 'up',
      icon: Eye,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      optimal: { label: 'Optimal', className: 'bg-green-100 text-green-700', icon: CheckCircle },
      underpriced: { label: 'Underpriced', className: 'bg-yellow-100 text-yellow-700', icon: TrendingUp },
      overpriced: { label: 'Overpriced', className: 'bg-red-100 text-red-700', icon: TrendingDown },
      competitive: { label: 'Competitive', className: 'bg-blue-100 text-blue-700', icon: Target }
    };
    const config = statusConfig[status] || statusConfig.optimal;
    const Icon = config.icon;
    return (
      <span className={`px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1 ${config.className}`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </span>
    );
  };

  const getPricePositionIcon = (position) => {
    if (position === 'higher') return <ArrowUp className="w-4 h-4 text-red-600" />;
    if (position === 'lower') return <ArrowDown className="w-4 h-4 text-green-600" />;
    return <Minus className="w-4 h-4 text-gray-600" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Smart Pricing & Competition Analysis</h1>
              </div>
              <p className="text-blue-100">AI-powered competitive intelligence and dynamic pricing optimization</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                Refresh Prices
              </button>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Auto-Optimize
              </button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp className="w-4 h-4" />
                    {metric.change}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Optimization Opportunities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Optimization Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {optimizationOpportunities.map((opp, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${
                    opp.type === 'increase' ? 'bg-green-100' :
                    opp.type === 'decrease' ? 'bg-yellow-100' :
                    opp.type === 'bundle' ? 'bg-purple-100' : 'bg-blue-100'
                  }`}>
                    {opp.type === 'increase' && <TrendingUp className="w-5 h-5 text-green-600" />}
                    {opp.type === 'decrease' && <TrendingDown className="w-5 h-5 text-yellow-600" />}
                    {opp.type === 'bundle' && <ShoppingCart className="w-5 h-5 text-purple-600" />}
                    {opp.type === 'dynamic' && <Activity className="w-5 h-5 text-blue-600" />}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{opp.count} products</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{opp.reason}</p>
                <p className="text-lg font-bold text-green-600">+₹{(opp.potentialRevenue / 1000).toFixed(0)}K</p>
                <p className="text-xs text-gray-600">Potential revenue increase</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Strategies */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Strategies</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {pricingStrategies.map((strategy) => (
              <div key={strategy.id} className={`border-2 rounded-lg p-4 ${
                strategy.recommended ? 'border-blue-400 bg-blue-50' : 'border-gray-200'
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{strategy.name}</h4>
                  {strategy.recommended && (
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">{strategy.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Products:</span>
                    <span className="font-semibold text-gray-900">{strategy.products}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Avg Margin:</span>
                    <span className="font-semibold text-gray-900">{strategy.avgMargin}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-semibold text-gray-900">₹{(strategy.revenue / 1000).toFixed(0)}K</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Pricing Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Competitive Price Intelligence</h3>
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-gray-600" />
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option>All Products</option>
                  <option>Underpriced</option>
                  <option>Overpriced</option>
                  <option>Optimal</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {competitivePricing.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-gray-900">{product.productName}</h4>
                        {getStatusBadge(product.status)}
                      </div>
                      <p className="text-sm text-gray-600">SKU: {product.sku}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Your Price</p>
                      <p className="text-2xl font-bold text-gray-900">₹{product.yourPrice}</p>
                      <p className="text-sm text-gray-600">Margin: {product.currentMargin}%</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Market Average</p>
                      <p className="font-semibold text-gray-900">₹{product.marketAverage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Recommended</p>
                      <p className="font-semibold text-blue-600">₹{product.recommendedPrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Elasticity</p>
                      <p className="font-semibold text-gray-900">{product.priceElasticity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Demand Impact</p>
                      <p className={`font-semibold ${product.demandImpact.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {product.demandImpact}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Revenue Impact</p>
                      <p className="font-semibold text-green-600">{product.revenueImpact}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Competitor Prices:</p>
                    <div className="grid grid-cols-3 gap-3">
                      {product.competitors.map((comp, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">{comp.name}</span>
                            {getPricePositionIcon(comp.position)}
                          </div>
                          <p className="font-semibold text-gray-900">₹{comp.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                      Apply Recommended Price
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                      Custom Price
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                      View Analytics
                    </button>
                    <div className="flex-1" />
                    <span className="text-xs text-gray-600">Updated: {product.lastUpdated}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
