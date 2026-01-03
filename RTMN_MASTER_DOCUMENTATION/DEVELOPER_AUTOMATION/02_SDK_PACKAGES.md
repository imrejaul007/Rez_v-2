# Rabtul SDK Packages - Ready-to-Use Implementation

**Purpose**: Pre-built SDK packages that ALL apps MUST use. No direct API calls allowed.

**What Developers Get**:
- ✅ `@rabtul/auth-sdk` - Authentication & user management
- ✅ `@rabtul/wallet-sdk` - Wallet operations & coin management
- ✅ `@rabtul/order-sdk` - Order creation & lifecycle
- ✅ `@rabtul/rules-sdk` - Business rule validation
- ✅ `@rabtul/analytics-sdk` - Event tracking & attribution
- ✅ Complete TypeScript support with types
- ✅ Automatic request signing & validation
- ✅ Built-in error handling & retry logic

---

## 1. Quick Start

### Installation
```bash
# Install all Rabtul SDKs
npm install @rabtul/auth-sdk @rabtul/wallet-sdk @rabtul/order-sdk @rabtul/rules-sdk @rabtul/analytics-sdk

# Or install individually
npm install @rabtul/auth-sdk
```

### Configuration
```javascript
// config/rabtul.config.js
module.exports = {
  apiKey: process.env.RABTUL_API_KEY,
  apiSecret: process.env.RABTUL_API_SECRET,
  baseURL: process.env.RABTUL_BASE_URL || 'https://api.rabtul.com',
  appId: process.env.APP_ID, // 'rez-app', 'bizone', etc.
  environment: process.env.NODE_ENV || 'development'
};
```

---

## 2. SDK Package: @rabtul/auth-sdk

### 2.1 Package Structure
```
packages/auth-sdk/
├── src/
│   ├── index.ts
│   ├── RabtulAuthSDK.ts
│   ├── types.ts
│   └── utils/
│       ├── request-signer.ts
│       └── error-handler.ts
├── package.json
├── tsconfig.json
└── README.md
```

### 2.2 Complete Implementation

#### `src/index.ts`
```typescript
export { RabtulAuthSDK } from './RabtulAuthSDK';
export * from './types';
```

#### `src/types.ts`
```typescript
export interface AuthConfig {
  apiKey: string;
  apiSecret: string;
  baseURL: string;
  appId: string;
  timeout?: number;
}

export interface OTPResponse {
  success: boolean;
  session_id: string;
  expires_at: string;
  retry_after?: number;
}

export interface VerifyOTPResponse {
  success: boolean;
  access_token: string;
  refresh_token: string;
  expires_in: number;
  user: {
    id: string;
    phone: string;
    email?: string;
    loyalty_tier: 'basic' | 'silver' | 'gold' | 'prive';
    profile: {
      first_name: string;
      last_name: string;
      avatar_url?: string;
    };
  };
}

export interface RefreshTokenResponse {
  success: boolean;
  access_token: string;
  expires_in: number;
}

export interface User {
  id: string;
  phone: string;
  email?: string;
  loyalty_tier: string;
  status: string;
  created_at: string;
}
```

