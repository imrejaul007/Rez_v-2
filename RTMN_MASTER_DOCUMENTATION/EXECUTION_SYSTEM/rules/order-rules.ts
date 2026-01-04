/**
 * ORDER BUSINESS RULES
 *
 * All order-related business logic
 *
 * RULES:
 * - Min order value enforced
 * - Delivery zone validated
 * - Merchant availability checked
 * - Stock validation before order
 */

import { ErrorCode, ApplicationError } from '../ERROR_CODES';

export interface DeliveryZoneCheck {
  inZone: boolean;
  distance: number; // km
  reason: string | null;
}

export interface OrderValidation {
  canPlaceOrder: boolean;
  blockers: Array<{
    code: string;
    message: string;
  }>;
}

/**
 * RULE: Check delivery zone
 *
 * Uses Haversine formula for distance
 */
export function checkDeliveryZone(
  merchantLocation: { lat: number; lng: number },
  deliveryLocation: { lat: number; lng: number },
  maxRadiusKm: number
): DeliveryZoneCheck {
  const distance = calculateDistance(
    merchantLocation.lat,
    merchantLocation.lng,
    deliveryLocation.lat,
    deliveryLocation.lng
  );

  if (distance > maxRadiusKm) {
    return {
      inZone: false,
      distance,
      reason: `Address is ${distance.toFixed(1)}km away (max: ${maxRadiusKm}km)`
    };
  }

  return {
    inZone: true,
    distance,
    reason: null
  };
}

/**
 * Calculate distance using Haversine formula
 */
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * RULE: Validate order creation
 */
export function validateOrderCreation(params: {
  orderTotal: number;
  merchantMinOrderValue: number;
  merchantAcceptingOrders: boolean;
  merchantStatus: string;
  deliveryZoneCheck: DeliveryZoneCheck;
  items: Array<{
    product_id: string;
    quantity: number;
    stock_available: number;
  }>;
}): OrderValidation {
  const blockers: OrderValidation['blockers'] = [];

  // Check merchant status
  if (params.merchantStatus !== 'active') {
    blockers.push({
      code: 'MERCHANT_NOT_ACTIVE',
      message: 'Merchant is currently unavailable'
    });
  }

  // Check if merchant accepting orders
  if (!params.merchantAcceptingOrders) {
    blockers.push({
      code: 'MERCHANT_NOT_ACCEPTING',
      message: 'Merchant is not accepting orders right now'
    });
  }

  // Check min order value
  if (params.orderTotal < params.merchantMinOrderValue) {
    blockers.push({
      code: 'ORDER_MIN_AMOUNT_NOT_MET',
      message: `Minimum order value is ₹${params.merchantMinOrderValue}. Add ₹${(
        params.merchantMinOrderValue - params.orderTotal
      ).toFixed(0)} more`
    });
  }

  // Check delivery zone
  if (!params.deliveryZoneCheck.inZone) {
    blockers.push({
      code: 'ORDER_OUT_OF_DELIVERY_ZONE',
      message: params.deliveryZoneCheck.reason || 'Address outside delivery zone'
    });
  }

  // Check stock for all items
  for (const item of params.items) {
    if (item.quantity > item.stock_available) {
      blockers.push({
        code: 'PRODUCT_OUT_OF_STOCK',
        message: `Product ${item.product_id} has only ${item.stock_available} in stock`
      });
    }
  }

  return {
    canPlaceOrder: blockers.length === 0,
    blockers
  };
}

/**
 * RULE: Calculate delivery fee
 */
export function calculateDeliveryFee(
  distance: number,
  orderValue: number,
  merchantSettings: {
    baseDeliveryFee: number;
    freeDeliveryAbove: number | null;
    perKmCharge: number;
  }
): number {
  // Free delivery if order above threshold
  if (merchantSettings.freeDeliveryAbove && orderValue >= merchantSettings.freeDeliveryAbove) {
    return 0;
  }

  // Base fee + per km charge
  const baseFee = merchantSettings.baseDeliveryFee;
  const distanceFee = distance * merchantSettings.perKmCharge;

  return Math.ceil(baseFee + distanceFee);
}

/**
 * RULE: Validate order cancellation
 */
export function canCancelOrder(
  orderStatus: string,
  cancelledBy: 'user' | 'merchant' | 'system'
): { canCancel: boolean; reason: string | null } {
  const CANCELLABLE_STATES = ['created', 'paid', 'confirmed'];

  if (!CANCELLABLE_STATES.includes(orderStatus)) {
    return {
      canCancel: false,
      reason: 'Order cannot be cancelled at this stage'
    };
  }

  // User can cancel before confirmed
  if (cancelledBy === 'user' && orderStatus === 'confirmed') {
    return {
      canCancel: false,
      reason: 'Order already confirmed by merchant. Contact support for cancellation.'
    };
  }

  return {
    canCancel: true,
    reason: null
  };
}
