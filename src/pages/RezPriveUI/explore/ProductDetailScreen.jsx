/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Product Detail Screen
 * Comprehensive product page with seller details, specifications,
 * reviews, delivery info, and coin rewards
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface SellerData {
  id: string;
  name: string;
  logo?: string;
  rating: number;
  totalReviews: number;
  responseTime: string;
  isVerified: boolean;
  isPrivePartner: boolean;
  followers: number;
  totalProducts: number;
  joinedDate: string;
  location: string;
}

interface ProductReview {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  comment: string;
  images?: string[];
  helpful: number;
  isVerifiedPurchase: boolean;
}

interface ProductSpecification {
  label: string;
  value: string;
}

interface ProductData {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  stockCount?: number;
  coinReward: {
    rez: number;
    prive: number;
    branded: number;
  };
  variants?: {
    type: string;
    options: string[];
  }[];
  specifications: ProductSpecification[];
  highlights: string[];
  deliveryInfo: {
    estimatedDays: string;
    freeDelivery: boolean;
    freeDeliveryThreshold?: number;
    expressAvailable: boolean;
    expressDays: string;
    expressCharge: number;
  };
  returnPolicy: {
    returnable: boolean;
    returnDays: number;
    exchangeDays: number;
    conditions: string;
  };
  warranty?: {
    available: boolean;
    duration: string;
    type: string;
  };
  seller: SellerData;
  reviewsList: ProductReview[];
}

const defaultProduct: ProductData = {
  id: '1',
  name: 'Artisan Leather Wallet',
  brand: 'Maison de Luxe',
  description: 'Handcrafted Italian leather wallet with premium stitching. Features 8 card slots, 2 bill compartments, and a coin pocket. Each piece is unique with natural leather variations that develop a beautiful patina over time.',
  price: 4500,
  originalPrice: 6000,
  images: [
    'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800',
    'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=800',
    'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800',
    'https://images.unsplash.com/photo-1606517706323-01cf66552ae4?w=800',
  ],
  category: 'Fashion',
  rating: 4.8,
  reviews: 124,
  inStock: true,
  stockCount: 12,
  coinReward: {
    rez: 450,
    prive: 225,
    branded: 100,
  },
  variants: [
    { type: 'Color', options: ['Black', 'Brown', 'Tan'] },
    { type: 'Size', options: ['Standard', 'Compact'] },
  ],
  specifications: [
    { label: 'Material', value: 'Italian Full-Grain Leather' },
    { label: 'Dimensions', value: '11.5 x 9.5 x 2 cm' },
    { label: 'Weight', value: '85 grams' },
    { label: 'Card Slots', value: '8' },
    { label: 'Bill Compartments', value: '2' },
    { label: 'Coin Pocket', value: 'Yes (Zipper)' },
    { label: 'Country of Origin', value: 'Italy' },
    { label: 'Care', value: 'Wipe with dry cloth' },
  ],
  highlights: [
    '100% Genuine Italian Leather',
    'Handcrafted by skilled artisans',
    'RFID blocking technology',
    'Gift-ready premium packaging',
    'Develops unique patina over time',
  ],
  deliveryInfo: {
    estimatedDays: '3-5 business days',
    freeDelivery: true,
    freeDeliveryThreshold: 999,
    expressAvailable: true,
    expressDays: '1-2 business days',
    expressCharge: 149,
  },
  returnPolicy: {
    returnable: true,
    returnDays: 15,
    exchangeDays: 30,
    conditions: 'Return/exchange applicable only on unused items with original packaging',
  },
  warranty: {
    available: true,
    duration: '1 Year',
    type: 'Manufacturing Defects',
  },
  seller: {
    id: 's1',
    name: 'Maison de Luxe Official',
    rating: 4.9,
    totalReviews: 2847,
    responseTime: 'Within 2 hours',
    isVerified: true,
    isPrivePartner: true,
    followers: 15420,
    totalProducts: 156,
    joinedDate: 'Jan 2021',
    location: 'Mumbai, Maharashtra',
  },
  reviewsList: [
    {
      id: 'r1',
      userName: 'Arjun M.',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Absolutely stunning wallet! The leather quality is exceptional and the craftsmanship is visible in every stitch. Worth every rupee. The packaging was also premium - perfect for gifting.',
      helpful: 24,
      isVerifiedPurchase: true,
    },
    {
      id: 'r2',
      userName: 'Priya S.',
      rating: 5,
      date: '1 month ago',
      comment: 'Bought this for my husband\'s birthday. He loves it! The brown color is gorgeous and the leather smells amazing. Fast delivery too.',
      helpful: 18,
      isVerifiedPurchase: true,
    },
    {
      id: 'r3',
      userName: 'Rahul K.',
      rating: 4,
      date: '1 month ago',
      comment: 'Great wallet, feels very premium. Only giving 4 stars because the coin pocket zipper feels a bit stiff. Otherwise perfect.',
      helpful: 12,
      isVerifiedPurchase: true,
    },
  ],
};

