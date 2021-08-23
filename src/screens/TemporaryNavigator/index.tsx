import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from '@stryberventures/stryber-react-native-ui-components';
import { useNavigation } from '@react-navigation/native';
import { Routes } from 'navigation';

const TemporaryNavigator = () => {
  const navigator = useNavigation();
  return (
    <SafeAreaView>
      <Button onPress={() => navigator.navigate(Routes.HomeScreen)}>{Routes.HomeScreen}</Button>
      <Button onPress={() => navigator.navigate(Routes.SignUp)}>{Routes.SignUp}</Button>
      <Button onPress={() => navigator.navigate(Routes.MapScreen)}>{Routes.MapScreen}</Button>
    </SafeAreaView>
  );
};

export default TemporaryNavigator;
