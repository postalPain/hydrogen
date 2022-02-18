import React from 'react';

import i18n from 'i18n';
import Routes from 'navigation/Routes';
import { Stack } from 'navigation/Navigation';
import { trackEvent, TrackingEvent } from 'utilities/eventTracking';

import DrawerNavigation from 'navigation/DrowerNavigation';
import Login from 'screens/Login';
import Checkout from 'screens/Checkout';
import ConfirmAddress from 'screens/ConfirmAddress';
import SignUp from 'screens/SignUp';
import SignUpOTP from 'screens/SignUpOTP';
import SignUpOTPVerification from 'screens/SignUpOTPVerification';
import SignUpSuccess from 'screens/SignUpSuccess';
import CreatePassword from 'screens/CreatePassword';
import Map from 'screens/Map';
import OrderConfirmation from 'screens/OrderConfirmation';
import OrderList from 'screens/OrderList';
import OrderDetails from 'screens/OrderDetails';
import UpdatePassword from 'screens/UpdatePassword';
import ResetPasswordSuccess from 'screens/ResetPasswordSuccess';
import ResetPassword from 'screens/ResetPassword';
import CheckEmail from 'screens/CheckEmail';
import Onboard from 'screens/Onboard';
import Basket from 'screens/Basket';

export const useRootNavigation = () => {
  const renderCommonScreens = () => (
    <>
      <Stack.Screen
        name={Routes.Login}
        component={Login}
        options={{
          gestureEnabled: false,
          headerTitle: i18n.t('screens.login.header'),
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
  );

  const renderAuthorizedRoutes = () => (
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
        name={Routes.Checkout}
        component={Checkout}
        options={{
          gestureEnabled: false,
          headerTitle: 'Checkout',
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
        name={Routes.SignUpOTP}
        component={SignUpOTP}
        options={{
          gestureEnabled: false,
          headerTitle: i18n.t('screens.signUp.header'),
        }}
      />
      <Stack.Screen
        name={Routes.SignUpOTPVerification}
        component={SignUpOTPVerification}
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
        name={Routes.SignUpSuccess}
        component={SignUpSuccess}
        options={{
          gestureEnabled: false,
          headerTitle: i18n.t('screens.signUpSuccess.header'),
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
        listeners={() => ({
          transitionEnd: () => { trackEvent(TrackingEvent.CartView); },
        })}
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
      {renderCommonScreens()}
    </>
  );

  const renderUnauthorizedRoutes = () => (
    <>
      <Stack.Screen
        name={Routes.Onboard}
        component={Onboard}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      {renderCommonScreens()}
    </>
  );

  return { renderAuthorizedRoutes, renderUnauthorizedRoutes };
};
