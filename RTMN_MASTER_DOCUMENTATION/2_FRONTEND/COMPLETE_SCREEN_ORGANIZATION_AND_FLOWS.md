# RTMN Complete Screen Organization & Navigation Flows

**Total Screens:** 1103
**Generated:** /Users/rejaulkarim/Documents/ReZ V 2

## Table of Contents

1. [BizOne (Merchant OS)](#bizone-merchant-os)
2. [Category-Specific](#category-specific)
3. [Discovery Layer](#discovery-layer)
4. [Growth Stack](#growth-stack)
5. [HQ Admin](#hq-admin)
6. [ReZ (Customer App)](#rez-customer-app)
7. [ReZ Prive (Premium)](#rez-prive-premium)
8. [Shared/Common](#shared/common)
9. [Wasil Distribution Apps](#wasil-distribution-apps)

---

## BizOne (Merchant OS)

**Total Screens:** 222

### Navigation Flow Diagram

```mermaid
graph TD
    %% BizOne (Merchant OS) - Screen Navigation Flow
    %% Total Screens: 222

    %% MERCHANT SECTION
    S1["CreateOffer"]
    S2[("MerchantAccountantPortal"])
    S3["MerchantAccounting"]
    S4{{"MerchantAdzyHub"}}
    S5[("MerchantAggregatorBridge"])
    S6[("MerchantAggregatorReconciliation"])
    S7["MerchantAnalytics"]
    S8{{"MerchantAppointments"}}
    S9{{"MerchantAutoRestock"}}
    S10["MerchantAutopilot"]
    S11{{"MerchantBOGOOffers"}}
    S12["MerchantBarcodeGenerator"]
    S13["MerchantBarcodeScanner"]
    S14[("MerchantBatchTracking"])
    S15["MerchantBenchmarks"]
    S16{{"MerchantBillHold"}}
    S17{{"MerchantBillManagement"}}
    S18[("MerchantBillSplitting"])
    S19{{"MerchantBirthdayOffers"}}
    S20{{"MerchantBirthdayRewards"}}
    S21[("MerchantBookingCalendar"])
    S22["MerchantBranchManager"]
    S23["MerchantBrandedCoinConfig"]
    S24[("MerchantBulkImport"])
    S25{{"MerchantBulkOrdering"}}
    S26["MerchantBusinessDetails"]
    S27[("MerchantCRM"])
    S28[("MerchantCalendarSync"])
    S29{{"MerchantCampaigns"}}
    S30[("MerchantCaptainApp"])
    S31["MerchantCartAbandonment"]
    S32[/"MerchantCashDrawer"/]
    S33{{"MerchantCashbackPrograms"}}
    S34{{"MerchantCategoryPOS"}}
    S35[("MerchantClassSchedule"])
    S36{{"MerchantClearanceSales"}}
    S37{{"MerchantClinicInsurance"}}
    S38{{"MerchantComboProducts"}}
    S39["MerchantCommissionCalculator"]
    S40["MerchantCompetitorPricing"]
    S41[("MerchantCompliance"])
    S42[("MerchantContent"])
    S43{{"MerchantContestBuilder"}}
    S44["MerchantControlPlane"]
    S45[("MerchantCreatorHub"])
    S46{{"MerchantCreditLedger"}}
    S47{{"MerchantCrossSellSuggestions"}}
    S48{{"MerchantCustomerIdentity"}}
    S49[("MerchantCustomerSegmentation"])
    S50["MerchantCustomers"]
    S51["MerchantDashboard"]
    S52{{"MerchantDataExport"}}
    S53[/"MerchantDayEndReport"/]
    S54{{"MerchantDaybook"}}
    S55["MerchantDealAnalytics"]
    S56[("MerchantDeliveryBridge"])
    S57["MerchantDeliveryFleet"]
    S58[("MerchantDemandSignals"])
    S59["MerchantDiscovery"]
    S60{{"MerchantDocuments"}}
    S61["MerchantDynamicPricing"]
    S62{{"MerchantEInvoice"}}
    S63[("MerchantERPConnector"])
    S64{{"MerchantEmployeeScheduling"}}
    S65{{"MerchantEventCheckIn"}}
    S66[("MerchantEventStream"])
    S67{{"MerchantEvents"}}
    S68{{"MerchantExclusiveDeals"}}
    S69["MerchantExclusivePrograms"]
    S70{{"MerchantExpenseTracker"}}
    S71[("MerchantExpiryDashboard"])
    S72[("MerchantFailedPayments"])
    S73["MerchantFinancials"]
    S74{{"MerchantFlashDeals"}}
    S75[("MerchantFloorPlan"])
    S76["MerchantFreeDelivery"]
    S77{{"MerchantGSTRExport"}}
    S78[("MerchantGSTReports"])
    S79["MerchantGSTSetupWizard"]
    S80{{"MerchantGamificationRewards"}}
    S81{{"MerchantGoogleAdsManager"}}
    S82{{"MerchantHSNCodes"}}
    S83[/"MerchantHardwareDiagnostics"/]
    S84{{"MerchantHardwareHub"}}
    S85{{"MerchantHolidayCalendar"}}
    S86{{"MerchantIngredientTracking"}}
    S87[("MerchantIntegrationHealth"])
    S88[("MerchantIntegrationHub"])
    S89[("MerchantIntegrations"])
    S90{{"MerchantInventory"}}
    S91[("MerchantInventoryAdvanced"])
    S92["MerchantInventoryForecasting"]
    S93["MerchantInventoryTransfer"]
    S94["MerchantInvoiceScanner"]
    S95[("MerchantKDS"])
    S96["MerchantKitchenDisplay"]
    S97["MerchantLabelPrinting"]
    S98["MerchantLockPriceDeals"]
    S99{{"MerchantLowStockAlerts"}}
    S100[("MerchantLoyalty"])
    S101{{"MerchantLoyaltyBuilder"}}
    S102{{"MerchantLoyaltyOffers"}}
    S103["MerchantLoyaltyTiers"]
    S104["MerchantMarketing"]
    S105[("MerchantMarketingCampaigns"])
    S106[("MerchantMarketplace"])
    S107[("MerchantMemberships"])
    S108["MerchantMenuEngineering"]
    S109["MerchantMenuManagement"]
    S110{{"MerchantMetaAdsManager"}}
    S111["MerchantMultiStore"]
    S112["MerchantMultiStoreDashboard"]
    S113["MerchantMultiWarehouse"]
    S114{{"MerchantNearbyOffers"}}
    S115[/"MerchantNotifications"/]
    S116["MerchantOffers"]
    S117{{"MerchantOfflineMarketing"}}
    S118[("MerchantOfflinePOS"])
    S119["MerchantOfflinePOSSync"]
    S120{{"MerchantOrders"}}
    S121[("MerchantOrdersMultiChannel"])
    S122{{"MerchantPOS"}}
    S123[("MerchantPOSIntegration"])
    S124[("MerchantPOSTransactions"])
    S125{{"MerchantPaymentIntents"}}
    S126{{"MerchantPaymentLinks"}}
    S127{{"MerchantPaymentReminders"}}
    S128{{"MerchantPayments"}}
    S129[("MerchantPayroll"])
    S130["MerchantPerformance"]
    S131["MerchantPointsRules"]
    S132{{"MerchantPortionControl"}}
    S133[("MerchantPostPaymentRewards"])
    S134[("MerchantPowerSurvival"])
    S135[("MerchantPrescriptions"])
    S136[("MerchantPriceEngineering"])
    S137[("MerchantPricingIntelligence"])
    S138{{"MerchantPrintTemplates"}}
    S139[("MerchantPriveModule"])
    S140["MerchantProductBundles"]
    S141["MerchantProductBundling"]
    S142{{"MerchantProductVariants"}}
    S143{{"MerchantProducts"}}
    S144[/"MerchantProfile"/]
    S145["MerchantProfitLoss"]
    S146["MerchantProfitView"]
    S147{{"MerchantPromotionParticipation"}}
    S148{{"MerchantPurchaseOrders"}}
    S149[("MerchantQROrdering"])
    S150{{"MerchantQRPayments"}}
    S151["MerchantQualityControl"]
    S152["MerchantQuickOnboarding"]
    S153{{"MerchantQuotations"}}
    S154{{"MerchantReEngagement"}}
    S155{{"MerchantRecipeCosting"}}
    S156["MerchantRecipeManagement"]
    S157{{"MerchantReferralTracking"}}
    S158{{"MerchantReturns"}}
    S159[("MerchantReviewManagement"])
    S160["MerchantReviews"]
    S161[("MerchantRushHourMode"])
    S162{{"MerchantSalesmanCommission"}}
    S163{{"MerchantSalonPackages"}}
    S164{{"MerchantSeasonalMenu"}}
    S165["MerchantSeasonalTrends"]
    S166{{"MerchantServiceCatalog"}}
    S167{{"MerchantSessionTracking"}}
    S168[/"MerchantSettings"/]
    S169[("MerchantSettlementEngine"])
    S170{{"MerchantShiftManagement"}}
    S171{{"MerchantShipping"}}
    S172["MerchantSignup"]
    S173{{"MerchantSimplePOS"}}
    S174["MerchantSoftPOS"]
    S175{{"MerchantStaff"}}
    S176{{"MerchantStaffActivityLog"}}
    S177["MerchantStaffLeaderboard"]
    S178{{"MerchantStaffRoster"}}
    S179["MerchantStaffSales"]
    S180{{"MerchantStockReconciliation"}}
    S181{{"MerchantStockTransfer"}}
    S182{{"MerchantStockVarianceReport"}}
    S183[("MerchantStoreTransfer"])
    S184{{"MerchantSubscriptionPlans"}}
    S185{{"MerchantSubscriptions"}}
    S186["MerchantSuccess"]
    S187["MerchantSuperOSDashboard"]
    S188{{"MerchantSupplierContracts"}}
    S189["MerchantSupplierManagement"]
    S190["MerchantSupplierPerformance"]
    S191{{"MerchantSupplierReturns"}}
    S192{{"MerchantSuppliersProcurement"}}
    S193[("MerchantSupport"])
    S194{{"MerchantSupportHub"}}
    S195[("MerchantTDSTCSReports"])
    S196[("MerchantTableBooking"])
    S197{{"MerchantTableManagement"}}
    S198[("MerchantTaxCompliance"])
    S199{{"MerchantTeamManagement"}}
    S200["MerchantTipsConfig"]
    S201{{"MerchantTodaysOffers"}}
    S202[("MerchantTokenDisplay"])
    S203["MerchantTransactions"]
    S204[("MerchantTrustScoreDetail"])
    S205{{"MerchantUGCCampaigns"}}
    S206{{"MerchantUnifiedMarketing"}}
    S207{{"MerchantUnifiedOrders"}}
    S208{{"MerchantUpsellEngine"}}
    S209[("MerchantUserRoles"])
    S210["MerchantVendorManagement"]
    S211{{"MerchantVendorPortal"}}
    S212{{"MerchantVouchers"}}
    S213[("MerchantWaiterApp"])
    S214{{"MerchantWallet"}}
    S215["MerchantWarehouseManagement"]
    S216{{"MerchantWasteManagement"}}
    S217["MerchantWasteTracking"]
    S218{{"MerchantWhatsAppBusiness"}}
    S219{{"MerchantWishlistDemand"}}

    %% PARTNER SECTION
    S220["PartnerDashboard"]
    S221["PartnerSignup"]
    S222["PartnerSuccess"]

    %% NAVIGATION FLOWS
```

### Screen Inventory

#### merchant

| Screen | Type | Navigates To |
|--------|------|--------------|
| CreateOffer | Standard | /merchant/dashboard, /merchant/offers |
| MerchantAccountantPortal | Tab View | /merchant |
| MerchantAccounting | Standard | — |
| MerchantAdzyHub | Modal | — |
| MerchantAggregatorBridge | Tab View | — |
| MerchantAggregatorReconciliation | Tab View | — |
| MerchantAnalytics | Standard | — |
| MerchantAppointments | Modal | — |
| MerchantAutoRestock | Modal | — |
| MerchantAutopilot | Standard | — |
| MerchantBOGOOffers | Modal | — |
| MerchantBarcodeGenerator | Standard | — |
| MerchantBarcodeScanner | Standard | — |
| MerchantBatchTracking | Tab View | — |
| MerchantBenchmarks | Standard | — |
| MerchantBillHold | Modal | — |
| MerchantBillManagement | Modal | /merchant |
| MerchantBillSplitting | Tab View | — |
| MerchantBirthdayOffers | Modal | — |
| MerchantBirthdayRewards | Modal | — |
| MerchantBookingCalendar | Tab View | — |
| MerchantBranchManager | Standard | — |
| MerchantBrandedCoinConfig | Standard | — |
| MerchantBulkImport | Tab View | — |
| MerchantBulkOrdering | Modal | — |
| MerchantBusinessDetails | Standard | /merchant/success |
| MerchantCRM | Tab View | — |
| MerchantCalendarSync | Tab View | — |
| MerchantCampaigns | Modal | — |
| MerchantCaptainApp | Tab View | — |
| MerchantCartAbandonment | Standard | — |
| MerchantCashDrawer | Drawer | /merchant |
| MerchantCashbackPrograms | Modal | — |
| MerchantCategoryPOS | Modal | — |
| MerchantClassSchedule | Tab View | — |
| MerchantClearanceSales | Modal | — |
| MerchantClinicInsurance | Modal | — |
| MerchantComboProducts | Modal | — |
| MerchantCommissionCalculator | Standard | — |
| MerchantCompetitorPricing | Standard | — |
| MerchantCompliance | Tab View | # |
| MerchantContent | Tab View | — |
| MerchantContestBuilder | Modal | — |
| MerchantControlPlane | Standard | — |
| MerchantCreatorHub | Tab View | — |
| MerchantCreditLedger | Modal | — |
| MerchantCrossSellSuggestions | Modal | — |
| MerchantCustomerIdentity | Modal | — |
| MerchantCustomerSegmentation | Tab View | — |
| MerchantCustomers | Standard | — |
| MerchantDashboard | Standard | /merchant/performance, /merchant/inventory, /merchant/wallet |
| MerchantDataExport | Modal | — |
| MerchantDayEndReport | Drawer | /merchant |
| MerchantDaybook | Modal | — |
| MerchantDealAnalytics | Standard | — |
| MerchantDeliveryBridge | Tab View | — |
| MerchantDeliveryFleet | Standard | — |
| MerchantDemandSignals | Tab View | — |
| MerchantDiscovery | Standard | — |
| MerchantDocuments | Modal | — |
| MerchantDynamicPricing | Standard | — |
| MerchantEInvoice | Modal | — |
| MerchantERPConnector | Tab View | — |
| MerchantEmployeeScheduling | Modal | — |
| MerchantEventCheckIn | Modal | — |
| MerchantEventStream | Tab View | — |
| MerchantEvents | Modal | — |
| MerchantExclusiveDeals | Modal | — |
| MerchantExclusivePrograms | Standard | — |
| MerchantExpenseTracker | Modal | — |
| MerchantExpiryDashboard | Tab View | — |
| MerchantFailedPayments | Tab View | — |
| MerchantFinancials | Standard | — |
| MerchantFlashDeals | Modal | — |
| MerchantFloorPlan | Tab View | — |
| MerchantFreeDelivery | Standard | — |
| MerchantGSTRExport | Modal | — |
| MerchantGSTReports | Tab View | — |
| MerchantGSTSetupWizard | Standard | /merchant |
| MerchantGamificationRewards | Modal | — |
| MerchantGoogleAdsManager | Modal | — |
| MerchantHSNCodes | Modal | — |
| MerchantHardwareDiagnostics | Drawer | /merchant |
| MerchantHardwareHub | Modal | — |
| MerchantHolidayCalendar | Modal | — |
| MerchantIngredientTracking | Modal | — |
| MerchantIntegrationHealth | Tab View | — |
| MerchantIntegrationHub | Tab View | — |
| MerchantIntegrations | Tab View | — |
| MerchantInventory | Modal | — |
| MerchantInventoryAdvanced | Tab View | — |
| MerchantInventoryForecasting | Standard | — |
| MerchantInventoryTransfer | Standard | — |
| MerchantInvoiceScanner | Standard | — |
| MerchantKDS | Tab View | — |
| MerchantKitchenDisplay | Standard | — |
| MerchantLabelPrinting | Standard | — |
| MerchantLockPriceDeals | Standard | — |
| MerchantLowStockAlerts | Modal | — |
| MerchantLoyalty | Tab View | — |
| MerchantLoyaltyBuilder | Modal | — |
| MerchantLoyaltyOffers | Modal | — |
| MerchantLoyaltyTiers | Standard | — |
| MerchantMarketing | Standard | — |
| MerchantMarketingCampaigns | Tab View | — |
| MerchantMarketplace | Tab View | — |
| MerchantMemberships | Tab View | — |
| MerchantMenuEngineering | Standard | — |
| MerchantMenuManagement | Standard | — |
| MerchantMetaAdsManager | Modal | — |
| MerchantMultiStore | Standard | — |
| MerchantMultiStoreDashboard | Standard | — |
| MerchantMultiWarehouse | Standard | — |
| MerchantNearbyOffers | Modal | — |
| MerchantNotifications | Drawer | — |
| MerchantOffers | Standard | — |
| MerchantOfflineMarketing | Modal | — |
| MerchantOfflinePOS | Tab View | /merchant |
| MerchantOfflinePOSSync | Standard | /merchant |
| MerchantOrders | Modal | — |
| MerchantOrdersMultiChannel | Tab View | — |
| MerchantPOS | Modal | — |
| MerchantPOSIntegration | Tab View | — |
| MerchantPOSTransactions | Tab View | — |
| MerchantPaymentIntents | Modal | — |
| MerchantPaymentLinks | Modal | — |
| MerchantPaymentReminders | Modal | — |
| MerchantPayments | Modal | — |
| MerchantPayroll | Tab View | — |
| MerchantPerformance | Standard | — |
| MerchantPointsRules | Standard | — |
| MerchantPortionControl | Modal | — |
| MerchantPostPaymentRewards | Tab View | — |
| MerchantPowerSurvival | Tab View | — |
| MerchantPrescriptions | Tab View | — |
| MerchantPriceEngineering | Tab View | — |
| MerchantPricingIntelligence | Tab View | — |
| MerchantPrintTemplates | Modal | — |
| MerchantPriveModule | Tab View | — |
| MerchantProductBundles | Standard | — |
| MerchantProductBundling | Standard | — |
| MerchantProductVariants | Modal | — |
| MerchantProducts | Modal | — |
| MerchantProfile | Drawer | — |
| MerchantProfitLoss | Standard | — |
| MerchantProfitView | Standard | /merchant |
| MerchantPromotionParticipation | Modal | /merchant |
| MerchantPurchaseOrders | Modal | — |
| MerchantQROrdering | Tab View | — |
| MerchantQRPayments | Modal | — |
| MerchantQualityControl | Standard | — |
| MerchantQuickOnboarding | Standard | /merchant |
| MerchantQuotations | Modal | — |
| MerchantReEngagement | Modal | — |
| MerchantRecipeCosting | Modal | — |
| MerchantRecipeManagement | Standard | — |
| MerchantReferralTracking | Modal | — |
| MerchantReturns | Modal | — |
| MerchantReviewManagement | Tab View | — |
| MerchantReviews | Standard | — |
| MerchantRushHourMode | Tab View | — |
| MerchantSalesmanCommission | Modal | — |
| MerchantSalonPackages | Modal | — |
| MerchantSeasonalMenu | Modal | — |
| MerchantSeasonalTrends | Standard | — |
| MerchantServiceCatalog | Modal | — |
| MerchantSessionTracking | Modal | — |
| MerchantSettings | Drawer | — |
| MerchantSettlementEngine | Tab View | — |
| MerchantShiftManagement | Modal | — |
| MerchantShipping | Modal | — |
| MerchantSignup | Standard | /merchant/business-details |
| MerchantSimplePOS | Modal | /merchant |
| MerchantSoftPOS | Standard | — |
| MerchantStaff | Modal | — |
| MerchantStaffActivityLog | Modal | /merchant, /merchant/user-roles |
| MerchantStaffLeaderboard | Standard | — |
| MerchantStaffRoster | Modal | — |
| MerchantStaffSales | Standard | — |
| MerchantStockReconciliation | Modal | — |
| MerchantStockTransfer | Modal | — |
| MerchantStockVarianceReport | Modal | /merchant |
| MerchantStoreTransfer | Tab View | — |
| MerchantSubscriptionPlans | Modal | — |
| MerchantSubscriptions | Modal | — |
| MerchantSuccess | Standard | /, mailto:merchants@rez.app, tel:+918800000000 |
| MerchantSuperOSDashboard | Standard | /merchant/marketing, /merchant/orders, /merchant/pos |
| MerchantSupplierContracts | Modal | — |
| MerchantSupplierManagement | Standard | — |
| MerchantSupplierPerformance | Standard | — |
| MerchantSupplierReturns | Modal | — |
| MerchantSuppliersProcurement | Modal | — |
| MerchantSupport | Tab View | — |
| MerchantSupportHub | Modal | /merchant, /merchant/support/video |
| MerchantTDSTCSReports | Tab View | — |
| MerchantTableBooking | Tab View | — |
| MerchantTableManagement | Modal | — |
| MerchantTaxCompliance | Tab View | — |
| MerchantTeamManagement | Modal | /merchant |
| MerchantTipsConfig | Standard | — |
| MerchantTodaysOffers | Modal | — |
| MerchantTokenDisplay | Tab View | — |
| MerchantTransactions | Standard | — |
| MerchantTrustScoreDetail | Tab View | — |
| MerchantUGCCampaigns | Modal | # |
| MerchantUnifiedMarketing | Modal | — |
| MerchantUnifiedOrders | Modal | — |
| MerchantUpsellEngine | Modal | — |
| MerchantUserRoles | Tab View | — |
| MerchantVendorManagement | Standard | — |
| MerchantVendorPortal | Modal | — |
| MerchantVouchers | Modal | — |
| MerchantWaiterApp | Tab View | — |
| MerchantWallet | Modal | — |
| MerchantWarehouseManagement | Standard | — |
| MerchantWasteManagement | Modal | — |
| MerchantWasteTracking | Standard | — |
| MerchantWhatsAppBusiness | Modal | — |
| MerchantWishlistDemand | Modal | — |

#### partner

| Screen | Type | Navigates To |
|--------|------|--------------|
| PartnerDashboard | Standard | — |
| PartnerSignup | Standard | /partner/success |
| PartnerSuccess | Standard | /, mailto:partner@rez.app |

---

## Category-Specific

**Total Screens:** 182

### Navigation Flow Diagram

```mermaid
graph TD
    %% Category-Specific - Screen Navigation Flow
    %% Total Screens: 182

    %% BEAUTY SECTION
    S1["BeautyAll"]
    S2["BeautyClinicDetail"]
    S3["BeautyClinics"]
    S4["BeautyConcierge"]
    S5["BeautyDeals"]
    S6["BeautyGift"]
    S7["BeautyNearby"]
    S8["BeautyOffers"]
    S9["BeautyProductDetail"]
    S10["BeautyProducts"]
    S11[("BeautyServices"])

    %% CASHSTORE SECTION
    S12["CashStoreBrandDetail"]
    S13["CashStoreCategory"]
    S14["CashStoreCoupons"]
    S15[("CashStoreGiftCards"])
    S16["CashStoreMissingCashback"]
    S17["CashStoreStores"]
    S18[("CashStoreTrack"])
    S19["HowItWorks"]
    S20[("TrackCashback"])

    %% COLLEGE SECTION
    S21[("AmbassadorDashboard"])
    S22[("CollegeHome"])
    S23["StudentVerification"]

    %% CONTESTS SECTION
    S24["ContestDetail"]
    S25[("ContestHub"])

    %% CORPORATE SECTION
    S26["CorporateAccount"]
    S27["CorporateBulkOrders"]
    S28["CorporateInvoices"]
    S29["CorporateOrders"]
    S30["CorporateReports"]
    S31["CorporateTeamManagement"]
    S32["EmployeeVerification"]

    %% CREATOR SECTION
    S33["CollectionDetail"]
    S34["CreatorPickDetail"]
    S35[("CreatorProfile"])
    S36["CreatorStoreHome"]
    S37["CreatorsAll"]

    %% EVENTS SECTION
    S38["EventDetails"]
    S39["EventGallery"]
    S40["EventTickets"]
    S41["EventsCalendar"]
    S42["EventsCheckIn"]
    S43["EventsConcerts"]
    S44["EventsExperiences"]
    S45["EventsGaming"]
    S46["EventsMovies"]
    S47["EventsParks"]
    S48["EventsWorkshops"]
    S49["MyEvents"]

    %% EXCLUSIVE SECTION
    S50["BirthdaySpecials"]
    S51["CorporatePerks"]
    S52["ExclusiveBenefits"]
    S53["ExclusiveDeals"]
    S54["ExclusiveEvents"]
    S55["ExclusiveMembership"]
    S56["ExclusiveProducts"]
    S57["ExclusiveVIPAccess"]
    S58["LoyaltyRewards"]
    S59["SpecialProfiles"]
    S60["StudentZone"]
    S61["WomenExclusive"]

    %% EXPERIENCE SECTION
    S62["ExperienceBooking"]
    S63["ExperienceDetail"]
    S64["ExperienceGallery"]
    S65["ExperienceGiftCard"]
    S66["ExperiencePackages"]
    S67["ExperienceReviews"]
    S68["ExperienceWishlist"]

    %% EXPLORE SECTION
    S69["CategoryDetail"]
    S70[("Compare"])
    S71["CompareSmartFind"]
    S72{{"DailyCheckIn"}}
    S73["ExploreProductDetail"]
    S74["FriendsActivity"]
    S75["MapView"]
    S76["ReviewEarn"]
    S77[("SpinWin"])
    S78["Trending"]

    %% FASHION SECTION
    S79["FashionBrandDetail"]
    S80["FashionBrands"]
    S81["FashionDeals"]
    S82["FashionOccasionDetail"]
    S83["FashionOccasions"]
    S84["FashionStores"]
    S85["FashionTrendDetail"]
    S86["FashionTrending"]
    S87["FashionVibeDetail"]
    S88["FashionVibes"]

    %% FINANCIAL SECTION
    S89[("FinancialBills"])
    S90["FinancialCategory"]
    S91["FinancialGold"]
    S92[("FinancialHistory"])
    S93["FinancialOTT"]
    S94[("FinancialOTTDetail"])
    S95["FinancialOfferDetail"]
    S96["FinancialOffers"]
    S97["FinancialPayBill"]

    %% FITCIRCLE SECTION
    S98[("FitCircleChallenges"])
    S99[("FitCircleHome"])
    S100[("FitCircleNutrition"])
    S101[("FitCircleProfile"])
    S102["FitCircleWorkouts"]

    %% FITNESS SECTION
    S103["FitnessCategory"]
    S104["FitnessChallengeDetail"]
    S105["FitnessChallenges"]
    S106["FitnessFeed"]
    S107["FitnessGymDetail"]
    S108["FitnessGyms"]
    S109["FitnessProductDetail"]
    S110[("FitnessStore"])
    S111["FitnessStreak"]
    S112["FitnessStudios"]
    S113["FitnessTrainerDetail"]
    S114["FitnessTrainers"]

    %% GROCERY SECTION
    S115["GroceryCategory"]
    S116["GroceryCompare"]
    S117["GroceryDeals"]
    S118["GroceryFast"]
    S119["GroceryOffers"]
    S120["GroceryProductDetail"]
    S121["GroceryProducts"]
    S122["GroceryStoreDetail"]
    S123["GroceryStores"]

    %% HEALTHCARE SECTION
    S124["HealthcareCategory"]
    S125["HealthcareDental"]
    S126["HealthcareDentalDetail"]
    S127["HealthcareDiagnostics"]
    S128["HealthcareDoctorDetail"]
    S129["HealthcareDoctors"]
    S130["HealthcareEmergency"]
    S131["HealthcareOffers"]
    S132[("HealthcarePharmacy"])
    S133[("HealthcarePharmacyDetail"])
    S134["HealthcareSupport"]
    S135["HealthcareTestDetail"]
    S136["HealthcareUploadBill"]

    %% HOME-SERVICES SECTION
    S137["HomeServicesAvailableToday"]
    S138["HomeServicesBook"]
    S139[("HomeServicesBookings"])
    S140["HomeServicesCategory"]
    S141["HomeServicesPopular"]
    S142["HomeServicesProviderDetail"]
    S143["HomeServicesProviders"]

    %% HOMEHUB SECTION
    S144[("HomeHubHome"])
    S145[("HomeHubRoomPlanner"])
    S146["HomeHubServices"]
    S147[("HomeHubShop"])

    %% LIFESTYLE SECTION
    S148["LifestyleProfile"]
    S149[("EventsHub"])
    S150["CreatorFashionFeed"]
    S151{{"FashionTravelPlanner"}}
    S152{{"OutfitCalendar"}}
    S153[("StyleChallenges"])
    S154["StyleDNAResult"]
    S155["StyleQuiz"]
    S156["SustainabilityDashboard"]
    S157{{"VirtualWardrobe"}}
    S158["WardrobeOutfitSuggestions"]
    S159[("FoodHub"])

    %% MALL SECTION
    S160[("MallBrandDetail"])
    S161["MallBrands"]
    S162["MallCart"]
    S163["MallCategories"]
    S164["MallCategory"]
    S165["MallCollection"]

    %% STORES SECTION
    S166["ChildrenStore"]
    S167["GiftingStore"]
    S168["LuxuryStore"]
    S169["MenStore"]
    S170["OrganicStore"]
    S171["RentalStore"]
    S172["StoreDetails"]
    S173["StoresMap"]
    S174["WomenStore"]

    %% STYLESYNC SECTION
    S175[("StyleSyncCloset"])
    S176["StyleSyncHome"]
    S177[("StyleSyncLooks"])
    S178["StyleSyncShop"]

    %% TECHHUNT SECTION
    S179["TechHuntCompare"]
    S180["TechHuntDeals"]
    S181["TechHuntHome"]
    S182[("TechHuntWishlist"])

    %% NAVIGATION FLOWS
```

### Screen Inventory

#### beauty

| Screen | Type | Navigates To |
|--------|------|--------------|
| BeautyAll | Standard | — |
| BeautyClinicDetail | Standard | — |
| BeautyClinics | Standard | — |
| BeautyConcierge | Standard | — |
| BeautyDeals | Standard | — |
| BeautyGift | Standard | — |
| BeautyNearby | Standard | — |
| BeautyOffers | Standard | — |
| BeautyProductDetail | Standard | — |
| BeautyProducts | Standard | — |
| BeautyServices | Tab View | — |

#### cashstore

| Screen | Type | Navigates To |
|--------|------|--------------|
| CashStoreBrandDetail | Standard | /cash-store |
| CashStoreCategory | Standard | — |
| CashStoreCoupons | Standard | — |
| CashStoreGiftCards | Tab View | — |
| CashStoreMissingCashback | Standard | — |
| CashStoreStores | Standard | — |
| CashStoreTrack | Tab View | — |
| HowItWorks | Standard | /cash-store |
| TrackCashback | Tab View | /cash-store |

#### college

| Screen | Type | Navigates To |
|--------|------|--------------|
| AmbassadorDashboard | Tab View | /referral |
| CollegeHome | Tab View | — |
| StudentVerification | Standard | /, /exclusive/student |

#### contests

| Screen | Type | Navigates To |
|--------|------|--------------|
| ContestDetail | Standard | — |
| ContestHub | Tab View | /contest/nominate |

#### corporate

| Screen | Type | Navigates To |
|--------|------|--------------|
| CorporateAccount | Standard | — |
| CorporateBulkOrders | Standard | — |
| CorporateInvoices | Standard | — |
| CorporateOrders | Standard | — |
| CorporateReports | Standard | — |
| CorporateTeamManagement | Standard | — |
| EmployeeVerification | Standard | /, /exclusive/corporate |

#### creator

| Screen | Type | Navigates To |
|--------|------|--------------|
| CollectionDetail | Standard | — |
| CreatorPickDetail | Standard | /creators |
| CreatorProfile | Tab View | — |
| CreatorStoreHome | Standard | — |
| CreatorsAll | Standard | — |

#### events

| Screen | Type | Navigates To |
|--------|------|--------------|
| EventDetails | Standard | — |
| EventGallery | Standard | — |
| EventTickets | Standard | — |
| EventsCalendar | Standard | — |
| EventsCheckIn | Standard | — |
| EventsConcerts | Standard | — |
| EventsExperiences | Standard | — |
| EventsGaming | Standard | — |
| EventsMovies | Standard | — |
| EventsParks | Standard | — |
| EventsWorkshops | Standard | — |
| MyEvents | Standard | — |

#### exclusive

| Screen | Type | Navigates To |
|--------|------|--------------|
| BirthdaySpecials | Standard | /deal-store |
| CorporatePerks | Standard | /deal-store |
| ExclusiveBenefits | Standard | — |
| ExclusiveDeals | Standard | — |
| ExclusiveEvents | Standard | — |
| ExclusiveMembership | Standard | — |
| ExclusiveProducts | Standard | — |
| ExclusiveVIPAccess | Standard | — |
| LoyaltyRewards | Standard | /deal-store |
| SpecialProfiles | Standard | /deal-store |
| StudentZone | Standard | /deal-store |
| WomenExclusive | Standard | /deal-store |

#### experience

| Screen | Type | Navigates To |
|--------|------|--------------|
| ExperienceBooking | Standard | — |
| ExperienceDetail | Standard | — |
| ExperienceGallery | Standard | — |
| ExperienceGiftCard | Standard | — |
| ExperiencePackages | Standard | — |
| ExperienceReviews | Standard | — |
| ExperienceWishlist | Standard | — |

#### explore

| Screen | Type | Navigates To |
|--------|------|--------------|
| CategoryDetail | Standard | — |
| ComparePage | Tab View | — |
| CompareSmartFindPage | Standard | — |
| DailyCheckInPage | Modal | — |
| ExploreProductDetail | Standard | — |
| FriendsActivityPage | Standard | — |
| MapViewPage | Standard | — |
| ReviewEarnPage | Standard | /explore/review-earn |
| SpinWinPage | Tab View | — |
| TrendingPage | Standard | — |

#### fashion

| Screen | Type | Navigates To |
|--------|------|--------------|
| FashionBrandDetail | Standard | — |
| FashionBrands | Standard | — |
| FashionDeals | Standard | — |
| FashionOccasionDetail | Standard | — |
| FashionOccasions | Standard | — |
| FashionStores | Standard | — |
| FashionTrendDetail | Standard | — |
| FashionTrending | Standard | — |
| FashionVibeDetail | Standard | — |
| FashionVibes | Standard | — |

#### financial

| Screen | Type | Navigates To |
|--------|------|--------------|
| FinancialBills | Tab View | — |
| FinancialCategory | Standard | — |
| FinancialGold | Standard | — |
| FinancialHistory | Tab View | — |
| FinancialOTT | Standard | — |
| FinancialOTTDetail | Tab View | — |
| FinancialOfferDetail | Standard | — |
| FinancialOffers | Standard | — |
| FinancialPayBill | Standard | — |

#### fitcircle

| Screen | Type | Navigates To |
|--------|------|--------------|
| FitCircleChallenges | Tab View | — |
| FitCircleHome | Tab View | — |
| FitCircleNutrition | Tab View | — |
| FitCircleProfile | Tab View | — |
| FitCircleWorkouts | Standard | — |

#### fitness

| Screen | Type | Navigates To |
|--------|------|--------------|
| FitnessCategory | Standard | — |
| FitnessChallengeDetail | Standard | — |
| FitnessChallenges | Standard | — |
| FitnessFeed | Standard | — |
| FitnessGymDetail | Standard | — |
| FitnessGyms | Standard | — |
| FitnessProductDetail | Standard | — |
| FitnessStore | Tab View | — |
| FitnessStreak | Standard | — |
| FitnessStudios | Standard | — |
| FitnessTrainerDetail | Standard | — |
| FitnessTrainers | Standard | — |

#### grocery

| Screen | Type | Navigates To |
|--------|------|--------------|
| GroceryCategory | Standard | — |
| GroceryCompare | Standard | — |
| GroceryDeals | Standard | — |
| GroceryFast | Standard | — |
| GroceryOffers | Standard | — |
| GroceryProductDetail | Standard | — |
| GroceryProducts | Standard | — |
| GroceryStoreDetail | Standard | — |
| GroceryStores | Standard | — |

#### healthcare

| Screen | Type | Navigates To |
|--------|------|--------------|
| HealthcareCategory | Standard | — |
| HealthcareDental | Standard | — |
| HealthcareDentalDetail | Standard | — |
| HealthcareDiagnostics | Standard | — |
| HealthcareDoctorDetail | Standard | — |
| HealthcareDoctors | Standard | — |
| HealthcareEmergency | Standard | — |
| HealthcareOffers | Standard | — |
| HealthcarePharmacy | Tab View | /healthcare/upload-bill |
| HealthcarePharmacyDetail | Tab View | /healthcare/upload-bill |
| HealthcareSupport | Standard | /help, /support/chat |
| HealthcareTestDetail | Standard | — |
| HealthcareUploadBill | Standard | — |

#### home-services

| Screen | Type | Navigates To |
|--------|------|--------------|
| HomeServicesAvailableToday | Standard | — |
| HomeServicesBook | Standard | — |
| HomeServicesBookings | Tab View | — |
| HomeServicesCategory | Standard | — |
| HomeServicesPopular | Standard | — |
| HomeServicesProviderDetail | Standard | — |
| HomeServicesProviders | Standard | — |

#### homehub

| Screen | Type | Navigates To |
|--------|------|--------------|
| HomeHubHome | Tab View | — |
| HomeHubRoomPlanner | Tab View | — |
| HomeHubServices | Standard | — |
| HomeHubShop | Tab View | — |

#### lifestyle

| Screen | Type | Navigates To |
|--------|------|--------------|
| LifestyleProfile | Standard | /lifestyle/fashion/style-quiz |

#### lifestyle / events

| Screen | Type | Navigates To |
|--------|------|--------------|
| EventsHub | Tab View | — |

#### lifestyle / fashion

| Screen | Type | Navigates To |
|--------|------|--------------|
| CreatorFashionFeed | Standard | — |
| FashionTravelPlanner | Modal | — |
| OutfitCalendar | Modal | — |
| StyleChallenges | Tab View | — |
| StyleDNAResult | Standard | /lifestyle/fashion |
| StyleQuiz | Standard | /lifestyle/fashion/style-dna-result |
| SustainabilityDashboard | Standard | — |
| VirtualWardrobe | Modal | — |
| WardrobeOutfitSuggestions | Standard | /lifestyle/fashion/outfit-calendar |

#### lifestyle / food

| Screen | Type | Navigates To |
|--------|------|--------------|
| FoodHub | Tab View | — |

#### mall

| Screen | Type | Navigates To |
|--------|------|--------------|
| MallBrandDetail | Tab View | /mall |
| MallBrands | Standard | — |
| MallCart | Standard | /mall |
| MallCategories | Standard | — |
| MallCategory | Standard | /mall |
| MallCollection | Standard | /mall |

#### stores

| Screen | Type | Navigates To |
|--------|------|--------------|
| ChildrenStore | Standard | / |
| GiftingStore | Standard | / |
| LuxuryStore | Standard | / |
| MenStore | Standard | / |
| OrganicStore | Standard | / |
| RentalStore | Standard | / |
| StoreDetails | Standard | — |
| StoresMap | Standard | — |
| WomenStore | Standard | / |

#### stylesync

| Screen | Type | Navigates To |
|--------|------|--------------|
| StyleSyncCloset | Tab View | — |
| StyleSyncHome | Standard | — |
| StyleSyncLooks | Tab View | — |
| StyleSyncShop | Standard | — |

#### techhunt

| Screen | Type | Navigates To |
|--------|------|--------------|
| TechHuntCompare | Standard | — |
| TechHuntDeals | Standard | — |
| TechHuntHome | Standard | — |
| TechHuntWishlist | Tab View | — |

---

## Discovery Layer

**Total Screens:** 31

### Navigation Flow Diagram

```mermaid
graph TD
    %% Discovery Layer - Screen Navigation Flow
    %% Total Screens: 31

    %% AI SECTION
    S1["AIBudgetAssistant"]
    S2["AIFitnessCoach"]
    S3["AIImageSearch"]
    S4["AIInsights"]
    S5["AIMealPlanner"]
    S6["AIPredictiveBuying"]
    S7{{"AIPriceComparison"}}
    S8[("AIRecommendations"])
    S9["AIShoppingAssistant"]
    S10["AISmartSearch"]
    S11["AIStyleAdvisor"]
    S12["AIVoiceAssistant"]

    %% AIR SECTION
    S13[("AIRChat"])
    S14{{"AIRDiscover"}}
    S15[("AIRHome"])
    S16[("AIRProfile"])
    S17[("AIRSaved"])
    S18[("AIRWallet"])

    %% BUZZLOOP SECTION
    S19["BuzzLoopCreate"]
    S20[("BuzzLoopExplore"])
    S21[("BuzzLoopHome"])
    S22[("BuzzLoopNotifications"])
    S23[("BuzzLoopProfile"])

    %% COINHUNT SECTION
    S24[("CoinHuntHome"])
    S25{{"CoinHuntMap"}}
    S26{{"CoinHuntMyDeals"}}
    S27[("CoinHuntWallet"])

    %% LOCALEDGE SECTION
    S28["LocalEdgeCheckin"]
    S29["LocalEdgeExplore"]
    S30[("LocalEdgeHome"])
    S31[("LocalEdgeProfile"])

    %% NAVIGATION FLOWS
```

### Screen Inventory

#### ai

| Screen | Type | Navigates To |
|--------|------|--------------|
| AIBudgetAssistant | Standard | — |
| AIFitnessCoach | Standard | — |
| AIImageSearch | Standard | /qr-scanner |
| AIInsights | Standard | — |
| AIMealPlanner | Standard | — |
| AIPredictiveBuying | Standard | — |
| AIPriceComparison | Modal | — |
| AIRecommendations | Tab View | — |
| AIShoppingAssistant | Standard | — |
| AISmartSearch | Standard | /ai/image-search |
| AIStyleAdvisor | Standard | — |
| AIVoiceAssistant | Standard | — |

#### air

| Screen | Type | Navigates To |
|--------|------|--------------|
| AIRChat | Tab View | — |
| AIRDiscover | Modal | — |
| AIRHome | Tab View | — |
| AIRProfile | Tab View | — |
| AIRSaved | Tab View | — |
| AIRWallet | Tab View | — |

#### buzzloop

| Screen | Type | Navigates To |
|--------|------|--------------|
| BuzzLoopCreate | Standard | — |
| BuzzLoopExplore | Tab View | — |
| BuzzLoopHome | Tab View | — |
| BuzzLoopNotifications | Tab View | — |
| BuzzLoopProfile | Tab View | # |

#### coinhunt

| Screen | Type | Navigates To |
|--------|------|--------------|
| CoinHuntHome | Tab View | — |
| CoinHuntMap | Modal | — |
| CoinHuntMyDeals | Modal | — |
| CoinHuntWallet | Tab View | — |

#### localedge

| Screen | Type | Navigates To |
|--------|------|--------------|
| LocalEdgeCheckin | Standard | — |
| LocalEdgeExplore | Standard | — |
| LocalEdgeHome | Tab View | — |
| LocalEdgeProfile | Tab View | — |

---

## Growth Stack

**Total Screens:** 45

### Navigation Flow Diagram

```mermaid
graph TD
    %% Growth Stack - Screen Navigation Flow
    %% Total Screens: 45

    %% GROWTH SECTION
    S1["BuzzLoopAnalytics"]
    S2["BuzzLoopChallenges"]
    S3[("BuzzLoopCreate"])
    S4["BuzzLoopFeed"]
    S5["BuzzLoopFollowers"]
    S6["BuzzLoopFollowing"]
    S7["BuzzLoopHashtags"]
    S8[/"BuzzLoopHome"/]
    S9["BuzzLoopLive"]
    S10["BuzzLoopMessages"]
    S11["BuzzLoopNotifications"]
    S12[("BuzzLoopProfile"])
    S13[("BuzzLoopSearch"])
    S14["BuzzLoopSettings"]
    S15[("BuzzLoopTrending"])
    S16[("CampusConnectHome"])
    S17[("ChallengesHome"])
    S18[("CoinHuntChallenges"])
    S19["CoinHuntHistory"]
    S20[("CoinHuntHome"])
    S21[("CoinHuntLeaderboard"])
    S22["CoinHuntMap"]
    S23["CoinHuntRewards"]
    S24["CoinHuntScan"]
    S25["CoinHuntSettings"]
    S26["ContestDetails"]
    S27["ContestEntry"]
    S28["ContestLeaderboard"]
    S29["ContestWinners"]
    S30[("ContestsBrowse"])
    S31[("ContestsHistory"])
    S32["ContestsHome"]
    S33["CorpPerksHome"]
    S34["DailyStreakHome"]
    S35[("InviteLoopHome"])
    S36[("LeaderBoardsHome"])
    S37["QuizzyCategories"]
    S38[("QuizzyHistory"])
    S39[("QuizzyHome"])
    S40[("QuizzyLeaderboard"])
    S41["QuizzyPlay"]
    S42[("ReferralXHome"])
    S43["ShareEarnHome"]
    S44["SpinWinHome"]
    S45[("SquadGoalsHome"])

    %% NAVIGATION FLOWS
```

### Screen Inventory

#### growth / buzzloop

| Screen | Type | Navigates To |
|--------|------|--------------|
| BuzzLoopAnalytics | Standard | — |
| BuzzLoopChallenges | Standard | — |
| BuzzLoopCreate | Tab View | — |
| BuzzLoopFeed | Standard | — |
| BuzzLoopFollowers | Standard | — |
| BuzzLoopFollowing | Standard | — |
| BuzzLoopHashtags | Standard | — |
| BuzzLoopHome | Drawer | — |
| BuzzLoopLive | Standard | — |
| BuzzLoopMessages | Standard | — |
| BuzzLoopNotifications | Standard | — |
| BuzzLoopProfile | Tab View | — |
| BuzzLoopSearch | Tab View | — |
| BuzzLoopSettings | Standard | — |
| BuzzLoopTrending | Tab View | — |

#### growth / campusconnect

| Screen | Type | Navigates To |
|--------|------|--------------|
| CampusConnectHome | Tab View | — |

#### growth / challenges

| Screen | Type | Navigates To |
|--------|------|--------------|
| ChallengesHome | Tab View | — |

#### growth / coinhunt

| Screen | Type | Navigates To |
|--------|------|--------------|
| CoinHuntChallenges | Tab View | — |
| CoinHuntHistory | Standard | — |
| CoinHuntHome | Tab View | — |
| CoinHuntLeaderboard | Tab View | — |
| CoinHuntMap | Standard | — |
| CoinHuntRewards | Standard | — |
| CoinHuntScan | Standard | — |
| CoinHuntSettings | Standard | — |

#### growth / contests

| Screen | Type | Navigates To |
|--------|------|--------------|
| ContestDetails | Standard | — |
| ContestEntry | Standard | — |
| ContestLeaderboard | Standard | — |
| ContestWinners | Standard | — |
| ContestsBrowse | Tab View | — |
| ContestsHistory | Tab View | — |
| ContestsHome | Standard | — |

#### growth / corpperks

| Screen | Type | Navigates To |
|--------|------|--------------|
| CorpPerksHome | Standard | — |

#### growth / dailystreak

| Screen | Type | Navigates To |
|--------|------|--------------|
| DailyStreakHome | Standard | — |

#### growth / inviteloop

| Screen | Type | Navigates To |
|--------|------|--------------|
| InviteLoopHome | Tab View | — |

#### growth / leaderboards

| Screen | Type | Navigates To |
|--------|------|--------------|
| LeaderBoardsHome | Tab View | — |

#### growth / quizzy

| Screen | Type | Navigates To |
|--------|------|--------------|
| QuizzyCategories | Standard | — |
| QuizzyHistory | Tab View | — |
| QuizzyHome | Tab View | — |
| QuizzyLeaderboard | Tab View | — |
| QuizzyPlay | Standard | — |

#### growth / referralx

| Screen | Type | Navigates To |
|--------|------|--------------|
| ReferralXHome | Tab View | — |

#### growth / shareearn

| Screen | Type | Navigates To |
|--------|------|--------------|
| ShareEarnHome | Standard | — |

#### growth / spinwin

| Screen | Type | Navigates To |
|--------|------|--------------|
| SpinWinHome | Standard | — |

#### growth / squadgoals

| Screen | Type | Navigates To |
|--------|------|--------------|
| SquadGoalsHome | Tab View | — |

---

## HQ Admin

**Total Screens:** 178

### Navigation Flow Diagram

```mermaid
graph TD
    %% HQ Admin - Screen Navigation Flow
    %% Total Screens: 178

    %% ADMIN SECTION
    S1["AdminABTestResults"]
    S2[("AdminAIInsights"])
    S3[("AdminAIModerationQueue"])
    S4["AdminAIRecommendations"]
    S5["AdminAPIMonitoring"]
    S6{{"AdminAPIQuotas"}}
    S7["AdminAnalytics"]
    S8["AdminAnalyticsDashboard"]
    S9["AdminAppBranding"]
    S10{{"AdminAuditVault"}}
    S11["AdminAutoBanRules"]
    S12[("AdminBOGOManagement"])
    S13[("AdminBackgroundJobs"])
    S14["AdminBackupRestore"]
    S15{{"AdminBankOffers"}}
    S16[("AdminBankReconciliation"])
    S17[("AdminBarterCampaigns"])
    S18["AdminBrandCustomization"]
    S19{{"AdminCampaignApproval"}}
    S20[/"AdminCampaignBuilder"/]
    S21{{"AdminCampaigns"}}
    S22[("AdminCashback"])
    S23[("AdminCashbackRates"])
    S24{{"AdminCategories"}}
    S25["AdminCheckoutPriority"]
    S26["AdminChurnPrediction"]
    S27[("AdminCityLockEngine"])
    S28[("AdminCitySupplyLock"])
    S29{{"AdminCoPartnerBrands"}}
    S30["AdminCohortAnalysis"]
    S31{{"AdminCoinEmergencyControls"}}
    S32{{"AdminCoinEvents"}}
    S33[("AdminCoinIssuanceControl"])
    S34[("AdminCoinRulesEngine"])
    S35["AdminCoinSystemOverview"]
    S36[("AdminCollegeCorporateModule"])
    S37[("AdminCommerceProtocol"])
    S38[("AdminCompetitiveDefense"])
    S39[("AdminContent"])
    S40["AdminContentDashboard"]
    S41[("AdminContentModeration"])
    S42[("AdminCreatorContent"])
    S43[("AdminCreatorPayouts"])
    S44[("AdminCreditEngine"])
    S45["AdminCurrencyExchange"]
    S46["AdminCustomerLTV"]
    S47["AdminDailyCheckin"]
    S48[("AdminDashboard"])
    S49["AdminDatabaseHealth"]
    S50{{"AdminDeveloperPortal"}}
    S51{{"AdminDiscountBuckets"}}
    S52{{"AdminDisputeResolution"}}
    S53[("AdminEarningRuleMatrix"])
    S54["AdminEcosystemAnalytics"]
    S55{{"AdminEmailMarketing"}}
    S56["AdminEmailTemplateBuilder"]
    S57["AdminEmailTemplates"]
    S58[("AdminEnterpriseHub"])
    S59[("AdminEventInventory"])
    S60[("AdminEvents"])
    S61{{"AdminExclusivePrograms"}}
    S62{{"AdminExperiments"}}
    S63["AdminFinanceDashboard"]
    S64{{"AdminFlashSales"}}
    S65{{"AdminFounderVault"}}
    S66[("AdminFraud"])
    S67[("AdminFraudDetection"])
    S68["AdminFreeDeliveryManagement"]
    S69["AdminFriendNetworkSettings"]
    S70[("AdminGMBSync"])
    S71[("AdminGameConfiguration"])
    S72[("AdminGamification"])
    S73["AdminGlobalDashboard"]
    S74[("AdminGovernmentConsole"])
    S75[("AdminHeatmaps"])
    S76{{"AdminHeroBanners"}}
    S77["AdminHotspotManagement"]
    S78["AdminInfluencerApproval"]
    S79[("AdminInstitutionalAPIs"])
    S80[("AdminIntegrations"])
    S81[("AdminInternalOps"])
    S82[("AdminKYCCompliance"])
    S83{{"AdminLanguageManager"}}
    S84["AdminLanguageSwitcher"]
    S85{{"AdminLightningDeals"}}
    S86["AdminLockPriceDeals"]
    S87[("AdminLogs"])
    S88[("AdminMSMEReports"])
    S89{{"AdminMandatoryOffers"}}
    S90{{"AdminMarketing"}}
    S91["AdminMarketingDashboard"]
    S92[("AdminMarketingOrchestrator"])
    S93[("AdminMerchantIntelligence"])
    S94{{"AdminMerchantPackages"}}
    S95[("AdminMerchantProfitEngine"])
    S96["AdminMerchantSuperOS"]
    S97["AdminMerchantTierConfig"]
    S98{{"AdminMerchantTrustScore"}}
    S99{{"AdminMerchants"}}
    S100["AdminModeControl"]
    S101{{"AdminMonetizationHub"}}
    S102[("AdminMultiChannelMarketing"])
    S103[("AdminNearbyOffers"])
    S104["AdminNewDealsSettings"]
    S105[("AdminNotifications"])
    S106["AdminOffers"]
    S107[("AdminOfflineReconciliation"])
    S108["AdminOperationsDashboard"]
    S109["AdminOpsIntelligence"]
    S110[("AdminPOSIntegration"])
    S111{{"AdminPartnerships"}}
    S112[("AdminPayments"])
    S113[("AdminPlatformHealth"])
    S114["AdminPredictiveAnalytics"]
    S115{{"AdminPriceTracking"}}
    S116[("AdminPriveManagement"])
    S117{{"AdminProductComparison"}}
    S118["AdminProfileVerification"]
    S119{{"AdminPromoCoinManager"}}
    S120{{"AdminPromotionLauncher"}}
    S121["AdminPushNotificationTemplates"]
    S122[("AdminPushScheduler"])
    S123{{"AdminRecommendations"}}
    S124["AdminRedemptionRules"]
    S125[("AdminReferrals"])
    S126["AdminRegionConfig"]
    S127[("AdminRegionalControl"])
    S128["AdminRegionalDashboard"]
    S129[("AdminRoleBasedAccess"])
    S130{{"AdminRoleManagement"}}
    S131{{"AdminRuleEngine"}}
    S132{{"AdminSMSCampaigns"}}
    S133["AdminSMSTemplates"]
    S134["AdminScanPaySettings"]
    S135[("AdminSessionReplay"])
    S136[("AdminSettings"])
    S137[("AdminSettlementCommission"])
    S138[("AdminSocialFeedControl"])
    S139[("AdminSocialImpact"])
    S140[("AdminSocialImpactVerification"])
    S141{{"AdminSocialIntegration"}}
    S142[("AdminSpecialPrograms"])
    S143{{"AdminSponsoredDeals"}}
    S144[("AdminSupport"])
    S145[("AdminSupportDashboard"])
    S146["AdminSystemLogs"]
    S147[("AdminTemporalCommerce"])
    S148[("AdminTodaysOffers"])
    S149{{"AdminTournaments"}}
    S150{{"AdminTransactions"}}
    S151["AdminTranslationManagement"]
    S152["AdminTrendingAlgorithm"]
    S153[("AdminTrustPassport"])
    S154{{"AdminUGCManagement"}}
    S155["AdminUGCReview"]
    S156["AdminUploadBillSettings"]
    S157[("AdminUserHabitEngine"])
    S158[("AdminUserManagement"])
    S159["AdminUserReportedContent"]
    S160[("AdminUserTrustScore"])
    S161[("AdminUsers"])
    S162["AdminVideoModeration"]
    S163{{"AdminVouchers"}}
    S164{{"AdminWallet"}}
    S165[("AdminWalletAnalytics"])
    S166{{"AdminWebhookManager"}}
    S167["AdminWhatsAppTemplates"]
    S168[("AdzyAdInventory"])
    S169["AdzyDashboard"]
    S170[("HQCommandCenter"])
    S171{{"MerchantGovernance"}}
    S172["OperationsCityDashboard"]
    S173[("RabtulAIRAEngine"])
    S174[("RabtulAPIGateway"])
    S175[("RabtulCoinLedger"])
    S176["RabtulDashboard"]
    S177[("UserAccessGovernance"])
    S178{{"ZoneManagement"}}

    %% NAVIGATION FLOWS
```

### Screen Inventory

#### admin

| Screen | Type | Navigates To |
|--------|------|--------------|
| AdminABTestResults | Standard | — |
| AdminAIInsights | Tab View | — |
| AdminAIModerationQueue | Tab View | — |
| AdminAIRecommendations | Standard | — |
| AdminAPIMonitoring | Standard | — |
| AdminAPIQuotas | Modal | — |
| AdminAnalytics | Standard | — |
| AdminAnalyticsDashboard | Standard | — |
| AdminAppBranding | Standard | — |
| AdminAuditVault | Modal | — |
| AdminAutoBanRules | Standard | — |
| AdminBOGOManagement | Tab View | — |
| AdminBackgroundJobs | Tab View | — |
| AdminBackupRestore | Standard | — |
| AdminBankOffers | Modal | — |
| AdminBankReconciliation | Tab View | — |
| AdminBarterCampaigns | Tab View | — |
| AdminBrandCustomization | Standard | — |
| AdminCampaignApproval | Modal | — |
| AdminCampaignBuilder | Drawer | — |
| AdminCampaigns | Modal | — |
| AdminCashback | Tab View | — |
| AdminCashbackRates | Tab View | — |
| AdminCategories | Modal | — |
| AdminCheckoutPriority | Standard | — |
| AdminChurnPrediction | Standard | — |
| AdminCityLockEngine | Tab View | — |
| AdminCitySupplyLock | Tab View | — |
| AdminCoPartnerBrands | Modal | — |
| AdminCohortAnalysis | Standard | — |
| AdminCoinEmergencyControls | Modal | — |
| AdminCoinEvents | Modal | — |
| AdminCoinIssuanceControl | Tab View | — |
| AdminCoinRulesEngine | Tab View | — |
| AdminCoinSystemOverview | Standard | — |
| AdminCollegeCorporateModule | Tab View | — |
| AdminCommerceProtocol | Tab View | /admin |
| AdminCompetitiveDefense | Tab View | — |
| AdminContent | Tab View | — |
| AdminContentDashboard | Standard | — |
| AdminContentModeration | Tab View | — |
| AdminCreatorContent | Tab View | — |
| AdminCreatorPayouts | Tab View | — |
| AdminCreditEngine | Tab View | /admin |
| AdminCurrencyExchange | Standard | — |
| AdminCustomerLTV | Standard | — |
| AdminDailyCheckin | Standard | — |
| AdminDashboard | Tab View | /admin/merchants?status=pending, /admin/offers?status=pending, /admin/analytics |
| AdminDatabaseHealth | Standard | — |
| AdminDeveloperPortal | Modal | — |
| AdminDiscountBuckets | Modal | — |
| AdminDisputeResolution | Modal | — |
| AdminEarningRuleMatrix | Tab View | — |
| AdminEcosystemAnalytics | Standard | — |
| AdminEmailMarketing | Modal | — |
| AdminEmailTemplateBuilder | Standard | # |
| AdminEmailTemplates | Standard | — |
| AdminEnterpriseHub | Tab View | /admin, # |
| AdminEventInventory | Tab View | — |
| AdminEvents | Tab View | — |
| AdminExclusivePrograms | Modal | — |
| AdminExperiments | Modal | — |
| AdminFinanceDashboard | Standard | — |
| AdminFlashSales | Modal | — |
| AdminFounderVault | Modal | — |
| AdminFraud | Tab View | — |
| AdminFraudDetection | Tab View | — |
| AdminFreeDeliveryManagement | Standard | — |
| AdminFriendNetworkSettings | Standard | — |
| AdminGMBSync | Tab View | — |
| AdminGameConfiguration | Tab View | — |
| AdminGamification | Tab View | — |
| AdminGlobalDashboard | Standard | /admin/merchant-tier-config, /admin/logs |
| AdminGovernmentConsole | Tab View | — |
| AdminHeatmaps | Tab View | — |
| AdminHeroBanners | Modal | — |
| AdminHotspotManagement | Standard | — |
| AdminInfluencerApproval | Standard | — |
| AdminInstitutionalAPIs | Tab View | — |
| AdminIntegrations | Tab View | — |
| AdminInternalOps | Tab View | — |
| AdminKYCCompliance | Tab View | — |
| AdminLanguageManager | Modal | — |
| AdminLanguageSwitcher | Standard | — |
| AdminLightningDeals | Modal | — |
| AdminLockPriceDeals | Standard | — |
| AdminLogs | Tab View | — |
| AdminMSMEReports | Tab View | — |
| AdminMandatoryOffers | Modal | — |
| AdminMarketing | Modal | — |
| AdminMarketingDashboard | Standard | /admin/marketing-campaigns |
| AdminMarketingOrchestrator | Tab View | — |
| AdminMerchantIntelligence | Tab View | — |
| AdminMerchantPackages | Modal | /admin |
| AdminMerchantProfitEngine | Tab View | — |
| AdminMerchantSuperOS | Standard | — |
| AdminMerchantTierConfig | Standard | — |
| AdminMerchantTrustScore | Modal | — |
| AdminMerchants | Modal | — |
| AdminModeControl | Standard | — |
| AdminMonetizationHub | Modal | — |
| AdminMultiChannelMarketing | Tab View | — |
| AdminNearbyOffers | Tab View | — |
| AdminNewDealsSettings | Standard | — |
| AdminNotifications | Tab View | — |
| AdminOffers | Standard | — |
| AdminOfflineReconciliation | Tab View | — |
| AdminOperationsDashboard | Standard | /admin/support-tickets, /operations/city-dashboard, /admin/kyc-compliance |
| AdminOpsIntelligence | Standard | — |
| AdminPOSIntegration | Tab View | — |
| AdminPartnerships | Modal | — |
| AdminPayments | Tab View | — |
| AdminPlatformHealth | Tab View | — |
| AdminPredictiveAnalytics | Standard | — |
| AdminPriceTracking | Modal | — |
| AdminPriveManagement | Tab View | — |
| AdminProductComparison | Modal | — |
| AdminProfileVerification | Standard | — |
| AdminPromoCoinManager | Modal | — |
| AdminPromotionLauncher | Modal | /admin, /admin/promotion-analytics |
| AdminPushNotificationTemplates | Standard | — |
| AdminPushScheduler | Tab View | — |
| AdminRecommendations | Modal | — |
| AdminRedemptionRules | Standard | — |
| AdminReferrals | Tab View | — |
| AdminRegionConfig | Standard | — |
| AdminRegionalControl | Tab View | — |
| AdminRegionalDashboard | Standard | — |
| AdminRoleBasedAccess | Tab View | — |
| AdminRoleManagement | Modal | — |
| AdminRuleEngine | Modal | /admin/hq-command |
| AdminSMSCampaigns | Modal | — |
| AdminSMSTemplates | Standard | — |
| AdminScanPaySettings | Standard | — |
| AdminSessionReplay | Tab View | — |
| AdminSettings | Tab View | — |
| AdminSettlementCommission | Tab View | — |
| AdminSocialFeedControl | Tab View | — |
| AdminSocialImpact | Tab View | — |
| AdminSocialImpactVerification | Tab View | — |
| AdminSocialIntegration | Modal | — |
| AdminSpecialPrograms | Tab View | — |
| AdminSponsoredDeals | Modal | — |
| AdminSupport | Tab View | — |
| AdminSupportDashboard | Tab View | — |
| AdminSystemLogs | Standard | — |
| AdminTemporalCommerce | Tab View | — |
| AdminTodaysOffers | Tab View | — |
| AdminTournaments | Modal | — |
| AdminTransactions | Modal | — |
| AdminTranslationManagement | Standard | — |
| AdminTrendingAlgorithm | Standard | — |
| AdminTrustPassport | Tab View | — |
| AdminUGCManagement | Modal | — |
| AdminUGCReview | Standard | — |
| AdminUploadBillSettings | Standard | — |
| AdminUserHabitEngine | Tab View | — |
| AdminUserManagement | Tab View | — |
| AdminUserReportedContent | Standard | — |
| AdminUserTrustScore | Tab View | — |
| AdminUsers | Tab View | — |
| AdminVideoModeration | Standard | — |
| AdminVouchers | Modal | — |
| AdminWallet | Modal | — |
| AdminWalletAnalytics | Tab View | — |
| AdminWebhookManager | Modal | — |
| AdminWhatsAppTemplates | Standard | — |
| AdzyAdInventory | Tab View | — |
| AdzyDashboard | Standard | — |
| HQCommandCenter | Tab View | /admin/zone-management, /admin/rule-engine, /admin/merchant-governance |
| MerchantGovernance | Modal | /admin/hq-command |
| OperationsCityDashboard | Standard | — |
| RabtulAIRAEngine | Tab View | — |
| RabtulAPIGateway | Tab View | — |
| RabtulCoinLedger | Tab View | — |
| RabtulDashboard | Standard | — |
| UserAccessGovernance | Tab View | /admin/hq-command |
| ZoneManagement | Modal | /admin/rule-engine, /admin/hq-command |

---

## ReZ (Customer App)

**Total Screens:** 213

### Navigation Flow Diagram

```mermaid
graph TD
    %% ReZ (Customer App) - Screen Navigation Flow
    %% Total Screens: 213

    %% ROOT SECTION
    S1["AccountDeletion"]
    S2["AchievementsList"]
    S3["AddressManagement"]
    S4["BadgeCollection"]
    S5[("Beauty"])
    S6["BeautyCategory"]
    S7["BeautyService"]
    S8{{"BillSplitting"}}
    S9[("Bookings"])
    S10["BrandLoyalty"]
    S11["Cart"]
    S12["CartSummary"]
    S13["CashStore"]
    S14["CashbackDetail"]
    S15["Categories"]
    S16[("CategoryHub"])
    S17["ChallengeCenter"]
    S18["ChangePassword"]
    S19["ChatSupport"]
    S20["CheckoutReview"]
    S21["CoinHistory"]
    S22["CoinSystemGuide"]
    S23["CompetitionDetails"]
    S24["ContactSupport"]
    S25{{"ContentSubmissionTracker"}}
    S26["DealDetail"]
    S27["DealStore"]
    S28[("Deals"])
    S29["DeliveryTracking"]
    S30{{"DisputeCenter"}}
    S31["Earn"]
    S32["Electronics"]
    S33["ElectronicsCategory"]
    S34["ElectronicsProduct"]
    S35[("EnhancedWishlist"])
    S36["EventDetail"]
    S37["EventTicketing"]
    S38["Events"]
    S39["Explore"]
    S40["ExploreNew"]
    S41["Fashion"]
    S42["FashionCategory"]
    S43["FashionProduct"]
    S44[("Financial"])
    S45[("Fitness"])
    S46["FleaMarket"]
    S47[("FoodDining"])
    S48["GamificationHub"]
    S49[("Grocery"])
    S50["Healthcare"]
    S51["HelpCenter"]
    S52["Home"]
    S53["HomeServices"]
    S54["HowRezWorks"]
    S55{{"InsuranceCoverage"}}
    S56["InviteFriends"]
    S57{{"KYCStatus"}}
    S58["KYCSubmission"]
    S59["LeaderboardView"]
    S60["Lifestyle"]
    S61[("LoyaltyHub"])
    S62[("LoyaltyRewardsHub"])
    S63[("Missions"])
    S64[("MyTickets"])
    S65[("NewArrivals"])
    S66[("NotificationCenter"])
    S67["NotificationPreferences"]
    S68[("Notifications"])
    S69["NotificationsCenter"]
    S70["OfferDetail"]
    S71["Offers"]
    S72["OrderCancellation"]
    S73["OrderDetail"]
    S74[("OrderHistory"])
    S75["OrderTracking"]
    S76["PayInStore"]
    S77["PaymentGateway"]
    S78["PaymentMethods"]
    S79["PaymentOptions"]
    S80[("PopularStores"])
    S81["PreloaderDemo"]
    S82{{"PrescriptionHistory"}}
    S83[("PriceLedger"])
    S84["PrivacySettings"]
    S85["ProductCheckout"]
    S86[("ProductComparison"])
    S87{{"ProductService"}}
    S88["Profile"]
    S89["PromotionsFeed"]
    S90["QRScanner"]
    S91["Reels"]
    S92["ReferralDashboard"]
    S93["ReferralProgram"]
    S94["RefundStatus"]
    S95{{"RestaurantDetail"}}
    S96["ReturnRequest"]
    S97["RewardsCatalog"]
    S98[("RewardsHub"])
    S99["RezMall"]
    S100["SavedForLater"]
    S101["SavingsDashboard"]
    S102["SavingsTracker"]
    S103["ScanPay"]
    S104[("SearchResults"])
    S105[("SecurityAlerts"])
    S106[("ServiceBooking"])
    S107["ServiceCheckout"]
    S108["Settings"]
    S109["Signup"]
    S110[("SocialFeed"])
    S111[("SocialHub"])
    S112["SocialSharing"]
    S113[("StoreDetail"])
    S114[("StoreHub"])
    S115["Store"]
    S116[("SuperDeals"])
    S117{{"TableReservation"}}
    S118["TicketDetail"]
    S119["TransactionDetails"]
    S120[("Travel"])
    S121[("TrustCredit"])
    S122[("TrustPassport"])
    S123[("UniversalService"])
    S124{{"UserDemandRequests"}}
    S125["Wallet"]
    S126["WalletTopUp"]
    S127["WalletWithdraw"]
    S128["Wishlist"]
    S129[("Wishlist"])

    %% EARN SECTION
    S130["Achievements"]
    S131[("BrandTasks"])
    S132["CoinHunt"]
    S133[("CollegeAmbassador"])
    S134[("CorporateEmployee"])
    S135["GuessPrice"]
    S136["Leaderboard"]
    S137[("LuckyDraw"])
    S138["MemoryMatch"]
    S139[("PlayGames"])
    S140["Quiz"]
    S141[("ReferEarn"])
    S142["Referral"]
    S143["ScratchCard"]
    S144[("SocialImpact"])
    S145{{"SocialImpactEventDetail"}}
    S146["Surveys"]
    S147["TournamentDetail"]
    S148[("UGCCreator"])
    S149{{"UploadBill"}}
    S150[("WriteReviews"])

    %% SOCIAL SECTION
    S151{{"SocialActivityDetail"}}
    S152["SocialBookmarks"]
    S153["SocialChat"]
    S154["SocialCreatePost"]
    S155["SocialEditProfile"]
    S156["SocialEventDetails"]
    S157[("SocialEvents"])
    S158["SocialFollowers"]
    S159["SocialFollowing"]
    S160[("SocialGroupDetails"])
    S161[("SocialGroups"])
    S162["SocialHashtag"]
    S163[("SocialMentions"])
    S164["SocialMessages"]
    S165[("SocialNotifications"])
    S166[("SocialProfile"])
    S167["SocialReports"]
    S168[("SocialSearch"])
    S169["SocialSettings"]
    S170[("SocialTrending"])

    %% USER SECTION
    S171["AccountDeletionConfirm"]
    S172["AppThemeSelector"]
    S173["BankLinkingFlow"]
    S174["CoinConverter"]
    S175["CoinExpiryTracker"]
    S176["CoinTypeExplainer"]
    S177["DataPrivacySettings"]
    S178["DisputeResolutionForm"]
    S179["EarningOpportunities"]
    S180["EmailVerification"]
    S181["FeatureHighlights"]
    S182["GiftCoins"]
    S183["InviteHistoryList"]
    S184["LanguageSelector"]
    S185["MerchantReviewForm"]
    S186["NotificationPreferencesNew"]
    S187["OnboardingLocation"]
    S188["OnboardingPreferences"]
    S189["OnboardingWelcome"]
    S190["OrderCancellationDetails"]
    S191["OrderReviewForm"]
    S192["PermissionRequests"]
    S193["PhoneVerification"]
    S194["ProductReviewForm"]
    S195["PurchaseCoins"]
    S196["RecentlyViewedItems"]
    S197["ReferralCodeEntry"]
    S198["ReferralShareLinks"]
    S199["SavedMerchantsList"]
    S200["TrackSupportTicket"]
    S201["TransactionReceiptView"]
    S202["UPILinkingFlow"]
    S203["WalletFilters"]
    S204["WalletInsights"]
    S205["WishlistManager"]

    %% WALLET SECTION
    S206["WalletAutoRecharge"]
    S207{{"WalletCards"}}
    S208[("WalletLimits"])
    S209[("WalletRequestMoney"])
    S210[("WalletRewards"])
    S211["WalletStatements"]
    S212{{"WalletTransfer"}}
    S213["WalletUse"]

    %% NAVIGATION FLOWS
    S5 --> S125
    S5 --> S5
    S5 --> S28
    S5 --> S5
    S5 --> S5
    S5 --> S5
    S6 --> S5
    S7 --> S5
    S11 --> S39
    S18 --> S88
    S21 --> S31
    S22 --> S31
    S27 --> S88
    S27 --> S88
    S31 --> S31
    S31 --> S130
    S31 --> S63
    S32 --> S32
    S33 --> S32
    S34 --> S32
    S35 --> S11
    S36 --> S38
    S37 --> S38
    S38 --> S38
    S38 --> S38
    S38 --> S38
    S41 --> S125
    S41 --> S41
    S41 --> S41
    S41 --> S41
    S41 --> S41
    S42 --> S41
    S43 --> S41
    S44 --> S125
    S44 --> S44
    S44 --> S71
    S44 --> S44
    S45 --> S125
    S45 --> S45
    S45 --> S45
    S45 --> S45
    S45 --> S45
    S49 --> S125
    S49 --> S11
    S49 --> S49
    S49 --> S28
    S49 --> S49
    S49 --> S49
    S50 --> S125
    S50 --> S50
```

### Screen Inventory

#### Root Level

| Screen | Type | Navigates To |
|--------|------|--------------|
| AccountDeletion | Standard | — |
| AchievementsList | Standard | — |
| AddressManagement | Standard | — |
| BadgeCollection | Standard | — |
| Beauty | Tab View | /wallet, /beauty/deals, /beauty/products |
| BeautyCategory | Standard | /beauty |
| BeautyService | Standard | /beauty |
| BillSplitting | Modal | /orders |
| Bookings | Tab View | — |
| BrandLoyalty | Standard | — |
| Cart | Standard | /explore, /checkout |
| CartSummary | Standard | /, /checkout-review |
| CashStore | Standard | /cash-store/stores, /cash-store/coupons, /cash-store/gift-cards |
| CashbackDetail | Standard | — |
| Categories | Standard | / |
| CategoryHub | Tab View | — |
| ChallengeCenter | Standard | — |
| ChangePassword | Standard | /profile |
| ChatSupport | Standard | — |
| CheckoutReview | Standard | /payment-options |
| CoinHistory | Standard | /earn |
| CoinSystemGuide | Standard | /earn |
| CompetitionDetails | Standard | — |
| ContactSupport | Standard | /chat-support |
| ContentSubmissionTracker | Modal | — |
| DealDetail | Standard | /deal-store |
| DealStore | Standard | /exclusive/special-profiles, /profile |
| Deals | Tab View | — |
| DeliveryTracking | Standard | — |
| DisputeCenter | Modal | — |
| Earn | Standard | /earn/achievements, /missions |
| Electronics | Standard | /search?category=electronics, / |
| ElectronicsCategory | Standard | /electronics |
| ElectronicsProduct | Standard | /electronics |
| EnhancedWishlist | Tab View | /, /mall/cart |
| EventDetail | Standard | /events |
| EventTicketing | Standard | /events, /payment |
| Events | Standard | /events/workshops, /, /events/gaming |
| Explore | Standard | — |
| ExploreNew | Standard | — |
| Fashion | Standard | /wallet, /fashion/brands, /fashion/vibes |
| FashionCategory | Standard | /fashion |
| FashionProduct | Standard | /fashion |
| Financial | Tab View | /wallet, /financial/offers, /financial/bills |
| Fitness | Tab View | /wallet, /fitness/feed, /fitness/gyms |
| FleaMarket | Standard | / |
| FoodDining | Tab View | / |
| GamificationHub | Standard | — |
| Grocery | Tab View | /wallet, /cart, /grocery/fast |
| Healthcare | Standard | /wallet, /healthcare/offers, /healthcare/diagnostics |
| HelpCenter | Standard | /chat-support, /contact-support |
| Home | Standard | /travel, /healthcare, /fitness |
| HomeServices | Standard | /wallet, /home-services/bookings, /home-services/providers |
| HowRezWorks | Standard | / |
| InsuranceCoverage | Modal | — |
| InviteFriends | Standard | — |
| KYCStatus | Modal | — |
| KYCSubmission | Standard | /profile |
| LeaderboardView | Standard | — |
| Lifestyle | Standard | /wallet, /search, /scan-pay |
| LoyaltyHub | Tab View | — |
| LoyaltyRewardsHub | Tab View | — |
| Missions | Tab View | — |
| MyTickets | Tab View | /events |
| NewArrivals | Tab View | — |
| NotificationCenterPage | Tab View | — |
| NotificationPreferences | Standard | — |
| Notifications | Tab View | — |
| NotificationsCenter | Standard | /settings |
| OfferDetail | Standard | — |
| Offers | Standard | — |
| OrderCancellation | Standard | /orders |
| OrderDetail | Standard | /orders |
| OrderHistory | Tab View | — |
| OrderTracking | Standard | /help |
| PayInStore | Standard | / |
| PaymentGateway | Standard | / |
| PaymentMethods | Standard | — |
| PaymentOptions | Standard | /order-success |
| PopularStores | Tab View | — |
| PreloaderDemo | Standard | — |
| PrescriptionHistory | Modal | — |
| PriceLedger | Tab View | — |
| PrivacySettings | Standard | — |
| ProductCheckout | Standard | / |
| ProductComparison | Tab View | /search |
| ProductServicePage | Modal | — |
| Profile | Standard | — |
| PromotionsFeed | Standard | — |
| QRScanner | Standard | /payment |
| Reels | Standard | — |
| ReferralDashboard | Standard | — |
| ReferralProgram | Standard | /invite-friends |
| RefundStatus | Standard | — |
| RestaurantDetail | Modal | /food |
| ReturnRequest | Standard | /orders |
| RewardsCatalog | Standard | — |
| RewardsHub | Tab View | — |
| RezMall | Standard | /mall/brands, /mall/offers |
| SavedForLater | Standard | / |
| SavingsDashboard | Standard | / |
| SavingsTracker | Standard | — |
| ScanPay | Standard | — |
| SearchResults | Tab View | — |
| SecurityAlerts | Tab View | — |
| ServiceBookingPage | Tab View | /wallet |
| ServiceCheckout | Standard | /, /bookings |
| Settings | Standard | — |
| Signup | Standard | /otp-verify, /terms, /privacy |
| SocialFeed | Tab View | /referral |
| SocialHub | Tab View | — |
| SocialSharing | Standard | — |
| StoreDetailPage | Tab View | /concierge, /upload-bill |
| StoreHub | Tab View | /wallet, /popular, /grocery/fast |
| StorePage | Standard | / |
| SuperDeals | Tab View | — |
| TableReservation | Modal | /, /bookings |
| TicketDetail | Standard | /help |
| TransactionDetails | Standard | — |
| Travel | Tab View | / |
| TrustCredit | Tab View | — |
| TrustPassport | Tab View | — |
| UniversalServicePage | Tab View | /upload-bill |
| UserDemandRequests | Modal | — |
| Wallet | Standard | — |
| WalletTopUp | Standard | /wallet |
| WalletWithdraw | Standard | /wallet |
| Wishlist | Standard | — |
| WishlistPage | Tab View | / |

#### earn

| Screen | Type | Navigates To |
|--------|------|--------------|
| Achievements | Standard | /earn |
| BrandTasks | Tab View | — |
| CoinHunt | Standard | /earn |
| CollegeAmbassador | Tab View | — |
| CorporateEmployee | Tab View | — |
| GuessPrice | Standard | /earn |
| Leaderboard | Standard | /earn |
| LuckyDraw | Tab View | /earn |
| MemoryMatch | Standard | /earn |
| PlayGames | Tab View | /earn/leaderboard |
| Quiz | Standard | /earn |
| ReferEarn | Tab View | — |
| ReferralPage | Standard | — |
| ScratchCard | Standard | /earn |
| SocialImpact | Tab View | — |
| SocialImpactEventDetail | Modal | — |
| Surveys | Standard | — |
| TournamentDetail | Standard | /earn |
| UGCCreator | Tab View | — |
| UploadBillPage | Modal | — |
| WriteReviews | Tab View | — |

#### social

| Screen | Type | Navigates To |
|--------|------|--------------|
| SocialActivityDetail | Modal | — |
| SocialBookmarks | Standard | — |
| SocialChat | Standard | — |
| SocialCreatePost | Standard | /social |
| SocialEditProfile | Standard | /social/profile/me |
| SocialEventDetails | Standard | — |
| SocialEvents | Tab View | /social/events/create |
| SocialFollowers | Standard | — |
| SocialFollowing | Standard | — |
| SocialGroupDetails | Tab View | /social/create-post |
| SocialGroups | Tab View | /social/groups/create |
| SocialHashtag | Standard | /social/create-post |
| SocialMentions | Tab View | — |
| SocialMessages | Standard | /social/search |
| SocialNotifications | Tab View | /social/post/123, /social/settings |
| SocialProfile | Tab View | /social/edit-profile, /social/settings |
| SocialReports | Standard | — |
| SocialSearch | Tab View | — |
| SocialSettings | Standard | /social/download-data, /social/blocked-users, /social/muted-users |
| SocialTrending | Tab View | — |

#### user

| Screen | Type | Navigates To |
|--------|------|--------------|
| AccountDeletionConfirm | Standard | — |
| AppThemeSelector | Standard | — |
| BankLinkingFlow | Standard | — |
| CoinConverter | Standard | — |
| CoinExpiryTracker | Standard | — |
| CoinTypeExplainer | Standard | — |
| DataPrivacySettings | Standard | — |
| DisputeResolutionForm | Standard | — |
| EarningOpportunities | Standard | — |
| EmailVerification | Standard | — |
| FeatureHighlights | Standard | /home |
| GiftCoins | Standard | — |
| InviteHistoryList | Standard | — |
| LanguageSelector | Standard | — |
| MerchantReviewForm | Standard | — |
| NotificationPreferencesNew | Standard | — |
| OnboardingLocation | Standard | /dashboard |
| OnboardingPreferences | Standard | /onboarding/location |
| OnboardingWelcome | Standard | /onboarding/step1 |
| OrderCancellationDetails | Standard | — |
| OrderReviewForm | Standard | — |
| PermissionRequests | Standard | /home |
| PhoneVerification | Standard | — |
| ProductReviewForm | Standard | — |
| PurchaseCoins | Standard | — |
| RecentlyViewedItems | Standard | — |
| ReferralCodeEntry | Standard | — |
| ReferralShareLinks | Standard | — |
| SavedMerchantsList | Standard | — |
| TrackSupportTicket | Standard | — |
| TransactionReceiptView | Standard | — |
| UPILinkingFlow | Standard | — |
| WalletFilters | Standard | — |
| WalletInsights | Standard | — |
| WishlistManager | Standard | — |

#### wallet

| Screen | Type | Navigates To |
|--------|------|--------------|
| WalletAutoRecharge | Standard | — |
| WalletCards | Modal | — |
| WalletLimits | Tab View | /kyc/submit |
| WalletRequestMoney | Tab View | — |
| WalletRewards | Tab View | — |
| WalletStatements | Standard | — |
| WalletTransfer | Modal | /wallet |
| WalletUse | Standard | — |

---

## ReZ Prive (Premium)

**Total Screens:** 142

### Navigation Flow Diagram

```mermaid
graph TD
    %% ReZ Prive (Premium) - Screen Navigation Flow
    %% Total Screens: 142

    %% ROOT SECTION
    S1["RezPrive"]

    %% PRIVE SECTION
    S2[("PriveActivity"])
    S3["PriveActivityStatement"]
    S4["PriveAuthority"]
    S5["PriveBooking"]
    S6["PriveBrandInvitation"]
    S7["PriveCampaignStatus"]
    S8["PriveCampaignTask"]
    S9["PriveCheckout"]
    S10["PriveContentGuidelines"]
    S11["PriveContentPerformance"]
    S12[("PriveEarnings"])
    S13["PriveEligibility"]
    S14["PriveExit"]
    S15["PriveExperienceDetail"]
    S16["PriveExperiences"]
    S17["PriveExplore"]
    S18["PriveGiftCardDetail"]
    S19["PriveGiftCards"]
    S20["PriveHome"]
    S21["PriveInfluence"]
    S22[("PriveInfluenceHub"])
    S23[("PriveInvitations"])
    S24["PriveNotifications"]
    S25["PriveOfferDetail"]
    S26["PriveOffersFeed"]
    S27["PrivePartnerPrivileges"]
    S28[("PrivePrivileges"])
    S29["PriveProfile"]
    S30[("PriveRecognition"])
    S31["PriveRedeem"]
    S32[("PriveRedemptionHistory"])
    S33["PriveScoreBreakdown"]
    S34["PriveSettings"]
    S35[("PriveStoreDetail"])
    S36["PriveTierProgress"]
    S37["PriveVisibilityControl"]
    S38[("PriveWallet"])
    S39["ContentAppealStatus"]
    S40["ContentFlaggedNotice"]
    S41["ContentRemoved"]
    S42[("D1_ContentHub"])
    S43["D2_ContentPerformance"]
    S44["D3_VisibilityBoost"]
    S45["D4_RecommendedLabel"]
    S46["D5_ContentGuidelines"]
    S47["D6_CategoryAuthority"]
    S48[("D7_InfluenceScore"])
    S49["D8_SocialSharing"]
    S50["B1_Dashboard"]
    S51[("B2_Wallet"])
    S52["B3_Impact"]
    S53["B4_TierProgress"]
    S54[("B5_ActivityHistory"])
    S55["B6_Settings"]
    S56["CoinExpiryOverview"]
    S57[("Earnings"])
    S58["PriveDashboard"]
    S59["RewardClawbackInfo"]
    S60["WalletLimitInfo"]
    S61["A1_Eligibility"]
    S62["A2_Invitation"]
    S63["A3_RequestAccess"]
    S64["A4_AccessCategories"]
    S65["A4_Onboarding"]
    S66["A5_AccessStatus"]
    S67["A5_Rules"]
    S68["A6_StatusUpdate"]
    S69["A6_WhyPrive"]
    S70[("A7_PriveOrientation"])
    S71[("A8_Requalification"])
    S72["A9_RedCarpetWelcome"]
    S73["EligibilityScoreBreakdown"]
    S74["GracePeriod"]
    S75["InactivityWarning"]
    S76["ReEntry"]
    S77["RetentionReminder"]
    S78["ProductDetail"]
    S79[("Search"])
    S80["ServiceDetail"]
    S81["StoreVisit"]
    S82["X1_ExploreMain"]
    S83[("X2_CategoryExplore"])
    S84[("X3_StoreListing"])
    S85[("X4_StoreDetail"])
    S86[("X5_OfferDetail"])
    S87[("X6_CompareDecision"])
    S88[("X7_MapView"])
    S89["Appeal"]
    S90["ConciergeBooking"]
    S91["ConciergeHistory"]
    S92["G10_PrivacyControl"]
    S93["G1_NotificationCenter"]
    S94["G2_PushNotificationStyle"]
    S95["G3_BrandMessages"]
    S96["G4_Concierge"]
    S97["G5_DisputeResolution"]
    S98["G6_TrustIntegrity"]
    S99["G7_ActivityReview"]
    S100["G8_Suspension"]
    S101["G9_ExitSummary"]
    S102["Warning"]
    S103["BrandCampaignRules"]
    S104[("C1_OffersFeed"])
    S105["C2_OfferDetail"]
    S106["C3_BrandInvitation"]
    S107[("C4_CampaignTask"])
    S108[("C5_CampaignStatus"])
    S109[("C6_ContentSubmission"])
    S110["C7_Rejection"]
    S111[("C8_CampaignHistory"])
    S112[("C9_BrandFeedback"])
    S113["CampaignApprovalPending"]
    S114["CampaignRewardFailed"]
    S115["CampaignRewardReleased"]
    S116[("F10_Wallet"])
    S117["F11_Settings"]
    S118[("F12_AnalyticsDashboard"])
    S119["F1_Profile"]
    S120[("F2_Recognition"])
    S121["F3_Authority"]
    S122["F4_VisibilityControl"]
    S123["F5_ActivityStatement"]
    S124[("F6_Invitations"])
    S125["F7_Exit"]
    S126["F8_ProfileEdit"]
    S127["F9_AccountReview"]
    S128["Cart"]
    S129["Checkout"]
    S130[("E10_Wallet"])
    S131["E1_RedemptionHome"]
    S132["E2_GiftCards"]
    S133["E3_GiftCardDetail"]
    S134[("E4_Experiences"])
    S135[("E5_ExperienceDetail"])
    S136["E6_PartnerPrivileges"]
    S137["E7_RedemptionConfirmation"]
    S138[("E8_RedemptionHistory"])
    S139["E9_PrivilegeExpiry"]
    S140["Payment"]
    S141["PaymentSuccess"]
    S142["ReviewRating"]

    %% NAVIGATION FLOWS
```

### Screen Inventory

#### Root Level

| Screen | Type | Navigates To |
|--------|------|--------------|
| RezPrive | Standard | /prive/score, /prive/offers |

#### prive

| Screen | Type | Navigates To |
|--------|------|--------------|
| PriveActivity | Tab View | — |
| PriveActivityStatement | Standard | /prive/profile |
| PriveAuthority | Standard | /prive/profile |
| PriveBooking | Standard | /prive/experiences, /prive/wallet, /prive/booking-success |
| PriveBrandInvitation | Standard | — |
| PriveCampaignStatus | Standard | — |
| PriveCampaignTask | Standard | — |
| PriveCheckout | Standard | /prive/redeem, /prive/checkout-success, /prive/wallet |
| PriveContentGuidelines | Standard | — |
| PriveContentPerformance | Standard | — |
| PriveEarnings | Tab View | /prive/explore |
| PriveEligibility | Standard | /prive, /prive/why-prive |
| PriveExit | Standard | /home |
| PriveExperienceDetail | Standard | /prive/booking |
| PriveExperiences | Standard | — |
| PriveExplore | Standard | — |
| PriveGiftCardDetail | Standard | /prive/checkout |
| PriveGiftCards | Standard | — |
| PriveHome | Standard | /wallet, /prive/tier-progress, /prive/privileges |
| PriveInfluence | Standard | — |
| PriveInfluenceHub | Tab View | /prive/wallet, /prive/influence-score, /prive/category-authority |
| PriveInvitations | Tab View | — |
| PriveNotifications | Standard | /profile/settings |
| PriveOfferDetail | Standard | /prive/redeem |
| PriveOffersFeed | Standard | — |
| PrivePartnerPrivileges | Standard | — |
| PrivePrivileges | Tab View | /prive/explore |
| PriveProfile | Standard | /prive/tier-progress, /prive/exit, /prive/profile/edit |
| PriveRecognition | Tab View | /prive/profile |
| PriveRedeem | Standard | /prive/help, /prive/wallet, /prive/gift-cards |
| PriveRedemptionHistory | Tab View | — |
| PriveScoreBreakdown | Standard | — |
| PriveSettings | Standard | /prive/exit |
| PriveStoreDetail | Tab View | /prive/visit, /prive/content/submit |
| PriveTierProgress | Standard | — |
| PriveVisibilityControl | Standard | /prive/profile |
| PriveWallet | Tab View | /prive/redeem |

#### prive / content

| Screen | Type | Navigates To |
|--------|------|--------------|
| ContentAppealStatusScreen | Standard | /prive/Notifications |
| ContentFlaggedNoticeScreen | Standard | /prive/Notifications, /prive/Main |
| ContentRemovedScreen | Standard | /prive/Notifications, /prive/Main |
| D1_ContentHubScreen | Tab View | /prive/D3_VisibilityBoost, /prive/D5_ContentGuidelines, /prive/B2_Wallet |
| D2_ContentPerformanceScreen | Standard | — |
| D3_VisibilityBoostScreen | Standard | — |
| D4_RecommendedLabelScreen | Standard | — |
| D5_ContentGuidelinesScreen | Standard | — |
| D6_CategoryAuthorityScreen | Standard | — |
| D7_InfluenceScoreScreen | Tab View | /prive/Offers |
| D8_SocialSharingScreen | Standard | — |

#### prive / core

| Screen | Type | Navigates To |
|--------|------|--------------|
| B1_DashboardScreen | Standard | /prive/Explore, /prive/Profile, /prive/Notifications |
| B2_WalletScreen | Tab View | — |
| B3_ImpactScreen | Standard | — |
| B4_TierProgressScreen | Standard | — |
| B5_ActivityHistoryScreen | Tab View | — |
| B6_SettingsScreen | Standard | — |
| CoinExpiryOverviewScreen | Standard | /prive/Redemption |
| EarningsScreen | Tab View | /prive/Offers, /prive/Explore, /prive/Content |
| PriveDashboard | Standard | /prive/tier-progress, /prive/wallet |
| RewardClawbackInfoScreen | Standard | /prive/Notifications |
| WalletLimitInfoScreen | Standard | /prive/Main |

#### prive / entry

| Screen | Type | Navigates To |
|--------|------|--------------|
| A1_EligibilityScreen | Standard | /prive/AccessCategories, /prive/A2_Invitation, /prive/A3_RequestAccess |
| A2_InvitationScreen | Standard | /prive/A1_Eligibility |
| A3_RequestAccessScreen | Standard | — |
| A4_AccessCategoriesScreen | Standard | — |
| A4_OnboardingScreen | Standard | — |
| A5_AccessStatusScreen | Standard | /prive/A1_Eligibility |
| A5_RulesScreen | Standard | — |
| A6_StatusUpdateScreen | Standard | — |
| A6_WhyPriveScreen | Standard | /prive/AccessCategories, /prive/A1_Eligibility |
| A7_PriveOrientationScreen | Tab View | — |
| A8_RequalificationScreen | Tab View | /prive/Main |
| A9_RedCarpetWelcomeScreen | Standard | /prive/A7_PriveOrientation |
| EligibilityScoreBreakdownScreen | Standard | — |
| GracePeriodScreen | Standard | — |
| InactivityWarningScreen | Standard | /prive/Explore |
| ReEntryScreen | Standard | — |
| RetentionReminderScreen | Standard | /prive/Offers |

#### prive / explore

| Screen | Type | Navigates To |
|--------|------|--------------|
| ProductDetailScreen | Standard | /prive/Checkout, /prive/X4_StoreDetail, /prive/Cart |
| SearchScreen | Tab View | /prive/X4_StoreDetail, /prive/C3_BrandInvitation, /prive/C2_OfferDetail |
| ServiceDetailScreen | Standard | Redemption, /prive/X4_StoreDetail |
| StoreVisitScreen | Standard | /prive/Offers, /prive/Redemption |
| X1_ExploreMainScreen | Standard | /prive/X4_StoreDetail, /prive/ProductDetail, /prive/X5_OfferDetail |
| X2_CategoryExploreScreen | Tab View | /prive/X7_MapView, /prive/X4_StoreDetail |
| X3_StoreListingScreen | Tab View | /prive/X4_StoreDetail |
| X4_StoreDetailScreen | Tab View | /prive/ProductDetail, /prive/X5_OfferDetail, /prive/Offers |
| X5_OfferDetailScreen | Tab View | /prive/Redemption |
| X6_CompareDecisionScreen | Tab View | /prive/X4_StoreDetail |
| X7_MapViewScreen | Tab View | /prive/X4_StoreDetail |

#### prive / notifications

| Screen | Type | Navigates To |
|--------|------|--------------|
| AppealScreen | Standard | — |
| ConciergeBookingScreen | Standard | — |
| ConciergeHistoryScreen | Standard | — |
| G10_PrivacyControlScreen | Standard | — |
| G1_NotificationCenterScreen | Standard | /prive/Profile |
| G2_PushNotificationStyleScreen | Standard | — |
| G3_BrandMessagesScreen | Standard | — |
| G4_ConciergeScreen | Standard | — |
| G5_DisputeResolutionScreen | Standard | — |
| G6_TrustIntegrityScreen | Standard | — |
| G7_ActivityReviewScreen | Standard | — |
| G8_SuspensionScreen | Standard | — |
| G9_ExitSummaryScreen | Standard | — |
| WarningScreen | Standard | — |

#### prive / offers

| Screen | Type | Navigates To |
|--------|------|--------------|
| BrandCampaignRulesScreen | Standard | — |
| C1_OffersFeedScreen | Tab View | /prive/Explore, /prive/C2_OfferDetail |
| C2_OfferDetailScreen | Standard | /prive/Redemption |
| C3_BrandInvitationScreen | Standard | /prive/C2_OfferDetail |
| C4_CampaignTaskScreen | Tab View | /prive/C6_ContentSubmission |
| C5_CampaignStatusScreen | Tab View | /prive/Profile, /prive/C6_ContentSubmission |
| C6_ContentSubmissionScreen | Tab View | /prive/C5_CampaignStatus |
| C7_RejectionScreen | Standard | — |
| C8_CampaignHistoryScreen | Tab View | — |
| C9_BrandFeedbackScreen | Tab View | /prive/Profile, /prive/C6_ContentSubmission, /prive/C1_OffersFeed |
| CampaignApprovalPendingScreen | Standard | — |
| CampaignRewardFailedScreen | Standard | /prive/Notifications |
| CampaignRewardReleasedScreen | Standard | /prive/Main |

#### prive / profile

| Screen | Type | Navigates To |
|--------|------|--------------|
| F10_WalletScreen | Tab View | — |
| F11_SettingsScreen | Standard | — |
| F12_AnalyticsDashboardScreen | Tab View | — |
| F1_ProfileScreen | Standard | /prive/F2_Recognition, /prive/F8_ProfileEdit, /prive/A5_AccessStatus |
| F2_RecognitionScreen | Tab View | — |
| F3_AuthorityScreen | Standard | — |
| F4_VisibilityControlScreen | Standard | — |
| F5_ActivityStatementScreen | Standard | — |
| F6_InvitationsScreen | Tab View | /prive/Offers |
| F7_ExitScreen | Standard | — |
| F8_ProfileEditScreen | Standard | — |
| F9_AccountReviewScreen | Standard | — |

#### prive / redemption

| Screen | Type | Navigates To |
|--------|------|--------------|
| CartScreen | Standard | /prive/Checkout, /prive/Explore |
| CheckoutScreen | Standard | /prive/Payment |
| E10_WalletScreen | Tab View | /prive/E1_RedemptionHome |
| E1_RedemptionHomeScreen | Standard | /prive/E5_ExperienceDetail, /prive/E8_RedemptionHistory, /prive/E4_Experiences |
| E2_GiftCardsScreen | Standard | — |
| E3_GiftCardDetailScreen | Standard | — |
| E4_ExperiencesScreen | Tab View | — |
| E5_ExperienceDetailScreen | Tab View | — |
| E6_PartnerPrivilegesScreen | Standard | — |
| E7_RedemptionConfirmationScreen | Standard | — |
| E8_RedemptionHistoryScreen | Tab View | — |
| E9_PrivilegeExpiryScreen | Standard | — |
| PaymentScreen | Standard | /prive/Redemption |
| PaymentSuccessScreen | Standard | /prive/Offers, /prive/Main |
| ReviewRatingScreen | Standard | — |

---

## Shared/Common

**Total Screens:** 10

### Navigation Flow Diagram

```mermaid
graph TD
    %% Shared/Common - Screen Navigation Flow
    %% Total Screens: 10

    %% ROOT SECTION
    S1["ForgotPassword"]
    S2["Help"]
    S3["Login"]
    S4["OTPVerify"]
    S5["Onboarding"]
    S6["Privacy"]
    S7["Splash"]
    S8["Terms"]

    %% SUPPORT SECTION
    S9["SupportChat"]
    S10[("SupportDashboard"])

    %% NAVIGATION FLOWS
    S1 --> S3
    S3 --> S8
    S3 --> S6
    S4 --> S3
    S4 --> S5
    S7 --> S3
    S7 --> S5
```

### Screen Inventory

#### Root Level

| Screen | Type | Navigates To |
|--------|------|--------------|
| ForgotPassword | Standard | /login |
| Help | Standard | — |
| Login | Standard | /otp-verify, /terms, /privacy |
| OTPVerify | Standard | /login, /support, /onboarding |
| Onboarding | Standard | / |
| Privacy | Standard | / |
| Splash | Standard | /login, /, /onboarding |
| Terms | Standard | / |

#### support

| Screen | Type | Navigates To |
|--------|------|--------------|
| SupportChat | Standard | — |
| SupportDashboard | Tab View | — |

---

## Wasil Distribution Apps

**Total Screens:** 80

### Navigation Flow Diagram

```mermaid
graph TD
    %% Wasil Distribution Apps - Screen Navigation Flow
    %% Total Screens: 80

    %% WASIL SECTION
    S1["AutoPerksHistory"]
    S2["AutoPerksHome"]
    S3["AutoPerksServiceDetails"]
    S4["AutoPerksServices"]
    S5["BizoraDashboard"]
    S6["BizoraHome"]
    S7["BizoraServiceDetails"]
    S8["BizoraServices"]
    S9["DinezyHome"]
    S10["DinezyRestaurant"]
    S11["ElitezyBookings"]
    S12["ElitezyHome"]
    S13[("ElitezyServiceDetails"])
    S14["ElitezyServices"]
    S15["EssentiaCategories"]
    S16["EssentiaHome"]
    S17["EssentiaProductDetails"]
    S18["EssentiaSubscription"]
    S19["FitEarnBooking"]
    S20[("FitEarnBrowse"])
    S21["FitEarnClassDetails"]
    S22[("FitEarnHistory"])
    S23["FitEarnHome"]
    S24["FunzyBooking"]
    S25[("FunzyBookings"])
    S26["FunzyBrowse"]
    S27["FunzyEventDetails"]
    S28["FunzyHome"]
    S29["GamezyBrowseGames"]
    S30["GamezyGameDetails"]
    S31["GamezyHome"]
    S32["GamezyRewards"]
    S33["GlowzyHome"]
    S34["GrocifyHome"]
    S35["KidzoActivityDetails"]
    S36["KidzoBookings"]
    S37["KidzoCategories"]
    S38["KidzoHome"]
    S39["LearnlyCourseDetails"]
    S40["LearnlyCourses"]
    S41["LearnlyHome"]
    S42["LearnlyMyCourses"]
    S43["LuxoraBrands"]
    S44["LuxoraHome"]
    S45["LuxoraOrders"]
    S46["LuxoraProductDetails"]
    S47["MaidzyBookings"]
    S48["MaidzyHome"]
    S49["MaidzyServiceDetails"]
    S50["MaidzyServices"]
    S51["MediEarnHome"]
    S52["PetzyHome"]
    S53["PetzyPetProfile"]
    S54["PetzyProductDetails"]
    S55["PetzyServices"]
    S56["RoyaleCategories"]
    S57[("RoyaleHome"])
    S58["RoyaleMemberships"]
    S59["RoyaleServiceDetails"]
    S60["ShopazyCart"]
    S61["ShopazyCategories"]
    S62["ShopazyHome"]
    S63[("ShopazyOrders"])
    S64["ShopazyProductDetails"]
    S65[("SocietyHome"])
    S66["SocietyRequests"]
    S67["SocietyServiceDetails"]
    S68["SocietyServices"]
    S69["TravoPayBrowse"]
    S70[("TravoPayHome"])
    S71["TravoPayPackageDetails"]
    S72[("TravoPayTrips"])
    S73["WashzyHome"]
    S74["WashzyOrders"]
    S75["WashzyServiceDetails"]
    S76["WashzyServices"]
    S77["WellnezHealthProfile"]
    S78["WellnezHome"]
    S79["WellnezServiceDetails"]
    S80["WellnezServices"]

    %% NAVIGATION FLOWS
```

### Screen Inventory

#### wasil / autoperks

| Screen | Type | Navigates To |
|--------|------|--------------|
| AutoPerksHistory | Standard | — |
| AutoPerksHome | Standard | — |
| AutoPerksServiceDetails | Standard | — |
| AutoPerksServices | Standard | — |

#### wasil / bizora

| Screen | Type | Navigates To |
|--------|------|--------------|
| BizoraDashboard | Standard | — |
| BizoraHome | Standard | — |
| BizoraServiceDetails | Standard | — |
| BizoraServices | Standard | — |

#### wasil / dinezy

| Screen | Type | Navigates To |
|--------|------|--------------|
| DinezyHome | Standard | — |
| DinezyRestaurant | Standard | — |

#### wasil / elitezy

| Screen | Type | Navigates To |
|--------|------|--------------|
| ElitezyBookings | Standard | — |
| ElitezyHome | Standard | — |
| ElitezyServiceDetails | Tab View | — |
| ElitezyServices | Standard | — |

#### wasil / essentia

| Screen | Type | Navigates To |
|--------|------|--------------|
| EssentiaCategories | Standard | — |
| EssentiaHome | Standard | — |
| EssentiaProductDetails | Standard | — |
| EssentiaSubscription | Standard | — |

#### wasil / fitearn

| Screen | Type | Navigates To |
|--------|------|--------------|
| FitEarnBooking | Standard | — |
| FitEarnBrowse | Tab View | — |
| FitEarnClassDetails | Standard | — |
| FitEarnHistory | Tab View | — |
| FitEarnHome | Standard | — |

#### wasil / funzy

| Screen | Type | Navigates To |
|--------|------|--------------|
| FunzyBooking | Standard | — |
| FunzyBookings | Tab View | — |
| FunzyBrowse | Standard | — |
| FunzyEventDetails | Standard | — |
| FunzyHome | Standard | — |

#### wasil / gamezy

| Screen | Type | Navigates To |
|--------|------|--------------|
| GamezyBrowseGames | Standard | — |
| GamezyGameDetails | Standard | — |
| GamezyHome | Standard | — |
| GamezyRewards | Standard | — |

#### wasil / glowzy

| Screen | Type | Navigates To |
|--------|------|--------------|
| GlowzyHome | Standard | — |

#### wasil / grocify

| Screen | Type | Navigates To |
|--------|------|--------------|
| GrocifyHome | Standard | — |

#### wasil / kidzo

| Screen | Type | Navigates To |
|--------|------|--------------|
| KidzoActivityDetails | Standard | — |
| KidzoBookings | Standard | — |
| KidzoCategories | Standard | — |
| KidzoHome | Standard | — |

#### wasil / learnly

| Screen | Type | Navigates To |
|--------|------|--------------|
| LearnlyCourseDetails | Standard | — |
| LearnlyCourses | Standard | — |
| LearnlyHome | Standard | — |
| LearnlyMyCourses | Standard | — |

#### wasil / luxora

| Screen | Type | Navigates To |
|--------|------|--------------|
| LuxoraBrands | Standard | — |
| LuxoraHome | Standard | — |
| LuxoraOrders | Standard | — |
| LuxoraProductDetails | Standard | — |

#### wasil / maidzy

| Screen | Type | Navigates To |
|--------|------|--------------|
| MaidzyBookings | Standard | — |
| MaidzyHome | Standard | — |
| MaidzyServiceDetails | Standard | — |
| MaidzyServices | Standard | — |

#### wasil / mediearn

| Screen | Type | Navigates To |
|--------|------|--------------|
| MediEarnHome | Standard | — |

#### wasil / petzy

| Screen | Type | Navigates To |
|--------|------|--------------|
| PetzyHome | Standard | — |
| PetzyPetProfile | Standard | — |
| PetzyProductDetails | Standard | — |
| PetzyServices | Standard | — |

#### wasil / royale

| Screen | Type | Navigates To |
|--------|------|--------------|
| RoyaleCategories | Standard | — |
| RoyaleHome | Tab View | — |
| RoyaleMemberships | Standard | — |
| RoyaleServiceDetails | Standard | — |

#### wasil / shopazy

| Screen | Type | Navigates To |
|--------|------|--------------|
| ShopazyCart | Standard | — |
| ShopazyCategories | Standard | — |
| ShopazyHome | Standard | — |
| ShopazyOrders | Tab View | — |
| ShopazyProductDetails | Standard | — |

#### wasil / society

| Screen | Type | Navigates To |
|--------|------|--------------|
| SocietyHome | Tab View | — |
| SocietyRequests | Standard | — |
| SocietyServiceDetails | Standard | — |
| SocietyServices | Standard | — |

#### wasil / travopay

| Screen | Type | Navigates To |
|--------|------|--------------|
| TravoPayBrowse | Standard | — |
| TravoPayHome | Tab View | — |
| TravoPayPackageDetails | Standard | — |
| TravoPayTrips | Tab View | — |

#### wasil / washzy

| Screen | Type | Navigates To |
|--------|------|--------------|
| WashzyHome | Standard | — |
| WashzyOrders | Standard | — |
| WashzyServiceDetails | Standard | — |
| WashzyServices | Standard | — |

#### wasil / wellnez

| Screen | Type | Navigates To |
|--------|------|--------------|
| WellnezHealthProfile | Standard | — |
| WellnezHome | Standard | — |
| WellnezServiceDetails | Standard | — |
| WellnezServices | Standard | — |

---
