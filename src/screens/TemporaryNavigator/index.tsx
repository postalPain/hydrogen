import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { Routes } from 'navigation';
import { ProjectThemeType } from 'theme';
import { useNavigation } from '@react-navigation/native';

interface ITemporaryNavigator {
  theme: ProjectThemeType;
}

const TemporaryNavigator: React.FC<ITemporaryNavigator> = ({ theme }) => {
  const navigator = useNavigation();
  return (
    <SafeAreaView style={theme.components.safeArea}>
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
    </SafeAreaView>
  );
};

export default withTheme(TemporaryNavigator);
