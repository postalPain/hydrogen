import React, { useEffect, useState } from 'react';
import { BackHandler, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableES5 } from 'immer';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import VersionCheck from 'react-native-version-check';

import i18n from 'i18n';
import { appInit } from 'store/app/actions';
import { appStatusSelector } from 'store/app/selectors';
import { userTokenSelector } from 'store/user/selectors';
import { dynamicLinksHandler } from 'services/dynamicLinks';
import { setupSentry } from 'services/Sentry/sentry';
import TabNavigation from 'navigation/TabNavigation';
import DrawerNavigation from 'navigation/DrowerNavigation';

import { Header, UpdateAppModal } from 'components';

import Map from 'screens/Map';
import SignUp from 'screens/SignUp';
import AutocompleteInput from 'screens/AtocompleteInput';
import ConfirmAddress from 'screens/ConfirmAddress';
import Checkout from 'screens/Checkout';
import Onboard from 'screens/Onboard';
import Login from 'screens/Login';
import CreatePassword from 'screens/CreatePassword';
import OrderConfirmation from 'screens/OrderConfirmation';
import ResetPassword from 'screens/ResetPassword';
import CheckEmail from 'screens/CheckEmail';
import UpdatePassword from 'screens/UpdatePassword';
import Basket from 'screens/Basket';
import ResetPasswordSuccess from 'screens/ResetPasswordSuccess';
import OrderList from 'screens/OrderList';
import OrderDetails from 'screens/OrderDetails';

import Routes from './Routes';
import {
  hardwareBackPressHandler,
  isMountedRef,
  navigationRef,
  onStateChangeHandler,
} from './NavigationUtilities';
import { setupSegment } from 'services/Segment';
import { setupAppsFlyer } from 'services/AppsFlyer';

const Stack = createStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const appStatus = useSelector(appStatusSelector);
  const isAuthorized = !!useSelector(userTokenSelector);
  const [showUpdateAppModal, setShowUpdateAppModal] = useState(false);
  const [updateLink, setUpdateLink] = useState<string>(null);

  useEffect(() => {
    // android specific functionality
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', hardwareBackPressHandler);
      enableES5();
    }

    // Enable bug tracking
    setupSentry();

    // Enable segment tracking
    setupSegment();

    // Enable AppsFlyer tracking
    setupAppsFlyer();

    // isMountedRef necessary for NavigationUtils.navigate() function
    isMountedRef.current = true;

    // Start application initialization
    dispatch(appInit());

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

  useEffect(() => {
    VersionCheck.needUpdate()
      .then((res) => {
        if (res?.isNeeded) {
          setUpdateLink(res?.storeUrl);
          setShowUpdateAppModal(true);
        }
      });
  }, []);

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
          {
            isAuthorized
              ? (
                <>
                  <Stack.Screen
                    name={Routes.DrawerNavigation}
                    component={DrawerNavigation}
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
                    name={Routes.TabNavigation}
                    component={TabNavigation}
                    options={{
                      gestureEnabled: false,
                      headerShown: false,
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
                    name={Routes.OrderConfirmation}
                    component={OrderConfirmation}
                    options={{
                      gestureEnabled: false,
                      headerTitle: i18n.t('screens.orderConfirmation.header'),
                      // @ts-ignore
                      hideBackButton: true,
                    }}
                  />
                  <Stack.Screen
                    name={Routes.Basket}
                    component={Basket}
                    options={{
                      gestureEnabled: false,
                      headerTitle: i18n.t('screens.basket.header'),
                    }}
                  />
                  <Stack.Screen
                    name={Routes.OrderList}
                    component={OrderList}
                    options={{
                      gestureEnabled: false,
                      headerTitle: i18n.t('screens.orderList.header'),
                    }}
                  />
                  <Stack.Screen
                    name={Routes.OrderDetails}
                    component={OrderDetails}
                    options={({ route }) => ({
                      gestureEnabled: false,
                      // @ts-ignore
                      headerTitle: route.params.orderTitle,
                    })}
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
                </>
              )
              : (
                <>
                  <Stack.Screen
                    name={Routes.Onboard}
                    component={Onboard}
                    options={{
                      gestureEnabled: false,
                      headerShown: false,
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
                    name={Routes.ConfirmAddress}
                    component={ConfirmAddress}
                    options={{
                      gestureEnabled: false,
                      headerTitle: i18n.t('screens.confirmAddress.header'),
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
                </>
              )
          }
        </Stack.Navigator>
      </NavigationContainer>
      <UpdateAppModal
        visible={showUpdateAppModal}
        updateURL={updateLink}
        onClose={() => setShowUpdateAppModal(false)}
      />
    </>
  );
};

export default Navigation;
