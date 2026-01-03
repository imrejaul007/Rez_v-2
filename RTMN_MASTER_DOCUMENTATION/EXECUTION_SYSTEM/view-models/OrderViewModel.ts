/**
 * ORDER VIEWMODEL
 *
 * Transforms order data to UI-ready format
 *
 * RULES:
 * - Frontend receives THIS, not raw order data
 * - All state → UI state mapping done here
 * - All action eligibility computed server-side
 */

import { Order } from '../schemas/order.schema';
import { OrderItem } from '../schemas/order_items.schema';

export interface OrderViewModel {
  // Basic Info
  orderId: string;
  orderNumber: string; // Human-readable: #ORD123456

  // Status
  status: {
    current: Order['status'];
    displayText: string; // "Order Confirmed"
    description: string; // "Your order is being prepared"
    icon: string; // "check-circle"
    color: string; // "#22C55E"
    progress: number; // 0-100 for progress bar
  };

  // Timeline
  timeline: Array<{
    step: string;
    label: string;
    timestamp: Date | null;
    isCompleted: boolean;
    isCurrent: boolean;
  }>;

  // Merchant Info
  merchant: {
    id: string;
    name: string;
    image: string;
    phone: string;
    address: string;
  };

  // Items
  items: Array<{
    id: string;
    name: string;
    image: string | null;
    quantity: number;
    variant: string | null;
    price: string; // "₹250.00"
    total: string; // "₹500.00"
  }>;

  // Pricing Breakdown
  pricing: {
    subtotal: string;
    tax: string;
    deliveryFee: string;
    discount: string;
    total: string;

    // Payment breakdown
    paidWith: {
      promoCoins: string;
      brandedCoins: string;
      rezCoins: string;
      cash: string;
    };

    // Show to user
    savings: string; // "You saved ₹50"
  };

  // Delivery
  delivery: {
    address: {
      fullAddress: string;
      landmark: string | null;
      phone: string;
    };
    estimatedTime: {
      text: string; // "30-40 mins"
      timestamp: Date | null;
    };
    instructions: string | null;
  };

  // Actions (user can perform)
  actions: {
    cancel: {
      enabled: boolean;
      disabledReason?: string;
      confirmationRequired: boolean;
    };

    track: {
      enabled: boolean;
      trackingUrl?: string;
    };

    requestRefund: {
      enabled: boolean;
      disabledReason?: string;
    };

    reorder: {
      enabled: boolean;
    };

    contactMerchant: {
      enabled: boolean;
      phone: string;
    };

    contactSupport: {
      enabled: boolean;
    };
  };

  // Additional Info
  metadata: {
    placedAt: Date;
    estimatedDelivery: Date | null;
    deliveredAt: Date | null;
    paymentMethod: string; // "Wallet"
    canRate: boolean; // Can leave review
  };
}

/**
 * Status to UI mapping
 */
const STATUS_UI_MAP: Record<
  Order['status'],
  {
    displayText: string;
    description: string;
    icon: string;
    color: string;
    progress: number;
  }
> = {
  initiated: {
    displayText: 'Initiating',
    description: 'Setting up your order',
    icon: 'clock',
    color: '#9CA3AF',
    progress: 5
  },
  created: {
    displayText: 'Order Placed',
    description: 'Waiting for payment confirmation',
    icon: 'clock',
    color: '#3B82F6',
    progress: 10
  },
  paid: {
    displayText: 'Payment Confirmed',
    description: 'Waiting for merchant to accept',
    icon: 'check',
    color: '#3B82F6',
    progress: 20
  },
  confirmed: {
    displayText: 'Order Confirmed',
    description: 'Merchant is preparing your order',
    icon: 'check-circle',
    color: '#22C55E',
    progress: 40
  },
  preparing: {
    displayText: 'Preparing',
    description: 'Your order is being prepared',
    icon: 'cooking',
    color: '#F59E0B',
    progress: 60
  },
  ready: {
    displayText: 'Ready for Pickup',
    description: 'Order is packed and ready',
    icon: 'package',
    color: '#22C55E',
    progress: 70
  },
  shipped: {
    displayText: 'Out for Delivery',
    description: 'Your order is on the way',
    icon: 'truck',
    color: '#3B82F6',
    progress: 85
  },
  delivered: {
    displayText: 'Delivered',
    description: 'Order delivered successfully',
    icon: 'check-double',
    color: '#22C55E',
    progress: 100
  },
  completed: {
    displayText: 'Completed',
    description: 'Thank you for your order!',
    icon: 'star',
    color: '#22C55E',
    progress: 100
  },
  cancelled: {
    displayText: 'Cancelled',
    description: 'This order was cancelled',
    icon: 'x-circle',
    color: '#EF4444',
    progress: 0
  },
  failed_wallet: {
    displayText: 'Payment Failed',
    description: 'Wallet payment failed',
    icon: 'alert-circle',
    color: '#EF4444',
    progress: 0
  },
  refund_requested: {
    displayText: 'Refund Requested',
    description: 'Processing your refund',
    icon: 'arrow-left',
    color: '#F59E0B',
    progress: 50
  },
  refunded: {
    displayText: 'Refunded',
    description: 'Amount refunded to wallet',
    icon: 'check-circle',
    color: '#22C55E',
    progress: 100
  }
};

