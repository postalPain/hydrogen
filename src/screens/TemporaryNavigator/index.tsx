import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, Alert } from 'react-native';
import { Button, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { STRIPE_PUBLIC_KEY, GOOGLE_PLACE_API_KEY } from '@env';

import { signIn } from 'store/user/actions';
import { Routes } from 'navigation';
import { ProjectThemeType } from 'theme';

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

  useEffect(() => {
    Alert.alert(STRIPE_PUBLIC_KEY, GOOGLE_PLACE_API_KEY);
  }, []);


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
        <Button onPress={() => navigator.navigate(Routes.TabNavigation)}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default withTheme(TemporaryNavigator);
