# ReZ - React Native Technical Architecture

## 📱 Platform Overview

### Why React Native?

**Advantages for ReZ:**
1. ✅ **Cross-platform** - Single codebase for iOS & Android (saves 40-50% development time)
2. ✅ **Performance** - Native-like performance with bridge to native modules
3. ✅ **Hot Reload** - Faster development iteration
4. ✅ **Large ecosystem** - Rich library ecosystem (npm)
5. ✅ **Cost-effective** - One team instead of separate iOS/Android teams
6. ✅ **Web sharing** - Can share significant code with React web dashboards (Admin/Merchant)
7. ✅ **Community** - Large community, easy hiring

**Trade-offs:**
- ⚠️ Bridge performance (handled with native modules for critical features)
- ⚠️ App size (~30-50MB larger than native)
- ✅ Mitigated with: Code splitting, lazy loading, optimized builds

---

# 🏗️ Technology Stack

## Frontend (Mobile App)

### Core Technologies
```javascript
{
  "framework": "React Native",
  "version": "0.73+",
  "language": "TypeScript",
  "navigation": "React Navigation v6",
  "stateManagement": "Redux Toolkit + React Query",
  "styling": "NativeWind (Tailwind for RN) + Styled Components",
  "animations": "Reanimated v3 + Moti",
  "gestures": "React Native Gesture Handler",
  "forms": "React Hook Form + Zod",
  "testing": "Jest + React Native Testing Library"
}
```

### Key Libraries

#### UI & Styling
```json
{
  "nativewind": "^4.0.0",  // Tailwind CSS for React Native
  "@shopify/restyle": "^2.4.0",  // Type-safe styling system
  "react-native-reanimated": "^3.6.0",  // Smooth animations
  "moti": "^0.27.0",  // Declarative animations
  "react-native-svg": "^14.0.0",  // SVG support
  "react-native-linear-gradient": "^2.8.0",  // Gradients
  "react-native-fast-image": "^8.6.3",  // Optimized images
  "lottie-react-native": "^6.4.0"  // Lottie animations
}
```

#### Navigation & Routing
```json
{
  "@react-navigation/native": "^6.1.9",
  "@react-navigation/bottom-tabs": "^6.5.11",
  "@react-navigation/stack": "^6.3.20",
  "@react-navigation/drawer": "^6.6.6",
  "react-native-screens": "^3.29.0",
  "react-native-safe-area-context": "^4.8.0"
}
```

#### State Management
```json
{
  "@reduxjs/toolkit": "^2.0.1",  // State management
  "react-redux": "^9.0.4",
  "@tanstack/react-query": "^5.14.0",  // Server state
  "zustand": "^4.4.7",  // Lightweight local state
  "redux-persist": "^6.0.0",  // Persist state
  "@react-native-async-storage/async-storage": "^1.21.0"
}
```

#### Networking
```json
{
  "axios": "^1.6.2",  // HTTP client
  "socket.io-client": "^4.6.0",  // Real-time
  "react-native-mmkv": "^2.11.0",  // Fast storage
  "@react-native-community/netinfo": "^11.1.0"  // Network status
}
```

#### Device Features
```json
{
  "react-native-camera": "^4.2.1",  // Camera (QR scan)
  "react-native-permissions": "^4.0.0",  // Permissions
  "react-native-geolocation-service": "^5.3.1",  // Location
  "react-native-push-notification": "^8.1.1",  // Push notifications
  "@react-native-firebase/messaging": "^19.0.0",  // FCM
  "react-native-device-info": "^10.12.0",  // Device info
  "react-native-biometrics": "^3.0.1",  // Fingerprint/Face ID
  "@react-native-community/clipboard": "^1.5.1"  // Clipboard
}
```

#### Maps & Location
```json
{
  "react-native-maps": "^1.10.0",  // Google Maps
  "react-native-google-places-autocomplete": "^2.5.1"
}
```

