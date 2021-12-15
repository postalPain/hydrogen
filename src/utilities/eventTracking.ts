import appsFlyer from 'react-native-appsflyer';
import analytics from '@react-native-firebase/analytics';
import { getTrackingStatus } from 'react-native-tracking-transparency';

export enum TrackingEvent {
  CategoryClicked = 'category_clicked',
  SearchCLicked = 'search_clicked',
  SearchInput = 'search_input',
  ProductAdded = 'product_added',
  CartView = 'cart_view',
  CheckoutStarted = 'checkout_started',
  CheckoutCompleted = 'checkout_completed',
  PromoApplied = 'promo_applied',
  PromoCode = 'promo_code',
  OnboardingCompleted = 'onboarding_complete',
  RegistrationCompleted = 'registration_complete',
  OrderPlaced = 'order_placed'
}

export const trackEvent = async (eventName: TrackingEvent, eventProps: any = {}) => {
  const trackingStatus = await getTrackingStatus();

  if (!__DEV__ && (trackingStatus === 'authorized' || trackingStatus === 'unavailable')) {
    await appsFlyer.logEvent(eventName, eventProps);
    await analytics().logEvent(eventName, eventProps);
  }
};
