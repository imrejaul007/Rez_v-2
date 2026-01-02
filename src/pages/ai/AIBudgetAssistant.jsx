import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Wallet, TrendingUp, TrendingDown, PieChart, Target,
  AlertCircle, CheckCircle, Sparkles, Calendar, DollarSign, ArrowUpRight,
  ArrowDownRight, Award, Lightbulb, ShoppingBag, Coffee, Zap
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AIBudgetAssistant = () => {
  const navigate = useNavigate();

  const [budgetData, setBudgetData] = useState({
    monthlyIncome: 50000,
    totalBudget: 45000,
    spent: 32450,
    remaining: 12550,
    savingsGoal: 10000,
    currentSavings: 5450
  });

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Groceries',
      icon: '🛒',
      budget: 12000,
      spent: 9850,
      trend: 'good',
      color: 'green'
    },
    {
      id: 2,
      name: 'Electronics',
      icon: '📱',
      budget: 8000,
      spent: 11200,
      trend: 'overspent',
      color: 'red'
    },
    {
      id: 3,
      name: 'Fashion',
      icon: '👕',
      budget: 6000,
      spent: 4800,
      trend: 'good',
      color: 'green'
    },
    {
      id: 4,
      name: 'Dining',
      icon: '🍽️',
      budget: 5000,
      spent: 5200,
      trend: 'warning',
      color: 'yellow'
    },
    {
      id: 5,
      name: 'Entertainment',
      icon: '🎬',
      budget: 4000,
      spent: 1400,
      trend: 'good',
      color: 'green'
    }
  ]);

  const [aiRecommendations, setAiRecommendations] = useState([
    {
      id: 1,
      type: 'warning',
      title: 'Electronics Budget Exceeded',
      description: 'You\'ve spent ₹3,200 more than planned. Consider postponing non-essential purchases.',
      action: 'View Details',
      icon: AlertCircle,
      color: 'red'
    },
    {
      id: 2,
      type: 'saving',
      title: 'Save ₹2,400 This Month',
      description: 'Based on your spending pattern, you can save more by switching to home-cooked meals.',
      action: 'See How',
      icon: Lightbulb,
      color: 'purple'
    },
    {
      id: 3,
      type: 'goal',
      title: 'On Track for Savings Goal',
      description: 'Great job! You\'re 54% towards your monthly savings goal of ₹10,000.',
      action: 'View Progress',
      icon: Target,
      color: 'green'
    }
  ]);

  const [upcomingBills, setUpcomingBills] = useState([
    { id: 1, name: 'Rent', amount: 15000, date: 'Jan 5', status: 'upcoming' },
    { id: 2, name: 'Internet', amount: 999, date: 'Jan 8', status: 'upcoming' },
    { id: 3, name: 'Credit Card', amount: 8500, date: 'Jan 15', status: 'upcoming' }
  ]);

  const [spendingInsights, setSpendingInsights] = useState([
    {
      id: 1,
      type: 'comparison',
      title: 'vs Last Month',
      value: '-12%',
      trend: 'down',
      isGood: true
    },
    {
      id: 2,
      type: 'average',
      title: 'Daily Average',
      value: '₹1,623',
      trend: 'neutral',
      isGood: true
    },
    {
      id: 3,
      type: 'prediction',
      title: 'Month-End Estimate',
      value: '₹38,200',
      trend: 'neutral',
      isGood: true
    }
  ]);

  // API Comment: GET /api/ai/budget-analysis
  // ML Model: Spending pattern analysis, anomaly detection
  // Response: { insights: [], recommendations: [], predictions: {} }
  const fetchBudgetAnalysis = async () => {
    // Fetch AI-powered budget analysis
  };

  // API Comment: POST /api/ai/budget-optimization
  // Payload: { spending: {}, goals: {}, preferences: {} }
  // ML Model: Optimization algorithm for budget allocation
  // Response: { optimizedBudget: {}, potentialSavings: number }
  const optimizeBudget = async () => {
    // Get AI budget optimization suggestions
  };

  // API Comment: GET /api/ai/spending-prediction
  // ML Model: Time-series forecasting for spending trends
  // Response: { monthEnd: number, categoryBreakdown: {}, confidence: number }
  const predictSpending = async () => {
    // Predict end-of-month spending
  };

  const percentageSpent = (budgetData.spent / budgetData.totalBudget) * 100;
  const savingsPercentage = (budgetData.currentSavings / budgetData.savingsGoal) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-6 sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">AI Budget Assistant</h1>
            <p className="text-xs text-blue-100">Smart financial insights & tracking</p>
          </div>
          <Sparkles className="w-6 h-6" />
        </div>

        {/* Budget Overview Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-blue-100 mb-1">Total Budget</p>
              <p className="text-2xl font-bold">₹{budgetData.totalBudget.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-blue-100 mb-1">Remaining</p>
              <p className="text-2xl font-bold text-green-300">₹{budgetData.remaining.toLocaleString()}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-2">
            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  percentageSpent > 90 ? 'bg-red-400' : percentageSpent > 75 ? 'bg-yellow-400' : 'bg-green-400'
                }`}
                style={{ width: `${Math.min(percentageSpent, 100)}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-blue-100">Spent: ₹{budgetData.spent.toLocaleString()}</span>
            <span className={percentageSpent > 90 ? 'text-red-300' : 'text-blue-100'}>
              {percentageSpent.toFixed(0)}%
            </span>
          </div>
        </div>
      </div>

      {/* Spending Insights */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3">
          {spendingInsights.map((insight) => (
            <div key={insight.id} className="bg-white rounded-xl p-3 border">
              <p className="text-xs text-gray-500 mb-1">{insight.title}</p>
              <div className="flex items-center gap-1">
                <p className="text-lg font-bold text-gray-900">{insight.value}</p>
                {insight.trend === 'down' && (
                  <ArrowDownRight className={`w-4 h-4 ${insight.isGood ? 'text-green-600' : 'text-red-600'}`} />
                )}
                {insight.trend === 'up' && (
                  <ArrowUpRight className={`w-4 h-4 ${insight.isGood ? 'text-green-600' : 'text-red-600'}`} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <h2 className="font-semibold text-gray-900">AI Recommendations</h2>
        </div>

        <div className="space-y-3">
          {aiRecommendations.map((rec) => {
            const Icon = rec.icon;
            return (
              <div
                key={rec.id}
                className={`bg-gradient-to-r ${
                  rec.color === 'red'
                    ? 'from-red-50 to-orange-50 border-red-200'
                    : rec.color === 'purple'
                    ? 'from-purple-50 to-blue-50 border-purple-200'
                    : 'from-green-50 to-emerald-50 border-green-200'
                } rounded-xl p-4 border`}
              >
                <div className="flex gap-3">
                  <div
                    className={`p-2 ${
                      rec.color === 'red'
                        ? 'bg-red-100'
                        : rec.color === 'purple'
                        ? 'bg-purple-100'
                        : 'bg-green-100'
                    } rounded-lg h-fit`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        rec.color === 'red'
                          ? 'text-red-600'
                          : rec.color === 'purple'
                          ? 'text-purple-600'
                          : 'text-green-600'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{rec.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                    <button
                      className={`px-4 py-2 ${
                        rec.color === 'red'
                          ? 'bg-red-600 hover:bg-red-700'
                          : rec.color === 'purple'
                          ? 'bg-purple-600 hover:bg-purple-700'
                          : 'bg-green-600 hover:bg-green-700'
                      } text-white text-sm font-medium rounded-lg`}
                    >
                      {rec.action}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Category Breakdown</h2>
          <button className="text-sm text-purple-600 font-medium">View All</button>
        </div>

        <div className="space-y-3">
          {categories.map((category) => {
            const percentage = (category.spent / category.budget) * 100;
            return (
              <div key={category.id} className="bg-white rounded-xl p-4 border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="font-medium text-gray-900">{category.name}</h3>
                      <p className="text-xs text-gray-500">
                        ₹{category.spent.toLocaleString()} of ₹{category.budget.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-sm font-semibold ${
                        category.trend === 'overspent'
                          ? 'text-red-600'
                          : category.trend === 'warning'
                          ? 'text-yellow-600'
                          : 'text-green-600'
                      }`}
                    >
                      {percentage.toFixed(0)}%
                    </span>
                  </div>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      category.trend === 'overspent'
                        ? 'bg-red-500'
                        : category.trend === 'warning'
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>

                {category.trend === 'overspent' && (
                  <p className="text-xs text-red-600 mt-2">
                    ₹{(category.spent - category.budget).toLocaleString()} over budget
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Savings Goal */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Savings Goal</h3>
          </div>

          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Monthly Target</span>
            <span className="text-lg font-bold text-gray-900">
              ₹{budgetData.savingsGoal.toLocaleString()}
            </span>
          </div>

          <div className="w-full bg-green-100 rounded-full h-3 overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
              style={{ width: `${savingsPercentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Saved: ₹{budgetData.currentSavings.toLocaleString()}</span>
            <span className="text-green-700 font-semibold">{savingsPercentage.toFixed(0)}%</span>
          </div>
        </div>
      </div>

      {/* Upcoming Bills */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Upcoming Bills</h2>
          <Calendar className="w-5 h-5 text-gray-400" />
        </div>

        <div className="space-y-2">
          {upcomingBills.map((bill) => (
            <div key={bill.id} className="bg-white rounded-xl p-3 border flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{bill.name}</p>
                <p className="text-xs text-gray-500">Due: {bill.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">₹{bill.amount.toLocaleString()}</p>
                <button className="text-xs text-purple-600 font-medium">Pay Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-white rounded-xl p-4 border border-purple-200 hover:border-purple-400 transition-all">
            <DollarSign className="w-6 h-6 text-purple-600 mb-2" />
            <p className="text-sm font-semibold text-gray-900">Set Budget</p>
            <p className="text-xs text-gray-500">Adjust monthly limits</p>
          </button>
          <button className="bg-white rounded-xl p-4 border border-purple-200 hover:border-purple-400 transition-all">
            <PieChart className="w-6 h-6 text-purple-600 mb-2" />
            <p className="text-sm font-semibold text-gray-900">View Reports</p>
            <p className="text-xs text-gray-500">Detailed analytics</p>
          </button>
        </div>
      </div>

      <BottomNavManager currentPage="profile" />
    </div>
  );
};

export default AIBudgetAssistant;