#### Payment Integration
```json
{
  "react-native-razorpay": "^2.3.0",  // Razorpay
  "@paytm/paytm-blink-checkout-react-native": "^1.0.0",  // Paytm
  "react-native-upi-payment": "^1.1.0"  // UPI
}
```

#### Media & Content
```json
{
  "react-native-video": "^5.2.1",  // Video player
  "react-native-image-picker": "^7.0.0",  // Image picker
  "react-native-image-crop-picker": "^0.40.0",  // Crop images
  "react-native-share": "^10.0.0",  // Share functionality
  "react-native-pdf": "^6.7.3"  // PDF viewer
}
```

#### Analytics & Monitoring
```json
{
  "@react-native-firebase/analytics": "^19.0.0",  // Firebase Analytics
  "@react-native-firebase/crashlytics": "^19.0.0",  // Crash reporting
  "@sentry/react-native": "^5.15.0",  // Error tracking
  "react-native-performance": "^5.1.0"  // Performance monitoring
}
```

#### Utilities
```json
{
  "date-fns": "^3.0.0",  // Date manipulation
  "lodash": "^4.17.21",  // Utility functions
  "react-native-uuid": "^2.0.1",  // UUID generation
  "yup": "^1.3.3",  // Validation
  "i18next": "^23.7.8",  // Internationalization
  "react-i18next": "^14.0.0"
}
```

---

## Backend Stack

### API Server
```javascript
{
  "runtime": "Node.js v20 LTS",
  "framework": "Express.js v4",
  "language": "TypeScript",
  "apiStyle": "RESTful + GraphQL (for complex queries)",
  "documentation": "Swagger/OpenAPI 3.0"
}
```

### Databases
```javascript
{
  "primary": {
    "name": "PostgreSQL 15",
    "use": "Transactional data",
    "orm": "Prisma v5",
    "features": [
      "ACID compliance",
      "Complex queries",
      "Joins & relations",
      "Data integrity"
    ]
  },

  "cache": {
    "name": "Redis 7",
    "use": "Caching, sessions, real-time",
    "client": "ioredis",
    "features": [
      "Session storage",
      "Rate limiting",
      "Real-time pub/sub",
      "Leaderboards"
    ]
  },

  "documentStore": {
    "name": "MongoDB 7",
    "use": "Logs, analytics, flexible schema",
    "odm": "Mongoose v8",
    "features": [
      "Activity logs",
      "Analytics events",
      "UGC content",
      "Flexible documents"
    ]
  },

  "search": {
    "name": "Elasticsearch 8",
    "use": "Full-text search",
    "client": "@elastic/elasticsearch",
    "features": [
      "Product search",
      "Merchant search",
      "Autocomplete",
      "Faceted search"
    ]
  }
}
```

### Cloud Infrastructure
```javascript
{
  "hosting": "AWS (Amazon Web Services)",
  "services": {
    "compute": "AWS ECS (Fargate) - Containerized microservices",
    "cdn": "AWS CloudFront - Static assets & images",
    "storage": "AWS S3 - User uploads, media",
    "database": "AWS RDS (PostgreSQL) + DocumentDB (MongoDB)",
    "cache": "AWS ElastiCache (Redis)",
    "search": "AWS OpenSearch (Elasticsearch)",
    "queue": "AWS SQS + EventBridge - Message queuing",
    "notifications": {
      "push": "AWS SNS + Firebase Cloud Messaging",
      "email": "AWS SES (Simple Email Service)",
      "sms": "AWS SNS + Twilio"
    },
    "monitoring": "AWS CloudWatch + Datadog",
    "logging": "AWS CloudWatch Logs + ELK Stack"
  }
}
```

