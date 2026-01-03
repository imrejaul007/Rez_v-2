/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Service Detail Screen
 * Comprehensive service booking page with details, pricing,
 * availability, and coin rewards
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// SafeAreaView removed
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface ServiceData {
  id: string;
  name: string;
  storeName: string;
  storeRating: number;
  category: string;
  description: string;
  duration: string;
  price: number;
  originalPrice?: number;
  coinReward: {
    rez: number;
    prive: number;
    branded: number;
  };
  isPriveExclusive: boolean;
  rating: number;
  reviews: number;
  images: string[];
  inclusions: string[];
  terms: string[];
  cancellationPolicy: string;
  availableDates: string[];
  timeSlots: TimeSlot[];
  maxGuests: number;
  location: string;
}

const defaultService: ServiceData = {
  id: '1',
  name: 'Private Dining Experience',
  storeName: 'The Grand Café',
  storeRating: 4.8,
  category: 'Fine Dining',
  description: 'Indulge in an exclusive private dining experience curated by our award-winning executive chef. Enjoy a personalized 7-course tasting menu with wine pairings in our elegant private dining room overlooking the city skyline.',
  duration: '3 hours',
  price: 15000,
  originalPrice: 18000,
  coinReward: {
    rez: 1500,
    prive: 750,
    branded: 0,
  },
  isPriveExclusive: true,
  rating: 4.9,
  reviews: 89,
  images: ['interior', 'food', 'ambiance'],
  inclusions: [
    '7-course tasting menu',
    'Premium wine pairing (4 glasses)',
    'Private dining room for up to 8 guests',
    'Personalized menu consultation',
    'Complimentary welcome champagne',
    'Dedicated server throughout',
    'Chef\'s table interaction',
    'Premium gift box to take home',
  ],
  terms: [
    'Advance booking required (minimum 48 hours)',
    'Valid for up to 8 guests',
    'Dietary restrictions accommodated with prior notice',
    'Smart casual dress code',
    'Gratuity not included',
  ],
  cancellationPolicy: 'Free cancellation up to 24 hours before the booking. 50% charge for cancellations within 24 hours. No refund for no-shows.',
  availableDates: ['Today', 'Tomorrow', 'Sat, 21 Dec', 'Sun, 22 Dec', 'Mon, 23 Dec'],
  timeSlots: [
    { id: '1', time: '12:00 PM', available: true },
    { id: '2', time: '1:00 PM', available: false },
    { id: '3', time: '7:00 PM', available: true },
    { id: '4', time: '8:00 PM', available: true },
    { id: '5', time: '9:00 PM', available: false },
  ],
  maxGuests: 8,
  location: '42 Park Avenue, Premium District, Mumbai 400001',
};

