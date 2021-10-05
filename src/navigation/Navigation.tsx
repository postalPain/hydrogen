import React, { useEffect } from 'react';
import { Platform, BackHandler } from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableES5 } from 'immer';
import SplashScreen from 'react-native-splash-screen';
import i18n from 'i18n';

import Home from 'screens/Home';
import Map from 'screens/Map';
import Products from 'screens/Products';
import Routes from './Routes';

import {
  navigationRef,
  isMountedRef,
  hardwareBackPressHandler,
  onStateChangeHandler,
} from './NavigationUtilities';
import TemporaryNavigator from 'screens/TemporaryNavigator';
import SignUp from 'screens/SignUp';
import AutocompleteInput from 'screens/AtocompleteInput';
import TabNavigation from 'navigation/TabNavigation';
import ConfirmAddress from 'screens/ConfirmAddress';
import { Header } from 'components';
import Checkout from 'screens/Checkout';
import Onboard from 'screens/Onboard';

const Stack = createStackNavigator();

const Navigation = () => {
  useEffect(() => {
    // android specific functionality
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', hardwareBackPressHandler);
      enableES5();
    }
    // isMountedRef necessary for NavigationUtils.navigate() function
    isMountedRef.current = true;

    // Hide native splashscreen
    SplashScreen.hide();

    return () => {
      isMountedRef.current = false;
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPressHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Stack.Screen
            name={Routes.Onboard}
            component={Onboard}
            options={{
              gestureEnabled: false,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Routes.TemporaryNavigator}
            component={TemporaryNavigator}
            options={{
              gestureEnabled: false,
              headerTitle: 'Temporary screen',
            }}
          />
          <Stack.Screen
            name={Routes.Checkout}
            component={Checkout}
            options={{
              gestureEnabled: false,
              headerTitle: 'Checkout',
            }}
          />
          <Stack.Screen
            name={Routes.ConfirmAddress}
            component={ConfirmAddress}
            options={{
              gestureEnabled: false,
              headerTitle: i18n.t('screens.confirmAddress.header'),
            }}
          />
          <Stack.Screen
            name={Routes.TabNavigation}
            component={TabNavigation}
            options={{
              gestureEnabled: false,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Routes.SignUp}
            component={SignUp}
            options={{
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name={Routes.HomeScreen}
            component={Home}
            options={{
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name={Routes.MapScreen}
            component={Map}
            options={{
              gestureEnabled: false,
              headerTitle: i18n.t('screens.map.header'),
            }}
          />
          <Stack.Screen
            name={Routes.AutocompleteInput}
            component={AutocompleteInput}
            options={{
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name={Routes.ProductsScreen}
            component={Products}
            options={{
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
