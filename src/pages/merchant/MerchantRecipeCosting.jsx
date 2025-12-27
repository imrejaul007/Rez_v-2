import { useState } from 'react';
import { ChefHat, Plus, Edit, Trash2, DollarSign, Package, TrendingUp, AlertCircle, Calculator, BookOpen, Search, Filter, Download, Eye, Copy } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantRecipeCosting() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Mock recipe data with detailed costing
  const [recipes, setRecipes] = useState([
    {
      id: 'recipe-001',
      name: 'Margherita Pizza',
      category: 'pizza',
      servings: 1,
      preparationTime: 12, // minutes
      ingredients: [
        { name: 'Pizza Dough', quantity: 250, unit: 'g', costPerUnit: 0.20, totalCost: 50 },
        { name: 'Tomato Sauce', quantity: 80, unit: 'ml', costPerUnit: 0.15, totalCost: 12 },
        { name: 'Mozzarella Cheese', quantity: 100, unit: 'g', costPerUnit: 0.60, totalCost: 60 },
        { name: 'Fresh Basil', quantity: 5, unit: 'g', costPerUnit: 2.00, totalCost: 10 },
        { name: 'Olive Oil', quantity: 10, unit: 'ml', costPerUnit: 0.80, totalCost: 8 }
      ],
      totalIngredientCost: 140,
      laborCost: 30, // per dish
      overheadCost: 20, // electricity, gas, etc.
      packagingCost: 15,
      totalCost: 205,
      sellingPrice: 299,
      profitMargin: 94,
      profitPercentage: 31.4,
      foodCostPercentage: 46.8
    },
    {
      id: 'recipe-002',
      name: 'Butter Chicken',
      category: 'main_course',
      servings: 1,
      preparationTime: 25,
      ingredients: [
        { name: 'Chicken Breast', quantity: 200, unit: 'g', costPerUnit: 0.35, totalCost: 70 },
        { name: 'Tomato Puree', quantity: 100, unit: 'ml', costPerUnit: 0.10, totalCost: 10 },
        { name: 'Cream', quantity: 50, unit: 'ml', costPerUnit: 0.40, totalCost: 20 },
        { name: 'Butter', quantity: 30, unit: 'g', costPerUnit: 0.80, totalCost: 24 },
        { name: 'Spices Mix', quantity: 20, unit: 'g', costPerUnit: 1.50, totalCost: 30 },
        { name: 'Onion', quantity: 50, unit: 'g', costPerUnit: 0.20, totalCost: 10 },
        { name: 'Ginger-Garlic Paste', quantity: 15, unit: 'g', costPerUnit: 0.50, totalCost: 7.5 }
      ],
      totalIngredientCost: 171.5,
      laborCost: 50,
      overheadCost: 25,
      packagingCost: 20,
      totalCost: 266.5,
      sellingPrice: 399,
      profitMargin: 132.5,
      profitPercentage: 33.2,
      foodCostPercentage: 43.0
    },
    {
      id: 'recipe-003',
      name: 'Paneer Tikka',
      category: 'appetizer',
      servings: 1,
      preparationTime: 15,
      ingredients: [
        { name: 'Paneer', quantity: 150, unit: 'g', costPerUnit: 0.50, totalCost: 75 },
        { name: 'Yogurt', quantity: 50, unit: 'ml', costPerUnit: 0.20, totalCost: 10 },
        { name: 'Bell Peppers', quantity: 50, unit: 'g', costPerUnit: 0.30, totalCost: 15 },
        { name: 'Spices Mix', quantity: 15, unit: 'g', costPerUnit: 1.50, totalCost: 22.5 },
        { name: 'Oil', quantity: 10, unit: 'ml', costPerUnit: 0.80, totalCost: 8 }
      ],
      totalIngredientCost: 130.5,
      laborCost: 25,
      overheadCost: 15,
      packagingCost: 10,
      totalCost: 180.5,
      sellingPrice: 249,
      profitMargin: 68.5,
      profitPercentage: 27.5,
      foodCostPercentage: 52.4
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Recipes', count: recipes.length },
    { id: 'appetizer', name: 'Appetizers', count: recipes.filter(r => r.category === 'appetizer').length },
    { id: 'main_course', name: 'Main Course', count: recipes.filter(r => r.category === 'main_course').length },
    { id: 'pizza', name: 'Pizza', count: recipes.filter(r => r.category === 'pizza').length },
    { id: 'dessert', name: 'Desserts', count: recipes.filter(r => r.category === 'dessert').length },
    { id: 'beverage', name: 'Beverages', count: recipes.filter(r => r.category === 'beverage').length }
  ];

  const filteredRecipes = recipes
    .filter(r => categoryFilter === 'all' || r.category === categoryFilter)
    .filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()));

  // Calculate portfolio metrics
  const portfolioMetrics = {
    totalRecipes: recipes.length,
    avgProfitMargin: (recipes.reduce((sum, r) => sum + r.profitPercentage, 0) / recipes.length).toFixed(1),
    avgFoodCost: (recipes.reduce((sum, r) => sum + r.foodCostPercentage, 0) / recipes.length).toFixed(1),
    highestProfit: Math.max(...recipes.map(r => r.profitPercentage)).toFixed(1),
    lowestProfit: Math.min(...recipes.map(r => r.profitPercentage)).toFixed(1)
  };

  const getProfitColor = (percentage) => {
    if (percentage >= 30) return 'text-green-600';
    if (percentage >= 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getFoodCostColor = (percentage) => {
    if (percentage <= 30) return 'text-green-600';
    if (percentage <= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Recipe Costing & Profitability</h1>
              <p className="text-gray-600">Track ingredient costs, calculate margins, and optimize menu pricing</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export Report
              </button>
              <button
                onClick={() => setShowAddRecipe(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Recipe
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Recipes</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{portfolioMetrics.totalRecipes}</p>
              </div>
              <ChefHat className="w-8 h-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Avg Profit Margin</p>
                <p className="text-2xl font-bold text-green-700 mt-1">{portfolioMetrics.avgProfitMargin}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Avg Food Cost %</p>
                <p className="text-2xl font-bold text-blue-700 mt-1">{portfolioMetrics.avgFoodCost}%</p>
              </div>
              <Package className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Highest Margin</p>
                <p className="text-2xl font-bold text-green-700 mt-1">{portfolioMetrics.highestProfit}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Lowest Margin</p>
                <p className="text-2xl font-bold text-red-700 mt-1">{portfolioMetrics.lowestProfit}%</p>
              </div>
              <AlertCircle className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  categoryFilter === cat.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedRecipe(recipe)}
            >
              {/* Recipe Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{recipe.name}</h3>
                    <p className="text-sm text-indigo-100 mt-1">
                      {recipe.category.replace('_', ' ').charAt(0).toUpperCase() + recipe.category.slice(1).replace('_', ' ')}
                    </p>
                  </div>
                  <ChefHat className="w-6 h-6" />
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Ingredient Cost</span>
                  <span className="font-semibold">₹{recipe.totalIngredientCost.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Labor + Overhead</span>
                  <span className="font-semibold">₹{(recipe.laborCost + recipe.overheadCost).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Packaging</span>
                  <span className="font-semibold">₹{recipe.packagingCost.toFixed(2)}</span>
                </div>

                <div className="border-t pt-3 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total Cost</span>
                  <span className="text-lg font-bold text-gray-900">₹{recipe.totalCost.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Selling Price</span>
                  <span className="text-lg font-bold text-indigo-600">₹{recipe.sellingPrice.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Profit</span>
                  <span className={`text-lg font-bold ${getProfitColor(recipe.profitPercentage)}`}>
                    ₹{recipe.profitMargin.toFixed(2)}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600">Profit Margin</p>
                    <p className={`text-lg font-bold ${getProfitColor(recipe.profitPercentage)}`}>
                      {recipe.profitPercentage.toFixed(1)}%
                    </p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600">Food Cost %</p>
                    <p className={`text-lg font-bold ${getFoodCostColor(recipe.foodCostPercentage)}`}>
                      {recipe.foodCostPercentage.toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-3">
                  <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6 my-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{selectedRecipe.name}</h3>
              <button
                onClick={() => setSelectedRecipe(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            <div className="space-y-6">
              {/* Recipe Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="font-semibold mt-1">
                    {selectedRecipe.category.replace('_', ' ').charAt(0).toUpperCase() + selectedRecipe.category.slice(1).replace('_', ' ')}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Servings</p>
                  <p className="font-semibold mt-1">{selectedRecipe.servings}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Prep Time</p>
                  <p className="font-semibold mt-1">{selectedRecipe.preparationTime} min</p>
                </div>
              </div>

              {/* Ingredients Table */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Ingredients Breakdown</h4>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ingredient</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Quantity</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Unit Cost</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total Cost</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedRecipe.ingredients.map((ingredient, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 text-sm text-gray-900">{ingredient.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-600 text-right">
                            {ingredient.quantity} {ingredient.unit}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600 text-right">
                            ₹{ingredient.costPerUnit.toFixed(2)}/{ingredient.unit}
                          </td>
                          <td className="px-4 py-3 text-sm font-semibold text-gray-900 text-right">
                            ₹{ingredient.totalCost.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cost Summary */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Cost Summary</h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Ingredient Cost</span>
                    <span className="font-semibold">₹{selectedRecipe.totalIngredientCost.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Labor Cost</span>
                    <span className="font-semibold">₹{selectedRecipe.laborCost.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Overhead Cost</span>
                    <span className="font-semibold">₹{selectedRecipe.overheadCost.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Packaging Cost</span>
                    <span className="font-semibold">₹{selectedRecipe.packagingCost.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">Total Cost</span>
                    <span className="text-lg font-bold text-gray-900">₹{selectedRecipe.totalCost.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">Selling Price</span>
                    <span className="text-lg font-bold text-indigo-600">₹{selectedRecipe.sellingPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">Profit per Dish</span>
                    <span className={`text-lg font-bold ${getProfitColor(selectedRecipe.profitPercentage)}`}>
                      ₹{selectedRecipe.profitMargin.toFixed(2)} ({selectedRecipe.profitPercentage.toFixed(1)}%)
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2">
                  <Edit className="w-5 h-5" />
                  Edit Recipe
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                  <Copy className="w-5 h-5" />
                  Duplicate
                </button>
                <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
