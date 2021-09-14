import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

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
    dispatch(signIn({ email: 'frontend@dev.com', password: 'Hydrogen1' }));
  };
  return (
    <SafeAreaView style={theme.components.safeArea}>
      { !token && <Button onPress={onLoginPress}>Login</Button>}
      <Button onPress={() => navigator.navigate(Routes.HomeScreen)}>{Routes.HomeScreen}</Button>
      <Button onPress={() => navigator.navigate(Routes.SignUp)}>{Routes.SignUp}</Button>
      <Button onPress={() => navigator.navigate(Routes.MapScreen)}>{Routes.MapScreen}</Button>
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
    </SafeAreaView>
  );
};

export default withTheme(TemporaryNavigator);
