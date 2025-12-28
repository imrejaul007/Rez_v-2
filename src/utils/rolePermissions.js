// Role-based permission mapping for admin and merchant users

// Admin role permissions
export const ADMIN_ROLES = {
  HQ_ADMIN: 'hq_admin',
  REGIONAL_ADMIN: 'regional_admin',
  FINANCE_ADMIN: 'finance_admin',
  MARKETING_ADMIN: 'marketing_admin',
  OPERATIONS_ADMIN: 'operations_admin',
  CONTENT_ADMIN: 'content_admin',
  ANALYTICS_ADMIN: 'analytics_admin',
  FRAUD_ADMIN: 'fraud_admin'
};

// Merchant role permissions
export const MERCHANT_ROLES = {
  OWNER: 'owner',
  MANAGER: 'manager',
  POS_OPERATOR: 'pos_operator',
  ACCOUNTANT: 'accountant',
  MARKETING_MANAGER: 'marketing_manager',
  INVENTORY_MANAGER: 'inventory_manager',
  CASHIER: 'cashier',
  SUPPORT_AGENT: 'support_agent'
};

// Admin navigation category permissions
export const ADMIN_NAV_PERMISSIONS = {
  // Overview section
  overview: {
    [ADMIN_ROLES.HQ_ADMIN]: true,
    [ADMIN_ROLES.REGIONAL_ADMIN]: ['dashboard', 'regional-dashboard'],
    [ADMIN_ROLES.FINANCE_ADMIN]: ['dashboard', 'finance-dashboard'],
    [ADMIN_ROLES.MARKETING_ADMIN]: ['dashboard', 'marketing-dashboard'],
    [ADMIN_ROLES.OPERATIONS_ADMIN]: ['dashboard', 'operations-dashboard'],
    [ADMIN_ROLES.CONTENT_ADMIN]: ['dashboard', 'content-dashboard'],
    [ADMIN_ROLES.ANALYTICS_ADMIN]: ['dashboard', 'analytics-dashboard'],
    [ADMIN_ROLES.FRAUD_ADMIN]: ['dashboard']
  },

  // User management
  'user-management': {
    [ADMIN_ROLES.HQ_ADMIN]: true,
    [ADMIN_ROLES.REGIONAL_ADMIN]: ['users', 'merchants'],
    [ADMIN_ROLES.OPERATIONS_ADMIN]: ['users', 'merchants', 'user-management', 'profile-verification']
  },

  // Transactions
  transactions: {
    [ADMIN_ROLES.HQ_ADMIN]: true,
    [ADMIN_ROLES.FINANCE_ADMIN]: true,
    [ADMIN_ROLES.REGIONAL_ADMIN]: ['transactions'],
    [ADMIN_ROLES.ANALYTICS_ADMIN]: ['transactions', 'wallet']
  },

  // Offers & Deals
  'offers-deals': {
    [ADMIN_ROLES.HQ_ADMIN]: true,
    [ADMIN_ROLES.MARKETING_ADMIN]: true,
    [ADMIN_ROLES.REGIONAL_ADMIN]: ['offers', 'nearby-offers', 'todays-offers']
  },

  // Coin System
  'coin-system': {
    [ADMIN_ROLES.HQ_ADMIN]: true,
    [ADMIN_ROLES.FINANCE_ADMIN]: true,
    [ADMIN_ROLES.MARKETING_ADMIN]: ['promo-coin-manager']
  },

  // Merchant Config
  'merchant-config': {
    [ADMIN_ROLES.HQ_ADMIN]: true,
    [ADMIN_ROLES.OPERATIONS_ADMIN]: ['merchant-tier-config', 'co-partner-brands', 'partnerships']
  },

  // Marketing & Campaigns
  'marketing-campaigns': {
    [ADMIN_ROLES.HQ_ADMIN]: true,
    [ADMIN_ROLES.MARKETING_ADMIN]: true,
    [ADMIN_ROLES.REGIONAL_ADMIN]: ['campaigns']
  },

  // Content Management
  'content-management': {
    [ADMIN_ROLES.HQ_ADMIN]: true,
    [ADMIN_ROLES.CONTENT_ADMIN]: true,
    [ADMIN_ROLES.MARKETING_ADMIN]: ['hero-banners', 'categories']
  },

  // Analytics & Reports
  'analytics-reports': {
    [ADMIN_ROLES.HQ_ADMIN]: true,
    [ADMIN_ROLES.ANALYTICS_ADMIN]: true,
    [ADMIN_ROLES.FINANCE_ADMIN]: ['analytics'],
    [ADMIN_ROLES.MARKETING_ADMIN]: ['analytics'],
    [ADMIN_ROLES.REGIONAL_ADMIN]: ['analytics']
  },

  // Fraud & Security
  'fraud-security': {
    [ADMIN_ROLES.HQ_ADMIN]: true,
    [ADMIN_ROLES.FRAUD_ADMIN]: true,
    [ADMIN_ROLES.OPERATIONS_ADMIN]: ['fraud']
  },

  // RBAC Management
  'rbac-management': {
    [ADMIN_ROLES.HQ_ADMIN]: true
  },

  // Settings
  settings: {
    [ADMIN_ROLES.HQ_ADMIN]: true,
    [ADMIN_ROLES.OPERATIONS_ADMIN]: ['settings', 'integrations']
  }
};

