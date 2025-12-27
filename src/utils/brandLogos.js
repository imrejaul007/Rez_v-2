/**
 * Brand Logo Utilities
 * Helper functions for getting brand logos
 */

// Popular Indian and international brands with their logo URLs
export const BRAND_LOGOS = {
  // E-commerce
  'amazon': 'https://logo.clearbit.com/amazon.in',
  'flipkart': 'https://logo.clearbit.com/flipkart.com',
  'myntra': 'https://logo.clearbit.com/myntra.com',
  'ajio': 'https://logo.clearbit.com/ajio.com',
  'snapdeal': 'https://logo.clearbit.com/snapdeal.com',

  // Fashion
  'zara': 'https://logo.clearbit.com/zara.com',
  'h&m': 'https://logo.clearbit.com/hm.com',
  'westside': 'https://logo.clearbit.com/westside.com',
  'pantaloons': 'https://logo.clearbit.com/pantaloons.com',
  'shoppers stop': 'https://logo.clearbit.com/shoppersstop.com',
  'lifestyle': 'https://logo.clearbit.com/lifestylestores.com',
  'max fashion': 'https://logo.clearbit.com/maxfashion.in',
  'fabindia': 'https://logo.clearbit.com/fabindia.com',
  'allen solly': 'https://logo.clearbit.com/allensolly.com',
  'van heusen': 'https://logo.clearbit.com/vanheusenindia.com',
  'peter england': 'https://logo.clearbit.com/peterengland.com',
  'levis': 'https://logo.clearbit.com/levi.in',
  'puma': 'https://logo.clearbit.com/puma.com',
  'bata': 'https://logo.clearbit.com/bata.in',
  'snitch': 'https://logo.clearbit.com/snitch.co.in',
  'souled store': 'https://logo.clearbit.com/thesouledstore.com',
  'bewakoof': 'https://logo.clearbit.com/bewakoof.com',

  // Beauty & Wellness
  'nykaa': 'https://logo.clearbit.com/nykaa.com',
  'sephora': 'https://logo.clearbit.com/sephora.nnnow.com',
  'mamaearth': 'https://logo.clearbit.com/mamaearth.in',
  'mcaffeine': 'https://logo.clearbit.com/mcaffeine.com',
  'plum': 'https://logo.clearbit.com/plumgoodness.com',
  'minimalist': 'https://logo.clearbit.com/beminimalist.co',
  'sugar cosmetics': 'https://logo.clearbit.com/sugarcosmetics.com',
  'forest essentials': 'https://logo.clearbit.com/forestessentialsindia.com',

  // Food & Dining
  'swiggy': 'https://logo.clearbit.com/swiggy.com',
  'zomato': 'https://logo.clearbit.com/zomato.com',
  'mcdonalds': 'https://logo.clearbit.com/mcdonalds.in',
  'dominos': 'https://logo.clearbit.com/dominos.co.in',
  'kfc': 'https://logo.clearbit.com/kfc.co.in',
  'burger king': 'https://logo.clearbit.com/burgerking.in',
  'pizza hut': 'https://logo.clearbit.com/pizzahut.co.in',
  'subway': 'https://logo.clearbit.com/subway.com',
  'starbucks': 'https://logo.clearbit.com/starbucks.in',
  'chaayos': 'https://logo.clearbit.com/chaayos.com',
  'barista': 'https://logo.clearbit.com/barista.co.in',
  'blue tokai': 'https://logo.clearbit.com/bluetokaicoffee.com',
  'baskin robbins': 'https://logo.clearbit.com/baskinrobbins.in',
  'licious': 'https://logo.clearbit.com/licious.in',

  // Grocery & Retail
  'dmart': 'https://logo.clearbit.com/dmart.in',
  'reliance retail': 'https://logo.clearbit.com/relianceretail.com',
  'spencers': 'https://logo.clearbit.com/spencersretail.com',
  'spar': 'https://logo.clearbit.com/sparindia.com',
  'bigbasket': 'https://logo.clearbit.com/bigbasket.com',
  'zepto': 'https://logo.clearbit.com/zeptonow.com',
  'blinkit': 'https://logo.clearbit.com/blinkit.com',

  // Electronics
  'croma': 'https://logo.clearbit.com/croma.com',
  'reliance digital': 'https://logo.clearbit.com/reliancedigital.in',
  'vijay sales': 'https://logo.clearbit.com/vijaysales.com',
  'boat': 'https://logo.clearbit.com/boat-lifestyle.com',
  'lenskart': 'https://logo.clearbit.com/lenskart.com',
  'sony': 'https://logo.clearbit.com/sony.com',

  // Health & Pharmacy
  'apollo pharmacy': 'https://logo.clearbit.com/apollopharmacy.in',
  'netmeds': 'https://logo.clearbit.com/netmeds.com',
  'pharmeasy': 'https://logo.clearbit.com/pharmeasy.in',
  '1mg': 'https://logo.clearbit.com/1mg.com',
  'medplus': 'https://logo.clearbit.com/medplusmart.com',

  // Travel & Entertainment
  'makemytrip': 'https://logo.clearbit.com/makemytrip.com',
  'cleartrip': 'https://logo.clearbit.com/cleartrip.com',
  'uber': 'https://logo.clearbit.com/uber.com',
  'bookmyshow': 'https://logo.clearbit.com/bookmyshow.com',
  'pvr': 'https://logo.clearbit.com/pvrcinemas.com',
  'cinepolis': 'https://logo.clearbit.com/cinepolis.co.in',

  // Home & Services
  'urban company': 'https://logo.clearbit.com/urbancompany.com',
  'rentomojo': 'https://logo.clearbit.com/rentomojo.com',
  'furlenco': 'https://logo.clearbit.com/furlenco.com',
  'pepperfry': 'https://logo.clearbit.com/pepperfry.com',
};

