import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const MallCart = () => {
  const navigate = useNavigate();

  // Mock cart items
  const cartItems = [];

  const subtotal = 0;
  const coinsToEarn = 0;

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Page Header */}
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Shopping Cart</h1>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">
          {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      {/* Empty State */}
      {cartItems.length === 0 && (
        <div className="px-4 py-12">
          <div className="p-8 rounded-2xl bg-white dark:bg-dark-800 text-center">
            <div className="w-20 h-20 rounded-full bg-rez-gray-100 dark:bg-dark-700 flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-10 h-10 text-rez-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-2">Your cart is empty</h3>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-4">
              Discover curated brands and start adding items to earn ReZ Coins
            </p>
            <button
              onClick={() => navigate('/mall')}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
            >
              Start Shopping
            </button>
          </div>
        </div>
      )}

      {/* Cart Items - Placeholder for future implementation */}
      {cartItems.length > 0 && (
        <>
          <div className="px-4 mb-6">
            <div className="space-y-3">
              {/* Cart items will be rendered here */}
            </div>
          </div>

          {/* Checkout Summary */}
          <div className="fixed bottom-20 left-0 right-0 px-4 pb-4 pt-2 bg-gradient-to-t from-rez-gray-50 dark:from-dark-900 via-rez-gray-50 dark:via-dark-900 z-40">
            <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-rez-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="font-bold text-rez-navy dark:text-white">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-600 dark:text-emerald-400">ReZ Coins to Earn</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">🪙 {coinsToEarn}</span>
              </div>
            </div>
            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2">
              Proceed to Checkout
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </>
      )}

      <BottomNavManager />
    </div>
  );
};

export default MallCart;
