/**
 * MERCHANT VIEWMODEL
 *
 * Transforms merchant data to UI-ready format
 *
 * RULES:
 * - Frontend receives THIS, not raw merchant data
 * - All status checks done server-side
 * - Distance calculations done server-side
 * - Operating hours → UI-ready format
 */

import { Merchant } from '../schemas/merchant.schema';

export interface MerchantViewModel {
  // Basic Info
  id: string;
  name: string;
  slug: string;
  logo: string;
  cover: string;
  description: string;
  category: {
    name: string;
    displayName: string; // "Food Delivery" instead of "food_delivery"
    icon: string;
  };

  // Status & Availability
  status: {
    isOpen: boolean;
    openingTime: string | null; // "Opens at 10:00 AM"
    closingTime: string | null; // "Closes at 11:00 PM"
    statusText: string; // "Open now" | "Closed" | "Opens soon"
    statusColor: string; // "#22C55E" | "#EF4444" | "#F59E0B"
    acceptingOrders: boolean;
  };

  // Ratings & Reviews
  rating: {
    average: number; // 4.5
    total: number; // 1,234 ratings
    displayText: string; // "4.5 ★ (1.2K ratings)"
    stars: number; // Full stars for UI (4 full + 1 half)
  };

  // Delivery Info
  delivery: {
    available: boolean;
    fee: string; // "₹40"
    estimatedTime: string; // "30-40 mins"
    minOrderValue: string; // "₹99" or "No minimum"
    distance: string; // "2.5 km away"
    inZone: boolean;
  };

  // Pricing
  pricing: {
    minOrderValue: string;
    avgOrderValue: string; // "₹250-300"
    hasDiscount: boolean;
  };

  // Tags
  tags: Array<{
    label: string;
    icon: string;
    color: string;
  }>;

  // Contact
  contact: {
    phone: string;
    address: {
      short: string; // "Koramangala, Bangalore"
      full: string; // Full address
    };
  };

  // Actions
  actions: {
    viewMenu: {
      enabled: boolean;
      url: string;
    };
    call: {
      enabled: boolean;
      phone: string;
    };
    share: {
      enabled: boolean;
      url: string;
    };
  };

  // Stats (for merchant card)
  stats: {
    totalOrders: string; // "10K+ orders"
    avgPreparationTime: string; // "25-30 mins"
  };
}

/**
 * Category display names
 */
const CATEGORY_DISPLAY: Record<string, { displayName: string; icon: string }> = {
  food_delivery: { displayName: 'Food Delivery', icon: 'utensils' },
  grocery: { displayName: 'Grocery', icon: 'shopping-basket' },
  pharmacy: { displayName: 'Pharmacy', icon: 'pills' },
  electronics: { displayName: 'Electronics', icon: 'laptop' },
  fashion: { displayName: 'Fashion', icon: 'shirt' },
  beauty: { displayName: 'Beauty', icon: 'sparkles' },
  home_services: { displayName: 'Home Services', icon: 'wrench' },
  education: { displayName: 'Education', icon: 'book' },
  entertainment: { displayName: 'Entertainment', icon: 'film' }
};

/**
 * Format number with K, M suffix
 */
function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

/**
 * Check if merchant is currently open
 */