/**
 * Get logo URL for a brand
 * @param {string} brandName - Name of the brand
 * @returns {string} Logo URL
 */
export const getBrandLogo = (brandName) => {
  if (!brandName) return null;

  const normalizedName = brandName.toLowerCase().trim();

  // Check if we have a predefined logo
  if (BRAND_LOGOS[normalizedName]) {
    return BRAND_LOGOS[normalizedName];
  }

  // Try to construct a logo URL from the brand name
  // Remove special characters and spaces, create a domain-like string
  const cleanName = normalizedName
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '');

  // Try common domain patterns
  const possibleDomains = [
    `${cleanName}.com`,
    `${cleanName}.in`,
    `${cleanName}.co.in`
  ];

  // Return the first possible domain as a clearbit URL
  return `https://logo.clearbit.com/${possibleDomains[0]}`;
};

/**
 * Generate a fallback logo using UI Avatars
 * @param {string} name - Brand name
 * @param {string} bgColor - Background color (hex without #)
 * @returns {string} UI Avatars URL
 */
export const generateFallbackLogo = (name, bgColor = '10B981') => {
  if (!name) return null;

  const encodedName = encodeURIComponent(name);
  return `https://ui-avatars.com/api/?name=${encodedName}&background=${bgColor}&color=fff&size=128&bold=true`;
};

/**
 * Get category-based color for fallback logos
 * @param {string} category - Category name
 * @returns {string} Hex color code without #
 */
export const getCategoryColor = (category) => {
  const colors = {
    'fashion': 'EC4899',
    'beauty': 'F472B6',
    'food': 'F97316',
    'electronics': '3B82F6',
    'grocery': '059669',
    'health': '06B6D4',
    'travel': 'F59E0B',
    'services': '6366F1',
    'luxury': '8B5CF6',
    'fitness': 'EF4444',
    'default': '10B981'
  };

  return colors[category?.toLowerCase()] || colors.default;
};

export default {
  BRAND_LOGOS,
  getBrandLogo,
  generateFallbackLogo,
  getCategoryColor
};