#### `src/RabtulAuthSDK.ts`
```typescript
import crypto from 'crypto';
import axios, { AxiosInstance } from 'axios';
import { AuthConfig, OTPResponse, VerifyOTPResponse, RefreshTokenResponse, User } from './types';

export class RabtulAuthSDK {
  private config: AuthConfig;
  private client: AxiosInstance;

  constructor(config: AuthConfig) {
    this.config = {
      timeout: 10000,
      ...config
    };

    // Create axios instance with SDK headers
    this.client = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      headers: {
        'X-SDK-Name': '@rabtul/auth-sdk',
        'X-SDK-Version': '1.0.0',
        'X-App-ID': this.config.appId,
        'X-API-Key': this.config.apiKey
      }
    });

    // Add request interceptor for signing
    this.client.interceptors.request.use((config) => {
      const timestamp = Date.now().toString();
      const signature = this.signRequest(config.data || {}, timestamp);

      config.headers['X-Request-Timestamp'] = timestamp;
      config.headers['X-Request-Signature'] = signature;

      return config;
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        throw this.handleError(error);
      }
    );
  }

  /**
   * Send OTP to user's phone number
   */
  async sendOTP(phone: string): Promise<OTPResponse> {
    const response = await this.client.post('/auth/send-otp', {
      phone,
      app_id: this.config.appId
    });

    return response.data;
  }

  /**
   * Verify OTP and get authentication tokens
   */
  async verifyOTP(sessionId: string, otpCode: string): Promise<VerifyOTPResponse> {
    const response = await this.client.post('/auth/verify-otp', {
      session_id: sessionId,
      otp_code: otpCode,
      app_id: this.config.appId
    });

    return response.data;
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<RefreshTokenResponse> {
    const response = await this.client.post('/auth/refresh-token', {
      refresh_token: refreshToken,
      app_id: this.config.appId
    });

    return response.data;
  }

  /**
   * Get current user profile
   */
  async getCurrentUser(accessToken: string): Promise<User> {
    const response = await this.client.get('/auth/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    return response.data.user;
  }

  /**
   * Logout user (invalidate tokens)
   */
  async logout(accessToken: string): Promise<void> {
    await this.client.post('/auth/logout', {}, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
  }

  /**
   * Sign request with HMAC-SHA256
   */
  private signRequest(payload: any, timestamp: string): string {
    const data = JSON.stringify(payload) + timestamp;
    return crypto
      .createHmac('sha256', this.config.apiSecret)
      .update(data)
      .digest('hex');
  }

  /**
   * Handle API errors
   */
  private handleError(error: any): Error {
    if (error.response) {
      // Server responded with error
      const { status, data } = error.response;

      switch (status) {
        case 401:
          return new Error('AUTH_EXPIRED: Session expired. Please login again.');
        case 403:
          return new Error('FORBIDDEN: Access denied. Check your API credentials.');
        case 429:
          return new Error('RATE_LIMIT: Too many requests. Please try again later.');
        default:
          return new Error(data.message || 'An error occurred during authentication.');
      }
    } else if (error.request) {
      // No response received
      return new Error('NETWORK_ERROR: Unable to reach authentication server.');
    } else {
      // Request setup error
      return new Error(error.message);
    }
  }
}
```

#### `package.json`
```json
{
  "name": "@rabtul/auth-sdk",
  "version": "1.0.0",
  "description": "Rabtul Authentication SDK - Mandatory for all RTMN apps",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "prepublishOnly": "npm run build"
  },
  "keywords": ["rabtul", "auth", "rtmn", "sdk"],
  "author": "Rabtul Tech Team",
  "license": "PROPRIETARY",
  "dependencies": {
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.3.0",
    "jest": "^29.7.0"
  }
}
```

---

## 3. SDK Package: @rabtul/wallet-sdk

### 3.1 Complete Implementation

