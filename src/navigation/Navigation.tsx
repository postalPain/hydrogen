import React, { useEffect } from 'react';
import { BackHandler, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableES5 } from 'immer';
import SplashScreen from 'react-native-splash-screen';
import i18n from 'i18n';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import Home from 'screens/Home';
import Map from 'screens/Map';
import Products from 'screens/Products';
import Routes from './Routes';

import {
  hardwareBackPressHandler,
  isMountedRef,
  navigationRef,
  onStateChangeHandler,
} from './NavigationUtilities';
import TemporaryNavigator from 'screens/TemporaryNavigator';
import SignUp from 'screens/SignUp';
import AutocompleteInput from 'screens/AtocompleteInput';
import TabNavigation from 'navigation/TabNavigation';
import ConfirmAddress from 'screens/ConfirmAddress';
import { BasketSlideUp, Header } from 'components';
import Checkout from 'screens/Checkout';
import Onboard from 'screens/Onboard';
import Login from 'screens/Login';
import CreatePassword from 'screens/CreatePassword';
import OrderConfirmation from 'screens/OrderConfirmation';
import ResetPassword from 'screens/ResetPassword';
import CheckEmail from 'screens/CheckEmail';
import UpdatePassword from 'screens/UpdatePassword';
import ResetPasswordSuccess from 'screens/ResetPasswordSuccess';
import { dynamicLinksHandler } from 'services/dynamicLinks';

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

  useEffect(() => {
    dynamicLinks().getInitialLink().then(dynamicLinksHandler);
    const unsubscribeDynamicLinks = dynamicLinks().onLink(dynamicLinksHandler);

    return () => unsubscribeDynamicLinks();
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
            name={Routes.TemporaryNavigator}
            component={TemporaryNavigator}
            options={{
              gestureEnabled: false,
              headerTitle: 'Temporary screen',
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
            name={Routes.Onboard}
            component={Onboard}
            options={{
              gestureEnabled: false,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Routes.Login}
            component={Login}
            options={{
              gestureEnabled: false,
              headerTitle: i18n.t('screens.login.header'),
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
            name={Routes.SignUp}
            component={SignUp}
            options={{
              gestureEnabled: false,
              headerTitle: i18n.t('screens.signUp.header'),
            }}
          />
          <Stack.Screen
            name={Routes.CreatePassword}
            component={CreatePassword}
            options={{
              gestureEnabled: false,
              headerTitle: i18n.t('screens.signUp.header2'),
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
          <Stack.Screen
            name={Routes.ResetPassword}
            component={ResetPassword}
            options={{
              gestureEnabled: false,
              headerTitle: i18n.t('screens.resetPassword.header'),
            }}
          />
          <Stack.Screen
            name={Routes.CheckEmail}
            component={CheckEmail}
            options={{
              gestureEnabled: false,
              headerTitle: i18n.t('screens.resetPassword.header'),
            }}
          />
          <Stack.Screen
            name={Routes.OrderConfirmation}
            component={OrderConfirmation}
            options={{
              gestureEnabled: false,
              headerTitle: i18n.t('screens.orderConfirmation.header'),
            }}
          />
          <Stack.Screen
            name={Routes.UpdatePassword}
            component={UpdatePassword}
            options={{
              gestureEnabled: false,
              headerTitle: i18n.t('screens.updatePassword.header'),
            }}
          />
          <Stack.Screen
            name={Routes.ResetPasswordSuccess}
            component={ResetPasswordSuccess}
            options={{
              gestureEnabled: false,
              headerTitle: i18n.t('screens.resetPasswordSuccess.header'),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <BasketSlideUp />
    </>
  );
};

export default Navigation;
