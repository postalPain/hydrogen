import React from 'react';
import {
  NavigationContainerRef, NavigationState, useNavigation as useNavigationNative,
} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import { getTrackingStatus } from 'react-native-tracking-transparency';
import InAppReview from 'react-native-in-app-review';

import { getState as getStoreState, dispatch } from 'store/index';
import { setAppLastRatePopupStatus } from 'store/app/actions';
import navigateMiddleware from './navigateMiddleware';
import Routes from './Routes';

enum FirebaseRouteName {
  DrawerNavigation = 'HomeScreen',
  SignUp = 'FirstSignup',
  Onboard = 'SplashStart',
}

export const isMountedRef = React.createRef<boolean>();

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const navigate = (name: Routes, params?: any) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.navigate(...navigateMiddleware(name, params));
  }
};

export const useNavigation = () => {
  const { navigate: nativeNavigate, ...etc } = useNavigationNative();
  return {
    navigate,
    ...etc,
  };
};

export const getNavigationState = () => {
  if (isMountedRef.current && navigationRef.current) {
    return navigationRef.current?.getState()?.routes;
  }
  return null;
};

export const hardwareBackPressHandler = () => {
  const isAbleGoBack = navigationRef.current?.canGoBack();
  navigationRef.current?.goBack();

  return isAbleGoBack;
};

const getFirebaseScreenName = (routeName: string) => {
  switch (routeName) {
    case Routes.DrawerNavigation:
      return FirebaseRouteName.DrawerNavigation;
    case Routes.Onboard:
      return FirebaseRouteName.Onboard;
    case Routes.SignUp:
      return FirebaseRouteName.SignUp;
    default:
      return routeName;
  }
};

const getDeepRoute = (topRoute) => {
  if (!topRoute.state) {
    return topRoute;
  }
  let actualRoute = topRoute.state.routes[topRoute.state.index];
  while (actualRoute.state) {
    actualRoute = actualRoute.state.routes[actualRoute.state.index];
  }
  return actualRoute;
};

export const onStateChangeHandler = async (state: NavigationState | undefined) => {
  if (!state) {
    return;
  }

  const route = state.routes[state.routes.length - 1];
  const trackingStatus = await getTrackingStatus();
  if (!__DEV__ && (trackingStatus === 'authorized' || trackingStatus === 'unavailable')) {
    const routeName = getFirebaseScreenName(route.name);
    await analytics()
      .logScreenView({
        screen_name: routeName,
        screen_class: routeName,
      });
  }

  const storeState = getStoreState();
  const deepRoute = getDeepRoute(route);
  const showRatePopupFirstTime = storeState.app.launchCount === 1
    && !storeState.app.lastRatePopupStatus
    && deepRoute.name === Routes.OrderConfirmation;
  const showRatePopupSecondTime = storeState.app.launchCount > 1
    && (
      !storeState.app.lastRatePopupStatus || storeState.app.lastRatePopupStatus !== 'completed'
    )
    && (
      deepRoute.name === Routes.ProductsScreen || deepRoute.name === Routes.Search
    );
  if (showRatePopupFirstTime || showRatePopupSecondTime) {
    InAppReview.RequestInAppReview()
      .then((isReviewedSuccessfully) => {
        dispatch(setAppLastRatePopupStatus(isReviewedSuccessfully ? 'completed' : 'rejected'));
      })
      .catch(() => {
        dispatch(setAppLastRatePopupStatus('rejected'));
      });
  }
  console.log(`Navigate to: ${route.name}`, route.params);
};
