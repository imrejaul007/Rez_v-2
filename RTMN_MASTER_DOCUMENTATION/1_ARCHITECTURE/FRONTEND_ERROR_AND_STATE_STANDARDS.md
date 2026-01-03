# 🎨 Frontend Error & State Standards - RTMN Ecosystem

**Last Updated:** 2026-01-03
**Status:** ✅ MANDATORY UI/UX STANDARDS
**Purpose:** Standardized error handling, loading states, and fallback behavior across all apps

---

## ⚠️ THE CONSISTENCY PROBLEM

Without standards, every developer implements errors differently:

```javascript
// Developer A
if (error) {
  alert('Error occurred');
}

// Developer B
if (error) {
  showToast(error.message);
}

// Developer C
if (error) {
  setErrorState(error);
  logToSentry(error);
  showRetryButton();
}
```

**Result:** Inconsistent UX, poor error recovery, user confusion.

**This document provides DEFINITIVE UI standards.**

---

## 📊 ERROR CLASSIFICATION

### Error Types (DECLARED)

```javascript
const ERROR_TYPES = {
  // Network errors
  NETWORK_ERROR: {
    code: 'ERR_NETWORK',
    severity: 'high',
    retryable: true,
    userMessage: 'Connection lost. Please check your internet.',
    action: 'RETRY'
  },

  // Authentication errors
  AUTH_REQUIRED: {
    code: 'ERR_AUTH_REQUIRED',
    severity: 'critical',
    retryable: false,
    userMessage: 'Please log in to continue',
    action: 'LOGIN'
  },

  AUTH_EXPIRED: {
    code: 'ERR_AUTH_EXPIRED',
    severity: 'high',
    retryable: true,
    userMessage: 'Session expired. Logging you in again...',
    action: 'AUTO_REFRESH_TOKEN'
  },

  // Business logic errors
  INSUFFICIENT_COINS: {
    code: 'ERR_INSUFFICIENT_COINS',
    severity: 'medium',
    retryable: false,
    userMessage: 'Not enough coins. Earn more by shopping!',
    action: 'SHOW_EARN_COINS'
  },

  OUT_OF_STOCK: {
    code: 'ERR_OUT_OF_STOCK',
    severity: 'medium',
    retryable: false,
    userMessage: 'This item is currently out of stock',
    action: 'SHOW_ALTERNATIVES'
  },

  // Rate limiting
  RATE_LIMIT: {
    code: 'ERR_RATE_LIMIT',
    severity: 'medium',
    retryable: true,
    userMessage: 'Too many requests. Please wait a moment.',
    action: 'WAIT_AND_RETRY',
    retryAfter: 5000 // 5 seconds
  },

  // Server errors
  SERVER_ERROR: {
    code: 'ERR_SERVER',
    severity: 'critical',
    retryable: true,
    userMessage: 'Something went wrong. We\'re working on it.',
    action: 'RETRY',
    reportToSupport: true
  },

  // Validation errors
  VALIDATION_ERROR: {
    code: 'ERR_VALIDATION',
    severity: 'low',
    retryable: false,
    userMessage: 'Please check your input',
    action: 'SHOW_FIELD_ERRORS'
  }
};
```

---

## 🎯 STANDARD ERROR HANDLING FLOW

### Step-by-Step Error Processing

