import appsFlyer from 'react-native-appsflyer';
import analytics from '@react-native-firebase/analytics';
import { getTrackingStatus } from 'react-native-tracking-transparency';
import { getItem } from 'services/LocalStorage';
import { storageKeys } from '../constants';

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
  OrderPlaced = 'order_placed',
  ProductClicked = 'product_clicked',
  MainCategoryClicked = 'main_category_clicked',
  SubcategoryClicked = 'subcategory_clicked',
  SessionDurationPlaceOrder = 'session_duration_place_order',
  MapInputClicked = 'map_address_input_clicked',
  MapLocatorClicked = 'map_locator_clicked',
}

interface ITrackingParameter {
  [TrackingEvent.CategoryClicked]: { category_name: string };
  [TrackingEvent.SearchCLicked]: never;
  [TrackingEvent.SearchInput]: { search_query: string };
  [TrackingEvent.ProductAdded]: { product_name: string };
  [TrackingEvent.CartView]: never;
  [TrackingEvent.CheckoutStarted]: never;
  [TrackingEvent.CheckoutCompleted]: never;
  [TrackingEvent.PromoApplied]: never;
  [TrackingEvent.PromoCode]: { promo_code_name: string };
  [TrackingEvent.OnboardingCompleted]: never;
  [TrackingEvent.RegistrationCompleted]: never;
  [TrackingEvent.OrderPlaced]: { order_value: number };
  [TrackingEvent.ProductClicked]: { product_viewed_name: string };
  [TrackingEvent.MainCategoryClicked]: { main_category_viewed_name: string };
  [TrackingEvent.SubcategoryClicked] : { subcategory_viewed_name: string };
  [TrackingEvent.SessionDurationPlaceOrder]: { session_place_order_time: number };
  [TrackingEvent.MapInputClicked]: never;
  [TrackingEvent.MapLocatorClicked]: never;
}

export const trackEvent = async <
  E extends TrackingEvent,
  P extends ITrackingParameter[E],
  >(eventName: E, eventProps?: P) => {
  const trackingStatus = await getTrackingStatus();

  if (!__DEV__ && (trackingStatus === 'authorized' || trackingStatus === 'unavailable')) {
    try {
      await analytics().logEvent(eventName, eventProps);
      await appsFlyer.logEvent(eventName, eventProps);
    } catch (e) {
      console.log(e);
    }
  }
};

export const trackSessionTime = async () => {
  const orderPlacedTime = new Date().getTime();
  const appInitTime = await getItem(storageKeys.appInitTime);
  const sessionTime = (orderPlacedTime - appInitTime) / 1000;

  await trackEvent(
    TrackingEvent.SessionDurationPlaceOrder,
    { session_place_order_time: sessionTime },
  );
};
