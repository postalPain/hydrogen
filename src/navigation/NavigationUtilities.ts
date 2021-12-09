import React from 'react';
import {
  NavigationContainerRef, NavigationState,
} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import { getTrackingStatus } from 'react-native-tracking-transparency';

import Routes from './Routes';

export const isMountedRef = React.createRef<boolean>();

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const navigate = (name: Routes, params?: any) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
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

export const onStateChangeHandler = async (state: NavigationState | undefined) => {
  if (!state) {
    return;
  }

  const route = state.routes[state.routes.length - 1];
  const trackingStatus = await getTrackingStatus();
  if (!__DEV__ && (trackingStatus === 'authorized' || trackingStatus === 'unavailable')) {
    await analytics()
      .logScreenView({
        screen_name: route.name,
        screen_class: route.name,
      });
  }
  console.log(`Navigate to: ${route.name}`, route.params);
};
