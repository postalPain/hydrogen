import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withTheme, Text } from '@stryberventures/stryber-react-native-ui-components';
import { NavigationContainerRef } from '@react-navigation/native';

import i18n from 'i18n';
import { categoriesSelector } from 'store/categories/selectors';
import { getCategories } from 'store/categories/actions';
import { LocationButton, HomeCarousel, CategoriesViewer } from 'components';
import { AccountIcon } from 'components/Icons';
import { ProjectThemeType } from 'styles/theme';
import useStyles from './styles';


interface IHomeProps {
  navigation: NavigationContainerRef;
  theme: ProjectThemeType;
}

const HomeScreen: React.FC<IHomeProps> = ({ theme }) => {
  const classes = useStyles(theme);
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);

  useEffect(() => {
    if (!categories || !categories.length) {
      dispatch(getCategories());
    }
  }, [categories]);

  return (
    <View style={classes.container}>
      <ScrollView testID="homeScrollView">
        <ImageBackground
          source={require('../../../assets/images/header.png')}
          style={classes.header}
          imageStyle={classes.headerImage}

        >
          <View style={classes.headerProfileBlock}>
            <View style={classes.headerProfileBlockLeftCol}>
              <Text style={classes.helloText}>{i18n.t('screens.home.helloMessage')}</Text>
            </View>
            <View style={classes.headerProfileBlockRightCol}>
              <TouchableOpacity style={classes.accountButton}>
                <AccountIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={classes.openHours}>
            <Text style={classes.openHoursText}>
              {i18n.t('screens.home.openHours')}
            </Text>
          </View>
          <LocationButton
            onPress={() => {}}
          />
        </ImageBackground>
        <View style={classes.contentBox}>
          <HomeCarousel style={classes.homeCarousel} />
          <CategoriesViewer data={categories} />
        </View>
      </ScrollView>
    </View>
  );
};

export default withTheme(HomeScreen);