### Authentication & Security
```javascript
{
  "authentication": {
    "strategy": "JWT (JSON Web Tokens)",
    "refresh": "Refresh token rotation",
    "2fa": "TOTP (Time-based OTP) + SMS OTP",
    "biometric": "Device-based (Face ID / Fingerprint)",
    "library": "jsonwebtoken, bcrypt"
  },

  "authorization": {
    "model": "RBAC (Role-Based Access Control)",
    "library": "casbin",
    "levels": ["Super Admin", "Operations Admin", "Merchant", "User", "Privé"]
  },

  "security": {
    "encryption": {
      "atRest": "AES-256",
      "inTransit": "TLS 1.3",
      "sensitive": "RSA 2048-bit (for wallet, bank details)"
    },
    "rateLimit": "express-rate-limit + Redis",
    "ddosProtection": "AWS Shield + CloudFlare",
    "firewall": "AWS WAF",
    "secrets": "AWS Secrets Manager"
  }
}
```

### Real-time Features
```javascript
{
  "websockets": "Socket.IO v4",
  "uses": [
    "Live order tracking",
    "Real-time notifications",
    "Live event updates",
    "Admin dashboard live stats",
    "Chat support"
  ]
}
```

### File Storage & CDN
```javascript
{
  "storage": {
    "images": "AWS S3 + CloudFront CDN",
    "videos": "AWS S3 + CloudFront + MediaConvert",
    "documents": "AWS S3",
    "optimization": {
      "images": "Sharp (resize, compress)",
      "videos": "FFmpeg (transcode)"
    }
  }
}
```

### Payment Gateways
```javascript
{
  "gateways": [
    {
      "name": "Razorpay",
      "use": "Primary payment gateway",
      "features": ["Cards", "UPI", "Netbanking", "Wallets", "EMI"]
    },
    {
      "name": "Paytm",
      "use": "Alternative + Paytm wallet",
      "features": ["Paytm Wallet", "UPI", "Cards"]
    },
    {
      "name": "PhonePe",
      "use": "UPI payments",
      "features": ["UPI", "Wallet"]
    }
  ],

  "bnpl": [
    {
      "name": "Simpl",
      "use": "Buy Now Pay Later"
    },
    {
      "name": "ZestMoney",
      "use": "EMI / Installments"
    }
  ]
}
```

### Third-Party Integrations
```javascript
{
  "sms": "Twilio, MSG91",
  "email": "SendGrid, AWS SES",
  "push": "Firebase Cloud Messaging (FCM)",
  "analytics": {
    "app": "Firebase Analytics, Mixpanel",
    "web": "Google Analytics 4",
    "events": "Segment (CDP)"
  },
  "maps": "Google Maps Platform",
  "ocr": "Google Cloud Vision API (bill scanning)",
  "fraud": "Sift, MaxMind",
  "support": "Intercom, Zendesk"
}
```

---

# 📐 Application Architecture

## Architecture Pattern

**Microservices Architecture** (Modular Monolith → Microservices)

### Phase 1: Modular Monolith (MVP)
```
Single deployment with clear module boundaries
Easy to develop, test, and deploy initially
Can extract microservices later as needed
```

### Phase 2: Microservices (Scale)
```
Separate services for high-load components
- User Service
- Merchant Service
- Transaction Service
- Coin Service
- Notification Service
- Analytics Service
```

---

## Mobile App Architecture

