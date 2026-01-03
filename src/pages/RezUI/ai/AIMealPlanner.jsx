import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Calendar, ChefHat, ShoppingCart, Sparkles, Clock,
  Users, Heart, Flame, Plus, Check, RefreshCw, Download, Share2,
  AlertCircle, TrendingUp, Apple, Utensils, Coffee
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AIMealPlanner = () => {
  const navigate = useNavigate();

  const [preferences, setPreferences] = useState({
    dietary: 'vegetarian',
    servings: 2,
    budget: 500,
    cuisine: 'indian'
  });

  const [weekPlan, setWeekPlan] = useState([
    {
      day: 'Monday',
      breakfast: { name: 'Oatmeal with Fruits', calories: 320, time: '15 min', image: '🥣' },
      lunch: { name: 'Paneer Tikka Bowl', calories: 450, time: '30 min', image: '🍲' },
      dinner: { name: 'Dal Tadka with Rice', calories: 380, time: '25 min', image: '🍛' }
    },
    {
      day: 'Tuesday',
      breakfast: { name: 'Poha with Peanuts', calories: 290, time: '20 min', image: '🍚' },
      lunch: { name: 'Chole Bhature', calories: 520, time: '40 min', image: '🫓' },
      dinner: { name: 'Veg Biryani', calories: 410, time: '35 min', image: '🍛' }
    },
    {
      day: 'Wednesday',
      breakfast: { name: 'Idli Sambhar', calories: 310, time: '25 min', image: '🥘' },
      lunch: { name: 'Palak Paneer', calories: 380, time: '30 min', image: '🥬' },
      dinner: { name: 'Roti with Sabzi', calories: 350, time: '30 min', image: '🫓' }
    }
  ]);

  const [groceryList, setGroceryList] = useState([
    { id: 1, name: 'Paneer', quantity: '500g', price: 120, checked: false, category: 'Dairy' },
    { id: 2, name: 'Rice', quantity: '1kg', price: 80, checked: false, category: 'Grains' },
    { id: 3, name: 'Dal (Mixed)', quantity: '500g', price: 150, checked: false, category: 'Pulses' },
    { id: 4, name: 'Vegetables', quantity: '2kg', price: 180, checked: false, category: 'Fresh' },
    { id: 5, name: 'Spices', quantity: 'Pack', price: 200, checked: false, category: 'Spices' },
    { id: 6, name: 'Oil', quantity: '1L', price: 180, checked: false, category: 'Cooking' }
  ]);

  const [nutritionGoals, setNutritionGoals] = useState({
    calories: { target: 2000, current: 1520, unit: 'kcal' },
    protein: { target: 60, current: 48, unit: 'g' },
    carbs: { target: 250, current: 195, unit: 'g' },
    fats: { target: 65, current: 42, unit: 'g' }
  });

  const [aiSuggestions, setAiSuggestions] = useState([
    {
      id: 1,
      type: 'health',
      title: 'Add More Protein',
      description: 'Your protein intake is below target. Try adding chickpeas or tofu to lunch.',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      id: 2,
      type: 'budget',
      title: 'Save ₹150 This Week',
      description: 'Switch to seasonal vegetables to reduce grocery costs by 30%.',
      icon: Sparkles,
      color: 'green'
    }
  ]);

  const [selectedDay, setSelectedDay] = useState(null);

  // API Comment: POST /api/ai/meal-plan/generate
  // Payload: { preferences: {}, nutritionGoals: {}, budget: number, duration: 7 }
  // ML Model: Recipe recommendation with nutritional optimization
  // Response: { weekPlan: [], groceryList: [], totalCost: number, nutrition: {} }
  const generateMealPlan = async () => {
    // Generate AI-powered meal plan
  };

  // API Comment: GET /api/ai/meal-plan/recipes/{mealId}
  // Response: { recipe: {}, ingredients: [], steps: [], nutrition: {} }
  const getRecipeDetails = (meal) => {
    // Get detailed recipe
  };

  // API Comment: POST /api/ai/meal-plan/substitute
  // Payload: { mealId: string, preferences: {}, avoid: [] }
  // ML Model: Ingredient/recipe substitution based on preferences
  const substituteMeal = (day, mealType) => {
    // Substitute with alternative meal
  };

  // API Comment: GET /api/ai/grocery/optimize
  // Payload: { items: [], location: {}, budget: number }
  // Response: { optimizedList: [], stores: [], savings: number }
  const optimizeGroceryList = () => {
    // Optimize grocery shopping
  };

  const toggleGroceryItem = (id) => {
    setGroceryList(groceryList.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const totalGroceryCost = groceryList.reduce((sum, item) => sum + item.price, 0);
  const checkedItems = groceryList.filter(item => item.checked).length;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">AI Meal Planner</h1>
            <p className="text-xs text-orange-100">Smart weekly meal planning</p>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-xs">This Week</span>
            </div>
            <p className="text-lg font-bold">{weekPlan.length} Days</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Flame className="w-4 h-4" />
              <span className="text-xs">Calories</span>
            </div>
            <p className="text-lg font-bold">{nutritionGoals.calories.current}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-xs">Budget</span>
            </div>
            <p className="text-lg font-bold">₹{preferences.budget}</p>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="p-4 bg-white border-b">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Meal Preferences</h2>
          <button className="text-sm text-orange-600 font-medium">Edit</button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <span className="px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-full whitespace-nowrap">
            🥗 {preferences.dietary}
          </span>
          <span className="px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-full whitespace-nowrap">
            👥 {preferences.servings} servings
          </span>
          <span className="px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-full whitespace-nowrap">
            💰 ₹{preferences.budget}/week
          </span>
          <span className="px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-full whitespace-nowrap">
            🍛 {preferences.cuisine}
          </span>
        </div>
      </div>

      {/* AI Suggestions */}
      {aiSuggestions.length > 0 && (
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <h2 className="font-semibold text-gray-900">AI Suggestions</h2>
          </div>
          <div className="space-y-2">
            {aiSuggestions.map((suggestion) => {
              const Icon = suggestion.icon;
              return (
                <div
                  key={suggestion.id}
                  className={`bg-gradient-to-r ${
                    suggestion.color === 'blue'
                      ? 'from-blue-50 to-cyan-50 border-blue-200'
                      : 'from-green-50 to-emerald-50 border-green-200'
                  } rounded-xl p-3 border`}
                >
                  <div className="flex gap-3">
                    <Icon className={`w-5 h-5 ${suggestion.color === 'blue' ? 'text-blue-600' : 'text-green-600'}`} />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{suggestion.title}</h3>
                      <p className="text-xs text-gray-600">{suggestion.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Nutrition Goals */}
      <div className="p-4">
        <h2 className="font-semibold text-gray-900 mb-3">Today's Nutrition</h2>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(nutritionGoals).map(([key, goal]) => {
            const percentage = (goal.current / goal.target) * 100;
            return (
              <div key={key} className="bg-white rounded-xl p-3 border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 capitalize">{key}</span>
                  <span className="text-xs text-gray-500">
                    {goal.current}/{goal.target} {goal.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      percentage >= 90 ? 'bg-green-500' : percentage >= 70 ? 'bg-yellow-500' : 'bg-orange-500'
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Meal Plan */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">This Week's Plan</h2>
          <button className="flex items-center gap-1 text-sm text-orange-600 font-medium">
            <RefreshCw className="w-4 h-4" />
            Regenerate
          </button>
        </div>

        <div className="space-y-3">
          {weekPlan.map((day, index) => (
            <div key={index} className="bg-white rounded-xl border overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 px-4 py-3 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{day.day}</h3>
                  <button
                    onClick={() => setSelectedDay(selectedDay === index ? null : index)}
                    className="text-sm text-orange-600 font-medium"
                  >
                    {selectedDay === index ? 'Hide' : 'View'}
                  </button>
                </div>
              </div>

              {selectedDay === index && (
                <div className="p-4 space-y-3">
                  {['breakfast', 'lunch', 'dinner'].map((mealType) => {
                    const meal = day[mealType];
                    return (
                      <div key={mealType} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <span className="text-3xl">{meal.image}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-orange-600 uppercase">{mealType}</span>
                            {mealType === 'breakfast' && <Coffee className="w-3 h-3 text-orange-600" />}
                            {mealType === 'lunch' && <Utensils className="w-3 h-3 text-orange-600" />}
                            {mealType === 'dinner' && <ChefHat className="w-3 h-3 text-orange-600" />}
                          </div>
                          <p className="font-medium text-gray-900 text-sm mb-1">{meal.name}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Flame className="w-3 h-3" />
                              {meal.calories} cal
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {meal.time}
                            </span>
                          </div>
                        </div>
                        <button className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-medium rounded-lg hover:border-orange-300">
                          Recipe
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Grocery List */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Grocery List</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{checkedItems}/{groceryList.length}</span>
            <button className="text-sm text-orange-600 font-medium">Optimize</button>
          </div>
        </div>

        <div className="bg-white rounded-xl border overflow-hidden mb-3">
          {groceryList.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 p-3 border-b last:border-b-0 ${
                item.checked ? 'bg-gray-50' : ''
              }`}
            >
              <button
                onClick={() => toggleGroceryItem(item.id)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  item.checked
                    ? 'bg-orange-600 border-orange-600'
                    : 'border-gray-300'
                }`}
              >
                {item.checked && <Check className="w-3 h-3 text-white" />}
              </button>
              <div className="flex-1">
                <p className={`text-sm font-medium ${item.checked ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                  {item.name}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{item.quantity}</span>
                  <span>•</span>
                  <span>{item.category}</span>
                </div>
              </div>
              <span className={`text-sm font-semibold ${item.checked ? 'text-gray-400' : 'text-gray-900'}`}>
                ₹{item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Grocery Cost</p>
            <p className="text-2xl font-bold text-gray-900">₹{totalGroceryCost}</p>
          </div>
          <button className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={generateMealPlan}
            className="flex items-center justify-center gap-2 p-4 bg-white border border-orange-200 rounded-xl hover:border-orange-400 transition-all"
          >
            <RefreshCw className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold text-gray-900">New Plan</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-4 bg-white border border-orange-200 rounded-xl hover:border-orange-400 transition-all">
            <Download className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold text-gray-900">Download</span>
          </button>
        </div>
      </div>

      <BottomNavManager currentPage="home" />
    </div>
  );
};

export default AIMealPlanner;