#### `src/RabtulWalletSDK.ts`
```typescript
import crypto from 'crypto';
import axios, { AxiosInstance } from 'axios';
import { WalletConfig, WalletBalance, DebitRequest, DebitResponse, TransactionHistory } from './types';

export class RabtulWalletSDK {
  private config: WalletConfig;
  private client: AxiosInstance;

  constructor(config: WalletConfig) {
    this.config = { timeout: 10000, ...config };

    this.client = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      headers: {
        'X-SDK-Name': '@rabtul/wallet-sdk',
        'X-SDK-Version': '1.0.0',
        'X-App-ID': this.config.appId,
        'X-API-Key': this.config.apiKey
      }
    });

    this.client.interceptors.request.use((config) => {
      const timestamp = Date.now().toString();
      const signature = this.signRequest(config.data || {}, timestamp);

      config.headers['X-Request-Timestamp'] = timestamp;
      config.headers['X-Request-Signature'] = signature;

      return config;
    });
  }

  /**
   * Get wallet balance for a user
   */
  async getBalance(userId: string, accessToken: string): Promise<WalletBalance> {
    const response = await this.client.get(`/wallet/${userId}/balance`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data;
  }

  /**
   * Debit coins from wallet (ATOMIC OPERATION)
   */
  async debit(request: DebitRequest, accessToken: string): Promise<DebitResponse> {
    const response = await this.client.post('/wallet/debit', request, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data;
  }

  /**
   * Credit coins to wallet
   */
  async credit(userId: string, amount: number, coinType: string, reason: string, accessToken: string): Promise<any> {
    const response = await this.client.post('/wallet/credit', {
      user_id: userId,
      amount,
      coin_type: coinType,
      reason
    }, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data;
  }

  /**
   * Get transaction history
   */
  async getTransactionHistory(userId: string, accessToken: string, limit: number = 50): Promise<TransactionHistory[]> {
    const response = await this.client.get(`/wallet/${userId}/transactions`, {
      params: { limit },
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data.transactions;
  }

  /**
   * Check if user has sufficient balance
   */
  async canAfford(userId: string, amount: number, accessToken: string): Promise<boolean> {
    const balance = await this.getBalance(userId, accessToken);
    const totalAvailable = balance.promo_coins + balance.branded_coins + balance.rez_coins + balance.cash_balance;

    return totalAvailable >= amount;
  }

  private signRequest(payload: any, timestamp: string): string {
    const data = JSON.stringify(payload) + timestamp;
    return crypto
      .createHmac('sha256', this.config.apiSecret)
      .update(data)
      .digest('hex');
  }
}
```

#### `src/types.ts`
```typescript
export interface WalletConfig {
  apiKey: string;
  apiSecret: string;
  baseURL: string;
  appId: string;
  timeout?: number;
}

export interface WalletBalance {
  user_id: string;
  promo_coins: number;
  branded_coins: number;
  rez_coins: number;
  cash_balance: number;
  total_balance: number;
  last_updated: string;
}

export interface DebitRequest {
  user_id: string;
  amount: number;
  merchant_id: string;
  order_id: string;
  reason: string;
}

export interface DebitResponse {
  success: boolean;
  transaction_id: string;
  breakdown: {
    promo_coins_used: number;
    branded_coins_used: number;
    rez_coins_used: number;
    cash_used: number;
    total: number;
  };
  balance_after: WalletBalance;
}

export interface TransactionHistory {
  id: string;
  user_id: string;
  transaction_type: string;
  coin_type: string;
  amount: number;
  balance_before: number;
  balance_after: number;
  status: string;
  created_at: string;
  metadata?: any;
}
```

---

## 4. SDK Package: @rabtul/order-sdk

### 4.1 Complete Implementation

#### `src/RabtulOrderSDK.ts`
```typescript
import crypto from 'crypto';
import axios, { AxiosInstance } from 'axios';
import { OrderConfig, CreateOrderRequest, CreateOrderResponse, Order, UpdateOrderStatusRequest } from './types';

export class RabtulOrderSDK {
  private config: OrderConfig;
  private client: AxiosInstance;

  constructor(config: OrderConfig) {
    this.config = { timeout: 15000, ...config };

    this.client = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      headers: {
        'X-SDK-Name': '@rabtul/order-sdk',
        'X-SDK-Version': '1.0.0',
        'X-App-ID': this.config.appId,
        'X-API-Key': this.config.apiKey
      }
    });

    this.client.interceptors.request.use((config) => {
      const timestamp = Date.now().toString();
      const signature = this.signRequest(config.data || {}, timestamp);

      config.headers['X-Request-Timestamp'] = timestamp;
      config.headers['X-Request-Signature'] = signature;

      return config;
    });
  }

  /**
   * Create new order (ATOMIC: Order + Wallet Debit)
   */
  async createOrder(request: CreateOrderRequest, accessToken: string): Promise<CreateOrderResponse> {
    const response = await this.client.post('/orders', request, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data;
  }

  /**
   * Get order by ID
   */
  async getOrder(orderId: string, accessToken: string): Promise<Order> {
    const response = await this.client.get(`/orders/${orderId}`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data.order;
  }

  /**
   * Update order status (with state machine validation)
   */
  async updateOrderStatus(orderId: string, request: UpdateOrderStatusRequest, accessToken: string): Promise<Order> {
    const response = await this.client.patch(`/orders/${orderId}/status`, request, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data.order;
  }

  /**
   * Get user's order history
   */
  async getUserOrders(userId: string, accessToken: string, limit: number = 20): Promise<Order[]> {
    const response = await this.client.get(`/orders/user/${userId}`, {
      params: { limit },
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data.orders;
  }

  /**
   * Cancel order (initiates refund if already paid)
   */
  async cancelOrder(orderId: string, reason: string, accessToken: string): Promise<Order> {
    const response = await this.client.post(`/orders/${orderId}/cancel`, { reason }, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data.order;
  }

  private signRequest(payload: any, timestamp: string): string {
    const data = JSON.stringify(payload) + timestamp;
    return crypto
      .createHmac('sha256', this.config.apiSecret)
      .update(data)
      .digest('hex');
  }
}
```

