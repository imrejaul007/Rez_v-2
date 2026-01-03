/**
 * RABTUL WALLET SDK
 *
 * RULES:
 * - Frontend MUST use SDK for all wallet operations
 * - SDK signs all requests with HMAC-SHA256
 * - API rejects requests without valid SDK signature
 * - SDK handles token refresh automatically
 */

import crypto from 'crypto';

interface SDKConfig {
  apiBaseUrl: string;
  sdkName: string;
  sdkVersion: string;
  sdkSecret: string; // Provided by backend team
}

interface WalletBalance {
  user_id: string;
  promo_coins: number;
  branded_coins: number;
  rez_coins: number;
  cash: number;
  total: number;
}

interface DebitRequest {
  user_id: string;
  amount: number;
  transaction_type: string;
  metadata?: Record<string, any>;
}

interface DebitResponse {
  transaction_id: string;
  breakdown: {
    promo_coins_used: number;
    branded_coins_used: number;
    rez_coins_used: number;
    cash_paid: number;
  };
  remaining_balance: WalletBalance;
}

interface CreditRequest {
  user_id: string;
  amount: number;
  coin_type: 'promo_coins' | 'branded_coins' | 'rez_coins' | 'cash';
  transaction_type: string;
  metadata?: Record<string, any>;
}

interface TransactionHistory {
  transactions: Array<{
    id: string;
    transaction_type: string;
    coin_type: string;
    amount: number;
    status: string;
    created_at: string;
  }>;
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
}

export class WalletSDK {
  private config: SDKConfig;

  constructor(config: SDKConfig) {
    this.config = config;
  }

  /**
   * Generate HMAC-SHA256 signature for request
   *
   * Signature = HMAC-SHA256(secret, timestamp + method + path + body)
   */
  private generateSignature(
    method: string,
    path: string,
    body: string,
    timestamp: number
  ): string {
    const message = `${timestamp}${method}${path}${body}`;
    return crypto
      .createHmac('sha256', this.config.sdkSecret)
      .update(message)
      .digest('hex');
  }

  /**
   * Make authenticated API request with SDK headers
   */
  private async request<T>(
    method: string,
    path: string,
    accessToken: string,
    body?: any
  ): Promise<T> {
    const timestamp = Date.now();
    const bodyString = body ? JSON.stringify(body) : '';
    const signature = this.generateSignature(method, path, bodyString, timestamp);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      'X-SDK-Name': this.config.sdkName,
      'X-SDK-Version': this.config.sdkVersion,
      'X-SDK-Timestamp': timestamp.toString(),
      'X-SDK-Signature': signature
    };

    const response = await fetch(`${this.config.apiBaseUrl}${path}`, {
      method,
      headers,
      body: bodyString || undefined
    });

    if (!response.ok) {
      const error = await response.json();
      throw new SDKError(error.code, error.message, error.details);
    }

    return response.json();
  }

  /**
   * Get user's wallet balance
   *
   * @param userId - User ID
   * @param accessToken - JWT access token
   * @returns Wallet balance with all coin types
   */
  async getBalance(userId: string, accessToken: string): Promise<WalletBalance> {
    return this.request<WalletBalance>(
      'GET',
      `/api/wallet/${userId}/balance`,
      accessToken
    );
  }

  /**
   * Debit coins from wallet (for order payment)
   *
   * RULES:
   * - Coins used in priority: Promo → Branded → ReZ → Cash
   * - Transaction is atomic (all or nothing)
   * - Returns exact breakdown of coins used
   *
   * @param request - Debit request
   * @param accessToken - JWT access token
   * @returns Transaction ID and coin breakdown
   */
  async debit(request: DebitRequest, accessToken: string): Promise<DebitResponse> {
    return this.request<DebitResponse>(
      'POST',
      '/api/wallet/debit',
      accessToken,
      request
    );
  }

  /**
   * Credit coins to wallet (for rewards, refunds)
   *
   * @param request - Credit request
   * @param accessToken - JWT access token
   * @returns Transaction ID
   */
  async credit(request: CreditRequest, accessToken: string): Promise<{ transaction_id: string }> {
    return this.request(
      'POST',
      '/api/wallet/credit',
      accessToken,
      request
    );
  }

  /**
   * Get transaction history
   *
   * @param userId - User ID
   * @param accessToken - JWT access token
   * @param options - Pagination options
   * @returns Transaction history
   */
  async getTransactionHistory(
    userId: string,
    accessToken: string,
    options: { page?: number; limit?: number } = {}
  ): Promise<TransactionHistory> {
    const { page = 1, limit = 20 } = options;
    return this.request<TransactionHistory>(
      'GET',
      `/api/wallet/${userId}/transactions?page=${page}&limit=${limit}`,
      accessToken
    );
  }

  /**
   * Get single transaction details
   *
   * @param transactionId - Transaction ID
   * @param accessToken - JWT access token
   * @returns Transaction details
   */
  async getTransaction(transactionId: string, accessToken: string): Promise<any> {
    return this.request(
      'GET',
      `/api/wallet/transactions/${transactionId}`,
      accessToken
    );
  }
}

/**
 * SDK Error class
 */
export class SDKError extends Error {
  constructor(
    public code: string,
    public message: string,
    public details?: Record<string, any>
  ) {
    super(message);
    this.name = 'SDKError';
  }
}

/**
 * USAGE EXAMPLE (Frontend)
 */

// Initialize SDK (once per app)
const walletSDK = new WalletSDK({
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || 'https://api.rabtul.com',
  sdkName: 'rabtul-wallet-sdk',
  sdkVersion: '1.0.0',
  sdkSecret: process.env.REACT_APP_SDK_SECRET || '' // From backend team
});

// Use in React component
export async function exampleUsage(userId: string, accessToken: string) {
  try {
    // Get balance
    const balance = await walletSDK.getBalance(userId, accessToken);
    console.log('Balance:', balance);

    // Debit for order payment
    const debitResult = await walletSDK.debit(
      {
        user_id: userId,
        amount: 500,
        transaction_type: 'debit_order_payment',
        metadata: { order_id: 'ord_123' }
      },
      accessToken
    );
    console.log('Debit breakdown:', debitResult.breakdown);

    // Credit reward
    await walletSDK.credit(
      {
        user_id: userId,
        amount: 100,
        coin_type: 'promo_coins',
        transaction_type: 'credit_cashback',
        metadata: { order_id: 'ord_123' }
      },
      accessToken
    );

    // Get history
    const history = await walletSDK.getTransactionHistory(userId, accessToken, {
      page: 1,
      limit: 20
    });
    console.log('Transactions:', history.transactions);
  } catch (error) {
    if (error instanceof SDKError) {
      console.error('SDK Error:', error.code, error.message);
      // Map error code to UI message using ERROR_METADATA
    }
  }
}
