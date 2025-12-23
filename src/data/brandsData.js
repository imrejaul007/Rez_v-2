// Brand metadata for all merchants in the ReZ ecosystem
// This complements the loyalty data in WalletContext

export const brandsMetadata = {
  starbucks: {
    id: 'starbucks',
    name: 'Starbucks',
    category: 'Food & Dining',
    subcategory: 'Café',
    rating: 4.7,
    reviewCount: 2340,
    locations: [
      { id: 1, name: 'Indiranagar', distance: '300m', address: 'CMH Road, Indiranagar' },
      { id: 2, name: 'Koramangala', distance: '2.5km', address: '80 Feet Road, Koramangala' },
      { id: 3, name: 'MG Road', distance: '4km', address: 'MG Road Metro Station' }
    ],
    verified: true,
    popularTag: true,
    superCashbackBrand: true,
    topRated: true,
    description: 'Premium coffee and beverages',
    operatingHours: '7:00 AM - 11:00 PM'
  },

  lakme: {
    id: 'lakme',
    name: 'Lakmé Salon',
    category: 'Beauty & Wellness',
    subcategory: 'Salon',
    rating: 4.5,
    reviewCount: 1890,
    locations: [
      { id: 1, name: 'Koramangala', distance: '1.2km', address: '5th Block, Koramangala' },
      { id: 2, name: 'Whitefield', distance: '8km', address: 'Phoenix Marketcity' }
    ],
    verified: true,
    popularTag: true,
    superCashbackBrand: false,
    topRated: true,
    description: 'Premium beauty salon services',
    operatingHours: '10:00 AM - 8:00 PM'
  },

  'biryani-blues': {
    id: 'biryani-blues',
    name: 'Biryani Blues',
    category: 'Food & Dining',
    subcategory: 'Restaurant',
    rating: 4.6,
    reviewCount: 3200,
    locations: [
      { id: 1, name: 'Indiranagar', distance: '500m', address: '100 Feet Road' },
      { id: 2, name: 'HSR Layout', distance: '3km', address: '27th Main Road' }
    ],
    verified: true,
    popularTag: true,
    superCashbackBrand: true,
    topRated: true,
    description: 'Authentic biryani and Indian cuisine',
    operatingHours: '11:00 AM - 11:00 PM'
  },

  dominos: {
    id: 'dominos',
    name: 'Dominos Pizza',
    category: 'Food & Dining',
    subcategory: 'Fast Food',
    rating: 4.3,
    reviewCount: 4500,
    locations: [
      { id: 1, name: 'Koramangala', distance: '800m', address: '80 Feet Road' },
      { id: 2, name: 'BTM Layout', distance: '2km', address: '2nd Stage' },
      { id: 3, name: 'Marathahalli', distance: '5km', address: 'Outer Ring Road' }
    ],
    verified: true,
    popularTag: true,
    superCashbackBrand: true,
    topRated: false,
    description: 'Pizza delivery and dining',
    operatingHours: '10:00 AM - 12:00 AM'
  },

  nykaa: {
    id: 'nykaa',
    name: 'Nykaa',
    category: 'Beauty & Fashion',
    subcategory: 'Beauty Store',
    rating: 4.6,
    reviewCount: 8900,
    locations: [
      { id: 1, name: 'Indiranagar', distance: '600m', address: '100 Feet Road' },
      { id: 2, name: 'Whitefield', distance: '9km', address: 'VR Bengaluru' }
    ],
    verified: true,
    popularTag: true,
    superCashbackBrand: true,
    topRated: true,
    description: 'Beauty and cosmetics retail',
    operatingHours: '10:00 AM - 10:00 PM'
  },

  zara: {
    id: 'zara',
    name: 'Zara',
    category: 'Fashion',
    subcategory: 'Apparel',
    rating: 4.5,
    reviewCount: 5600,
    locations: [
      { id: 1, name: 'UB City Mall', distance: '4.5km', address: 'Vittal Mallya Road' },
      { id: 2, name: 'Phoenix Marketcity', distance: '8km', address: 'Whitefield' }
    ],
    verified: true,
    popularTag: true,
    superCashbackBrand: false,
    topRated: true,
    description: 'International fashion brand',
    operatingHours: '11:00 AM - 9:00 PM'
  },

  ccd: {
    id: 'ccd',
    name: 'Café Coffee Day',
    category: 'Food & Dining',
    subcategory: 'Café',
    rating: 4.2,
    reviewCount: 6700,
    locations: [
      { id: 1, name: 'Koramangala', distance: '1km', address: '5th Block' },
      { id: 2, name: 'Indiranagar', distance: '400m', address: 'CMH Road' },
      { id: 3, name: 'MG Road', distance: '4.2km', address: 'Brigade Road' }
    ],
    verified: true,
    popularTag: true,
    superCashbackBrand: false,
    topRated: false,
    description: 'Coffee and snacks café chain',
    operatingHours: '7:00 AM - 11:00 PM'
  }
};

// Helper function to get brand metadata
export const getBrandMetadata = (brandId) => {
  return brandsMetadata[brandId] || null;
};

// Get all brands as array
export const getAllBrands = () => {
  return Object.values(brandsMetadata);
};

// Get brands by category
export const getBrandsByCategory = (category) => {
  return Object.values(brandsMetadata).filter(brand => brand.category === category);
};

// Get popular brands
export const getPopularBrands = () => {
  return Object.values(brandsMetadata).filter(brand => brand.popularTag);
};

// Get verified brands
export const getVerifiedBrands = () => {
  return Object.values(brandsMetadata).filter(brand => brand.verified);
};

// Get super cashback brands
export const getSuperCashbackBrands = () => {
  return Object.values(brandsMetadata).filter(brand => brand.superCashbackBrand);
};