### Folder Structure
```
rez-app/
├── src/
│   ├── app/                    # App entry point
│   │   ├── App.tsx
│   │   ├── navigation/         # Navigation setup
│   │   └── providers/          # Context providers
│   │
│   ├── features/               # Feature-based modules
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── screens/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── store/          # Redux slices
│   │   │   └── types/
│   │   │
│   │   ├── home/
│   │   ├── explore/
│   │   ├── earn/
│   │   ├── wallet/
│   │   ├── profile/
│   │   ├── cashStore/
│   │   ├── rezMall/
│   │   ├── rezPrive/
│   │   ├── events/
│   │   ├── games/
│   │   ├── social/
│   │   └── ...
│   │
│   ├── components/             # Shared components
│   │   ├── ui/                 # UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── BottomNav.tsx
│   │   │   ├── Container.tsx
│   │   │   └── ...
│   │   │
│   │   └── domain/             # Domain components
│   │       ├── StoreCard.tsx
│   │       ├── OfferCard.tsx
│   │       ├── CoinBadge.tsx
│   │       └── ...
│   │
│   ├── lib/                    # Utilities & helpers
│   │   ├── api/                # API client
│   │   │   ├── client.ts
│   │   │   ├── endpoints/
│   │   │   └── interceptors/
│   │   │
│   │   ├── utils/              # Utility functions
│   │   │   ├── formatting.ts
│   │   │   ├── validation.ts
│   │   │   ├── date.ts
│   │   │   └── ...
│   │   │
│   │   ├── hooks/              # Custom hooks
│   │   │   ├── useDebounce.ts
│   │   │   ├── useThrottle.ts
│   │   │   ├── useLocation.ts
│   │   │   └── ...
│   │   │
│   │   └── constants/          # Constants
│   │       ├── colors.ts
│   │       ├── config.ts
│   │       └── ...
│   │
│   ├── store/                  # Global state
│   │   ├── index.ts
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── walletSlice.ts
│   │   │   ├── appSlice.ts
│   │   │   └── ...
│   │   └── middleware/
│   │
│   ├── services/               # API services
│   │   ├── authService.ts
│   │   ├── userService.ts
│   │   ├── merchantService.ts
│   │   ├── coinService.ts
│   │   └── ...
│   │
│   ├── types/                  # TypeScript types
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Merchant.ts
│   │   │   ├── Transaction.ts
│   │   │   └── ...
│   │   └── api/
│   │
│   ├── assets/                 # Static assets
│   │   ├── images/
│   │   ├── icons/
│   │   ├── fonts/
│   │   └── lottie/
│   │
│   └── theme/                  # Theme configuration
│       ├── colors.ts
│       ├── typography.ts
│       ├── spacing.ts
│       └── index.ts
│
├── android/                    # Android native code
├── ios/                        # iOS native code
├── __tests__/                  # Tests
├── .env.example
├── app.json
├── package.json
└── tsconfig.json
```

---

## State Management Strategy

### Redux Toolkit (Global App State)
```typescript
// store/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
  } as AuthState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
```

### React Query (Server State)
```typescript
// features/home/hooks/useStores.ts
import { useQuery } from '@tanstack/react-query';
import { getStoresNearby } from '../services/storeService';

export const useStoresNearby = (lat: number, lng: number) => {
  return useQuery({
    queryKey: ['stores', 'nearby', lat, lng],
    queryFn: () => getStoresNearby(lat, lng),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
  });
};
```

### Zustand (Lightweight UI State)
```typescript
// features/explore/store/filterStore.ts
import create from 'zustand';

interface FilterState {
  mode: 'all' | 'halal' | 'vegan' | 'veg' | 'adult' | 'occasion' | 'vibes' | 'prive';
  category: string | null;
  sortBy: 'relevance' | 'distance' | 'rating' | 'savings';
  setMode: (mode: FilterState['mode']) => void;
  setCategory: (category: string | null) => void;
  setSortBy: (sortBy: FilterState['sortBy']) => void;
  reset: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  mode: 'all',
  category: null,
  sortBy: 'relevance',
  setMode: (mode) => set({ mode }),
  setCategory: (category) => set({ category }),
  setSortBy: (sortBy) => set({ sortBy }),
  reset: () => set({ mode: 'all', category: null, sortBy: 'relevance' }),
}));
```

---

## API Client Setup

### Axios Configuration
```typescript
// lib/api/client.ts
import axios from 'axios';
import { store } from '@/store';
import { logout } from '@/store/slices/authSlice';

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://api.rezapp.in/v1',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const { token } = store.getState().auth;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired - logout
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### API Service Example
```typescript
// services/coinService.ts
import apiClient from '@/lib/api/client';

export interface CoinBalance {
  rezCoins: number;
  brandedCoins: number;
  priveCoins: number;
  promoCoins: number;
  total: number;
}

