import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Trash2, Plus, Minus, ShoppingBag, Coins, Tag,
  TrendingUp, Sparkles, Gift, ChevronRight, AlertCircle, Check
} from 'lucide-react';
import BottomNavManager from '../components/layout/BottomNavManager';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Organic Honey - 500g',
      brand: 'Organic India',
      price: 499,
      originalPrice: 699,
      quantity: 2,
      image: '🍯',
      category: 'Grocery',
      inStock: true,
      cashback: 25,
      savings: 200
    },
    {
      id: 2,
      name: 'Wireless Earbuds Pro',
      brand: 'Boat',
      price: 2499,
      originalPrice: 3999,
      quantity: 1,
      image: '🎧',
      category: 'Electronics',
      inStock: true,
      cashback: 125,
      savings: 1500
    },
    {
      id: 3,
      name: 'Cotton T-Shirt',
      brand: 'H&M',
      price: 799,
      originalPrice: 1299,
      quantity: 1,
      image: '👕',
      category: 'Fashion',
      inStock: true,
      cashback: 40,
      savings: 500
    },
    {
      id: 4,
      name: 'Face Serum - Vitamin C',
      brand: 'Minimalist',
      price: 599,
      originalPrice: 799,
      quantity: 1,
      image: '💧',
      category: 'Beauty',
      inStock: false,
      cashback: 30,
      savings: 200
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode === 'SAVE10') {
      setAppliedCoupon({ code: 'SAVE10', discount: 200, type: 'flat' });
    } else if (couponCode === 'FIRST100') {
      setAppliedCoupon({ code: 'FIRST100', discount: 100, type: 'flat' });
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalSavings = cartItems.reduce((sum, item) => sum + (item.savings * item.quantity), 0);
  const totalCashback = cartItems.reduce((sum, item) => sum + (item.cashback * item.quantity), 0);
  const couponDiscount = appliedCoupon?.discount || 0;
  const deliveryFee = subtotal > 500 ? 0 : 40;
  const total = subtotal - couponDiscount + deliveryFee;

  const inStockItems = cartItems.filter(item => item.inStock);
  const outOfStockItems = cartItems.filter(item => !item.inStock);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-32">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Shopping Cart</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </p>
          </div>
          <ShoppingBag className="w-6 h-6 text-rez-gray-600 dark:text-gray-400" />
        </div>
      </div>

      {cartItems.length === 0 ? (
        /* Empty Cart */
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-2">Your cart is empty</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center">
            Start shopping and earn ReZ Coins on every purchase!
          </p>
          <button
            onClick={() => navigate('/explore')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Savings Banner */}
          <div className="px-4 pt-4">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    You're saving ₹{totalSavings}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Plus earn {totalCashback} ReZ Coins cashback
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-emerald-500" />
              </div>
            </div>
          </div>

          {/* In Stock Items */}
          {inStockItems.length > 0 && (
            <div className="px-4 pt-4">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-3">
                Available Items ({inStockItems.length})
              </h3>
              <div className="space-y-3">
                {inStockItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
                  >
                    {/* Item Header */}
                    <div className="flex gap-3 mb-3">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-4xl flex-shrink-0">
                        {item.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-rez-navy dark:text-white mb-1 truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{item.brand}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-rez-navy dark:text-white">
                            ₹{item.price}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            ₹{item.originalPrice}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            {Math.round((item.savings / item.originalPrice) * 100)}% OFF
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 h-fit hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>

                    {/* Cashback Badge */}
                    <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-amber-500/10">
                      <Coins className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                        Earn {item.cashback} ReZ Coins on this item
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Quantity</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                          className="p-2 rounded-lg bg-rez-gray-100 dark:bg-white/5 hover:bg-rez-gray-200 dark:hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <Minus className="w-4 h-4 text-rez-navy dark:text-white" />
                        </button>
                        <span className="text-sm font-bold text-rez-navy dark:text-white w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 rounded-lg bg-rez-gray-100 dark:bg-white/5 hover:bg-rez-gray-200 dark:hover:bg-white/10 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-rez-navy dark:text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Out of Stock Items */}
          {outOfStockItems.length > 0 && (
            <div className="px-4 pt-4">
              <h3 className="text-sm font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Out of Stock ({outOfStockItems.length})
              </h3>
              <div className="space-y-3">
                {outOfStockItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-red-200 dark:border-red-500/20 opacity-60"
                  >
                    <div className="flex gap-3">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-3xl">
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-rez-navy dark:text-white mb-1">{item.name}</h4>
                        <p className="text-xs text-red-600 dark:text-red-400 font-semibold">
                          Currently unavailable
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 h-fit hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Coupon Section */}
          <div className="px-4 pt-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-5 h-5 text-purple-500" />
                <h3 className="text-sm font-bold text-rez-navy dark:text-white">Apply Coupon</h3>
              </div>

              {appliedCoupon ? (
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        {appliedCoupon.code}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        You saved ₹{appliedCoupon.discount}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setAppliedCoupon(null)}
                    className="text-xs text-red-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="Enter coupon code"
                    className="flex-1 px-4 py-2 rounded-xl bg-rez-gray-100 dark:bg-white/5 text-rez-navy dark:text-white placeholder-gray-400 outline-none"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all"
                  >
                    Apply
                  </button>
                </div>
              )}

              {/* Available Coupons */}
              <div className="mt-3 pt-3 border-t border-rez-gray-200 dark:border-dark-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Available coupons:</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCouponCode('SAVE10')}
                    className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-xs font-semibold text-purple-600 dark:text-purple-400"
                  >
                    SAVE10
                  </button>
                  <button
                    onClick={() => setCouponCode('FIRST100')}
                    className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400"
                  >
                    FIRST100
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="px-4 pt-4 pb-6">
            <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-3">Price Details</h3>

              <div className="space-y-2 mb-3 pb-3 border-b border-rez-gray-200 dark:border-dark-700">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-semibold text-rez-navy dark:text-white">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Savings</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">-₹{totalSavings}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Coupon Discount</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">-₹{couponDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Delivery</span>
                  <span className={`font-semibold ${deliveryFee === 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rez-navy dark:text-white'}`}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3">
                <span className="text-base font-bold text-rez-navy dark:text-white">Total</span>
                <span className="text-xl font-bold text-rez-navy dark:text-white">₹{total}</span>
              </div>

              <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      You'll earn {totalCashback} ReZ Coins
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Worth ₹{totalCashback}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Bottom Checkout Bar */}
      {cartItems.length > 0 && inStockItems.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700 shadow-lg">
          <button
            onClick={() => navigate('/checkout')}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold hover:scale-[1.02] transition-all flex items-center justify-between px-6"
          >
            <div className="text-left">
              <p className="text-sm opacity-90">Total Amount</p>
              <p className="text-xl font-bold">₹{total}</p>
            </div>
            <div className="flex items-center gap-2">
              <span>Proceed to Checkout</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      )}

      <BottomNavManager />
    </div>
  );
};

export default Cart;
