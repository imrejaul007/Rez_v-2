/**
 * Coin Priority Utilities
 * Determines the order in which coins are auto-applied based on the current mode
 */

/**
 * Get coin priority array for a specific mode
 * @param {string} mode - The current mode (rez | mall | cash-store | prive)
 * @returns {string[]} Array of coin types in priority order
 */
export const getCoinPriority = (mode) => {
  const priorities = {
    rez: ['promo', 'branded', 'rez'],
    mall: ['branded', 'rez', 'promo'],
    'cash-store': ['rez', 'promo', 'branded'],
    prive: ['prive', 'branded', 'rez', 'promo']
  };

  return priorities[mode] || priorities.rez;
};

/**
 * Get priority explanation for a specific mode
 * @param {string} mode - The current mode
 * @returns {object[]} Array of priority objects with reason
 */
export const getPriorityExplanation = (mode) => {
  const explanations = {
    rez: [
      { order: 1, type: 'promo', reason: 'Use first, expires soon', icon: '🔥' },
      { order: 2, type: 'branded', reason: 'Merchant loyalty', icon: '🔵' },
      { order: 3, type: 'rez', reason: 'Universal usage', icon: '🟢' }
    ],
    mall: [
      { order: 1, type: 'branded', reason: 'Brand loyalty first', icon: '🔵' },
      { order: 2, type: 'rez', reason: 'Universal fallback', icon: '🟢' },
      { order: 3, type: 'promo', reason: 'Use if available', icon: '🔥' }
    ],
    'cash-store': [
      { order: 1, type: 'rez', reason: 'Maximize cashback value', icon: '🟢' },
      { order: 2, type: 'promo', reason: 'Bonus savings', icon: '🔥' },
      { order: 3, type: 'branded', reason: 'If applicable', icon: '🔵' }
    ],
    prive: [
      { order: 1, type: 'prive', reason: 'Elite status currency', icon: '👑' },
      { order: 2, type: 'branded', reason: 'Brand partnerships', icon: '🔵' },
      { order: 3, type: 'rez', reason: 'Universal usage', icon: '🟢' },
      { order: 4, type: 'promo', reason: 'Additional savings', icon: '🔥' }
    ]
  };

  return explanations[mode] || explanations.rez;
};

/**
 * Get mode-specific wallet theme
 * @param {string} mode - The current mode
 * @returns {object} Theme object with colors and tone
 */
export const getModeTheme = (mode) => {
  const themes = {
    rez: {
      primary: '#00C06A',
      secondary: '#FFD700',
      background: '#FFFFFF',
      tone: 'friendly',
      emphasis: 'savings',
      emotion: "I'm saving money every day"
    },
    mall: {
      primary: '#000000',
      secondary: '#D4AF37',
      background: '#FFFFFF',
      tone: 'sophisticated',
      emphasis: 'value',
      emotion: "I'm shopping smart, not cheap"
    },
    'cash-store': {
      primary: '#2563EB',
      secondary: '#10B981',
      background: '#FFFFFF',
      tone: 'professional',
      emphasis: 'transparency',
      emotion: "I earn money while shopping"
    },
    prive: {
      primary: '#D4AF37',
      secondary: '#000000',
      background: '#1A1A1A',
      tone: 'exclusive',
      emphasis: 'prestige',
      emotion: "I belong here"
    }
  };

  return themes[mode] || themes.rez;
};

/**
 * Check if a specific coin type is available in the priority for a mode
 * @param {string} mode - The current mode
 * @param {string} coinType - The coin type to check
 * @returns {boolean} Whether the coin type is in priority
 */
export const isCoinInPriority = (mode, coinType) => {
  const priority = getCoinPriority(mode);
  return priority.includes(coinType);
};

/**
 * Get the priority rank for a specific coin type in a mode
 * @param {string} mode - The current mode
 * @param {string} coinType - The coin type
 * @returns {number} Priority rank (1-based), or -1 if not in priority
 */
export const getCoinPriorityRank = (mode, coinType) => {
  const priority = getCoinPriority(mode);
  const index = priority.indexOf(coinType);
  return index >= 0 ? index + 1 : -1;
};
