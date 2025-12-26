import { createContext, useContext, useState } from 'react';

const CreatorContext = createContext();

// Mock Creators Data
const mockCreators = [
  {
    id: 'creator-1',
    name: 'Sarah Johnson',
    username: 'sarahjohnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'Fashion & lifestyle curator helping you find pieces that make you feel confident 💫',
    verified: true,
    tier: 'elite',
    stats: {
      followers: 12500,
      totalPicks: 245,
      totalSales: 3420,
      avgRating: 4.8,
      joinedDate: '2024-01-15'
    },
    specialties: ['fashion', 'beauty', 'lifestyle'],
    socialLinks: {
      instagram: '@sarahjohnson',
      youtube: 'sarahjohnson'
    }
  },
  {
    id: 'creator-2',
    name: 'Mike Chen',
    username: 'mikechen',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'Tech enthusiast & gadget reviewer. Helping you make smart tech purchases 🎮',
    verified: true,
    tier: 'gold',
    stats: {
      followers: 8900,
      totalPicks: 156,
      totalSales: 2100,
      avgRating: 4.7,
      joinedDate: '2024-02-20'
    },
    specialties: ['electronics', 'gaming', 'tech'],
    socialLinks: {
      youtube: 'mikechen',
      website: 'www.miketech.com'
    }
  },
  {
    id: 'creator-3',
    name: 'Priya Sharma',
    username: 'priyasharma',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Beauty expert & skincare addict. Curating the best products for Indian skin 🌸',
    verified: true,
    tier: 'elite',
    stats: {
      followers: 15200,
      totalPicks: 312,
      totalSales: 4580,
      avgRating: 4.9,
      joinedDate: '2024-01-10'
    },
    specialties: ['beauty', 'skincare', 'wellness'],
    socialLinks: {
      instagram: '@priyasharma',
      youtube: 'priyasharma'
    }
  },
  {
    id: 'creator-4',
    name: 'Raj Patel',
    username: 'rajpatel',
    avatar: 'https://i.pravatar.cc/150?img=15',
    bio: 'Fitness coach & nutrition expert. Building a healthier India, one pick at a time 💪',
    verified: true,
    tier: 'silver',
    stats: {
      followers: 6700,
      totalPicks: 89,
      totalSales: 1420,
      avgRating: 4.6,
      joinedDate: '2024-03-15'
    },
    specialties: ['fitness', 'health', 'nutrition'],
    socialLinks: {
      instagram: '@rajpatel',
      website: 'www.fitwithr aj.com'
    }
  }
];

// Mock Creator Picks
const mockPicks = [
  {
    id: 'pick-1',
    creatorId: 'creator-1',
    productId: 'product-1',
    productName: 'Floral Summer Dress',
    productImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
    productPrice: 2499,
    productBrand: 'Zara',
    title: 'My Go-To Summer Dress',
    description: "I've worn this dress to 10+ events this summer. It's comfortable, flattering, and gets compliments every time!",
    whyILoveIt: 'The fabric is breathable, the fit is perfect, and it transitions from day to night effortlessly.',
    tips: ['Size up if between sizes', 'Pairs great with white sneakers or heels', 'Machine washable!'],
    collectionId: 'collection-1',
    images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500'],
    createdAt: '2024-06-20',
    stats: {
      views: 5420,
      clicks: 842,
      purchases: 127,
      conversionRate: 15.1
    },
    tags: ['summer', 'dress', 'party', 'casual']
  },
  {
    id: 'pick-2',
    creatorId: 'creator-2',
    productId: 'product-2',
    productName: 'Sony WH-1000XM5 Headphones',
    productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    productPrice: 29990,
    productBrand: 'Sony',
    title: 'Best Noise-Cancelling Headphones',
    description: "After testing 15+ headphones, these are hands down the best. Worth every rupee!",
    whyILoveIt: 'Industry-leading noise cancellation, 30-hour battery, and incredible sound quality.',
    tips: ['Great for flights and work', 'Connect to 2 devices simultaneously', 'Comfortable for all-day wear'],
    collectionId: 'collection-2',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'],
    createdAt: '2024-06-18',
    stats: {
      views: 8200,
      clicks: 1340,
      purchases: 245,
      conversionRate: 18.3
    },
    tags: ['headphones', 'audio', 'tech', 'work']
  },
  {
    id: 'pick-3',
    creatorId: 'creator-3',
    productId: 'product-3',
    productName: 'Minimalist Niacinamide Serum',
    productImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    productPrice: 599,
    productBrand: 'Minimalist',
    title: 'Holy Grail Serum for Dark Spots',
    description: "This serum transformed my skin in just 4 weeks. My dark spots have faded significantly!",
    whyILoveIt: '10% Niacinamide, gentle formula, affordable, and actually works!',
    tips: ['Use AM & PM', 'Layer under moisturizer', 'Takes 4-6 weeks to see results', 'Patch test first'],
    collectionId: 'collection-3',
    images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500'],
    createdAt: '2024-06-15',
    stats: {
      views: 12400,
      clicks: 2180,
      purchases: 456,
      conversionRate: 20.9
    },
    tags: ['skincare', 'serum', 'beauty', 'affordable']
  }
];

