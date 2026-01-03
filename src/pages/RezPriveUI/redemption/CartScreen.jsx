/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Cart Screen
 * Shows items in cart with coin payment preview
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  variant?: string;
  coinReward: number;
}

const mockCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Artisan Leather Wallet',
    brand: 'Maison de Luxe',
    price: 4500,
    quantity: 1,
    variant: 'Brown',
    coinReward: 675,
  },
  {
    id: '2',
    name: 'Signature Silk Scarf',
    brand: 'Elegance Studio',
    price: 2800,
    quantity: 1,
    coinReward: 420,
  },
];

const userCoins = {
  rez: 850,
  prive: 1200,
  branded: 200,
  total: 2250,
};

export const CartScreen: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalReward = cartItems.reduce((sum, item) => sum + item.coinReward * item.quantity, 0);
  const maxCoinDiscount = Math.min(userCoins.total, subtotal * 0.5); // Max 50% coin payment
  const estimatedTotal = subtotal; // Before coin usage

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    navigate('/prive/Checkout', {
      items: cartItems,
      subtotal,
      totalReward,
    };
  };

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div onClick={() => navigate(-1)}>
          <span variant="body" gold>← Back</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Your Cart</span>
        <div style={{ width: 50 }} />
      </div>

      {cartItems.length === 0 ? (
        <div style={style={{...styles.emptyState}>
          <span style={style={{...styles.emptyIcon}>◇</span>
          <span variant="h3" color={colors.text.primary}>Your cart is empty</span>
          <span variant="body" color={colors.text.tertiary} center>
            Browse our curated collection and add items to your cart
          </span>
          <div
            style={style={{...styles.browseBtn}
            onClick={() => navigate('/prive/Explore')}
          >
            <span variant="body" gold>Browse Offers</span>
          </div>
        </div>
      ) : (
        <>
          <div
            style={style={{...styles.scrollView}
            
          >
            {/* Cart Items */}
            <div style={style={{...styles.itemsSection}>
              {cartItems.map((item) => (
                <div key={item.id} style={style={{...styles.cartItem}>
                  {/* Item Image Placeholder */}
                  <div style={style={{...styles.itemImage}>
                    <span style={style={{...styles.itemInitial}>{item.brand.charAt(0)}</span>
                  </div>

                  {/* Item Details */}
                  <div style={style={{...styles.itemDetails}>
                    <span variant="caption" color={colors.text.tertiary}>{item.brand}</span>
                    <span variant="body" color={colors.text.primary}>{item.name}</span>
                    {item.variant && (
                      <span variant="caption" color={colors.text.tertiary}>
                        {item.variant}
                      </span>
                    )}
                    <span variant="bodyLarge" gold style={style={{...styles.itemPrice}>
                      ₹{item.price.toLocaleString()}
                    </span>

                    {/* Coin Reward Preview */}
                    <div style={style={{...styles.itemReward}>
                      <span variant="caption" color="#4CAF50">
                        +{item.coinReward} coins on purchase
                      </span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div style={style={{...styles.itemActions}>
                    <div
                      style={style={{...styles.removeBtn}
                      onClick={() => removeItem(item.id)}
                    >
                      <span variant="caption" color={colors.text.tertiary}>Remove</span>
                    </div>

                    <div style={style={{...styles.quantityControls}>
                      <div
                        style={style={{...styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <span variant="body" color={colors.text.primary}>−</span>
                      </div>
                      <span variant="body" color={colors.text.primary}>
                        {item.quantity}
                      </span>
                      <div
                        style={style={{...styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <span variant="body" color={colors.text.primary}>+</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coin Balance Card */}
            <div style={style={{...styles.coinBalanceCard}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.coinBalanceLabel}>
                YOUR COIN BALANCE
              </span>
              <div style={style={{...styles.coinBalanceRow}>
                <div style={style={{...styles.coinBalanceItem}>
                  <div style={[style={{...styles.coinDot, { backgroundColor: colors.gold.primary }]} />
                  <span variant="body" color={colors.text.secondary}>{userCoins.rez} ReZ</span>
                </div>
                <div style={style={{...styles.coinBalanceItem}>
                  <div style={[style={{...styles.coinDot, { backgroundColor: '#B8860B' }]} />
                  <span variant="body" color={colors.text.secondary}>{userCoins.prive} Privé</span>
                </div>
                <div style={style={{...styles.coinBalanceItem}>
                  <div style={[style={{...styles.coinDot, { backgroundColor: '#64B5F6' }]} />
                  <span variant="body" color={colors.text.secondary}>{userCoins.branded} Brand</span>
                </div>
              </div>
              <div style={style={{...styles.coinUsageNote}>
                <span variant="caption" color={colors.text.tertiary}>
                  You can use up to <span variant="caption" gold>₹{maxCoinDiscount.toLocaleString()}</span> worth of coins at checkout
                </span>
              </div>
            </div>

            {/* Order Summary */}
            <div style={style={{...styles.summaryCard}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.summaryLabel}>
                ORDER SUMMARY
              </span>

              <div style={style={{...styles.summaryRow}>
                <span variant="body" color={colors.text.secondary}>Subtotal</span>
                <span variant="body" color={colors.text.primary}>₹{subtotal.toLocaleString()}</span>
              </div>

              <div style={style={{...styles.summaryRow}>
                <span variant="body" color={colors.text.secondary}>Shipping</span>
                <span variant="body" color="#4CAF50">FREE</span>
              </div>

              <div style={style={{...styles.summaryDivider} />

              <div style={style={{...styles.summaryRow}>
                <span variant="body" color={colors.text.secondary}>You'll Earn</span>
                <span variant="body" color="#4CAF50">+{totalReward} coins</span>
              </div>

              <div style={style={{...styles.summaryDivider} />

              <div style={style={{...styles.summaryRow}>
                <span variant="bodyLarge" color={colors.text.primary}>Total</span>
                <span variant="h3" gold>₹{estimatedTotal.toLocaleString()}</span>
              </div>

              <span variant="caption" color={colors.text.tertiary} style={style={{...styles.coinNote}>
                Apply coins at checkout to reduce this amount
              </span>
            </div>

            <div style={style={{...styles.bottomSpace} />
          </div>

          {/* Checkout Button */}
          <div style={style={{...styles.ctaContainer}>
            <div style={style={{...styles.checkoutBtn} onClick={handleCheckout}>
              <span variant="bodyLarge" color="#0A0A0A">
                Proceed to Checkout
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  scrollView: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing[8],
    gap: spacing[4],
  },
  emptyIcon: {
    fontSize: 64,
    color: colors.gold.primary,
    opacity: 0.5,
    marginBottom: spacing[4],
  },
  browseBtn: {
    marginTop: spacing[4],
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[3],
    borderWidth: 1,
    borderColor: colors.gold.primary,
    borderRadius: borderRadius.lg,
  },
  itemsSection: {
    padding: spacing[5],
    gap: spacing[4],
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.md,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemInitial: {
    fontSize: 28,
    color: colors.gold.primary,
    opacity: 0.5,
  },
  itemDetails: {
    flex: 1,
    gap: spacing[1],
  },
  itemPrice: {
    marginTop: spacing[2],
  },
  itemReward: {
    marginTop: spacing[1],
  },
  itemActions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  removeBtn: {
    padding: spacing[1],
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinBalanceCard: {
    marginHorizontal: spacing[5],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  coinBalanceLabel: {
    marginBottom: spacing[3],
    letterSpacing: 1,
  },
  coinBalanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  coinBalanceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  coinDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  coinUsageNote: {
    marginTop: spacing[3],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    alignItems: 'center',
  },
  summaryCard: {
    margin: spacing[5],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  summaryLabel: {
    marginBottom: spacing[4],
    letterSpacing: 1,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[2],
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#2A2A2A',
    marginVertical: spacing[3],
  },
  coinNote: {
    marginTop: spacing[3],
    textAlign: 'center',
    fontStyle: 'italic',
  },
  bottomSpace: {
    height: 100,
  },
  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing[5],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  checkoutBtn: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
};

export default CartScreen;
