import React from 'react';
import {
  ScrollView, View,
} from 'react-native';
import { withTheme, Text } from '@stryberventures/stryber-react-native-ui-components';
import { NavigationContainerRef } from '@react-navigation/native';

import i18n from 'i18n';
import useStyles from './styles';
import { LocationButton, HomeCarousel, CategoryViewer } from 'components';


interface IHomeProps {
  navigation: NavigationContainerRef;
  theme: any;
}

const HomeScreen: React.FC<IHomeProps> = ({ theme }) => {
  const classes = useStyles(theme);
  return (
    <View style={classes.container}>
      <ScrollView testID="homeScrollView">
        <View style={classes.topBackground}>
          <View style={classes.contentWrapper}>
            <Text h2 semibold testID="helloText">{i18n.t('screens.home.title')}</Text>
            <Text h2 semibold>
              {'{'}
              user-name
              {'}'}
            </Text>
            <View style={classes.openContainer}>
              <Text>
                {'{'}
                We’re open 08:00 - 23:00
                {'}'}
              </Text>
            </View>
            <LocationButton />
          </View>
        </View>
        <View style={classes.contentWrapper}>
          <HomeCarousel />
          <CategoryViewer />
          <CategoryViewer />
          <CategoryViewer />
        </View>
      </ScrollView>
    </View>
  );
};

export default withTheme(HomeScreen);