#### `src/types.ts`
```typescript
export interface OrderConfig {
  apiKey: string;
  apiSecret: string;
  baseURL: string;
  appId: string;
  timeout?: number;
}

export interface CreateOrderRequest {
  user_id: string;
  merchant_id: string;
  items: Array<{
    product_id: string;
    quantity: number;
    unit_price: number;
  }>;
  delivery_address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
  };
  payment_method: 'wallet' | 'razorpay' | 'cod';
  notes?: string;
}

export interface CreateOrderResponse {
  success: boolean;
  order: Order;
  wallet_debit?: {
    transaction_id: string;
    breakdown: {
      promo_coins_used: number;
      branded_coins_used: number;
      rez_coins_used: number;
      cash_used: number;
    };
  };
}

export interface Order {
  id: string;
  user_id: string;
  merchant_id: string;
  status: string;
  subtotal: number;
  tax_amount: number;
  delivery_fee: number;
  total_amount: number;
  items: any[];
  delivery_address: any;
  created_at: string;
  updated_at: string;
}

export interface UpdateOrderStatusRequest {
  new_status: string;
  notes?: string;
  changed_by: string;
}
```

---

## 5. SDK Package: @rabtul/rules-sdk

### 5.1 Complete Implementation

#### `src/RabtulRulesSDK.ts`
```typescript
import axios, { AxiosInstance } from 'axios';
import { RulesConfig, CheckoutEligibilityRequest, EligibilityResponse, CoinEarnRulesRequest } from './types';

export class RabtulRulesSDK {
  private config: RulesConfig;
  private client: AxiosInstance;

  constructor(config: RulesConfig) {
    this.config = { timeout: 5000, ...config };

    this.client = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      headers: {
        'X-SDK-Name': '@rabtul/rules-sdk',
        'X-SDK-Version': '1.0.0',
        'X-App-ID': this.config.appId,
        'X-API-Key': this.config.apiKey
      }
    });
  }

  /**
   * Check if user can proceed to checkout
   */
  async canCheckout(request: CheckoutEligibilityRequest, accessToken: string): Promise<EligibilityResponse> {
    const response = await this.client.post('/rules/can-checkout', request, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data;
  }

  /**
   * Calculate coins to be earned for an order
   */
  async calculateCoinEarnings(request: CoinEarnRulesRequest, accessToken: string): Promise<any> {
    const response = await this.client.post('/rules/calculate-earnings', request, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data;
  }

  /**
   * Get active campaigns for user
   */
  async getActiveCampaigns(userId: string, accessToken: string): Promise<any[]> {
    const response = await this.client.get(`/rules/campaigns/active`, {
      params: { user_id: userId },
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data.campaigns;
  }

  /**
   * Validate if a specific rule applies
   */
  async validateRule(ruleId: string, context: any, accessToken: string): Promise<boolean> {
    const response = await this.client.post(`/rules/${ruleId}/validate`, { context }, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    return response.data.valid;
  }
}
```