// Mock Collections
const mockCollections = [
  {
    id: 'collection-1',
    creatorId: 'creator-1',
    title: 'Summer Essentials 2024',
    description: 'My must-have pieces for a stylish and comfortable summer',
    coverImage: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=800',
    picks: ['pick-1'],
    featured: true,
    createdAt: '2024-06-01',
    stats: {
      totalViews: 8400,
      totalPurchases: 340
    }
  },
  {
    id: 'collection-2',
    creatorId: 'creator-2',
    title: 'Ultimate WFH Tech Setup',
    description: 'Everything you need for a productive work-from-home setup',
    coverImage: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
    picks: ['pick-2'],
    featured: true,
    createdAt: '2024-06-10',
    stats: {
      totalViews: 6200,
      totalPurchases: 280
    }
  },
  {
    id: 'collection-3',
    creatorId: 'creator-3',
    title: 'Glass Skin Routine',
    description: 'My complete routine for achieving that coveted glass skin glow',
    coverImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
    picks: ['pick-3'],
    featured: true,
    createdAt: '2024-06-05',
    stats: {
      totalViews: 15800,
      totalPurchases: 520
    }
  }
];

// Mock UGC (User Generated Content)
const mockUGC = [
  {
    id: 'ugc-1',
    creatorId: 'creator-1',
    type: 'photo',
    title: 'My Summer OOTD',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500',
    caption: 'Loving this floral dress for summer events! 🌸',
    likes: 1240,
    comments: 89,
    createdAt: '2024-06-22',
    tags: ['fashion', 'summer', 'ootd']
  },
  {
    id: 'ugc-2',
    creatorId: 'creator-1',
    type: 'video',
    title: 'How I Style This Dress',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500',
    videoUrl: 'https://example.com/video.mp4',
    duration: '2:45',
    views: 5420,
    likes: 892,
    comments: 124,
    createdAt: '2024-06-20',
    tags: ['styling', 'tutorial', 'fashion']
  },
  {
    id: 'ugc-3',
    creatorId: 'creator-2',
    type: 'review',
    title: 'Sony WH-1000XM5 - 1 Month Review',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    rating: 5,
    content: 'After 1 month of daily use, these headphones are still amazing. Battery life is incredible!',
    likes: 2340,
    helpful: 456,
    createdAt: '2024-06-15',
    tags: ['review', 'tech', 'headphones']
  },
  {
    id: 'ugc-4',
    creatorId: 'creator-3',
    type: 'photo',
    title: 'Glass Skin Results',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    caption: 'My skin after 4 weeks of this routine! ✨',
    likes: 3240,
    comments: 456,
    createdAt: '2024-06-18',
    tags: ['skincare', 'glowup', 'results']
  }
];

// Mock Products/Services offered by creators
const mockCreatorProducts = [
  {
    id: 'cp-1',
    creatorId: 'creator-1',
    type: 'product',
    name: "Sarah's Style Guide E-Book",
    description: 'Complete guide to building a capsule wardrobe',
    price: 499,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
    sales: 342,
    rating: 4.9
  },
  {
    id: 'cp-2',
    creatorId: 'creator-1',
    type: 'service',
    name: 'Personal Styling Session',
    description: '1-hour video consultation for wardrobe planning',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500',
    bookings: 45,
    rating: 5.0
  },
  {
    id: 'cp-3',
    creatorId: 'creator-2',
    type: 'product',
    name: 'Tech Setup Guide 2024',
    description: 'Ultimate guide to building the perfect WFH setup',
    price: 799,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500',
    sales: 567,
    rating: 4.8
  },
  {
    id: 'cp-4',
    creatorId: 'creator-3',
    type: 'service',
    name: 'Skin Analysis & Routine',
    description: 'Personalized skincare routine based on your skin type',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    bookings: 234,
    rating: 4.9
  },
  {
    id: 'cp-5',
    creatorId: 'creator-3',
    type: 'product',
    name: 'Glass Skin Blueprint',
    description: 'Step-by-step guide + product recommendations',
    price: 599,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500',
    sales: 890,
    rating: 5.0
  }
];

