export const mockProducts = [
  {
    id: 'prod-001',
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
    category: 'pizza',
    price: 299,
    costPrice: 120,
    taxRate: 5,
    stock: {
      quantity: 45,
      unit: 'pieces',
      reorderLevel: 10,
      maxLevel: 100
    },
    image: 'https://placehold.co/400x300/png?text=Margherita',
    variants: [
      { name: 'Small', price: 199, sku: 'MARG-SM' },
      { name: 'Medium', price: 299, sku: 'MARG-MD' },
      { name: 'Large', price: 399, sku: 'MARG-LG' }
    ],
    status: 'active',
    featured: true,
    tags: ['vegetarian', 'popular']
  },
  {
    id: 'prod-002',
    name: 'Pepperoni Pizza',
    description: 'Classic pizza with pepperoni, mozzarella, and tomato sauce',
    category: 'pizza',
    price: 399,
    costPrice: 180,
    taxRate: 5,
    stock: {
      quantity: 32,
      unit: 'pieces',
      reorderLevel: 10,
      maxLevel: 80
    },
    image: 'https://placehold.co/400x300/png?text=Pepperoni',
    variants: [
      { name: 'Small', price: 299, sku: 'PEPP-SM' },
      { name: 'Medium', price: 399, sku: 'PEPP-MD' },
      { name: 'Large', price: 499, sku: 'PEPP-LG' }
    ],
    status: 'active',
    featured: true,
    tags: ['non-vegetarian', 'bestseller']
  },
  {
    id: 'prod-003',
    name: 'Veggie Supreme',
    description: 'Loaded with bell peppers, onions, olives, mushrooms, and tomatoes',
    category: 'pizza',
    price: 349,
    costPrice: 140,
    taxRate: 5,
    stock: {
      quantity: 28,
      unit: 'pieces',
      reorderLevel: 10,
      maxLevel: 70
    },
    image: 'https://placehold.co/400x300/png?text=Veggie',
    variants: [
      { name: 'Small', price: 249, sku: 'VEG-SM' },
      { name: 'Medium', price: 349, sku: 'VEG-MD' },
      { name: 'Large', price: 449, sku: 'VEG-LG' }
    ],
    status: 'active',
    featured: false,
    tags: ['vegetarian', 'healthy']
  },
  {
    id: 'prod-004',
    name: 'Coca Cola',
    description: 'Chilled Coca Cola 330ml',
    category: 'beverages',
    price: 40,
    costPrice: 20,
    taxRate: 12,
    stock: {
      quantity: 8,
      unit: 'bottles',
      reorderLevel: 10,
      maxLevel: 200
    },
    image: 'https://placehold.co/400x300/png?text=Coke',
    variants: [],
    status: 'active',
    featured: false,
    tags: ['beverages']
  },
  {
    id: 'prod-005',
    name: 'Garlic Bread',
    description: 'Toasted bread with garlic butter and herbs',
    category: 'sides',
    price: 99,
    costPrice: 40,
    taxRate: 5,
    stock: {
      quantity: 5,
      unit: 'pieces',
      reorderLevel: 10,
      maxLevel: 50
    },
    image: 'https://placehold.co/400x300/png?text=Garlic+Bread',
    variants: [],
    status: 'active',
    featured: false,
    tags: ['vegetarian', 'sides']
  },
  {
    id: 'prod-006',
    name: 'Chicken Wings',
    description: 'Spicy chicken wings with dipping sauce',
    category: 'sides',
    price: 199,
    costPrice: 90,
    taxRate: 5,
    stock: {
      quantity: 15,
      unit: 'pieces',
      reorderLevel: 5,
      maxLevel: 40
    },
    image: 'https://placehold.co/400x300/png?text=Wings',
    variants: [],
    status: 'active',
    featured: true,
    tags: ['non-vegetarian', 'spicy']
  }
];

export const mockCategories = [
  { id: 'cat-001', name: 'Pizza', count: 3 },
  { id: 'cat-002', name: 'Beverages', count: 1 },
  { id: 'cat-003', name: 'Sides', count: 2 }
];

export const getLowStockProducts = () => {
  return mockProducts.filter(p => p.stock.quantity <= p.stock.reorderLevel);
};

export const getProductById = (id) => {
  return mockProducts.find(p => p.id === id);
};

export const getProductsByCategory = (category) => {
  return mockProducts.filter(p => p.category === category);
};