/**
 * Format currency
 */
function formatCurrency(amount: number): string {
  return `₹${amount.toFixed(2)}`;
}

/**
 * Transform order to ViewModel
 */
export function toOrderViewModel(
  order: Order,
  items: OrderItem[],
  merchant: any
): OrderViewModel {
  const statusUI = STATUS_UI_MAP[order.status];

  // Determine what actions user can take
  const canCancel =
    order.status === 'created' ||
    order.status === 'paid' ||
    order.status === 'confirmed';

  const canRefund =
    order.status === 'delivered' ||
    order.status === 'completed';

  const canTrack =
    order.status === 'shipped' ||
    order.status === 'ready';

  return {
    orderId: order.id,
    orderNumber: `#ORD${order.id.slice(0, 8).toUpperCase()}`,

    status: {
      current: order.status,
      ...statusUI
    },

    timeline: [
      {
        step: 'placed',
        label: 'Order Placed',
        timestamp: order.created_at,
        isCompleted: true,
        isCurrent: order.status === 'created'
      },
      {
        step: 'confirmed',
        label: 'Confirmed',
        timestamp: order.confirmed_at,
        isCompleted: ['confirmed', 'preparing', 'ready', 'shipped', 'delivered', 'completed'].includes(
          order.status
        ),
        isCurrent: order.status === 'confirmed'
      },
      {
        step: 'preparing',
        label: 'Preparing',
        timestamp: null,
        isCompleted: ['preparing', 'ready', 'shipped', 'delivered', 'completed'].includes(
          order.status
        ),
        isCurrent: order.status === 'preparing'
      },
      {
        step: 'shipped',
        label: 'Shipped',
        timestamp: null,
        isCompleted: ['shipped', 'delivered', 'completed'].includes(order.status),
        isCurrent: order.status === 'shipped'
      },
      {
        step: 'delivered',
        label: 'Delivered',
        timestamp: order.delivered_at,
        isCompleted: ['delivered', 'completed'].includes(order.status),
        isCurrent: order.status === 'delivered'
      }
    ],

    merchant: {
      id: merchant.id,
      name: merchant.display_name,
      image: merchant.logo_url || '',
      phone: merchant.owner_phone,
      address: `${merchant.address.line1}, ${merchant.address.city}`
    },

    items: items.map(item => ({
      id: item.id,
      name: item.product_name,
      image: item.product_image_url,
      quantity: item.quantity,
      variant: item.variant_name,
      price: formatCurrency(item.unit_price),
      total: formatCurrency(item.total)
    })),

    pricing: {
      subtotal: formatCurrency(order.subtotal),
      tax: formatCurrency(order.tax_amount),
      deliveryFee: formatCurrency(order.delivery_fee),
      discount: formatCurrency(order.discount_amount || 0),
      total: formatCurrency(order.total_amount),

      paidWith: {
        promoCoins: formatCurrency(order.promo_coins_used || 0),
        brandedCoins: formatCurrency(order.branded_coins_used || 0),
        rezCoins: formatCurrency(order.rez_coins_used || 0),
        cash: formatCurrency(order.cash_paid || 0)
      },

      savings:
        order.discount_amount || order.promo_coins_used || order.branded_coins_used
          ? `You saved ${formatCurrency(
              (order.discount_amount || 0) +
                (order.promo_coins_used || 0) +
                (order.branded_coins_used || 0)
            )}`
          : ''
    },

    delivery: {
      address: {
        fullAddress: `${order.delivery_address.line1}, ${order.delivery_address.line2 || ''}, ${
          order.delivery_address.city
        }, ${order.delivery_address.pincode}`,
        landmark: order.delivery_address.line2,
        phone: order.delivery_address.phone
      },
      estimatedTime: {
        text: order.estimated_delivery_time
          ? `${Math.ceil(
              (new Date(order.estimated_delivery_time).getTime() - Date.now()) / 60000
            )} mins`
          : 'Calculating...',
        timestamp: order.estimated_delivery_time
      },
      instructions: order.delivery_instructions
    },

    actions: {
      cancel: {
        enabled: canCancel,
        disabledReason: !canCancel
          ? 'Order cannot be cancelled at this stage'
          : undefined,
        confirmationRequired: true
      },

      track: {
        enabled: canTrack,
        trackingUrl: canTrack ? `/track/${order.id}` : undefined
      },

      requestRefund: {
        enabled: canRefund,
        disabledReason: !canRefund
          ? 'Refund can only be requested after delivery'
          : undefined
      },

      reorder: {
        enabled: order.status === 'completed' || order.status === 'delivered'
      },

      contactMerchant: {
        enabled: !['cancelled', 'refunded', 'completed'].includes(order.status),
        phone: merchant.owner_phone
      },

      contactSupport: {
        enabled: true
      }
    },

    metadata: {
      placedAt: order.created_at,
      estimatedDelivery: order.estimated_delivery_time,
      deliveredAt: order.delivered_at,
      paymentMethod: order.payment_method === 'wallet' ? 'Wallet' : 'Online Payment',
      canRate: order.status === 'delivered' || order.status === 'completed'
    }
  };
}
