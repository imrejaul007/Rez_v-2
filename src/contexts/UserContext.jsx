import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const initialUser = {
  id: 1,
  name: 'Alex',
  email: 'alex@example.com',
  phone: '+91 98765 43210',
  avatar: null,

  // Privé status
  isPriveMember: true, // Set to true to test Privé features
  priveScore: 100, // out of 100 to unlock

  // Age verification
  isAdultVerified: false,
  dateOfBirth: null,

  // Preferences
  preferences: {
    defaultMode: 'nearYou',
    alwaysHalal: false,
    alwaysVegan: false,
    alwaysVegetarian: false,
    avoidLuxury: false,
    preferFastDelivery: false,
  },

  // Household context
  shoppingFor: 'self', // self | family | kids | friends | office

  // Saved stores
  savedStores: [1, 2, 6],

  // Recent searches
  recentSearches: [
    'biryani near me',
    'vegan restaurant',
    'electronics store'
  ],

  // Stats
  stats: {
    totalOrders: 47,
    totalSaved: 12450,
    reviewsWritten: 12,
    referrals: 3,
  },

  // Membership
  memberSince: '2024-01-15',
  tier: 'Gold', // Bronze | Silver | Gold | Platinum
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const updatePreferences = (key, value) => {
    setUser(prev => ({
      ...prev,
      preferences: { ...prev.preferences, [key]: value }
    }));
  };

  const toggleSavedStore = (storeId) => {
    setUser(prev => {
      const saved = prev.savedStores.includes(storeId)
        ? prev.savedStores.filter(id => id !== storeId)
        : [...prev.savedStores, storeId];
      return { ...prev, savedStores: saved };
    });
  };

  const setShoppingFor = (context) => {
    setUser(prev => ({ ...prev, shoppingFor: context }));
  };

  const value = {
    user,
    updateUser,
    updatePreferences,
    toggleSavedStore,
    setShoppingFor,
    isStoresSaved: (storeId) => user.savedStores.includes(storeId),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

// Shopping for options
export const shoppingForOptions = [
  { id: 'self', icon: '👤', label: 'Myself' },
  { id: 'family', icon: '👨‍👩‍👧‍👦', label: 'Family' },
  { id: 'kids', icon: '👶', label: 'Kids' },
  { id: 'friends', icon: '👥', label: 'Friends' },
  { id: 'office', icon: '🏢', label: 'Office' },
];