#### `src/types.ts`
```typescript
export interface RulesConfig {
  apiKey: string;
  apiSecret: string;
  baseURL: string;
  appId: string;
  timeout?: number;
}

export interface CheckoutEligibilityRequest {
  user_id: string;
  merchant_id: string;
  items: Array<{ product_id: string; quantity: number }>;
  total: number;
}

export interface EligibilityResponse {
  allowed: boolean;
  reason?: string;
  restrictions?: string[];
}

export interface CoinEarnRulesRequest {
  user_id: string;
  merchant_id: string;
  order_total: number;
  payment_method: string;
}
```

---

## 6. Usage Examples

### 6.1 Complete Authentication Flow
```typescript
import { RabtulAuthSDK } from '@rabtul/auth-sdk';
import config from './config/rabtul.config';

const authSDK = new RabtulAuthSDK(config);

async function loginUser(phone: string, otp: string) {
  try {
    // Step 1: Send OTP
    const { session_id } = await authSDK.sendOTP(phone);
    console.log('OTP sent! Session ID:', session_id);

    // Step 2: Verify OTP
    const { access_token, refresh_token, user } = await authSDK.verifyOTP(session_id, otp);

    // Store tokens securely
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);

    console.log('Login successful!', user);
    return user;

  } catch (error) {
    console.error('Login failed:', error.message);
    throw error;
  }
}
```

### 6.2 Complete Order Creation Flow
```typescript
import { RabtulAuthSDK } from '@rabtul/auth-sdk';
import { RabtulWalletSDK } from '@rabtul/wallet-sdk';
import { RabtulOrderSDK } from '@rabtul/order-sdk';
import { RabtulRulesSDK } from '@rabtul/rules-sdk';
import config from './config/rabtul.config';

const authSDK = new RabtulAuthSDK(config);
const walletSDK = new RabtulWalletSDK(config);
const orderSDK = new RabtulOrderSDK(config);
const rulesSDK = new RabtulRulesSDK(config);

async function checkout(cart, user, accessToken) {
  try {
    // Step 1: Check eligibility
    const eligibility = await rulesSDK.canCheckout({
      user_id: user.id,
      merchant_id: cart.merchant_id,
      items: cart.items,
      total: cart.total
    }, accessToken);

    if (!eligibility.allowed) {
      throw new Error(eligibility.reason);
    }

    // Step 2: Check wallet balance
    const canAfford = await walletSDK.canAfford(user.id, cart.total, accessToken);
    if (!canAfford) {
      throw new Error('Insufficient balance');
    }

    // Step 3: Create order (ATOMIC: order + wallet debit)
    const { order, wallet_debit } = await orderSDK.createOrder({
      user_id: user.id,
      merchant_id: cart.merchant_id,
      items: cart.items,
      delivery_address: user.default_address,
      payment_method: 'wallet'
    }, accessToken);

    console.log('Order created:', order.id);
    console.log('Wallet debited:', wallet_debit.breakdown);

    return order;

  } catch (error) {
    console.error('Checkout failed:', error.message);
    throw error;
  }
}
```

---

## 7. NPM Publishing

### 7.1 Publish All SDKs
```bash
# From monorepo root
cd packages/auth-sdk && npm publish --access restricted
cd ../wallet-sdk && npm publish --access restricted
cd ../order-sdk && npm publish --access restricted
cd ../rules-sdk && npm publish --access restricted
cd ../analytics-sdk && npm publish --access restricted
```

### 7.2 Internal NPM Registry (Recommended)
```bash
# Setup Verdaccio (private npm registry)
npm install -g verdaccio
verdaccio

# Configure .npmrc in all apps
echo "registry=http://localhost:4873" > .npmrc
```

---

## 8. What Developers Get

✅ **No Direct API Calls**: SDKs enforce boundaries automatically
✅ **Type Safety**: Full TypeScript support with IntelliSense
✅ **Request Signing**: Cryptographic validation built-in
✅ **Error Handling**: Consistent error messages across all apps
✅ **Retry Logic**: Automatic retries for network failures
✅ **Testing Mocks**: Built-in mocks for unit testing

**Apps CANNOT bypass SDKs. API rejects direct calls. 100% enforcement.**