// Merchant navigation category permissions
export const MERCHANT_NAV_PERMISSIONS = {
  // Dashboard
  overview: {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: true,
    [MERCHANT_ROLES.POS_OPERATOR]: ['dashboard'],
    [MERCHANT_ROLES.ACCOUNTANT]: ['dashboard'],
    [MERCHANT_ROLES.MARKETING_MANAGER]: ['dashboard'],
    [MERCHANT_ROLES.INVENTORY_MANAGER]: ['dashboard'],
    [MERCHANT_ROLES.CASHIER]: ['dashboard'],
    [MERCHANT_ROLES.SUPPORT_AGENT]: ['dashboard']
  },

  // Operations
  operations: {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: true,
    [MERCHANT_ROLES.POS_OPERATOR]: ['pos', 'orders'],
    [MERCHANT_ROLES.CASHIER]: ['pos']
  },

  // Sales & Orders
  'sales-orders': {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: true,
    [MERCHANT_ROLES.POS_OPERATOR]: ['pos', 'orders', 'transactions'],
    [MERCHANT_ROLES.CASHIER]: ['pos', 'orders']
  },

  // Inventory
  inventory: {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: true,
    [MERCHANT_ROLES.INVENTORY_MANAGER]: true,
    [MERCHANT_ROLES.POS_OPERATOR]: ['inventory']
  },

  // Products
  products: {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: true,
    [MERCHANT_ROLES.INVENTORY_MANAGER]: true
  },

  // Customers
  customers: {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: true,
    [MERCHANT_ROLES.MARKETING_MANAGER]: true,
    [MERCHANT_ROLES.SUPPORT_AGENT]: true
  },

  // Marketing & Campaigns
  marketing: {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: true,
    [MERCHANT_ROLES.MARKETING_MANAGER]: true
  },

  // Offers & Deals
  offers: {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: true,
    [MERCHANT_ROLES.MARKETING_MANAGER]: true,
    [MERCHANT_ROLES.POS_OPERATOR]: ['offers']
  },

  // Analytics & Reports
  analytics: {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: true,
    [MERCHANT_ROLES.ACCOUNTANT]: true,
    [MERCHANT_ROLES.MARKETING_MANAGER]: ['analytics']
  },

  // Financial
  financial: {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: ['accounting', 'transactions'],
    [MERCHANT_ROLES.ACCOUNTANT]: true
  },

  // Staff Management
  staff: {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: true
  },

  // Settings
  settings: {
    [MERCHANT_ROLES.OWNER]: true,
    [MERCHANT_ROLES.MANAGER]: ['settings']
  }
};

/**
 * Check if a role has access to a navigation category
 * @param {string} role - User role
 * @param {string} categoryId - Navigation category ID
 * @param {object} permissionMap - Permission mapping (ADMIN_NAV_PERMISSIONS or MERCHANT_NAV_PERMISSIONS)
 * @returns {boolean|array} - true (full access), false (no access), or array of allowed paths
 */
export const hasNavAccess = (role, categoryId, permissionMap) => {
  const categoryPerms = permissionMap[categoryId];
  if (!categoryPerms) return false;

  const rolePerms = categoryPerms[role];
  if (rolePerms === undefined) return false;

  return rolePerms; // true, false, or array of paths
};

/**
 * Check if a role has access to a specific navigation item
 * @param {string} role - User role
 * @param {string} categoryId - Navigation category ID
 * @param {string} itemPath - Specific item path (e.g., 'dashboard', 'transactions')
 * @param {object} permissionMap - Permission mapping
 * @returns {boolean}
 */
export const hasItemAccess = (role, categoryId, itemPath, permissionMap) => {
  const categoryAccess = hasNavAccess(role, categoryId, permissionMap);

  // Full access to category
  if (categoryAccess === true) return true;

  // No access to category
  if (categoryAccess === false || !categoryAccess) return false;

  // Partial access - check if itemPath is in allowed array
  if (Array.isArray(categoryAccess)) {
    // Extract the last part of the path (e.g., '/admin/dashboard' -> 'dashboard')
    const pathPart = itemPath.split('/').pop();
    return categoryAccess.includes(pathPart);
  }

  return false;
};

/**
 * Filter navigation items based on role
 * @param {array} navItems - Navigation items array
 * @param {string} role - User role
 * @param {object} permissionMap - Permission mapping
 * @returns {array} - Filtered navigation items
 */
export const filterNavByRole = (navItems, role, permissionMap) => {
  if (!role) return navItems; // No filtering if no role

  return navItems
    .map(category => {
      const categoryAccess = hasNavAccess(role, category.id, permissionMap);

      // No access to this category
      if (!categoryAccess) return null;

      // Full access to category
      if (categoryAccess === true) return category;

      // Partial access - filter items
      if (Array.isArray(categoryAccess)) {
        const filteredItems = category.items.filter(item => {
          const pathPart = item.path.split('/').pop();
          return categoryAccess.includes(pathPart);
        });

        // Only return category if it has items after filtering
        if (filteredItems.length > 0) {
          return {
            ...category,
            items: filteredItems
          };
        }
      }

      return null;
    })
    .filter(Boolean); // Remove null entries
};

// Export default permission checker
export default {
  ADMIN_ROLES,
  MERCHANT_ROLES,
  ADMIN_NAV_PERMISSIONS,
  MERCHANT_NAV_PERMISSIONS,
  hasNavAccess,
  hasItemAccess,
  filterNavByRole
};
