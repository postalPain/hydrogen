import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { appStatusSelector } from 'store/app/selectors';
import { userTokenSelector } from 'store/user/selectors';
import { useDynamicLinks } from 'services/dynamicLinks';

import {
  AppLoadingScreen, Header, ModalHandler, NotificationHandler,
} from 'components';

import {
  navigationRef,
  onStateChangeHandler,
} from './NavigationUtilities';
import { useAppSetup, useAppUpdateModal } from 'utilities/hooks';
import { useRootNavigation } from 'navigation/useRootNavigation';

export const Stack = createStackNavigator();

const Navigation = () => {
  const appStatus = useSelector(appStatusSelector);
  const isAuthorized = !!useSelector(userTokenSelector);
  const { renderAuthorizedRoutes, renderUnauthorizedRoutes } = useRootNavigation();

  useAppSetup();
  useAppUpdateModal();
  useDynamicLinks();

  if (appStatus !== 'initialized') {
    return null;
  }

  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={onStateChangeHandler}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            header: (props) => <Header {...props} />,
          }}
        >
          {isAuthorized ? renderAuthorizedRoutes() : renderUnauthorizedRoutes()}
        </Stack.Navigator>
      </NavigationContainer>
      <AppLoadingScreen />
      <ModalHandler />
      <NotificationHandler />
    </>
  );
};

export default Navigation;
