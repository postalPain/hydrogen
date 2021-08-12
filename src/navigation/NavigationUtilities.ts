import React from 'react';
import {
  NavigationContainerRef, NavigationState,
} from '@react-navigation/native';

import Routes from './Routes';

export const isMountedRef = React.createRef<boolean>();

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (name: Routes, params?: any) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
};

export const hardwareBackPressHandler = () => {
  const isAbleGoBack = navigationRef.current?.canGoBack();
    navigationRef.current?.goBack();

    return isAbleGoBack;
};

export const onStateChangeHandler = (state: NavigationState | undefined) => {
  if (!state) {
    return;
  }

  const route = state.routes[state.routes.length - 1];
  console.log(`Navigate to: ${route.name}`, route.params);
};
