/**
 * CANONICAL ORDER ITEMS SCHEMA
 *
 * SOURCE OF TRUTH for items within orders
 *
 * RULES:
 * - Order items are immutable after order is confirmed
 * - Price snapshot taken at order time (no retroactive changes)
 * - Quantity changes before confirmation allowed
 */

export const OrderItemsSchema = {
  table: 'order_items',
  source_of_truth: 'rabtul-order',

  fields: {
    // Identity
    id: {
      type: 'uuid',
      required: true,
      primary_key: true,
      generated: 'auto',
      description: 'Order item ID'
    },

    order_id: {
      type: 'uuid',
      required: true,
      foreign_key: 'orders.id',
      indexed: true,
      on_delete: 'CASCADE',
      description: 'Parent order'
    },

    product_id: {
      type: 'uuid',
      required: true,
      foreign_key: 'products.id',
      indexed: true,
      description: 'Product purchased'
    },

    // Product Snapshot (at time of order)
    product_name: {
      type: 'string',
      required: true,
      max_length: 200,
      description: 'Product name (snapshot)'
    },

    product_image_url: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 500,
      description: 'Product image (snapshot)'
    },

    variant_name: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 100,
      description: 'Variant selected (e.g., "Large", "Red")'
    },

    // Pricing (snapshot at order time)
    unit_price: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0.01,
      description: 'Price per unit (at order time)'
    },

    quantity: {
      type: 'integer',
      required: true,
      min: 1,
      description: 'Quantity ordered'
    },

    subtotal: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0.01,
      description: 'Item subtotal (unit_price × quantity)'
    },

    tax_rate: {
      type: 'decimal',
      required: true,
      precision: 5,
      scale: 2,
      min: 0,
      description: 'Tax rate (%) at order time'
    },

    tax_amount: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0,
      description: 'Tax amount for this item'
    },

    discount_amount: {
      type: 'decimal',
      required: false,
      precision: 10,
      scale: 2,
      default: 0,
      description: 'Discount applied to this item'
    },

    total: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0.01,
      description: 'Item total (subtotal + tax - discount)'
    },

    // Customization
    customization: {
      type: 'jsonb',
      required: false,
      nullable: true,
      description: 'Item customization',
      note: 'e.g., { size: "Large", toppings: ["Extra Cheese"], notes: "No onions" }'
    },

    special_instructions: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 500,
      description: 'Special instructions for this item'
    },

    // Metadata
    metadata: {
      type: 'jsonb',
      required: false,
      nullable: true,
      description: 'Additional metadata'
    },

    // Timestamps
    created_at: {
      type: 'timestamp',
      required: true,
      default: 'now()',
      description: 'Item added timestamp'
    },

    updated_at: {
      type: 'timestamp',
      required: true,
      default: 'now()',
      auto_update: true,
      description: 'Last update timestamp'
    }
  },

  indexes: [
    { fields: ['order_id'] },
    { fields: ['product_id'] },
    { fields: ['created_at'] }
  ],

  validation_rules: {
    subtotal: {
      rule: 'subtotal = unit_price × quantity',
      error_code: 'ORDER_ITEM_SUBTOTAL_MISMATCH'
    },
    tax_amount: {
      rule: 'tax_amount = subtotal × (tax_rate / 100)',
      error_code: 'ORDER_ITEM_TAX_MISMATCH'
    },
    total: {
      rule: 'total = subtotal + tax_amount - discount_amount',
      error_code: 'ORDER_ITEM_TOTAL_MISMATCH'
    }
  },

  domain_rules: [
    'Order items CANNOT be modified after order is confirmed',
    'Prices are snapshot at order time (immune to future price changes)',
    'Product must exist and be active at order time',
    'Quantity must respect product min_quantity and max_quantity',
    'Stock decreases when order is placed (atomic with order creation)',
    'Order total = SUM of all order_items.total'
  ],

  related_schemas: ['orders', 'products']
} as const;

/**
 * TYPESCRIPT TYPE (AUTO-GENERATED)
 */
export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  product_image_url: string | null;
  variant_name: string | null;
  unit_price: number;
  quantity: number;
  subtotal: number;
  tax_rate: number;
  tax_amount: number;
  discount_amount: number;
  total: number;
  customization: Record<string, any> | null;
  special_instructions: string | null;
  metadata: Record<string, any> | null;
  created_at: Date;
  updated_at: Date;
};