export const coinService = {
  getBalance: async (): Promise<CoinBalance> => {
    return apiClient.get('/coins/balance');
  },

  getHistory: async (limit = 20, offset = 0) => {
    return apiClient.get('/coins/history', {
      params: { limit, offset },
    });
  },

  redeem: async (amount: number) => {
    return apiClient.post('/coins/redeem', { amount });
  },
};
```

---

## Navigation Structure

### Navigation Architecture
```typescript
// app/navigation/RootNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Earn" component={EarnScreen} />
    <Tab.Screen name="Wallet" component={WalletScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

// Root Navigator
const RootNavigator = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          // Auth Stack
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        ) : (
          // Main App Stack
          <>
            <Stack.Screen
              name="MainTabs"
              component={MainTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="StoreDetail" component={StoreDetailScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen name="QRScanner" component={QRScannerScreen} />
            {/* ... more screens */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

---

## Performance Optimization

### Code Splitting & Lazy Loading
```typescript
// Lazy load heavy screens
import { lazy, Suspense } from 'react';

const RezPriveScreen = lazy(() => import('@/features/rezPrive/screens/RezPriveScreen'));
const EventsScreen = lazy(() => import('@/features/events/screens/EventsScreen'));

// Usage
<Suspense fallback={<LoadingScreen />}>
  <RezPriveScreen />
</Suspense>
```

### Image Optimization
```typescript
// Use FastImage for better performance
import FastImage from 'react-native-fast-image';

<FastImage
  source={{
    uri: 'https://cdn.rezapp.in/stores/logo.jpg',
    priority: FastImage.priority.normal,
    cache: FastImage.cacheControl.immutable,
  }}
  style={{ width: 100, height: 100 }}
  resizeMode={FastImage.resizeMode.cover}
/>
```

### List Optimization
```typescript
// Use FlashList instead of FlatList
import { FlashList } from '@shopify/flash-list';

<FlashList
  data={stores}
  renderItem={({ item }) => <StoreCard store={item} />}
  estimatedItemSize={120}
  keyExtractor={(item) => item.id}
/>
```

### Memo & Callbacks
```typescript
import { memo, useCallback, useMemo } from 'react';

const StoreCard = memo(({ store, onPress }: StoreCardProps) => {
  const savings = useMemo(() =>
    calculateSavings(store.discount, store.cashback),
    [store.discount, store.cashback]
  );

  const handlePress = useCallback(() => {
    onPress(store.id);
  }, [store.id, onPress]);

  return (
    <TouchableOpacity onPress={handlePress}>
      {/* Card content */}
    </TouchableOpacity>
  );
});
```

---

## Offline Support

### Redux Persist Configuration
```typescript
// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'wallet', 'cart'], // Persist these slices
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
```

### Offline Queue
```typescript
// lib/utils/offlineQueue.ts
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

class OfflineQueue {
  private queue: QueueItem[] = [];
  private isProcessing = false;

  async addToQueue(request: QueueItem) {
    this.queue.push(request);
    await this.saveQueue();
    this.processQueue();
  }

  async processQueue() {
    if (this.isProcessing) return;

    const networkState = await NetInfo.fetch();
    if (!networkState.isConnected) return;

    this.isProcessing = true;

    while (this.queue.length > 0) {
      const item = this.queue[0];
      try {
        await apiClient.request(item.config);
        this.queue.shift();
        await this.saveQueue();
      } catch (error) {
        // Retry logic or keep in queue
        break;
      }
    }

    this.isProcessing = false;
  }

  private async saveQueue() {
    await AsyncStorage.setItem('offline_queue', JSON.stringify(this.queue));
  }
}

export const offlineQueue = new OfflineQueue();
```

---

## Push Notifications

### Firebase Cloud Messaging Setup
```typescript
// lib/notifications/fcm.ts
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

class NotificationService {
  async initialize() {
    // Request permission
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      // Get FCM token
      const token = await messaging().getToken();
      await this.sendTokenToServer(token);

      // Listen for token refresh
      messaging().onTokenRefresh(this.sendTokenToServer);

      // Handle foreground messages
      messaging().onMessage(async (remoteMessage) => {
        this.showNotification(remoteMessage);
      });

      // Handle background messages
      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log('Message handled in the background!', remoteMessage);
      });
    }
  }

  private showNotification(remoteMessage: any) {
    PushNotification.localNotification({
      title: remoteMessage.notification?.title,
      message: remoteMessage.notification?.body,
      playSound: true,
      soundName: 'default',
      data: remoteMessage.data,
    });
  }

  private async sendTokenToServer(token: string) {
    // Send token to your backend
    await apiClient.post('/users/fcm-token', { token });
  }
}

export const notificationService = new NotificationService();
```

---

## Deep Linking

### Deep Link Configuration
```typescript
// app/navigation/linking.ts
const linking = {
  prefixes: ['rezapp://', 'https://rezapp.in', 'https://www.rezapp.in'],
  config: {
    screens: {
      Home: 'home',
      StoreDetail: 'store/:storeId',
      ProductDetail: 'product/:productId',
      OfferDetail: 'offer/:offerId',
      EventDetail: 'event/:eventId',
      Checkout: 'checkout',
      Profile: 'profile',
      Wallet: 'wallet',
      // Universal links
      PayInStore: 'pay-in-store/:merchantId',
      QRScanner: 'scan',
    },
  },
};

// Usage in NavigationContainer
<NavigationContainer linking={linking}>
  {/* ... */}
</NavigationContainer>
```

### Handle Deep Links
```typescript
// Example: rezapp://store/123
// or https://rezapp.in/store/123

// Automatically navigates to StoreDetailScreen with storeId = 123
```

---

## Testing Strategy

### Unit Tests (Jest)
```typescript
// features/wallet/__tests__/coinCalculator.test.ts
import { calculateCoins } from '../utils/coinCalculator';

describe('Coin Calculator', () => {
  it('should calculate 10% coins for regular purchase', () => {
    const result = calculateCoins(1000, 'regular');
    expect(result).toBe(100);
  });

  it('should calculate 20% coins for Privé members', () => {
    const result = calculateCoins(1000, 'prive');
    expect(result).toBe(200);
  });

  it('should cap coins at maximum limit', () => {
    const result = calculateCoins(100000, 'regular', { max: 5000 });
    expect(result).toBe(5000);
  });
});
```

### Component Tests
```typescript
// components/ui/__tests__/Button.test.tsx
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button title="Click me" />);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('calls onPress when clicked', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button title="Click me" onPress={onPress} />);

    fireEvent.press(getByText('Click me'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
```

### E2E Tests (Detox)
```typescript
// e2e/wallet.e2e.ts
describe('Wallet Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show coin balance', async () => {
    await element(by.id('wallet-tab')).tap();
    await expect(element(by.id('coin-balance'))).toBeVisible();
  });

  it('should navigate to coin history', async () => {
    await element(by.id('view-history-button')).tap();
    await expect(element(by.id('coin-history-list'))).toBeVisible();
  });
});
```

---

## Build & Deployment

### Environment Configuration
```bash
# .env.development
API_BASE_URL=https://dev-api.rezapp.in/v1
ENVIRONMENT=development
ENABLE_LOGGING=true

# .env.staging
API_BASE_URL=https://staging-api.rezapp.in/v1
ENVIRONMENT=staging
ENABLE_LOGGING=true

# .env.production
API_BASE_URL=https://api.rezapp.in/v1
ENVIRONMENT=production
ENABLE_LOGGING=false
```

### Build Scripts
```json
{
  "scripts": {
    "android:dev": "react-native run-android --variant=developmentDebug",
    "android:staging": "react-native run-android --variant=stagingRelease",
    "android:prod": "cd android && ./gradlew assembleRelease",
    "ios:dev": "react-native run-ios --scheme ReZ-Dev",
    "ios:staging": "react-native run-ios --scheme ReZ-Staging",
    "ios:prod": "cd ios && xcodebuild -workspace ReZ.xcworkspace -scheme ReZ-Prod -configuration Release",
    "build:android": "cd android && ./gradlew bundleRelease",
    "build:ios": "cd ios && xcodebuild archive",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint .",
    "type-check": "tsc --noEmit"
  }
}
```

### CI/CD Pipeline (GitHub Actions)
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test:coverage

  build-android:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - uses: actions/setup-java@v3
        with:
          java-version: '17'
      - run: npm install
      - run: cd android && ./gradlew assembleRelease
      - uses: actions/upload-artifact@v3
        with:
          name: android-release
          path: android/app/build/outputs/apk/release/

  build-ios:
    needs: test
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: cd ios && pod install
      - run: xcodebuild -workspace ios/ReZ.xcworkspace -scheme ReZ -configuration Release
```

---

## Security Best Practices

### Secure Storage
```typescript
// Use encrypted storage for sensitive data
import * as Keychain from 'react-native-keychain';

// Store credentials
await Keychain.setGenericPassword('username', 'password', {
  service: 'com.rezapp.auth',
  accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
});

// Retrieve credentials
const credentials = await Keychain.getGenericPassword({
  service: 'com.rezapp.auth',
});
```

### API Key Protection
```typescript
// Never hardcode API keys in code
// Use environment variables + code obfuscation

// android/app/build.gradle
buildTypes {
  release {
    buildConfigField "String", "API_KEY", "\"${process.env.API_KEY}\""
    minifyEnabled true
    shrinkResources true
    proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
  }
}
```

### Certificate Pinning
```typescript
// Prevent man-in-the-middle attacks
// android/app/src/main/res/xml/network_security_config.xml
<network-security-config>
  <domain-config>
    <domain includeSubdomains="true">api.rezapp.in</domain>
    <pin-set expiration="2025-12-31">
      <pin digest="SHA-256">base64_encoded_pin=</pin>
      <pin digest="SHA-256">backup_base64_encoded_pin=</pin>
    </pin-set>
  </domain-config>
</network-security-config>
```

---

## Monitoring & Analytics

### Error Tracking (Sentry)
```typescript
// app/App.tsx
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://your-dsn@sentry.io/project-id',
  environment: process.env.ENVIRONMENT,
  tracesSampleRate: 1.0,
  beforeSend(event, hint) {
    // Filter out sensitive data
    if (event.request) {
      delete event.request.cookies;
      delete event.request.headers;
    }
    return event;
  },
});
```

### Performance Monitoring
```typescript
// Track screen load time
import { startScreenLoadMeasure, stopScreenLoadMeasure } from '@/lib/performance';

useEffect(() => {
  const measureId = startScreenLoadMeasure('HomeScreen');

  // Load data...

  stopScreenLoadMeasure(measureId);
}, []);
```

### Analytics Events
```typescript
// lib/analytics/events.ts
import analytics from '@react-native-firebase/analytics';

export const logEvent = {
  screenView: (screenName: string) => {
    analytics().logScreenView({ screen_name: screenName });
  },

  purchaseCompleted: (transactionId: string, value: number) => {
    analytics().logEvent('purchase', {
      transaction_id: transactionId,
      value,
      currency: 'INR',
    });
  },

  coinEarned: (amount: number, source: string) => {
    analytics().logEvent('coin_earned', {
      value: amount,
      source,
    });
  },
};
```

---

## App Size Optimization

### Bundle Size Reduction
```bash
# Enable Hermes engine (faster startup, smaller bundle)
# android/app/build.gradle
project.ext.react = [
    enableHermes: true
]

# Use ProGuard for code minification
# android/app/proguard-rules.pro
-keep class com.facebook.react.** { *; }
-keep class com.rezapp.** { *; }
```

### Asset Optimization
- Use WebP images (30-40% smaller than PNG/JPEG)
- Compress images before bundling
- Use vector icons (react-native-vector-icons)
- Lazy load heavy assets

---

This completes the React Native Technical Architecture!

**Next documents to create:**
1. Database Schema Design
2. API Architecture & Endpoints
3. Phased Development Roadmap

Should I proceed with these?