```javascript
// utils/errorHandler.js
class ErrorHandler {
  static handle(error, context) {
    // 1. Classify error
    const errorType = this.classify(error);

    // 2. Log to monitoring
    this.logError(error, errorType, context);

    // 3. Determine user action
    const userAction = this.getUserAction(errorType);

    // 4. Show appropriate UI
    this.showErrorUI(errorType, userAction);

    // 5. Execute recovery action
    this.executeRecovery(errorType, userAction, context);
  }

  static classify(error) {
    // Network errors
    if (!navigator.onLine) {
      return ERROR_TYPES.NETWORK_ERROR;
    }

    // HTTP status codes
    if (error.response) {
      const status = error.response.status;

      if (status === 401) return ERROR_TYPES.AUTH_REQUIRED;
      if (status === 403) return ERROR_TYPES.AUTH_EXPIRED;
      if (status === 429) return ERROR_TYPES.RATE_LIMIT;
      if (status === 409 && error.response.data?.code === 3001) {
        return ERROR_TYPES.OUT_OF_STOCK;
      }
      if (status >= 500) return ERROR_TYPES.SERVER_ERROR;
    }

    // Business logic errors (from API error code)
    if (error.response?.data?.error?.code) {
      const code = error.response.data.error.code;

      if (code === 7002) return ERROR_TYPES.INSUFFICIENT_COINS;
      // ... map other error codes
    }

    // Default
    return ERROR_TYPES.SERVER_ERROR;
  }

  static logError(error, errorType, context) {
    // Production logging
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error, {
        tags: {
          errorCode: errorType.code,
          severity: errorType.severity,
          screen: context.screen,
          userId: context.userId
        },
        extra: {
          errorType,
          context
        }
      });
    }

    // Development logging
    console.error('[ErrorHandler]', {
      error,
      errorType,
      context,
      stack: error.stack
    });
  }

  static showErrorUI(errorType, userAction) {
    // Critical errors: Full-screen error
    if (errorType.severity === 'critical') {
      NavigationService.navigate('ErrorScreen', {
        message: errorType.userMessage,
        action: userAction,
        retryable: errorType.retryable
      });
      return;
    }

    // High severity: Modal
    if (errorType.severity === 'high') {
      showModal({
        type: 'error',
        title: 'Oops!',
        message: errorType.userMessage,
        buttons: this.getActionButtons(userAction, errorType)
      });
      return;
    }

    // Medium/Low: Toast notification
    showToast({
      type: 'error',
      message: errorType.userMessage,
      duration: 3000,
      action: errorType.retryable ? 'Retry' : null
    });
  }

  static executeRecovery(errorType, userAction, context) {
    switch (userAction) {
      case 'RETRY':
        // Exponential backoff retry
        this.retryWithBackoff(context.retryFn, context.maxRetries || 3);
        break;

      case 'LOGIN':
        NavigationService.navigate('LoginScreen');
        break;

      case 'AUTO_REFRESH_TOKEN':
        AuthService.refreshToken().then(() => {
          // Retry original request
          context.retryFn();
        });
        break;

      case 'SHOW_EARN_COINS':
        NavigationService.navigate('EarnCoinsScreen');
        break;

      case 'SHOW_ALTERNATIVES':
        NavigationService.navigate('ProductListScreen', {
          category: context.product?.category
        });
        break;

      case 'WAIT_AND_RETRY':
        setTimeout(() => {
          context.retryFn();
        }, errorType.retryAfter);
        break;

      default:
        // No automatic recovery
        break;
    }
  }

  static retryWithBackoff(fn, maxRetries, attempt = 1) {
    const delay = Math.min(1000 * Math.pow(2, attempt), 10000); // Max 10s

    setTimeout(async () => {
      try {
        await fn();
      } catch (error) {
        if (attempt < maxRetries) {
          this.retryWithBackoff(fn, maxRetries, attempt + 1);
        } else {
          this.handle(error, { retryFn: fn, maxRetries: 0 });
        }
      }
    }, delay);
  }
}

export default ErrorHandler;
```

---

## 🔄 LOADING STATES STANDARDS

### Loading State Types

```javascript
const LOADING_STATES = {
  // Initial load
  INITIAL_LOADING: {
    type: 'skeleton',
    blockUI: true,
    showSpinner: false,
    timeout: 10000 // Show error after 10s
  },

  // Page refresh
  REFRESHING: {
    type: 'pull-to-refresh',
    blockUI: false,
    showSpinner: true,
    timeout: 5000
  },

  // Background sync
  SYNCING: {
    type: 'silent',
    blockUI: false,
    showIndicator: true, // Small badge
    timeout: 30000
  },

  // Action in progress
  SUBMITTING: {
    type: 'button-loading',
    blockUI: true,
    disableButton: true,
    timeout: 15000
  },

  // Infinite scroll
  LOADING_MORE: {
    type: 'bottom-spinner',
    blockUI: false,
    showSpinner: true,
    timeout: 5000
  }
};
```

### Standard Loading Components

```javascript
// components/LoadingStates.js
export const SkeletonLoader = ({ type }) => {
  switch (type) {
    case 'product-list':
      return (
        <View>
          {[1, 2, 3, 4].map(i => (
            <SkeletonCard key={i} width="100%" height={120} />
          ))}
        </View>
      );

    case 'product-detail':
      return (
        <View>
          <SkeletonImage width="100%" height={300} />
          <SkeletonText lines={2} />
          <SkeletonButton />
        </View>
      );

    case 'wallet':
      return (
        <View>
          <SkeletonCircle size={80} />
          <SkeletonText lines={3} centered />
        </View>
      );

    default:
      return <ActivityIndicator size="large" />;
  }
};

// Usage
function ProductListScreen() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  if (loading) {
    return <SkeletonLoader type="product-list" />;
  }

  return <ProductList products={products} />;
}
```

---

## 🎯 EMPTY STATES STANDARDS

### Empty State Types

```javascript
const EMPTY_STATES = {
  NO_DATA: {
    icon: 'inbox',
    title: 'Nothing here yet',
    message: 'Start exploring to see items',
    action: {
      label: 'Browse Products',
      route: 'ProductListScreen'
    }
  },

  NO_SEARCH_RESULTS: {
    icon: 'search',
    title: 'No results found',
    message: 'Try different keywords or browse categories',
    action: {
      label: 'Clear Search',
      onPress: () => clearSearch()
    }
  },

  NO_INTERNET: {
    icon: 'wifi-off',
    title: 'No internet connection',
    message: 'Please check your connection and try again',
    action: {
      label: 'Retry',
      onPress: () => retryConnection()
    }
  },

  PERMISSION_DENIED: {
    icon: 'lock',
    title: 'Permission required',
    message: 'Enable location access to see nearby stores',
    action: {
      label: 'Open Settings',
      onPress: () => Linking.openSettings()
    }
  }
};
```

---

## 🔔 NOTIFICATION STANDARDS

### Toast Notifications

