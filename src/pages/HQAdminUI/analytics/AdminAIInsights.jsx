import React, { useState } from 'react';
import { Brain, TrendingUp, AlertTriangle, Lightbulb, Zap, Target, Users, IndianRupee, BarChart3, Clock } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminAIInsights = () => {
  const [activeTab, setActiveTab] = useState('predictions');

  // AI-powered predictions
  const predictions = [
    {
      id: 'PRED-001',
      category: 'Revenue Forecast',
      prediction: 'Revenue will increase by 18% in next 30 days',
      confidence: 87,
      timeframe: 'Next 30 days',
      baselineValue: '₹45.2L',
      predictedValue: '₹53.3L',
      factors: [
        'Diwali festival season approaching',
        'New merchant onboarding spike (+23%)',
        'User engagement up 15% week-over-week',
        'Campaign performance trending positive'
      ],
      recommendation: 'Increase marketing budget by 12% to capitalize on growth momentum',
      impact: 'high',
      accuracy: 'Historical accuracy: 84% over last 6 months'
    },
    {
      id: 'PRED-002',
      category: 'Churn Risk',
      prediction: '342 users at high risk of churning this month',
      confidence: 91,
      timeframe: 'Next 7-14 days',
      baselineValue: '2.8% churn rate',
      predictedValue: '3.4% churn rate',
      factors: [
        'Decreased login frequency (45% drop)',
        'No transactions in 30+ days',
        'Failed to engage with last 3 campaigns',
        'Competitor offers detected in user behavior'
      ],
      recommendation: 'Launch win-back campaign with 25% bonus coins for next purchase',
      impact: 'high',
      accuracy: 'Historical accuracy: 89% over last 6 months'
    },
    {
      id: 'PRED-003',
      category: 'Merchant Growth',
      prediction: '78 merchants likely to upgrade to premium tier',
      confidence: 82,
      timeframe: 'Next 15 days',
      baselineValue: '234 premium merchants',
      predictedValue: '312 premium merchants',
      factors: [
        'Revenue threshold approaching (₹5L/month)',
        'Increased feature usage (+34%)',
        'Support tickets about premium features',
        'Competitive pricing research detected'
      ],
      recommendation: 'Proactive outreach with personalized upgrade offers',
      impact: 'medium',
      accuracy: 'Historical accuracy: 78% over last 6 months'
    },
    {
      id: 'PRED-004',
      category: 'Fraud Alert',
      prediction: 'Spike in fraudulent activity expected during festival sales',
      confidence: 94,
      timeframe: 'Next 7 days',
      baselineValue: '12 fraud attempts/day',
      predictedValue: '34 fraud attempts/day',
      factors: [
        'Historical pattern from previous festivals',
        'Increased new account creation velocity',
        'Spike in referral code usage',
        'Unusual geographic activity patterns'
      ],
      recommendation: 'Increase fraud detection sensitivity by 30% and add manual review queue',
      impact: 'critical',
      accuracy: 'Historical accuracy: 92% over last 12 months'
    }
  ];

  // Automated recommendations
  const recommendations = [
    {
      id: 'REC-001',
      title: 'Optimize Coin Redemption Rate',
      priority: 'high',
      category: 'User Engagement',
      insight: 'Only 23% of earned coins are being redeemed within 30 days',
      recommendation: 'Introduce expiring coin bonuses to encourage faster redemption',
      expectedImpact: '+15% redemption rate, +₹2.3L GMV',
      effort: 'Low - 2 days implementation',
      aiConfidence: 88,
      autoImplementable: false
    },
    {
      id: 'REC-002',
      title: 'Dynamic Cashback Optimization',
      priority: 'high',
      category: 'Revenue',
      insight: 'Current 5% flat cashback is overpaying by ₹89K/month on low-AOV transactions',
      recommendation: 'Implement tiered cashback: 3% for <₹500, 5% for ₹500-₹2000, 7% for >₹2000',
      expectedImpact: 'Save ₹89K/month, increase high-value transactions by 18%',
      effort: 'Medium - 5 days implementation',
      aiConfidence: 92,
      autoImplementable: true
    },
    {
      id: 'REC-003',
      title: 'Merchant Onboarding Automation',
      priority: 'medium',
      category: 'Operations',
      insight: 'Manual verification takes 3.2 days average, causing 34% drop-off',
      recommendation: 'Auto-approve merchants with valid GST + bank account, manual review only for flagged cases',
      expectedImpact: 'Reduce onboarding time to 8 hours, decrease drop-off to 12%',
      effort: 'High - 10 days implementation',
      aiConfidence: 85,
      autoImplementable: true
    },
    {
      id: 'REC-004',
      title: 'Peak Hour Pricing Strategy',
      priority: 'medium',
      category: 'Revenue',
      insight: 'Platform usage peaks 6-9 PM with 3x normal load, but pricing is static',
      recommendation: 'Introduce surge pricing for QR payments during peak hours (+2% merchant fee)',
      expectedImpact: '+₹1.2L/month revenue, better load distribution',
      effort: 'Medium - 6 days implementation',
      aiConfidence: 79,
      autoImplementable: false
    },
    {
      id: 'REC-005',
      title: 'Automated Campaign Optimization',
      priority: 'low',
      category: 'Marketing',
      insight: 'Email campaigns sent at 10 AM have 12% open rate vs 31% at 7 PM',
      recommendation: 'AI-powered send time optimization based on user behavior patterns',
      expectedImpact: '+19% open rate, +8% conversion rate',
      effort: 'Low - 3 days implementation',
      aiConfidence: 94,
      autoImplementable: true
    }
  ];

  // Anomaly detection
  const anomalies = [
    {
      id: 'ANOM-001',
      type: 'Revenue Spike',
      severity: 'info',
      timestamp: '2025-10-28 18:45:00',
      description: 'Revenue increased by 234% in last 2 hours',
      analysis: 'Likely caused by flash sale campaign launched at 5 PM',
      normalRange: '₹45K - ₹67K/hour',
      actualValue: '₹189K/hour',
      recommendation: 'Monitor server load and ensure payment gateway capacity',
      status: 'monitoring'
    },
    {
      id: 'ANOM-002',
      type: 'User Activity Drop',
      severity: 'warning',
      timestamp: '2025-10-28 14:23:00',
      description: 'Active users dropped by 45% suddenly',
      analysis: 'Payment gateway downtime detected for 23 minutes',
      normalRange: '12K - 15K active users',
      actualValue: '6.8K active users',
      recommendation: 'Investigate payment gateway integration and add redundancy',
      status: 'investigating'
    },
    {
      id: 'ANOM-003',
      type: 'Transaction Failure Rate',
      severity: 'critical',
      timestamp: '2025-10-28 11:15:00',
      description: 'Transaction failure rate increased from 2% to 18%',
      analysis: 'Bank API timeout issues detected with HDFC Bank integration',
      normalRange: '1.5% - 3% failure rate',
      actualValue: '18% failure rate',
      recommendation: 'Immediate: Switch to backup payment gateway for HDFC cards',
      status: 'action_required'
    }
  ];

  // AI model performance
  const modelMetrics = {
    churnPrediction: {
      accuracy: 89.4,
      precision: 87.2,
      recall: 91.3,
      f1Score: 89.2,
      lastTrained: '2025-10-20',
      dataPoints: 45678,
      status: 'healthy'
    },
    fraudDetection: {
      accuracy: 96.8,
      precision: 94.5,
      recall: 98.2,
      f1Score: 96.3,
      lastTrained: '2025-10-25',
      dataPoints: 23456,
      status: 'healthy'
    },
    recommendationEngine: {
      accuracy: 82.1,
      precision: 79.4,
      recall: 85.7,
      f1Score: 82.4,
      lastTrained: '2025-10-18',
      dataPoints: 67890,
      status: 'needs_retraining'
    },
    priceOptimization: {
      accuracy: 91.7,
      precision: 89.3,
      recall: 93.8,
      f1Score: 91.5,
      lastTrained: '2025-10-22',
      dataPoints: 34567,
      status: 'healthy'
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-green-400';
    if (confidence >= 80) return 'text-blue-400';
    if (confidence >= 70) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'info': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'text-green-400';
      case 'needs_retraining': return 'text-yellow-400';
      case 'degraded': return 'text-orange-400';
      case 'failed': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Brain className="w-10 h-10 text-purple-400" />
            AI Insights Dashboard
          </h1>
          <p className="text-gray-400">Predictive analytics & automated intelligence</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Lightbulb className="w-8 h-8 text-yellow-400" />
              <span className="text-xs text-gray-400">Active Predictions</span>
            </div>
            <div className="text-3xl font-bold text-white">{predictions.length}</div>
            <div className="text-sm text-yellow-400">Avg confidence: 88.5%</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-blue-400" />
              <span className="text-xs text-gray-400">Recommendations</span>
            </div>
            <div className="text-3xl font-bold text-white">{recommendations.length}</div>
            <div className="text-sm text-blue-400">{recommendations.filter(r => r.autoImplementable).length} auto-implementable</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <span className="text-xs text-gray-400">Anomalies</span>
            </div>
            <div className="text-3xl font-bold text-white">{anomalies.length}</div>
            <div className="text-sm text-red-400">1 critical, 1 warning</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-8 h-8 text-green-400" />
              <span className="text-xs text-gray-400">AI Models</span>
            </div>
            <div className="text-3xl font-bold text-white">4</div>
            <div className="text-sm text-green-400">All operational</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {[
            { id: 'predictions', label: 'Predictions', icon: TrendingUp },
            { id: 'recommendations', label: 'Recommendations', icon: Lightbulb },
            { id: 'anomalies', label: 'Anomalies', icon: AlertTriangle },
            { id: 'models', label: 'Model Performance', icon: Brain }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          {activeTab === 'predictions' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">AI-Powered Predictions</h2>

              {predictions.map((pred) => (
                <div key={pred.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{pred.category}</h3>
                      <p className="text-gray-400 text-sm mt-1">{pred.timeframe}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Confidence</div>
                      <div className={`text-3xl font-bold ${getConfidenceColor(pred.confidence)}`}>
                        {pred.confidence}%
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-400 font-semibold">AI Prediction</span>
                    </div>
                    <div className="text-white font-medium text-lg">{pred.prediction}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Current Baseline</div>
                      <div className="text-white font-bold text-xl">{pred.baselineValue}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Predicted Value</div>
                      <div className="text-green-400 font-bold text-xl">{pred.predictedValue}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-2">Contributing Factors:</div>
                    <div className="space-y-2">
                      {pred.factors.map((factor, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                          <span className="text-white">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">Recommended Action</span>
                    </div>
                    <div className="text-white">{pred.recommendation}</div>
                  </div>

                  <div className="text-xs text-gray-400">{pred.accuracy}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Automated Recommendations</h2>
                <div className="text-gray-400 text-sm">
                  {recommendations.filter(r => r.autoImplementable).length} can be auto-implemented
                </div>
              </div>

              {recommendations.map((rec) => (
                <div key={rec.id} className={`rounded-xl p-6 border ${getPriorityColor(rec.priority)}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{rec.title}</h3>
                        <p className="text-gray-400 text-sm">{rec.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {rec.autoImplementable && (
                        <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
                          Auto-implementable
                        </span>
                      )}
                      <span className={`text-xs px-3 py-1 rounded-full ${getPriorityColor(rec.priority)}`}>
                        {rec.priority.toUpperCase()} PRIORITY
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-gray-400 text-sm">Insight:</div>
                      <div className="text-white">{rec.insight}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Recommendation:</div>
                      <div className="text-white font-medium">{rec.recommendation}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Expected Impact</div>
                      <div className="text-green-400 font-bold">{rec.expectedImpact}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Implementation Effort</div>
                      <div className="text-white font-bold">{rec.effort}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">AI Confidence</div>
                      <div className={`font-bold ${getConfidenceColor(rec.aiConfidence)}`}>
                        {rec.aiConfidence}%
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {rec.autoImplementable && (
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all">
                        Auto-Implement
                      </button>
                    )}
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                      Review & Approve
                    </button>
                    <button className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-all">
                      Dismiss
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'anomalies' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Anomaly Detection</h2>

              {anomalies.map((anomaly) => (
                <div key={anomaly.id} className={`rounded-xl p-6 border ${getSeverityColor(anomaly.severity)}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{anomaly.type}</h3>
                        <p className="text-gray-400 text-sm">{anomaly.timestamp}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${getSeverityColor(anomaly.severity)}`}>
                      {anomaly.severity.toUpperCase()}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-white font-medium text-lg mb-2">{anomaly.description}</div>
                    <div className="text-gray-400">{anomaly.analysis}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Normal Range</div>
                      <div className="text-white font-bold">{anomaly.normalRange}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Actual Value</div>
                      <div className="text-red-400 font-bold">{anomaly.actualValue}</div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
                    <div className="text-gray-400 text-sm mb-1">Recommended Action:</div>
                    <div className="text-white font-medium">{anomaly.recommendation}</div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                      Investigate
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all">
                      Mark as Resolved
                    </button>
                    <button className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-all">
                      False Positive
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'models' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">AI Model Performance</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(modelMetrics).map(([key, model]) => (
                  <div key={key} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h3>
                      <span className={`text-sm font-semibold ${getStatusColor(model.status)}`}>
                        {model.status.replace(/_/g, ' ').toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-gray-400 text-sm">Accuracy</div>
                        <div className="text-green-400 font-bold text-xl">{model.accuracy}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-gray-400 text-sm">Precision</div>
                        <div className="text-blue-400 font-bold text-xl">{model.precision}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-gray-400 text-sm">Recall</div>
                        <div className="text-purple-400 font-bold text-xl">{model.recall}%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-gray-400 text-sm">F1 Score</div>
                        <div className="text-yellow-400 font-bold text-xl">{model.f1Score}%</div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Last Trained:</span>
                        <span className="text-white">{model.lastTrained}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Training Data Points:</span>
                        <span className="text-white">{model.dataPoints.toLocaleString()}</span>
                      </div>
                    </div>

                    {model.status === 'needs_retraining' && (
                      <button className="w-full mt-4 bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-all">
                        Retrain Model
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAIInsights;
