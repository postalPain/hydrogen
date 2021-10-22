import React, { useState } from 'react';
import {
  SafeAreaView, ScrollView,
} from 'react-native';
import { Button, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from 'store/user/actions';
import { Routes } from 'navigation';
import { ProjectThemeType } from 'theme';
import DeclinedPaymentModal from 'components/DeclinedPaymentModal';

interface ITemporaryNavigator {
  theme: ProjectThemeType;
}

const TemporaryNavigator: React.FC<ITemporaryNavigator> = ({ theme }) => {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const token = useSelector(state => state.user.accessToken);
  const onLoginPress = () => {
    dispatch(signIn({ email: 'vlad@stryber.com', password: '1234567Z' }));
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={theme.components.safeArea}>
      <ScrollView>
        { !token && <Button onPress={onLoginPress}>Login</Button>}
        <Button onPress={() => navigator.navigate(Routes.HomeScreen)}>{Routes.HomeScreen}</Button>
        <Button onPress={() => navigator.navigate(Routes.SignUp)}>{Routes.SignUp}</Button>
        <Button onPress={() => navigator.navigate(Routes.MapScreen)}>{Routes.MapScreen}</Button>
        <Button onPress={() => navigator.navigate(Routes.ProductsScreen)}>
          {Routes.ProductsScreen}
        </Button>
        <Button
          onPress={() => navigator.navigate(Routes.AutocompleteInput)}
        >
          {Routes.AutocompleteInput}
        </Button>
        <Button onPress={() => navigator.navigate(Routes.DrawerNavigation)}>
          {Routes.TabNavigation}
        </Button>
        <Button onPress={() => navigator.navigate(Routes.ConfirmAddress, { address: 'Mocked Address' })}>
          {Routes.ConfirmAddress}
        </Button>
        <Button onPress={() => navigator.navigate(Routes.Checkout)}>
          {Routes.Checkout}
        </Button>
        <Button onPress={() => navigator.navigate(Routes.Onboard)}>
          {Routes.Onboard}
        </Button>
        <Button onPress={() => navigator.navigate(Routes.Login)}>
          {Routes.Login}
        </Button>
        <Button onPress={() => navigator.navigate(Routes.OrderConfirmation)}>
          {Routes.OrderConfirmation}
        </Button>
        <Button onPress={() => navigator.navigate(Routes.ResetPassword)}>
          {Routes.ResetPassword}
        </Button>
        <Button onPress={() => navigator.navigate(Routes.CheckEmail)}>
          {Routes.CheckEmail}
        </Button>
        <Button onPress={() => navigator.navigate(Routes.UpdatePassword)}>
          {Routes.UpdatePassword}
        </Button>
        <Button onPress={() => navigator.navigate(Routes.ResetPasswordSuccess)}>
          {Routes.ResetPasswordSuccess}
        </Button>
        <Button onPress={() => navigator.navigate(Routes.Basket)}>
          {Routes.Basket}
        </Button>
        <Button onPress={() => setShowModal(true)}>Show Declined Payment Modal</Button>
        <DeclinedPaymentModal visible={showModal} onClose={() => setShowModal(false)} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default withTheme(TemporaryNavigator);