export const CreatorProvider = ({ children }) => {
  const [creators] = useState(mockCreators);
  const [picks] = useState(mockPicks);
  const [collections] = useState(mockCollections);
  const [ugcContent] = useState(mockUGC);
  const [creatorProducts] = useState(mockCreatorProducts);
  const [followedCreators, setFollowedCreators] = useState([]);
  const [savedPicks, setSavedPicks] = useState([]);

  // Get creator by ID
  const getCreator = (creatorId) => {
    return creators.find(c => c.id === creatorId);
  };

  // Get creator by username
  const getCreatorByUsername = (username) => {
    return creators.find(c => c.username === username);
  };

  // Get picks by creator
  const getPicksByCreator = (creatorId) => {
    return picks.filter(p => p.creatorId === creatorId);
  };

  // Get collections by creator
  const getCollectionsByCreator = (creatorId) => {
    return collections.filter(c => c.creatorId === creatorId);
  };

  // Get collection by ID
  const getCollection = (collectionId) => {
    return collections.find(c => c.id === collectionId);
  };

  // Get picks in collection
  const getPicksInCollection = (collectionId) => {
    const collection = getCollection(collectionId);
    if (!collection) return [];
    return picks.filter(p => collection.picks.includes(p.id));
  };

  // Follow/unfollow creator
  const toggleFollow = (creatorId) => {
    setFollowedCreators(prev => {
      if (prev.includes(creatorId)) {
        return prev.filter(id => id !== creatorId);
      }
      return [...prev, creatorId];
    });
  };

  // Check if following
  const isFollowing = (creatorId) => {
    return followedCreators.includes(creatorId);
  };

  // Save/unsave pick
  const toggleSavePick = (pickId) => {
    setSavedPicks(prev => {
      if (prev.includes(pickId)) {
        return prev.filter(id => id !== pickId);
      }
      return [...prev, pickId];
    });
  };

  // Check if pick is saved
  const isPickSaved = (pickId) => {
    return savedPicks.includes(pickId);
  };

  // Get trending picks
  const getTrendingPicks = () => {
    return [...picks].sort((a, b) => b.stats.views - a.stats.views).slice(0, 10);
  };

  // Get featured creators
  const getFeaturedCreators = () => {
    return creators.filter(c => c.tier === 'elite' || c.tier === 'gold').slice(0, 6);
  };

  // Get featured collections
  const getFeaturedCollections = () => {
    return collections.filter(c => c.featured);
  };

  // Search creators
  const searchCreators = (query) => {
    const lowerQuery = query.toLowerCase();
    return creators.filter(c =>
      c.name.toLowerCase().includes(lowerQuery) ||
      c.username.toLowerCase().includes(lowerQuery) ||
      c.specialties.some(s => s.toLowerCase().includes(lowerQuery))
    );
  };

  // Get UGC by creator
  const getUGCByCreator = (creatorId) => {
    return ugcContent.filter(u => u.creatorId === creatorId);
  };

  // Get products/services by creator
  const getProductsByCreator = (creatorId) => {
    return creatorProducts.filter(p => p.creatorId === creatorId);
  };

  // Get products only
  const getCreatorProductsOnly = (creatorId) => {
    return creatorProducts.filter(p => p.creatorId === creatorId && p.type === 'product');
  };

  // Get services only
  const getCreatorServicesOnly = (creatorId) => {
    return creatorProducts.filter(p => p.creatorId === creatorId && p.type === 'service');
  };

  const value = {
    creators,
    picks,
    collections,
    ugcContent,
    creatorProducts,
    followedCreators,
    savedPicks,
    getCreator,
    getCreatorByUsername,
    getPicksByCreator,
    getCollectionsByCreator,
    getCollection,
    getPicksInCollection,
    toggleFollow,
    isFollowing,
    toggleSavePick,
    isPickSaved,
    getTrendingPicks,
    getFeaturedCreators,
    getFeaturedCollections,
    searchCreators,
    getUGCByCreator,
    getProductsByCreator,
    getCreatorProductsOnly,
    getCreatorServicesOnly
  };

  return (
    <CreatorContext.Provider value={value}>
      {children}
    </CreatorContext.Provider>
  );
};

export const useCreator = () => {
  const context = useContext(CreatorContext);
  if (!context) {
    throw new Error('useCreator must be used within CreatorProvider');
  }
  return context;
};