export const ProductDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({};
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAllSpecs, setShowAllSpecs] = useState(false);

  const product = defaultProduct;
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const totalCoinReward = product.coinReward.rez + product.coinReward.prive + product.coinReward.branded;

  const handleAddToCart = () => {
    navigate('/prive/Cart');
  };

  const handleBuyNow = () => {
    navigate('/prive/Checkout', {
      items: [{ product, quantity, variants: selectedVariants }],
      total: product.price * quantity,
    };
  };

  const handleViewStore = () => {
    navigate('/prive/X4_StoreDetail', { storeId: product.seller.id };
  };

  const handleViewAllReviews = () => {
    // Navigate to reviews screen
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.headerBtn} onClick={() => navigate(-1)}>
          <span variant="bodyLarge" color={colors.text.primary}>←</span>
        </div>
        <div style={style={{...styles.headerActions}>
          <div
            style={style={{...styles.headerBtn}
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <span variant="bodyLarge" color={isWishlisted ? '#E53935' : colors.text.primary}>
              {isWishlisted ? '♥' : '♡'}
            </span>
          </div>
          <div style={style={{...styles.headerBtn}>
            <span variant="bodyLarge" color={colors.text.primary}>⬆</span>
          </div>
          <div style={style={{...styles.headerBtn} onClick={() => navigate('/prive/Cart')}>
            <span variant="body" gold>Cart</span>
          </div>
        </div>
      </div>

      <div style={style={{...styles.scrollView} >
        {/* Image Gallery */}
        <div style={style={{...styles.imageGallery}>
          <div style={style={{...styles.mainImageContainer}>
            <LinearGradient
              colors={['transparent', 'rgba(10,10,10,0.8)']}
              style={style={{...styles.imageGradient}
            />
            <div style={style={{...styles.imagePlaceholder}>
              <span style={style={{...styles.brandInitial}>{product.brand.charAt(0)}</span>
            </div>

            {discount > 0 && (
              <div style={style={{...styles.discountBadge}>
                <span variant="caption" color="#FFFFFF">{discount}% OFF</span>
              </div>
            )}

            {/* Privé Partner Badge */}
            {product.seller.isPrivePartner && (
              <div style={style={{...styles.priveBadge}>
                <span variant="caption" gold>Privé Partner</span>
              </div>
            )}

            {/* Image Indicators */}
            <div style={style={{...styles.imageIndicators}>
              {product.images.map((_, index) => (
                <div
                  key={index}
                  style={[
                    style={{...styles.indicator,
                    selectedImageIndex === index && style={{...styles.indicatorActive,
                  ]}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div
            horizontal
            
            style={style={{...styles.thumbnailStrip}
            contentContainerStyle={style={{...styles.thumbnailContent}
          >
            {product.images.map((_, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.thumbnail,
                  selectedImageIndex === index && style={{...styles.thumbnailActive,
                ]}
                onClick={() => setSelectedImageIndex(index)}
              >
                <div style={style={{...styles.thumbnailPlaceholder}>
                  <span variant="caption" color={colors.text.tertiary}>{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div style={style={{...styles.infoSection}>
          <span variant="caption" gold>{product.brand}</span>
          <span variant="h2" color={colors.text.primary} style={style={{...styles.productName}>
            {product.name}
          </span>

          {/* Rating & Stock */}
          <div style={style={{...styles.ratingRow}>
            <div style={style={{...styles.ratingBadge}>
              <span variant="body" color="#0A0A0A">★ {product.rating}</span>
            </div>
            <span variant="caption" color={colors.text.tertiary}>
              {product.reviews} ratings
            </span>
            <div style={style={{...styles.stockBadge}>
              <span variant="caption" color={product.inStock ? '#4CAF50' : '#F44336'}>
                {product.inStock ? `In Stock (${product.stockCount} left)` : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Price Section */}
          <div style={style={{...styles.priceSection}>
            <span style={style={{...styles.price}>₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span style={style={{...styles.originalPrice}>
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <div style={style={{...styles.savingsBadge}>
                  <span variant="caption" color="#4CAF50">
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Tax Info */}
          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.taxInfo}>
            Inclusive of all taxes
          </span>

          {/* Coin Rewards Card */}
          <div style={style={{...styles.coinRewardCard}>
            <div style={style={{...styles.coinRewardHeader}>
              <span variant="caption" color={colors.text.tertiary} style={style={{...styles.rewardLabel}>
                EARN ON THIS PURCHASE
              </span>
              <div style={style={{...styles.totalCoinBadge}>
                <span variant="body" gold>+{totalCoinReward} Coins</span>
              </div>
            </div>
            <div style={style={{...styles.coinRewardRow}>
              <div style={style={{...styles.coinRewardItem}>
                <div style={[style={{...styles.coinIcon, { backgroundColor: 'rgba(201, 169, 98, 0.2)' }]}>
                  <span variant="caption" gold>R</span>
                </div>
                <span variant="body" color={colors.text.primary}>+{product.coinReward.rez}</span>
                <span variant="caption" color={colors.text.tertiary}>ReZ Coins</span>
              </div>
              <div style={style={{...styles.coinRewardItem}>
                <div style={[style={{...styles.coinIcon, { backgroundColor: 'rgba(184, 134, 11, 0.2)' }]}>
                  <span variant="caption" color="#B8860B">P</span>
                </div>
                <span variant="body" color={colors.text.primary}>+{product.coinReward.prive}</span>
                <span variant="caption" color={colors.text.tertiary}>Privé Coins</span>
              </div>
              <div style={style={{...styles.coinRewardItem}>
                <div style={[style={{...styles.coinIcon, { backgroundColor: 'rgba(100, 181, 246, 0.2)' }]}>
                  <span variant="caption" color="#64B5F6">B</span>
                </div>
                <span variant="body" color={colors.text.primary}>+{product.coinReward.branded}</span>
                <span variant="caption" color={colors.text.tertiary}>Brand Coins</span>
              </div>
            </div>
            <span variant="caption" color={colors.gold.primary} style={style={{...styles.bonusCoinNote}>
              + Earn bonus coins when you share your experience
            </span>
          </div>

          {/* Variants */}
          {product.variants?.map((variant) => (
            <div key={variant.type} style={style={{...styles.variantSection}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.variantLabel}>
                {variant.type.toUpperCase()}
              </span>
              <div style={style={{...styles.variantOptions}>
                {variant.options.map((option) => (
                  <div
                    key={option}
                    style={[
                      style={{...styles.variantOption,
                      selectedVariants[variant.type] === option && style={{...styles.variantOptionSelected,
                    ]}
                    onClick={() => setSelectedVariants(prev => ({
                      ...prev,
                      [variant.type]: option,
                    }))}
                  >
                    <Text
                      variant="body"
                      color={selectedVariants[variant.type] === option
                        ? colors.gold.primary
                        : colors.text.secondary}
                    >
                      {option}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Quantity */}
          <div style={style={{...styles.quantitySection}>
            <span variant="label" color={colors.text.tertiary}>QUANTITY</span>
            <div style={style={{...styles.quantityControls}>
              <div
                style={style={{...styles.quantityBtn}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <span variant="bodyLarge" color={colors.text.primary}>−</span>
              </div>
              <span variant="bodyLarge" color={colors.text.primary} style={style={{...styles.quantityText}>
                {quantity}
              </span>
              <div
                style={style={{...styles.quantityBtn}
                onClick={() => setQuantity(quantity + 1)}
              >
                <span variant="bodyLarge" color={colors.text.primary}>+</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={style={{...styles.divider} />

          {/* Seller Card */}
          <div style={style={{...styles.sellerCard} onClick={handleViewStore}>
            <div style={style={{...styles.sellerHeader}>
              <div style={style={{...styles.sellerLogoContainer}>
                <span style={style={{...styles.sellerLogoText}>{product.seller.name.charAt(0)}</span>
                {product.seller.isVerified && (
                  <div style={style={{...styles.verifiedBadge}>
                    <span variant="caption" color="#FFFFFF">✓</span>
                  </div>
                )}
              </div>
              <div style={style={{...styles.sellerInfo}>
                <div style={style={{...styles.sellerNameRow}>
                  <span variant="body" color={colors.text.primary}>
                    {product.seller.name}
                  </span>
                  {product.seller.isPrivePartner && (
                    <div style={style={{...styles.privePartnerBadge}>
                      <span variant="caption" gold>Privé ✦</span>
                    </div>
                  )}
                </div>
                <div style={style={{...styles.sellerStats}>
                  <span variant="caption" color={colors.text.secondary}>
                    ★ {product.seller.rating} ({product.seller.totalReviews.toLocaleString()} reviews)
                  </span>
                </div>
              </div>
              <div style={style={{...styles.viewStoreBtn}>
                <span variant="caption" gold>View Store →</span>
              </div>
            </div>

            <div style={style={{...styles.sellerMetrics}>
              <div style={style={{...styles.sellerMetric}>
                <span variant="body" color={colors.text.primary}>
                  {product.seller.followers.toLocaleString()}
                </span>
                <span variant="caption" color={colors.text.tertiary}>Followers</span>
              </div>
              <div style={style={{...styles.metricDivider} />
              <div style={style={{...styles.sellerMetric}>
                <span variant="body" color={colors.text.primary}>
                  {product.seller.totalProducts}
                </span>
                <span variant="caption" color={colors.text.tertiary}>Products</span>
              </div>
              <div style={style={{...styles.metricDivider} />
              <div style={style={{...styles.sellerMetric}>
                <span variant="body" color={colors.text.primary}>
                  {product.seller.responseTime}
                </span>
                <span variant="caption" color={colors.text.tertiary}>Response</span>
              </div>
            </div>

            <div style={style={{...styles.sellerFooter}>
              <div style={style={{...styles.sellerLocation}>
                <span variant="caption" color={colors.text.tertiary}>
                  📍 {product.seller.location}
                </span>
              </div>
              <span variant="caption" color={colors.text.tertiary}>
                Member since {product.seller.joinedDate}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div style={style={{...styles.divider} />

          {/* Delivery Info */}
          <div style={style={{...styles.deliverySection}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              DELIVERY
            </span>

            <div style={style={{...styles.deliveryCard}>
              <div style={style={{...styles.deliveryRow}>
                <div style={style={{...styles.deliveryIcon}>
                  <span variant="body">🚚</span>
                </div>
                <div style={style={{...styles.deliveryContent}>
                  <span variant="body" color={colors.text.primary}>
                    Standard Delivery
                  </span>
                  <span variant="caption" color={colors.text.secondary}>
                    {product.deliveryInfo.estimatedDays}
                  </span>
                </div>
                <div style={style={{...styles.deliveryPrice}>
                  {product.deliveryInfo.freeDelivery ? (
                    <span variant="body" color="#4CAF50">FREE</span>
                  ) : (
                    <span variant="body" color={colors.text.primary}>₹49</span>
                  )}
                </div>
              </div>

              {product.deliveryInfo.expressAvailable && (
                <div style={style={{...styles.deliveryRow}>
                  <div style={style={{...styles.deliveryIcon}>
                    <span variant="body">⚡</span>
                  </div>
                  <div style={style={{...styles.deliveryContent}>
                    <span variant="body" color={colors.text.primary}>
                      Express Delivery
                    </span>
                    <span variant="caption" color={colors.text.secondary}>
                      {product.deliveryInfo.expressDays}
                    </span>
                  </div>
                  <div style={style={{...styles.deliveryPrice}>
                    <span variant="body" color={colors.text.primary}>
                      ₹{product.deliveryInfo.expressCharge}
                    </span>
                  </div>
                </div>
              )}

              <div style={style={{...styles.deliveryNote}>
                <span variant="caption" color={colors.text.tertiary}>
                  Enter pincode for exact delivery date
                </span>
              </div>
            </div>
          </div>

          {/* Return Policy */}
          <div style={style={{...styles.policySection}>
            {product.returnPolicy.returnable && (
              <div style={style={{...styles.policyItem}>
                <div style={style={{...styles.policyIcon}>
                  <span variant="body">↩️</span>
                </div>
                <div style={style={{...styles.policyContent}>
                  <span variant="body" color={colors.text.primary}>
                    {product.returnPolicy.returnDays} Days Return
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    Easy returns & refunds
                  </span>
                </div>
              </div>
            )}

            <div style={style={{...styles.policyItem}>
              <div style={style={{...styles.policyIcon}>
                <span variant="body">🔄</span>
              </div>
              <div style={style={{...styles.policyContent}>
                <span variant="body" color={colors.text.primary}>
                  {product.returnPolicy.exchangeDays} Days Exchange
                </span>
                <span variant="caption" color={colors.text.tertiary}>
                  Size/color exchange available
                </span>
              </div>
            </div>

            {product.warranty?.available && (
              <div style={style={{...styles.policyItem}>
                <div style={style={{...styles.policyIcon}>
                  <span variant="body">🛡️</span>
                </div>
                <div style={style={{...styles.policyContent}>
                  <span variant="body" color={colors.text.primary}>
                    {product.warranty.duration} Warranty
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {product.warranty.type}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div style={style={{...styles.divider} />

          {/* Highlights */}
          <div style={style={{...styles.highlightsSection}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              HIGHLIGHTS
            </span>
            {product.highlights.map((highlight, index) => (
              <div key={index} style={style={{...styles.highlightItem}>
                <span variant="body" gold style={style={{...styles.highlightBullet}>•</span>
                <span variant="body" color={colors.text.secondary}>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={style={{...styles.divider} />

          {/* Description */}
          <div style={style={{...styles.descriptionSection}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              DESCRIPTION
            </span>
            <span variant="body" color={colors.text.secondary} style={style={{...styles.description}>
              {product.description}
            </span>
          </div>

          {/* Divider */}
          <div style={style={{...styles.divider} />

          {/* Specifications */}
          <div style={style={{...styles.specificationsSection}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              SPECIFICATIONS
            </span>
            {product.specifications
              .slice(0, showAllSpecs ? product.specifications.length : 4)
              .map((spec, index) => (
                <div key={index} style={style={{...styles.specRow}>
                  <span variant="caption" color={colors.text.tertiary} style={style={{...styles.specLabel}>
                    {spec.label}
                  </span>
                  <span variant="body" color={colors.text.secondary} style={style={{...styles.specValue}>
                    {spec.value}
                  </span>
                </div>
              ))}
            {product.specifications.length > 4 && (
              <div
                style={style={{...styles.showMoreBtn}
                onClick={() => setShowAllSpecs(!showAllSpecs)}
              >
                <span variant="body" gold>
                  {showAllSpecs ? 'Show Less' : `Show All ${product.specifications.length} Specs`}
                </span>
              </div>
            )}
          </div>

          {/* Divider */}
          <div style={style={{...styles.divider} />

          {/* Reviews Section */}
          <div style={style={{...styles.reviewsSection}>
            <div style={style={{...styles.reviewsHeader}>
              <span variant="label" color={colors.text.tertiary}>
                CUSTOMER REVIEWS
              </span>
              <div onClick={handleViewAllReviews}>
                <span variant="body" gold>View All →</span>
              </div>
            </div>

            {/* Rating Summary */}
            <div style={style={{...styles.ratingSummary}>
              <div style={style={{...styles.ratingBig}>
                <span style={style={{...styles.ratingNumber}>{product.rating}</span>
                <span variant="caption" gold>{renderStars(product.rating)}</span>
                <span variant="caption" color={colors.text.tertiary}>
                  {product.reviews} reviews
                </span>
              </div>
              <div style={style={{...styles.ratingBars}>
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} style={style={{...styles.ratingBarRow}>
                    <span variant="caption" color={colors.text.tertiary}>{star}</span>
                    <div style={style={{...styles.ratingBarBg}>
                      <div
                        style={[
                          style={{...styles.ratingBarFill,
                          { width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : 3}%` },
                        ]}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Cards */}
            {product.reviewsList.slice(0, 3).map((review) => (
              <div key={review.id} style={style={{...styles.reviewCard}>
                <div style={style={{...styles.reviewHeader}>
                  <div style={style={{...styles.reviewerInfo}>
                    <div style={style={{...styles.reviewerAvatar}>
                      <span variant="caption" color={colors.text.secondary}>
                        {review.userName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <span variant="body" color={colors.text.primary}>{review.userName}</span>
                      {review.isVerifiedPurchase && (
                        <span variant="caption" color="#4CAF50">Verified Purchase</span>
                      )}
                    </div>
                  </div>
                  <span variant="caption" color={colors.text.tertiary}>{review.date}</span>
                </div>

                <div style={style={{...styles.reviewRating}>
                  <span variant="caption" gold>{renderStars(review.rating)}</span>
                </div>

                <span variant="body" color={colors.text.secondary} style={style={{...styles.reviewComment}>
                  {review.comment}
                </span>

                <div style={style={{...styles.reviewFooter}>
                  <div style={style={{...styles.helpfulBtn}>
                    <span variant="caption" color={colors.text.tertiary}>
                      👍 Helpful ({review.helpful})
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Write Review CTA */}
            <div style={style={{...styles.writeReviewBtn}>
              <span variant="body" gold>Write a Review & Earn Coins</span>
            </div>
          </div>

          {/* Pay with Coins Info */}
          <div style={style={{...styles.payWithCoinsCard}>
            <div style={style={{...styles.payWithCoinsIcon}>
              <span style={style={{...styles.payWithCoinsIconText}>◈</span>
            </div>
            <div style={style={{...styles.payWithCoinsContent}>
              <span variant="body" color={colors.text.primary}>Pay with your coins</span>
              <span variant="caption" color={colors.text.tertiary}>
                Use ReZ, Privé, or Brand coins at checkout for up to 50% off
              </span>
            </div>
          </div>

          <div style={style={{...styles.bottomSpace} />
        </div>
      </div>

      {/* CTA Buttons */}
      <div style={style={{...styles.ctaContainer}>
        <div style={style={{...styles.addToCartBtn} onClick={handleAddToCart}>
          <span variant="body" gold>Add to Cart</span>
        </div>
        <div style={style={{...styles.buyNowBtn} onClick={handleBuyNow}>
          <span variant="bodyLarge" color="#0A0A0A">Buy Now</span>
        </div>
      </div>
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
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
  },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    gap: spacing[2],
  },
  scrollView: {
    flex: 1,
  },
  imageGallery: {
    marginBottom: spacing[4],
  },
  mainImageContainer: {
    width: window.innerWidth,
    height: window.innerWidth * 0.9,
    backgroundColor: '#181818',
    position: 'relative',
  },
  imageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    zIndex: 1,
  },
  imagePlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandInitial: {
    fontSize: 80,
    color: colors.gold.primary,
    opacity: 0.3,
  },
  discountBadge: {
    position: 'absolute',
    top: spacing[4],
    right: spacing[4],
    backgroundColor: '#E53935',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  priveBadge: {
    position: 'absolute',
    top: spacing[4],
    left: spacing[4],
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  imageIndicators: {
    position: 'absolute',
    bottom: spacing[4],
    alignSelf: 'center',
    flexDirection: 'row',
    gap: spacing[2],
    zIndex: 2,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  indicatorActive: {
    backgroundColor: colors.gold.primary,
    width: 24,
  },
  thumbnailStrip: {
    marginTop: spacing[3],
    paddingHorizontal: spacing[4],
  },
  thumbnailContent: {
    gap: spacing[2],
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: borderRadius.md,
    backgroundColor: '#181818',
    borderWidth: 2,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  thumbnailActive: {
    borderColor: colors.gold.primary,
  },
  thumbnailPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoSection: {
    paddingHorizontal: spacing[5],
  },
  productName: {
    marginTop: spacing[2],
    marginBottom: spacing[3],
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  ratingBadge: {
    backgroundColor: colors.gold.primary,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  stockBadge: {
    marginLeft: 'auto',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: borderRadius.sm,
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing[3],
    marginBottom: spacing[1],
  },
  price: {
    fontSize: 32,
    fontWeight: '300',
    color: colors.gold.primary,
  },
  originalPrice: {
    fontSize: 18,
    color: colors.text.tertiary,
    textDecorationLine: 'line-through',
  },
  savingsBadge: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  taxInfo: {
    marginBottom: spacing[4],
  },
  coinRewardCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    marginBottom: spacing[5],
  },
  coinRewardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  rewardLabel: {
    letterSpacing: 1,
  },
  totalCoinBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
  coinRewardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  coinRewardItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  coinIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bonusCoinNote: {
    marginTop: spacing[3],
    textAlign: 'center',
  },
  variantSection: {
    marginBottom: spacing[4],
  },
  variantLabel: {
    marginBottom: spacing[2],
    letterSpacing: 1,
  },
  variantOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  variantOption: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    backgroundColor: '#181818',
  },
  variantOptionSelected: {
    borderColor: colors.gold.primary,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
  },
  quantitySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[5],
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  quantityBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    minWidth: 30,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#2A2A2A',
    marginVertical: spacing[5],
  },
  sellerCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  sellerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  sellerLogoContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
    position: 'relative',
  },
  sellerLogoText: {
    fontSize: 20,
    color: colors.gold.primary,
    fontWeight: '600',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#181818',
  },
  sellerInfo: {
    flex: 1,
  },
  sellerNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[1],
  },
  privePartnerBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  sellerStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  viewStoreBtn: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderWidth: 1,
    borderColor: colors.gold.primary,
    borderRadius: borderRadius.md,
  },
  sellerMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing[3],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  sellerMetric: {
    alignItems: 'center',
    gap: spacing[1],
  },
  metricDivider: {
    width: 1,
    backgroundColor: '#2A2A2A',
  },
  sellerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[3],
  },
  sellerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  deliverySection: {
    marginBottom: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[3],
    letterSpacing: 1,
  },
  deliveryCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  deliveryIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  deliveryContent: {
    flex: 1,
    gap: spacing[1],
  },
  deliveryPrice: {
    marginLeft: spacing[3],
  },
  deliveryNote: {
    paddingTop: spacing[3],
  },
  policySection: {
    gap: spacing[3],
  },
  policyItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  policyIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  policyContent: {
    flex: 1,
    gap: spacing[1],
  },
  highlightsSection: {
    marginBottom: spacing[2],
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  highlightBullet: {
    lineHeight: 22,
  },
  descriptionSection: {
    marginBottom: spacing[2],
  },
  description: {
    lineHeight: 24,
  },
  specificationsSection: {
    marginBottom: spacing[2],
  },
  specRow: {
    flexDirection: 'row',
    paddingVertical: spacing[2],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  specLabel: {
    flex: 1,
  },
  specValue: {
    flex: 1.5,
  },
  showMoreBtn: {
    paddingVertical: spacing[3],
    alignItems: 'center',
  },
  reviewsSection: {
    marginBottom: spacing[5],
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  ratingSummary: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[4],
    gap: spacing[5],
  },
  ratingBig: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[1],
  },
  ratingNumber: {
    fontSize: 48,
    fontWeight: '300',
    color: colors.text.primary,
  },
  ratingBars: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing[1],
  },
  ratingBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  ratingBarBg: {
    flex: 1,
    height: 6,
    backgroundColor: '#2A2A2A',
    borderRadius: 3,
    overflow: 'hidden',
  },
  ratingBarFill: {
    height: '100%',
    backgroundColor: colors.gold.primary,
    borderRadius: 3,
  },
  reviewCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[2],
  },
  reviewerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  reviewerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewRating: {
    marginBottom: spacing[2],
  },
  reviewComment: {
    lineHeight: 22,
  },
  reviewFooter: {
    marginTop: spacing[3],
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpfulBtn: {
    paddingVertical: spacing[1],
  },
  writeReviewBtn: {
    paddingVertical: spacing[4],
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  payWithCoinsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  payWithCoinsIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  payWithCoinsIconText: {
    fontSize: 20,
    color: colors.gold.primary,
  },
  payWithCoinsContent: {
    flex: 1,
    gap: spacing[1],
  },
  bottomSpace: {
    height: 120,
  },
  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: spacing[5],
    paddingBottom: spacing[6],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    gap: spacing[3],
  },
  addToCartBtn: {
    flex: 1,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.gold.primary,
    alignItems: 'center',
  },
  buyNowBtn: {
    flex: 2,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    backgroundColor: colors.gold.primary,
    alignItems: 'center',
  },
};

export default ProductDetailScreen;