```javascript
const TOAST_CONFIG = {
  success: {
    backgroundColor: '#10B981',
    icon: 'check-circle',
    duration: 2000
  },
  error: {
    backgroundColor: '#EF4444',
    icon: 'x-circle',
    duration: 3000
  },
  warning: {
    backgroundColor: '#F59E0B',
    icon: 'alert-triangle',
    duration: 3000
  },
  info: {
    backgroundColor: '#3B82F6',
    icon: 'info',
    duration: 2000
  }
};

// Standard usage
showToast({
  type: 'success',
  message: 'Order placed successfully!',
  action: {
    label: 'View Order',
    onPress: () => navigateToOrder(orderId)
  }
});
```

---

## 🎛️ OFFLINE MODE STANDARDS

### Offline Behavior Matrix

| Feature | Offline Behavior | User Feedback | Sync Strategy |
|---------|-----------------|---------------|---------------|
| **Browse Products** | ✅ Show cached | "Showing cached results" | Sync on reconnect |
| **Product Details** | ✅ Show cached | "May not be latest" | Validate on cart add |
| **Add to Cart** | ✅ Queue locally | "Will sync when online" | Sync on reconnect |
| **Checkout** | ❌ Block | "Internet required" | - |
| **Wallet Balance** | ✅ Show cached | "May not be current" | Refresh on reconnect |
| **Order Tracking** | ✅ Show last known | "Last updated: 5m ago" | Poll on reconnect |

### Offline Detection & UI

```javascript
// hooks/useOfflineDetection.js
import NetInfo from '@react-native-community/netinfo';

export function useOfflineDetection() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOffline(!state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return isOffline;
}

// Usage in App.js
function App() {
  const isOffline = useOfflineDetection();

  return (
    <>
      {isOffline && (
        <OfflineBanner
          message="You're offline. Some features may be limited."
          action="Retry"
          onPress={() => NetInfo.fetch()}
        />
      )}
      <MainNavigator />
    </>
  );
}
```

---

## 🔐 PERMISSION HANDLING STANDARDS

### Permission States

```javascript
const PERMISSION_STATES = {
  GRANTED: 'granted',
  DENIED: 'denied',
  BLOCKED: 'blocked', // User denied + "Don't ask again"
  NOT_REQUESTED: 'not_requested'
};

// Standard permission flow
async function requestLocationPermission() {
  // 1. Check current status
  const status = await Permissions.check('location');

  if (status === PERMISSION_STATES.GRANTED) {
    return true;
  }

  if (status === PERMISSION_STATES.BLOCKED) {
    // Show modal to open settings
    showModal({
      title: 'Location Permission Blocked',
      message: 'Please enable location in Settings to see nearby stores',
      buttons: [
        { label: 'Cancel', style: 'cancel' },
        { label: 'Open Settings', onPress: () => Linking.openSettings() }
      ]
    });
    return false;
  }

  // 2. Show rationale BEFORE requesting
  const shouldRequest = await showPermissionRationale({
    title: 'Location Access',
    message: 'We use your location to show nearby stores and delivery options',
    benefits: [
      'See stores near you',
      'Accurate delivery estimates',
      'Personalized recommendations'
    ]
  });

  if (!shouldRequest) return false;

  // 3. Request permission
  const result = await Permissions.request('location');

  if (result === PERMISSION_STATES.GRANTED) {
    return true;
  }

  // 4. Handle denial
  showToast({
    type: 'warning',
    message: 'Location access denied. You can enable it later in Settings.'
  });

  return false;
}
```

---

## ✅ UI STANDARDS CHECKLIST

Before implementing ANY screen:

- [ ] Error handling implemented with ErrorHandler?
- [ ] Loading states use standard components?
- [ ] Empty states defined for all data scenarios?
- [ ] Offline behavior specified?
- [ ] Toast notifications use standard config?
- [ ] Permission flows follow standard pattern?
- [ ] Retry logic uses exponential backoff?
- [ ] Errors logged to monitoring (Sentry)?
- [ ] User-facing messages are friendly (not technical)?
- [ ] Recovery actions are clear and actionable?

**If ANY checkbox unchecked → Screen NOT production-ready**

---

## 🎯 SUMMARY

### Mandatory Standards

1. **Error Classification** → Use ERROR_TYPES enum
2. **Error Handling** → Use ErrorHandler class
3. **Loading States** → Use LOADING_STATES + SkeletonLoader
4. **Empty States** → Use EMPTY_STATES templates
5. **Toasts** → Use TOAST_CONFIG
6. **Offline** → Use offline behavior matrix
7. **Permissions** → Use standard permission flow

### Key Principles

✅ **Consistency** → Same error = Same UX across all apps
✅ **Recovery** → Always provide a path forward
✅ **Feedback** → User always knows what's happening
✅ **Graceful** → Degrade gracefully (offline, slow network)
✅ **Helpful** → Messages explain WHY and WHAT TO DO

---

**Status:** ✅ MANDATORY UI/UX STANDARDS
**Applies To:** All RTMN apps (ReZ, Wasil, Discovery, Admin, BizOne)
**Last Updated:** 2026-01-03

