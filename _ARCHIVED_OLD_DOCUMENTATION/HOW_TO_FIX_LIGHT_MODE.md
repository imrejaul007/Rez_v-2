# How to Fix Light Mode Visibility Issues

## Problem
Many text elements and backgrounds in the ReZ app use hardcoded colors (like `text-white`, `text-gray-300`, `bg-white/10`) that don't adapt to light/dark mode, making them invisible in light mode.

## Solution
I've created THREE different scripts you can use to fix all 56 .jsx files automatically. Choose the one that works best for your system.

---

## Option 1: Bash Script (Recommended for Mac/Linux)

### Steps:
1. Open Terminal
2. Navigate to your project:
   ```bash
   cd "/Users/rejaulkarim/Documents/ReZ V 2/rez-app"
   ```

3. Make the script executable:
   ```bash
   chmod +x fix_light_mode.sh
   ```

4. Run the script:
   ```bash
   ./fix_light_mode.sh
   ```

---

## Option 2: Node.js Script

### Steps:
1. Open Terminal
2. Navigate to your project:
   ```bash
   cd "/Users/rejaulkarim/Documents/ReZ V 2/rez-app"
   ```

3. Run the script:
   ```bash
   node fix_light_mode.js
   ```

---

## Option 3: Python Script

### Steps:
1. Open Terminal
2. Navigate to your project:
   ```bash
   cd "/Users/rejaulkarim/Documents/ReZ V 2/rez-app"
   ```

3. Run the script:
   ```bash
   python3 fix_light_mode.py
   ```

---

## What Gets Fixed

### Text Colors:
- `text-white` → `text-rez-navy dark:text-white`
- `text-gray-300` → `text-rez-gray-700 dark:text-gray-300`
- `text-gray-400` → `text-rez-gray-600 dark:text-gray-400`

### Background Colors:
- `bg-white/10` → `bg-rez-gray-100 dark:bg-white/10`
- `bg-white/5` → `bg-rez-gray-50 dark:bg-white/5`

### Border Colors:
- `border-white/10` → `border-rez-gray-200 dark:border-white/10`

---

## Files That Will Be Fixed (56 total)

### Root Pages:
- Home.jsx
- Wallet.jsx
- Profile.jsx
- Explore.jsx
- Categories.jsx
- Earn.jsx

### Feature Pages:
- StorePage.jsx
- Offers.jsx
- CashStore.jsx
- DealDetail.jsx
- FleaMarket.jsx
- Events.jsx
- EventDetail.jsx
- RestaurantDetail.jsx

### Category Pages:
- ElectronicsCategory.jsx
- FashionCategory.jsx
- BeautyCategory.jsx
- BeautyService.jsx
- Electronics.jsx
- Grocery.jsx
- Healthcare.jsx
- Fitness.jsx
- HomeServices.jsx
- Financial.jsx
- Travel.jsx
- Beauty.jsx
- Fashion.jsx
- FoodDining.jsx

### Product/Service Pages:
- ElectronicsProduct.jsx
- FashionProduct.jsx
- ProductServicePage.jsx
- ServiceBookingPage.jsx

### Checkout Pages:
- ProductCheckout.jsx
- ServiceCheckout.jsx
- PayInStore.jsx

### Loyalty/Rewards Pages:
- BrandLoyalty.jsx
- LoyaltyHub.jsx
- LoyaltyRewardsHub.jsx
- RewardsHub.jsx
- DealStore.jsx

### Exclusive Directory:
- exclusive/StudentZone.jsx
- exclusive/CorporatePerks.jsx
- exclusive/WomenExclusive.jsx
- exclusive/BirthdaySpecials.jsx
- exclusive/SpecialProfiles.jsx
- exclusive/LoyaltyRewards.jsx

### Stores Directory:
- stores/LuxuryStore.jsx
- stores/OrganicStore.jsx
- stores/MenStore.jsx
- stores/WomenStore.jsx
- stores/ChildrenStore.jsx
- stores/RentalStore.jsx
- stores/GiftingStore.jsx

### Utility Pages:
- SearchResults.jsx
- HowRezWorks.jsx
- Onboarding.jsx

---

## Verification

After running the script, you can verify the fixes by:

1. Opening any .jsx file
2. Searching for `text-white` - should now be `text-rez-navy dark:text-white`
3. Searching for `bg-white/10` - should now be `bg-rez-gray-100 dark:bg-white/10`
4. Testing the app in light mode - all text should now be visible!

---

## Expected Results

### Before:
- White text on white background in light mode (invisible)
- Gray backgrounds blend with light background
- Borders are invisible in light mode

### After:
- Navy text on white background in light mode (visible)
- Gray backgrounds have proper contrast
- Borders are visible with proper gray colors
- Dark mode continues to work perfectly with white text

---

## Backup

The bash script automatically creates temporary backups during processing. If something goes wrong:
1. Look for `.bak.tmp` files
2. Restore from git if you're using version control: `git checkout src/pages`

---

## Support

If you encounter any issues:
1. Make sure you're in the correct directory
2. Check that you have write permissions
3. Try a different script option if one doesn't work
4. Contact support with the error message

---

## Manual Fix (If Scripts Don't Work)

If for some reason none of the scripts work, you can manually fix files by:

1. Opening each .jsx file
2. Use Find & Replace in your editor:
   - Find: `text-white ` → Replace: `text-rez-navy dark:text-white `
   - Find: `text-white"` → Replace: `text-rez-navy dark:text-white"`
   - Find: `text-gray-300 ` → Replace: `text-rez-gray-700 dark:text-gray-300 `
   - Find: `text-gray-400 ` → Replace: `text-rez-gray-600 dark:text-gray-400 `
   - Find: `bg-white/10 ` → Replace: `bg-rez-gray-100 dark:bg-white/10 `
   - Find: `bg-white/5 ` → Replace: `bg-rez-gray-50 dark:bg-white/5 `
   - Find: `border-white/10 ` → Replace: `border-rez-gray-200 dark:border-white/10 `

---

## Testing After Fix

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Toggle between light and dark mode in the app

3. Verify that all text is visible in both modes

4. Check specific pages:
   - Home page
   - Wallet page
   - Categories page
   - Any store or product page

---

Good luck! All your light mode visibility issues should be fixed after running any of these scripts.
