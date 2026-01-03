/**
 * CANONICAL PRODUCT SCHEMA
 *
 * SOURCE OF TRUTH for all product/service listings
 *
 * RULES:
 * - Products belong to merchants
 * - Only active products shown to users
 * - Inventory tracked for physical products
 * - Price includes base + taxes
 */

export const ProductSchema = {
  table: 'products',
  source_of_truth: 'rabtul-merchant',

  fields: {
    // Identity
    id: {
      type: 'uuid',
      required: true,
      primary_key: true,
      generated: 'auto',
      description: 'Product ID'
    },

    merchant_id: {
      type: 'uuid',
      required: true,
      foreign_key: 'merchants.id',
      indexed: true,
      description: 'Merchant selling this product'
    },

    // Basic Info
    name: {
      type: 'string',
      required: true,
      max_length: 200,
      indexed: true,
      description: 'Product name'
    },

    slug: {
      type: 'string',
      required: true,
      max_length: 250,
      indexed: true,
      description: 'URL-friendly slug',
      note: 'Format: merchant-slug/product-slug'
    },

    description: {
      type: 'text',
      required: true,
      max_length: 2000,
      description: 'Product description'
    },

    short_description: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 200,
      description: 'Short tagline'
    },

    // Category
    category: {
      type: 'string',
      required: true,
      max_length: 100,
      indexed: true,
      description: 'Product category'
    },

    subcategory: {
      type: 'string',
      required: false,
      nullable: true,
      max_length: 100,
      description: 'Product subcategory'
    },

    // Pricing
    base_price: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0.01,
      description: 'Base price (excluding taxes)'
    },

    selling_price: {
      type: 'decimal',
      required: true,
      precision: 10,
      scale: 2,
      min: 0.01,
      description: 'Final selling price (including taxes)',
      note: 'This is what customer pays'
    },

    mrp: {
      type: 'decimal',
      required: false,
      nullable: true,
      precision: 10,
      scale: 2,
      description: 'Maximum Retail Price (for showing discount)'
    },

    tax_rate: {
      type: 'decimal',
      required: true,
      precision: 5,
      scale: 2,
      min: 0,
      max: 100,
      default: 5.0,
      description: 'Tax percentage (GST, etc.)'
    },

    discount_percentage: {
      type: 'decimal',
      required: false,
      precision: 5,
      scale: 2,
      min: 0,
      max: 100,
      default: 0,
      description: 'Discount percentage'
    },

    // Inventory
    inventory_type: {
      type: 'enum',
      required: true,
      allowed_values: ['unlimited', 'tracked', 'out_of_stock'],
      default: 'unlimited',
      description: 'Inventory tracking type'
    },

    stock_quantity: {
      type: 'integer',
      required: false,
      nullable: true,
      min: 0,
      description: 'Current stock quantity',
      note: 'Only for inventory_type = tracked'
    },

    low_stock_threshold: {
      type: 'integer',
      required: false,
      nullable: true,
      min: 0,
      description: 'Alert when stock below this number'
    },

    // Availability
    is_available: {
      type: 'boolean',
      required: true,
      default: true,
      description: 'Whether product is currently available'
    },

    status: {
      type: 'enum',
      required: true,
      allowed_values: ['draft', 'active', 'archived'],
      default: 'draft',
      indexed: true,
      description: 'Product status',
      note: 'Only "active" products shown to users'
    },

    // Images
    images: {
      type: 'jsonb',
      required: true,
      description: 'Product images',
      schema: {
        thumbnail: 'string',
        main: 'string',
        gallery: 'string[]'
      }
    },

    // Variants (size, color, etc.)
    has_variants: {
      type: 'boolean',
      required: true,
      default: false,
      description: 'Whether product has variants'
    },

    variants: {
      type: 'jsonb',
      required: false,
      nullable: true,
      description: 'Product variants',
      note: 'e.g., [{ name: "Small", price: 100 }, { name: "Large", price: 150 }]'
    },

    // Specifications
    specifications: {
      type: 'jsonb',
      required: false,
      nullable: true,
      description: 'Product specifications',
      note: 'e.g., { weight: "500g", brand: "XYZ", color: "Red" }'
    },

    // Food-specific (if applicable)
    is_veg: {
      type: 'boolean',
      required: false,
      nullable: true,
      description: 'Vegetarian flag (for food products)'
    },

    allergens: {
      type: 'array',
      required: false,
      nullable: true,
      item_type: 'string',
      description: 'Allergen warnings'
    },

    preparation_time_mins: {
      type: 'integer',
      required: false,
      nullable: true,
      min: 0,
      description: 'Preparation time in minutes'
    },

    // Search & Discovery
    tags: {
      type: 'array',
      required: false,
      nullable: true,
      item_type: 'string',
      description: 'Search tags'
    },

    search_keywords: {
      type: 'text',
      required: false,
      nullable: true,
      description: 'Additional keywords for search'
    },

    // Performance Metrics
    views_count: {
      type: 'integer',
      required: true,
      default: 0,
      min: 0,
      description: 'Total product views'
    },

    orders_count: {
      type: 'integer',
      required: true,
      default: 0,
      min: 0,
      description: 'Total orders for this product'
    },

    rating: {
      type: 'decimal',
      required: true,
      precision: 3,
      scale: 2,
      min: 0,
      max: 5,
      default: 0,
      description: 'Average rating'
    },

    total_ratings: {
      type: 'integer',
      required: true,
      default: 0,
      min: 0,
      description: 'Total number of ratings'
    },

    // Ordering
    min_quantity: {
      type: 'integer',
      required: true,
      default: 1,
      min: 1,
      description: 'Minimum order quantity'
    },

    max_quantity: {
      type: 'integer',
      required: false,
      nullable: true,
      min: 1,
      description: 'Maximum order quantity per order'
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
      description: 'Product creation timestamp'
    },

    updated_at: {
      type: 'timestamp',
      required: true,
      default: 'now()',
      auto_update: true,
      description: 'Last update timestamp'
    },

    published_at: {
      type: 'timestamp',
      required: false,
      nullable: true,
      description: 'First published timestamp'
    }
  },

  indexes: [
    { fields: ['merchant_id', 'status'] },
    { fields: ['category', 'status'] },
    { fields: ['slug'], unique: true },
    { fields: ['name'], type: 'gin', note: 'Full-text search' },
    { fields: ['selling_price'] },
    { fields: ['rating'], order: 'desc' },
    { fields: ['orders_count'], order: 'desc' },
    { fields: ['created_at'] }
  ],

  validation_rules: {
    selling_price: {
      rule: 'selling_price = base_price + (base_price * tax_rate / 100)',
      error_code: 'PRODUCT_PRICE_MISMATCH'
    },
    stock_quantity: {
      rule: 'stock_quantity required if inventory_type = tracked',
      error_code: 'PRODUCT_STOCK_REQUIRED'
    },
    variants: {
      rule: 'variants required if has_variants = true',
      error_code: 'PRODUCT_VARIANTS_MISSING'
    }
  },

  domain_rules: [
    'Only ACTIVE products are visible to users',
    'Products can only be modified by their merchant',
    'Stock decreases atomically when order is placed',
    'Stock increases when order is cancelled/refunded',
    'Products inherit merchant category by default',
    'MRP must be >= selling_price (if provided)',
    'Discount percentage auto-calculated: ((MRP - selling_price) / MRP) * 100'
  ],

  related_schemas: ['merchants', 'order_items', 'product_reviews', 'inventory_logs']
} as const;

/**
 * TYPESCRIPT TYPE (AUTO-GENERATED)
 */
export type Product = {
  id: string;
  merchant_id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string | null;
  category: string;
  subcategory: string | null;
  base_price: number;
  selling_price: number;
  mrp: number | null;
  tax_rate: number;
  discount_percentage: number;
  inventory_type: 'unlimited' | 'tracked' | 'out_of_stock';
  stock_quantity: number | null;
  low_stock_threshold: number | null;
  is_available: boolean;
  status: 'draft' | 'active' | 'archived';
  images: {
    thumbnail: string;
    main: string;
    gallery: string[];
  };
  has_variants: boolean;
  variants: Array<{ name: string; price: number }> | null;
  specifications: Record<string, any> | null;
  is_veg: boolean | null;
  allergens: string[] | null;
  preparation_time_mins: number | null;
  tags: string[] | null;
  search_keywords: string | null;
  views_count: number;
  orders_count: number;
  rating: number;
  total_ratings: number;
  min_quantity: number;
  max_quantity: number | null;
  metadata: Record<string, any> | null;
  created_at: Date;
  updated_at: Date;
  published_at: Date | null;
};
