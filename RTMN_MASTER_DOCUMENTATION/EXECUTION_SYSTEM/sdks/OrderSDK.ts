/**
 * RABTUL ORDER SDK
 *
 * RULES:
 * - Frontend MUST use SDK for all order operations
 * - SDK signs all requests with HMAC-SHA256
 * - API rejects requests without valid SDK signature
 */

import crypto from 'crypto';

interface SDKConfig {
  apiBaseUrl: string;
  sdkName: string;
  sdkVersion: string;
  sdkSecret: string;
}

interface CreateOrderRequest {
  user_id: string;
  merchant_id: string;
  items: Array<{
    product_id: string;
    quantity: number;
    unit_price: number;
    variant_name?: string;
  }>;
  delivery_address: {
    line1: string;
    line2?: string;
    city: string;
    pincode: string;
    phone: string;
    lat: number;
    lng: number;
  };
  payment_method: 'wallet' | 'razorpay' | 'cod';
  delivery_instructions?: string;
}

interface Order {
  id: string;
  order_number: string;
  status: string;
  total_amount: number;
  created_at: string;
  // ... full order type from schema
}

export class OrderSDK {
  private config: SDKConfig;

  constructor(config: SDKConfig) {
    this.config = config;
  }

  private generateSignature(method: string, path: string, body: string, timestamp: number): string {
    const message = `${timestamp}${method}${path}${body}`;
    return crypto.createHmac('sha256', this.config.sdkSecret).update(message).digest('hex');
  }

  private async request<T>(method: string, path: string, accessToken: string, body?: any): Promise<T> {
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
   * Create new order
   */
  async createOrder(request: CreateOrderRequest, accessToken: string): Promise<Order> {
    return this.request<Order>('POST', '/api/orders', accessToken, request);
  }

  /**
   * Get order by ID
   */
  async getOrder(orderId: string, accessToken: string): Promise<Order> {
    return this.request<Order>('GET', `/api/orders/${orderId}`, accessToken);
  }

  /**
   * Get user's orders
   */
  async getUserOrders(
    userId: string,
    accessToken: string,
    options: { page?: number; limit?: number; status?: string } = {}
  ): Promise<{ orders: Order[]; pagination: any }> {
    const { page = 1, limit = 20, status } = options;
    const query = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(status && { status })
    });

    return this.request('GET', `/api/users/${userId}/orders?${query}`, accessToken);
  }

  /**
   * Cancel order
   */
  async cancelOrder(
    orderId: string,
    reason: string,
    accessToken: string
  ): Promise<{ order_id: string; status: string }> {
    return this.request('POST', `/api/orders/${orderId}/cancel`, accessToken, { reason });
  }

  /**
   * Update order status (Merchant only)
   */
  async updateOrderStatus(
    orderId: string,
    status: string,
    accessToken: string
  ): Promise<{ order_id: string; status: string }> {
    return this.request('POST', `/api/orders/${orderId}/update-status`, accessToken, { status });
  }

  /**
   * Request refund
   */
  async requestRefund(
    orderId: string,
    reason: string,
    accessToken: string
  ): Promise<{ refund_id: string; amount: number }> {
    return this.request('POST', `/api/orders/${orderId}/refund`, accessToken, { reason });
  }

  /**
   * Track order
   */
  async trackOrder(orderId: string, accessToken: string): Promise<any> {
    return this.request('GET', `/api/orders/${orderId}/track`, accessToken);
  }
}

export class SDKError extends Error {
  constructor(public code: string, public message: string, public details?: Record<string, any>) {
    super(message);
    this.name = 'SDKError';
  }
}

// Initialize SDK
export const orderSDK = new OrderSDK({
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || 'https://api.rabtul.com',
  sdkName: 'rabtul-order-sdk',
  sdkVersion: '1.0.0',
  sdkSecret: process.env.REACT_APP_SDK_SECRET || ''
});