function isCurrentlyOpen(operatingHours: Merchant['operating_hours']): {
  isOpen: boolean;
  openingTime: string | null;
  closingTime: string | null;
  statusText: string;
} {
  const now = new Date();
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const today = dayNames[now.getDay()];
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const todayHours = operatingHours[today as keyof typeof operatingHours];

  if (todayHours.closed) {
    return {
      isOpen: false,
      openingTime: null,
      closingTime: null,
      statusText: 'Closed today'
    };
  }

  const [openHour, openMin] = todayHours.open.split(':').map(Number);
  const [closeHour, closeMin] = todayHours.close.split(':').map(Number);

  const currentTimeInMins = currentHour * 60 + currentMinute;
  const openTimeInMins = openHour * 60 + openMin;
  const closeTimeInMins = closeHour * 60 + closeMin;

  const isOpen = currentTimeInMins >= openTimeInMins && currentTimeInMins < closeTimeInMins;

  // Format time for display
  const formatTime = (hour: number, min: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${min.toString().padStart(2, '0')} ${period}`;
  };

  if (isOpen) {
    return {
      isOpen: true,
      openingTime: formatTime(openHour, openMin),
      closingTime: formatTime(closeHour, closeMin),
      statusText: `Open now • Closes at ${formatTime(closeHour, closeMin)}`
    };
  }

  // Check if opens soon (within next hour)
  if (currentTimeInMins < openTimeInMins && (openTimeInMins - currentTimeInMins) <= 60) {
    return {
      isOpen: false,
      openingTime: formatTime(openHour, openMin),
      closingTime: formatTime(closeHour, closeMin),
      statusText: `Opens soon at ${formatTime(openHour, openMin)}`
    };
  }

  return {
    isOpen: false,
    openingTime: formatTime(openHour, openMin),
    closingTime: formatTime(closeHour, closeMin),
    statusText: `Closed • Opens at ${formatTime(openHour, openMin)}`
  };
}

/**
 * Calculate distance (simplified - would use actual geolocation)
 */
function calculateDistance(
  merchantLat: number,
  merchantLng: number,
  userLat: number,
  userLng: number
): number {
  // Haversine formula for distance in km
  const R = 6371;
  const dLat = (userLat - merchantLat) * (Math.PI / 180);
  const dLon = (userLng - merchantLng) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(merchantLat * (Math.PI / 180)) *
      Math.cos(userLat * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Transform merchant to ViewModel
 */
export function toMerchantViewModel(
  merchant: Merchant,
  userLocation: { lat: number; lng: number }
): MerchantViewModel {
  const categoryDisplay = CATEGORY_DISPLAY[merchant.category];
  const openStatus = isCurrentlyOpen(merchant.operating_hours);
  const distance = calculateDistance(
    merchant.address.lat,
    merchant.address.lng,
    userLocation.lat,
    userLocation.lng
  );
  const inZone = distance <= merchant.delivery_radius_km;

  // Generate tags
  const tags: MerchantViewModel['tags'] = [];
  if (merchant.rating >= 4.5) {
    tags.push({ label: 'Top Rated', icon: 'star', color: '#F59E0B' });
  }
  if (merchant.tags?.includes('veg')) {
    tags.push({ label: 'Pure Veg', icon: 'leaf', color: '#22C55E' });
  }
  if (merchant.tags?.includes('fast-delivery')) {
    tags.push({ label: 'Fast Delivery', icon: 'zap', color: '#3B82F6' });
  }
  if (merchant.total_orders > 10000) {
    tags.push({ label: 'Popular', icon: 'fire', color: '#EF4444' });
  }

  return {
    id: merchant.id,
    name: merchant.display_name,
    slug: merchant.slug,
    logo: merchant.logo_url || '',
    cover: merchant.cover_image_url || '',
    description: merchant.description || '',

    category: {
      name: merchant.category,
      displayName: categoryDisplay.displayName,
      icon: categoryDisplay.icon
    },

    status: {
      isOpen: openStatus.isOpen && merchant.accepts_orders,
      openingTime: openStatus.openingTime,
      closingTime: openStatus.closingTime,
      statusText: merchant.accepts_orders
        ? openStatus.statusText
        : 'Not accepting orders',
      statusColor: openStatus.isOpen && merchant.accepts_orders ? '#22C55E' : '#EF4444',
      acceptingOrders: merchant.accepts_orders
    },

    rating: {
      average: merchant.rating,
      total: merchant.total_ratings,
      displayText: `${merchant.rating.toFixed(1)} ★ (${formatNumber(merchant.total_ratings)} ratings)`,
      stars: Math.round(merchant.rating * 2) / 2 // Round to nearest 0.5
    },

    delivery: {
      available: inZone,
      fee: `₹${merchant.min_order_value > 0 ? '40' : 'Free'}`, // Simplified
      estimatedTime: `${merchant.avg_preparation_time_mins}-${merchant.avg_preparation_time_mins + 10} mins`,
      minOrderValue:
        merchant.min_order_value > 0 ? `₹${merchant.min_order_value}` : 'No minimum',
      distance: `${distance.toFixed(1)} km away`,
      inZone
    },

    pricing: {
      minOrderValue: merchant.min_order_value > 0 ? `₹${merchant.min_order_value}` : 'No minimum',
      avgOrderValue: `₹250-300`, // Would be calculated from actual data
      hasDiscount: false // Would check active campaigns
    },

    tags,

    contact: {
      phone: merchant.owner_phone,
      address: {
        short: `${merchant.address.city}`,
        full: `${merchant.address.line1}, ${merchant.address.line2 || ''}, ${merchant.address.city}, ${merchant.address.pincode}`
      }
    },

    actions: {
      viewMenu: {
        enabled: true,
        url: `/merchant/${merchant.slug}`
      },
      call: {
        enabled: true,
        phone: merchant.owner_phone
      },
      share: {
        enabled: true,
        url: `${process.env.APP_URL}/merchant/${merchant.slug}`
      }
    },

    stats: {
      totalOrders: `${formatNumber(merchant.total_orders)}+ orders`,
      avgPreparationTime: `${merchant.avg_preparation_time_mins}-${merchant.avg_preparation_time_mins + 10} mins`
    }
  };
}
