import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { NavigationContainerRef } from '@react-navigation/native';

import i18n from 'i18n';
import getStyles from './styles';

interface IHomeProps {
  navigation: NavigationContainerRef;
  theme: any;
}

const HomeScreen: React.FC<IHomeProps> = ({ theme }) => {
  const styles: any = getStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} testID="homeScrollView">
        <Text testID="helloText">{i18n.t('screens.home.title')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withTheme(HomeScreen);
