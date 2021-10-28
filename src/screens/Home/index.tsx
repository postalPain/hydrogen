import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useSelector } from 'react-redux';
import { withTheme, Text } from '@stryberventures/stryber-react-native-ui-components';
import { NavigationContainerRef, useNavigation } from '@react-navigation/native';

import i18n from 'i18n';
import { categoriesSelector } from 'store/categories/selectors';
import { LocationButton, HomeCarousel, CategoriesViewer } from 'components';
import { AccountIcon } from 'components/Icons';
import { ProjectThemeType } from 'styles/theme';
import useStyles from './styles';


interface IHomeProps {
  navigation: NavigationContainerRef;
  theme: ProjectThemeType;
}

const HomeScreen: React.FC<IHomeProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const categories = useSelector(categoriesSelector);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView testID="homeScrollView">
        <ImageBackground
          source={require('../../../assets/images/header.png')}
          style={styles.header}
          imageStyle={styles.headerImage}

        >
          <View style={styles.headerProfileBlock}>
            <View style={styles.headerProfileBlockLeftCol}>
              <Text style={styles.helloText}>{i18n.t('screens.home.helloMessage')}</Text>
            </View>
            <View style={styles.headerProfileBlockRightCol}>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.accountButton}
              >
                <AccountIcon />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.openHours}>
            <Text style={styles.openHoursText}>
              {i18n.t('screens.home.openHours')}
            </Text>
          </View>
          <LocationButton
            onPress={() => {}}
          />
        </ImageBackground>
        <View style={styles.contentBox}>
          <HomeCarousel style={styles.homeCarousel} />
          <CategoriesViewer data={categories} />
        </View>
      </ScrollView>
    </View>
  );
};

export default withTheme(HomeScreen);