export const ServiceDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const route = useRoute<any>();
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState(2);
  const [showAllInclusions, setShowAllInclusions] = useState(false);

  const service = defaultService;
  const discount = service.originalPrice
    ? Math.round((1 - service.price / service.originalPrice) * 100)
    : 0;
  const totalCoinReward = service.coinReward.rez + service.coinReward.prive + service.coinReward.branded;
  const cashbackPercent = Math.round((totalCoinReward / service.price) * 100);

  const handleBookNow = () => {
    if (!selectedTime) {
      return;
    }
    navigation.getParent()?.navigate('Redemption', {
      screen: 'Payment',
      params: {
        type: 'service',
        serviceName: service.name,
        storeName: service.storeName,
        date: service.availableDates[selectedDate],
        time: selectedTime,
        guests: guestCount,
        price: service.price,
        coinReward: totalCoinReward,
      },
    };
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
          <div style={style={{...styles.headerBtn}>
            <span variant="bodyLarge" color={colors.text.primary}>⬆</span>
          </div>
        </div>
      </div>

      <div style={style={{...styles.scrollView} >
        {/* Hero Image */}
        <div style={style={{...styles.heroSection}>
          <LinearGradient
            colors={['transparent', 'rgba(10,10,10,0.9)']}
            style={style={{...styles.heroGradient}
          />
          <div style={style={{...styles.heroPlaceholder}>
            <span style={style={{...styles.heroIcon}>◆</span>
          </div>

          {/* Badges */}
          {service.isPriveExclusive && (
            <div style={style={{...styles.exclusiveBadge}>
              <span variant="caption" gold>✦ PRIVÉ EXCLUSIVE</span>
            </div>
          )}

          {discount > 0 && (
            <div style={style={{...styles.discountBadge}>
              <span variant="caption" color="#FFFFFF">{discount}% OFF</span>
            </div>
          )}

          {/* Hero Bottom Info */}
          <div style={style={{...styles.heroBottomInfo}>
            <span variant="caption" color={colors.gold.primary}>{service.storeName}</span>
            <span variant="h2" color="#FFFFFF">{service.name}</span>
            <div style={style={{...styles.heroMeta}>
              <div style={style={{...styles.ratingBadge}>
                <span variant="caption" color="#0A0A0A">★ {service.rating}</span>
              </div>
              <span variant="caption" color="rgba(255,255,255,0.7)">
                {service.reviews} reviews
              </span>
              <span variant="caption" color="rgba(255,255,255,0.7)">
                · {service.duration}
              </span>
            </div>
          </div>
        </div>

        <div style={style={{...styles.content}>
          {/* Price & Earnings Card */}
          <div style={style={{...styles.priceCard}>
            <div style={style={{...styles.priceRow}>
              <div>
                <div style={style={{...styles.priceMain}>
                  <span style={style={{...styles.price}>₹{service.price.toLocaleString()}</span>
                  {service.originalPrice && (
                    <span style={style={{...styles.originalPrice}>
                      ₹{service.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <span variant="caption" color={colors.text.tertiary}>
                  per experience · up to {service.maxGuests} guests
                </span>
              </div>

              <div style={style={{...styles.earningsBadge}>
                <span variant="caption" color={colors.text.tertiary}>EARN</span>
                <span variant="bodyLarge" gold>+{totalCoinReward}</span>
                <span variant="caption" color="#4CAF50">{cashbackPercent}% back</span>
              </div>
            </div>

            {/* Coin Breakdown */}
            <div style={style={{...styles.coinBreakdown}>
              <div style={style={{...styles.coinItem}>
                <div style={[style={{...styles.coinDot, { backgroundColor: colors.gold.primary }]} />
                <span variant="caption" color={colors.text.secondary}>
                  +{service.coinReward.rez} ReZ
                </span>
              </div>
              <div style={style={{...styles.coinItem}>
                <div style={[style={{...styles.coinDot, { backgroundColor: '#B8860B' }]} />
                <span variant="caption" color={colors.text.secondary}>
                  +{service.coinReward.prive} Privé
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div style={style={{...styles.section}>
            <span variant="body" color={colors.text.secondary} style={style={{...styles.description}>
              {service.description}
            </span>
          </div>

          {/* Date Selection */}
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              SELECT DATE
            </span>
            <div
              horizontal
              
              contentContainerStyle={style={{...styles.dateScroll}
            >
              {service.availableDates.map((date, index) => (
                <div
                  key={index}
                  style={[
                    style={{...styles.dateChip,
                    selectedDate === index && style={{...styles.dateChipSelected,
                  ]}
                  onClick={() => setSelectedDate(index)}
                >
                  <Text
                    variant="body"
                    color={selectedDate === index ? colors.gold.primary : colors.text.secondary}
                  >
                    {date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              SELECT TIME
            </span>
            <div style={style={{...styles.timeGrid}>
              {service.timeSlots.map((slot) => (
                <div
                  key={slot.id}
                  style={[
                    style={{...styles.timeChip,
                    selectedTime === slot.time && style={{...styles.timeChipSelected,
                    !slot.available && style={{...styles.timeChipUnavailable,
                  ]}
                  onClick={() => slot.available && setSelectedTime(slot.time)}
                  disabled={!slot.available}
                >
                  <Text
                    variant="body"
                    color={
                      !slot.available
                        ? colors.text.tertiary
                        : selectedTime === slot.time
                        ? colors.gold.primary
                        : colors.text.secondary
                    }
                  >
                    {slot.time}
                  </span>
                  {!slot.available && (
                    <span variant="caption" color={colors.text.tertiary}>Booked</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Guest Count */}
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              NUMBER OF GUESTS
            </span>
            <div style={style={{...styles.guestSelector}>
              <div
                style={style={{...styles.guestBtn}
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
              >
                <span variant="bodyLarge" color={colors.text.primary}>−</span>
              </div>
              <div style={style={{...styles.guestCount}>
                <span variant="h3" color={colors.text.primary}>{guestCount}</span>
                <span variant="caption" color={colors.text.tertiary}>guests</span>
              </div>
              <div
                style={style={{...styles.guestBtn}
                onClick={() => setGuestCount(Math.min(service.maxGuests, guestCount + 1))}
              >
                <span variant="bodyLarge" color={colors.text.primary}>+</span>
              </div>
            </div>
            <span variant="caption" color={colors.text.tertiary} style={style={{...styles.guestNote}>
              Maximum {service.maxGuests} guests allowed
            </span>
          </div>

          {/* Divider */}
          <div style={style={{...styles.divider} />

          {/* What's Included */}
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              WHAT'S INCLUDED
            </span>
            <div style={style={{...styles.inclusionsCard}>
              {service.inclusions
                .slice(0, showAllInclusions ? service.inclusions.length : 5)
                .map((item, index) => (
                  <div key={index} style={style={{...styles.inclusionItem}>
                    <span variant="body" gold style={style={{...styles.checkIcon}>✓</span>
                    <span variant="body" color={colors.text.secondary}>{item}</span>
                  </div>
                ))}
              {service.inclusions.length > 5 && (
                <div
                  style={style={{...styles.showMoreBtn}
                  onClick={() => setShowAllInclusions(!showAllInclusions)}
                >
                  <span variant="body" gold>
                    {showAllInclusions ? 'Show Less' : `+${service.inclusions.length - 5} more`}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div style={style={{...styles.divider} />

          {/* Terms & Conditions */}
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              TERMS & CONDITIONS
            </span>
            <div style={style={{...styles.termsCard}>
              {service.terms.map((term, index) => (
                <div key={index} style={style={{...styles.termItem}>
                  <span variant="caption" color={colors.text.tertiary}>•</span>
                  <span variant="caption" color={colors.text.tertiary}>{term}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cancellation Policy */}
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              CANCELLATION POLICY
            </span>
            <div style={style={{...styles.policyCard}>
              <span variant="body" color={colors.text.secondary}>
                {service.cancellationPolicy}
              </span>
            </div>
          </div>

          {/* Location */}
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              LOCATION
            </span>
            <div style={style={{...styles.locationCard}>
              <div style={style={{...styles.locationIcon}>
                <span variant="body">📍</span>
              </div>
              <div style={style={{...styles.locationInfo}>
                <span variant="body" color={colors.text.primary}>{service.storeName}</span>
                <span variant="caption" color={colors.text.tertiary}>{service.location}</span>
              </div>
              <span variant="body" gold>→</span>
            </div>
          </div>

          {/* Store Rating */}
          <div style={style={{...styles.section}>
            <div style={style={{...styles.storeRatingCard}>
              <div style={style={{...styles.storeRatingLeft}>
                <span variant="body" color={colors.text.primary}>{service.storeName}</span>
                <div style={style={{...styles.storeRatingStars}>
                  <span variant="caption" gold>{renderStars(service.storeRating)}</span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {service.storeRating} rating
                  </span>
                </div>
              </div>
              <div
                style={style={{...styles.viewStoreBtn}
                onClick={() => navigate('/prive/X4_StoreDetail', { storeId: '1' })}
              >
                <span variant="caption" gold>View Store</span>
              </div>
            </div>
          </div>

          <div style={style={{...styles.bottomSpace} />
        </div>
      </div>

      {/* CTA Button */}
      <div style={style={{...styles.ctaContainer}>
        <div style={style={{...styles.ctaSummary}>
          <span variant="caption" color={colors.text.tertiary}>
            {service.availableDates[selectedDate]} {selectedTime ? `· ${selectedTime}` : ''} · {guestCount} guests
          </span>
          <span variant="bodyLarge" gold>₹{service.price.toLocaleString()}</span>
        </div>
        <div
          style={[style={{...styles.bookBtn, !selectedTime && style={{...styles.bookBtnDisabled]}
          onClick={handleBookNow}
          disabled={!selectedTime}
        >
          <span variant="bodyLarge" color={selectedTime ? '#0A0A0A' : colors.text.tertiary}>
            {selectedTime ? 'Book Now' : 'Select a Time'}
          </span>
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
    paddingVertical: spacing[2],
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  heroSection: {
    height: 320,
    position: 'relative',
  },
  heroGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    zIndex: 1,
  },
  heroPlaceholder: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroIcon: {
    fontSize: 80,
    color: colors.gold.primary,
    opacity: 0.3,
  },
  exclusiveBadge: {
    position: 'absolute',
    top: 100,
    left: spacing[4],
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
    zIndex: 2,
  },
  discountBadge: {
    position: 'absolute',
    top: 100,
    right: spacing[4],
    backgroundColor: '#E53935',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
    zIndex: 2,
  },
  heroBottomInfo: {
    position: 'absolute',
    bottom: spacing[5],
    left: spacing[5],
    right: spacing[5],
    zIndex: 2,
  },
  heroMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginTop: spacing[2],
  },
  ratingBadge: {
    backgroundColor: colors.gold.primary,
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  content: {
    paddingHorizontal: spacing[5],
  },
  priceCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginTop: -spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  priceMain: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing[2],
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
  earningsBadge: {
    alignItems: 'center',
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.lg,
  },
  coinBreakdown: {
    flexDirection: 'row',
    gap: spacing[4],
    marginTop: spacing[3],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  coinItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  coinDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  section: {
    marginTop: spacing[5],
  },
  sectionLabel: {
    letterSpacing: 1,
    marginBottom: spacing[3],
  },
  description: {
    lineHeight: 24,
  },
  dateScroll: {
    gap: spacing[2],
  },
  dateChip: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  dateChipSelected: {
    borderColor: colors.gold.primary,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  timeChip: {
    width: (window.innerWidth - spacing[5] * 2 - spacing[2] * 2) / 3,
    paddingVertical: spacing[3],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    alignItems: 'center',
  },
  timeChipSelected: {
    borderColor: colors.gold.primary,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
  },
  timeChipUnavailable: {
    opacity: 0.5,
  },
  guestSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[5],
    paddingVertical: spacing[3],
  },
  guestBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#181818',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guestCount: {
    alignItems: 'center',
    minWidth: 80,
  },
  guestNote: {
    textAlign: 'center',
    marginTop: spacing[2],
  },
  divider: {
    height: 1,
    backgroundColor: '#2A2A2A',
    marginVertical: spacing[5],
  },
  inclusionsCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  inclusionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
    paddingVertical: spacing[2],
  },
  checkIcon: {
    marginTop: 2,
  },
  showMoreBtn: {
    paddingTop: spacing[3],
    alignItems: 'center',
  },
  termsCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[2],
  },
  termItem: {
    flexDirection: 'row',
    gap: spacing[2],
  },
  policyCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  locationIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationInfo: {
    flex: 1,
    gap: spacing[1],
  },
  storeRatingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  storeRatingLeft: {
    gap: spacing[1],
  },
  storeRatingStars: {
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
  bottomSpace: {
    height: 120,
  },
  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[5],
    paddingBottom: spacing[6],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    gap: spacing[4],
  },
  ctaSummary: {
    flex: 1,
    gap: spacing[1],
  },
  bookBtn: {
    flex: 1,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    backgroundColor: colors.gold.primary,
    alignItems: 'center',
  },
  bookBtnDisabled: {
    backgroundColor: '#2A2A2A',
  },
};

export default ServiceDetailScreen;
